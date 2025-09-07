import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  useGetAllUsersQuery,
  useUpdateUserMutation,
} from '@/redux/features/auth/auth.api';
import Loader from '@/utils/Loader';
import { toast } from 'sonner';

export default function ManageAgents() {
  const [statusFilter, setStatusFilter] = useState(''); // "" | "true" | "false"
  const [searchText, setSearchText] = useState('');

  // Fetch agents from backend with filters
  const {
    data: agents = [],
    isLoading,
    refetch,
  } = useGetAllUsersQuery(
    {
      role: 'AGENT',
      isApproved: statusFilter, // "" or "true" or "false"
      search: searchText,
    },
    { refetchOnMountOrArgChange: true },
  );

  const [updateUser] = useUpdateUserMutation();

  const handleToggleApprove = async (agent: any) => {
    try {
      const newStatus = !agent.isApproved; // flip boolean
      await updateUser({ id: agent._id, isApproved: newStatus }).unwrap();
      toast.success(
        `Agent has been ${newStatus ? 'approved' : 'suspended'} successfully.`,
      );
      await refetch();
    } catch (err) {
      console.error(err);
      toast.error('Failed to update agent status. Please try again.');
    }
  };

  if (isLoading) return <Loader />;

  return (
    <div className="space-y-6 p-6">
      <h2 className="text-xl font-semibold">Manage Agents</h2>

      {/* Filters */}
      <div className="mb-4 flex flex-col md:flex-row md:gap-4">
        <input
          type="text"
          placeholder="Search by email..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="w-full rounded border px-2 py-1 md:w-1/3"
        />

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="rounded border px-2 py-1"
        >
          <option value="">All Status</option>
          <option value="true">Approved</option>
          <option value="false">Suspended</option>
        </select>
      </div>

      {/* Agents Table */}
      <table className="w-full border-collapse border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {agents.length === 0 ? (
            <tr>
              <td colSpan={4} className="py-4 text-center text-gray-500">
                No agents found.
              </td>
            </tr>
          ) : (
            agents.map((agent) => (
              <tr key={agent._id}>
                <td className="border p-2">{agent.name}</td>
                <td className="border p-2">{agent.email}</td>
                <td className="border p-2">
                  <span
                    className={`font-bold ${
                      agent.isApproved ? 'text-green-500' : 'text-red-500'
                    }`}
                  >
                    {agent.isApproved ? 'Approved' : 'Suspended'}
                  </span>
                </td>
                <td className="border p-2 text-center">
                  <Button
                    variant="gradient"
                    onClick={() => handleToggleApprove(agent)}
                    className={`rounded px-4 py-1 text-white ${
                      agent.isApproved
                        ? 'bg-red-500 hover:bg-red-600' // currently approved → Suspend
                        : 'bg-green-500 hover:bg-green-600' // currently suspended → Approve
                    }`}
                  >
                    {agent.isApproved ? 'Suspend' : 'Approve'}
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
