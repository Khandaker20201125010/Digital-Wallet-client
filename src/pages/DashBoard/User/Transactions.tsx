import { useState } from "react";
import { useGetMyTransactionsQuery } from "@/redux/features/transaction/transaction.api";
import { Button } from "@/components/ui/button";

export default function TransactionHistory() {
  const [page, setPage] = useState(1);
  const [typeFilter, setTypeFilter] = useState<string>("");
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");

  const { data, isFetching } = useGetMyTransactionsQuery({
    page,
    limit: 10,
    type: typeFilter || undefined,
    startDate: startDate || undefined,
    endDate: endDate || undefined,
  });

  const transactions = data?.transactions ?? [];
  const total = data?.total ?? 0;

  return (
    <div data-aos="zoom-in" data-aos-duration="1500" className="space-y-4">
      {/* Filters */}
      <div className="flex gap-2">
        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          className="border p-2 rounded text-purple-500"
        >
          <option value="">All Types</option>
          <option value="withdraw">Withdraw</option>
          <option value="send">Send</option>
          <option value="cash_in">Cash-In</option>
        </select>

        <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="border p-2 text-purple-500 rounded" />
        <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} className="border p-2 rounded  text-purple-500" />
        <Button  variant="gradient" onClick={() => setPage(1)} >Apply</Button>
      </div>

      {/* Transactions Table */}
      <table className="min-w-full divide-y divide-gray-200 min-h-full">
        <thead>
          <tr>
            <th>Date</th>
            <th>Type</th>
            <th>Recipient/Sender</th>
            <th className="text-right">Amount</th>
          </tr>
        </thead>
        <tbody>
          {isFetching ? (
            <tr><td colSpan={4}>Loading...</td></tr>
          ) : transactions.length === 0 ? (
            <tr><td colSpan={4}>No transactions</td></tr>
          ) : (
            transactions.map((tx: any) => (
              <tr key={tx._id}>
                <td>{new Date(tx.createdAt).toLocaleDateString()}</td>
                <td className="capitalize">{tx.type.replace("_", " ")}</td>
                <td>{tx.to?.email || tx.initiatedBy}</td>
                <td className="text-right">₹{tx.amount.toLocaleString()}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-between mt-2">
        <Button  variant="gradient" onClick={() => setPage((p) => Math.max(p - 1, 1))} disabled={page === 1}>Prev</Button>
        <span>Page {page} / {Math.ceil(total / 10)}</span>
        <Button  variant="gradient" onClick={() => setPage((p) => p + 1)} disabled={page >= Math.ceil(total / 10)} >Next</Button>
      </div>
    </div>
  );
}
