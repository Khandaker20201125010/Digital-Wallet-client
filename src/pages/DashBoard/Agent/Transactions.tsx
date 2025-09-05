import { Card, CardContent } from "@/components/ui/card";
import { useGetAgentTransactionsQuery } from "@/redux/features/transaction/transaction.api";

export default function Transactions() {
  const { data } = useGetAgentTransactionsQuery(undefined);

  return (
    <Card className="overflow-x-auto min-h-full shadow-lg border border-purple-200 dark:border-purple-800">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
          All Transactions
        </h2>

        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-800">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 dark:text-gray-300">
                Date
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 dark:text-gray-300">
                Type
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 dark:text-gray-300">
                User
              </th>
              <th className="px-4 py-2 text-right text-sm font-medium text-gray-700 dark:text-gray-300">
                Amount
              </th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
            {data?.data?.map((tx: any) => (
              <tr
                key={tx._id}
                className="hover:bg-purple-50 dark:hover:bg-purple-900 transition-colors duration-200"
              >
                <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">
                  {new Date(tx.createdAt).toLocaleDateString()}
                </td>
                <td className="px-4 py-3 text-sm capitalize text-gray-700 dark:text-gray-300">
                  {tx.type.replace("_", " ")}
                </td>
                <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">
                  {tx.user?.email || tx.initiatedBy}
                </td>
                <td className="px-4 py-3 text-sm text-right text-gray-700 dark:text-gray-300">
                  ₹{tx.amount.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
}
