import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useGetAllUsersQuery, useUpdateUserMutation } from "@/redux/features/auth/auth.api";
import { toast } from "sonner";
import Loader from "@/utils/Loader";

export default function ManageUsers() {
  const [searchText, setSearchText] = useState("");
  const [roleFilter, setRoleFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  // Call backend with filters
  const { data: users = [], isLoading, refetch } = useGetAllUsersQuery(
    { role: roleFilter, isActive: statusFilter, search: searchText },
    { refetchOnMountOrArgChange: true } // automatically refetch on filter/search change
  );

  const [updateUser] = useUpdateUserMutation();

  if (isLoading) return <Loader />;

  const handleToggleBlock = async (user: any) => {
    try {
      const newStatus = user.isActive === "ACTIVE" ? "INACTIVE" : "ACTIVE";
      await updateUser({ id: user._id, isActive: newStatus }).unwrap();
      toast.success(`User has been ${newStatus === "ACTIVE" ? "unblocked" : "blocked"}.`);
      refetch();
    } catch (err) {
      console.error(err);
      toast.error("Failed to update user status.");
    }
  };

  const handleRoleChange = async (user: any, newRole: string) => {
    try {
      if (newRole === "SUPER_ADMIN") {
        toast.error("Only a SUPER_ADMIN can assign SUPER_ADMIN role.");
        return;
      }
      await updateUser({ id: user._id, role: newRole }).unwrap();
      toast.success(`User role updated to ${newRole}.`);
      refetch();
    } catch (err) {
      console.error(err);
      toast.error("Failed to update user role.");
    }
  };

  return (
    <div className="p-6 space-y-4">
      <h2 className="text-2xl font-bold">Manage Users</h2>

      {/* Filters */}
      <div className="flex flex-col md:flex-row md:gap-4 mb-4">
        <input
          type="text"
          placeholder="Search by email..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="border rounded px-2 py-1 w-full md:w-1/3"
        />

        <select
          value={roleFilter}
          onChange={(e) => setRoleFilter(e.target.value)}
          className="border rounded px-2 py-1 w-full md:w-1/5"
        >
          <option value="">All Roles</option>
          <option value="USER">USER</option>
          <option value="AGENT">AGENT</option>
          <option value="ADMIN">ADMIN</option>
          <option value="SUPER_ADMIN">SUPER_ADMIN</option>
        </select>

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="border rounded px-2 py-1 w-full md:w-1/5"
        >
          <option value="">All Status</option>
          <option value="ACTIVE">ACTIVE</option>
          <option value="INACTIVE">INACTIVE</option>
        </select>
      </div>

      {/* Users Table */}
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
          {users.length === 0 ? (
            <tr>
              <td colSpan={5} className="text-center py-4 text-gray-500">
                No users found.
              </td>
            </tr>
          ) : (
            users.map((user: any) => (
              <tr key={user._id}>
                <td className="border p-2">{user.name}</td>
                <td className="border p-2">{user.email}</td>
                <td className="border p-2">
                  {user.role === "SUPER_ADMIN" ? (
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
                      user.isActive === "ACTIVE" ? "text-green-500" : "text-red-500"
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
                      user.isActive === "ACTIVE"
                        ? "bg-red-500 hover:bg-red-600"
                        : "bg-green-500 hover:bg-green-600"
                    }`}
                  >
                    {user.isActive === "ACTIVE" ? "Block" : "Unblock"}
                  </Button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
