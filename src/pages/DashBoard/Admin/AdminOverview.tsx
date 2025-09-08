import { useGetAllUsersQuery } from '@/redux/features/auth/auth.api';
import { useGetAllTransactionsQuery } from '@/redux/features/transaction/transaction.api';

export default function AdminOverview() {
  const { data: txResp } = useGetAllTransactionsQuery({ page: 1, limit: 5 });
  const transactions = txResp?.transactions ?? [];
  const totalTransactions = txResp?.total ?? 0;

  // ✅ Fetch users
  const { data: allUsers } = useGetAllUsersQuery();
  const totalAgents =
    allUsers?.filter((u: any) => u.role?.toLowerCase() === 'agent').length ?? 0;

  const totalUsers =
    allUsers?.filter((u: any) => u.role?.toLowerCase() === 'user').length ?? 0;

  return (
    <div className="space-y-6 p-6">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-lg border p-6 shadow-sm">
          <h2 className="text-muted-foreground text-sm">Total Users</h2>
          <p className="text-2xl font-bold">{totalUsers}</p>
        </div>
        <div className="rounded-lg border p-6 shadow-sm">
          <h2 className="text-muted-foreground text-sm">Total Agents</h2>
          <p className="text-2xl font-bold">{totalAgents}</p>
        </div>
        <div className="rounded-lg border p-6 shadow-sm">
          <h2 className="text-muted-foreground text-sm">Transactions</h2>
          <p className="text-2xl font-bold">{totalTransactions}</p>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="rounded-lg border p-6">
        <h3 className="mb-4 text-lg font-semibold">Recent Transactions</h3>
        <table className="w-full text-sm">
          <thead className="text-muted-foreground border-b">
            <tr>
              <th className="py-2 text-left">ID</th>
              <th className="py-2 text-left">Type</th>
              <th className="py-2 text-left">Amount</th>
              <th className="py-2 text-left">Date</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx) => (
              <tr key={tx._id} className="border-b">
                <td className="py-2">{tx._id.slice(0, 6)}...</td>
                <td className="py-2 capitalize">{tx.type}</td>
                <td className="py-2">BDT{tx.amount}</td>
                <td className="py-2">
                  {new Date(tx.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))}
            {transactions.length === 0 && (
              <tr>
                <td
                  colSpan={4}
                  className="text-muted-foreground py-4 text-center"
                >
                  No recent transactions
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
