
import { Card, CardContent } from "@/components/ui/card";
import { useGetAgentTransactionsQuery } from "@/redux/features/transaction/transaction.api";

export default function Transactions() {
  const { data } = useGetAgentTransactionsQuery(undefined);

  return (
    <Card>
      <CardContent className="p-4">
        <h2 className="text-lg font-semibold">All Transactions</h2>
        <table className="w-full mt-4 text-sm">
          <thead>
            <tr>
              <th>Date</th>
              <th>Type</th>
              <th>User</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.map((tx: any) => (
              <tr key={tx._id}>
                <td>{new Date(tx.createdAt).toLocaleDateString()}</td>
                <td>{tx.type}</td>
                <td>{tx.user?.email}</td>
                <td>${tx.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
}
