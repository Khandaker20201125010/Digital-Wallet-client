import { useState } from "react";
import { useGetAllTransactionsQuery } from "@/redux/features/transaction/transaction.api";

export default function Transactions() {
  const [page, setPage] = useState(1);
  const { data } = useGetAllTransactionsQuery({ page, limit: 10 });
  const txs = data?.transactions ?? [];

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-xl font-semibold">All Transactions</h2>

      <table className="w-full text-sm">
        <thead className="border-b text-muted-foreground">
          <tr>
            <th>ID</th>
            <th>User</th>
            <th>Type</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {txs.map((tx) => (
            <tr key={tx._id} className="border-b">
              <td>{tx._id.slice(0, 6)}...</td>
              <td>{tx.user?.email ?? "N/A"}</td>
              <td className="capitalize">{tx.type}</td>
              <td>₹{tx.amount}</td>
              <td>{new Date(tx.createdAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-between items-center mt-4">
        <button
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
          className="btn btn-outline"
        >
          Previous
        </button>
        <span>Page {page}</span>
        <button
          onClick={() => setPage((p) => p + 1)}
          className="btn btn-outline"
        >
          Next
        </button>
      </div>
    </div>
  );
}
