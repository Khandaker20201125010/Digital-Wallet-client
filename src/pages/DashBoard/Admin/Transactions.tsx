import { useState } from 'react';
import { useGetAllTransactionsQuery } from '@/redux/features/transaction/transaction.api';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';

export default function Transactions() {
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({
    type: '',
    status: '',
    startDate: '',
    endDate: '',
    minAmount: '',
    maxAmount: '',
  });

  const { data } = useGetAllTransactionsQuery({
    page,
    limit: 10,
    ...filters,
    minAmount: filters.minAmount ? Number(filters.minAmount) : undefined,
    maxAmount: filters.maxAmount ? Number(filters.maxAmount) : undefined,
  });

  const txs = data?.transactions ?? [];
  const total = data?.total ?? 0;
  const limit = data?.limit ?? 10;
  const totalPages = Math.ceil(total / limit);
  return (
    <Card>
      <CardHeader>
        <CardTitle>All Transactions</CardTitle>
      </CardHeader>
      <CardContent>
        {/* Filters */}
        <div className="mb-4 grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-6">
          <Select onValueChange={(v) => setFilters((f) => ({ ...f, type: v }))}>
            <SelectTrigger>
              <SelectValue placeholder="Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="withdraw">Withdraw</SelectItem>
              <SelectItem value="send">Send</SelectItem>
              <SelectItem value="cash_in">Cash In</SelectItem>
              <SelectItem value="cash_out">Cash Out</SelectItem>
              <SelectItem value="add_money">Add Money</SelectItem>
            </SelectContent>
          </Select>

          <Select
            onValueChange={(v) => setFilters((f) => ({ ...f, status: v }))}
          >
            <SelectTrigger>
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="failed">Failed</SelectItem>
              <SelectItem value="reversed">Reversed</SelectItem>
            </SelectContent>
          </Select>

          <Input
            type="date"
            onChange={(e) =>
              setFilters((f) => ({ ...f, startDate: e.target.value }))
            }
          />
          <Input
            type="date"
            onChange={(e) =>
              setFilters((f) => ({ ...f, endDate: e.target.value }))
            }
          />
          <Input
            placeholder="Min Amount"
            type="number"
            onChange={(e) =>
              setFilters((f) => ({ ...f, minAmount: e.target.value }))
            }
          />
          <Input
            placeholder="Max Amount"
            type="number"
            onChange={(e) =>
              setFilters((f) => ({ ...f, maxAmount: e.target.value }))
            }
          />
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted">
                <th className="p-2">ID</th>
                <th>User</th>
                <th>Type</th>
                <th>Status</th>
                <th>Amount</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {txs.map((tx: any) => (
                <tr key={tx._id} className="border-t">
                  <td className="p-2">{tx._id.slice(0, 6)}...</td>
                  <td>{tx.from?.email ?? 'N/A'}</td>
                  <td className="capitalize">{tx.type}</td>
                  <td className="capitalize">{tx.status}</td>
                  <td>₹{tx.amount}</td>
                  <td>{new Date(tx.createdAt).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="mt-4 flex items-center justify-between">
          <Button
            variant="gradient"
            size="sm"
            disabled={page === 1}
            onClick={() => setPage((p) => p - 1)}
          >
            Previous
          </Button>

          <span>
            Page {page} of {totalPages || 1}
          </span>

          <Button
            variant="gradient"
            size="sm"
            disabled={page >= totalPages} // ⬅️ disable when last page
            onClick={() => setPage((p) => p + 1)}
          >
            Next
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
