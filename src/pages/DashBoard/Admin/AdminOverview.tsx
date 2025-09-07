import { useGetAllTransactionsQuery } from "@/redux/features/transaction/transaction.api";
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";

export default function AdminOverview() {
  const { data: txResp } = useGetAllTransactionsQuery({ page: 1, limit: 5 });
  const transactions = txResp?.transactions ?? [];
  const totalTransactions = txResp?.total ?? 0;

  const { data: adminResp } = useUserInfoQuery(undefined);
  const admin = adminResp?.data;

  return (
    <div className="space-y-6 p-6">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <div className="rounded-lg border p-6 shadow-sm">
          <h2 className="text-sm text-muted-foreground">Total Users</h2>
          <p className="text-2xl font-bold">123</p>
        </div>
        <div className="rounded-lg border p-6 shadow-sm">
          <h2 className="text-sm text-muted-foreground">Total Agents</h2>
          <p className="text-2xl font-bold">12</p>
        </div>
        <div className="rounded-lg border p-6 shadow-sm">
          <h2 className="text-sm text-muted-foreground">Transactions</h2>
          <p className="text-2xl font-bold">{totalTransactions}</p>
        </div>
        <div className="rounded-lg border p-6 shadow-sm">
          <h2 className="text-sm text-muted-foreground">Volume</h2>
          <p className="text-2xl font-bold">₹5,40,000</p>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="rounded-lg border p-6">
        <h3 className="mb-4 text-lg font-semibold">Recent Transactions</h3>
        <table className="w-full text-sm">
          <thead className="border-b text-muted-foreground">
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
                <td className="py-2">₹{tx.amount}</td>
                <td className="py-2">{new Date(tx.createdAt).toLocaleDateString()}</td>
              </tr>
            ))}
            {transactions.length === 0 && (
              <tr>
                <td colSpan={4} className="py-4 text-center text-muted-foreground">
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
