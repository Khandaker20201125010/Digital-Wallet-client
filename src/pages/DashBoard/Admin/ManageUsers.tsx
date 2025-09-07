import { Button } from '@/components/ui/button';
import {
  useGetAllUsersQuery,
  useUpdateUserMutation,
} from '@/redux/features/auth/auth.api';
import { toast } from 'sonner';

const ManageUsers = () => {
  const { data: users = [], isLoading, refetch } = useGetAllUsersQuery();
  const [updateUser] = useUpdateUserMutation();

  if (isLoading) {
    return <p className="text-center text-lg">Loading users...</p>;
  }

  const handleToggleBlock = async (user: any) => {
    try {
      const newStatus = user.isActive === 'ACTIVE' ? 'INACTIVE' : 'ACTIVE';
      await updateUser({ id: user._id, isActive: newStatus }).unwrap();
      refetch(); // refresh list

      toast.success(
        `User has been ${newStatus === 'ACTIVE' ? 'unblocked' : 'blocked'} successfully.`,
      );
    } catch (err) {
      console.error('Failed to update user:', err);
      toast.error('Failed to update user status. Please try again.');
    }
  };

  const handleRoleChange = async (user: any, newRole: string) => {
    try {
      // Prevent assigning SUPER_ADMIN if current logged-in user is not SUPER_ADMIN
      if (newRole === 'SUPER_ADMIN') {
        toast.error('Only a SUPER_ADMIN can assign SUPER_ADMIN role.');
        return;
      }
      await updateUser({ id: user._id, role: newRole }).unwrap();
      refetch();
      toast.success(`User role updated to ${newRole}.`);
    } catch (err) {
      console.error('Failed to update role:', err);
      toast.error('Failed to update user role. Please try again.');
    }
  };

  return (
    <div className="p-6">
      <h2 className="mb-4 text-2xl font-bold">Manage Users</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Role</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: any) => (
            <tr key={user._id}>
              <td className="border p-2">{user.name}</td>
              <td className="border p-2">{user.email}</td>
              <td className="border p-2">
                {user.role === 'SUPER_ADMIN' ? (
                  <span className="font-bold text-purple-600">{user.role}</span>
                ) : (
                  <select
                    value={user.role}
                    onChange={(e) => handleRoleChange(user, e.target.value)}
                    className="rounded border px-2 py-1"
                  >
                    <option value="USER">USER</option>
                    <option value="AGENT">AGENT</option>
                    <option value="ADMIN">ADMIN</option>
                  </select>
                )}
              </td>
              <td className="border p-2">
                <span
                  className={`font-bold ${
                    user.isActive === 'ACTIVE'
                      ? 'text-green-500'
                      : 'text-red-500'
                  }`}
                >
                  {user.isActive}
                </span>
              </td>
              <td className="border p-2 text-center">
                <Button
                  variant="gradient"
                  onClick={() => handleToggleBlock(user)}
                  className={`rounded px-4 py-1 text-white ${
                    user.isActive === 'ACTIVE'
                      ? 'cursor-pointer bg-red-500 hover:bg-red-600'
                      : 'cursor-pointer bg-green-500 hover:bg-green-600'
                  }`}
                >
                  {user.isActive === 'ACTIVE' ? 'Block' : 'Unblock'}
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUsers;
