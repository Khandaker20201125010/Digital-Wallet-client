import { Card, CardContent } from '@/components/ui/card';
import { useGetMyTransactionsQuery } from '@/redux/features/transaction/transaction.api';

export default function Transactions() {
  const { data } = useGetMyTransactionsQuery({
    page: 1,
    limit: 50,
  });

  return (
    <Card className="min-h-full overflow-x-auto border border-purple-200 shadow-lg dark:border-purple-800">
      <CardContent className="p-6">
        <h2 className="mb-4 text-2xl font-bold text-gray-800 dark:text-gray-100">
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
          <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-900">
            {data?.transactions?.map((tx: any) => (
              <tr
                key={tx._id}
                className="transition-colors duration-200 hover:bg-purple-50 dark:hover:bg-purple-900"
              >
                <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">
                  {new Date(tx.createdAt).toLocaleDateString()}
                </td>
                <td className="px-4 py-3 text-sm text-gray-700 capitalize dark:text-gray-300">
                  {tx.type.replace('_', ' ')}
                </td>
                <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">
                  {tx.to?.email || tx.initiatedBy}
                </td>
                <td className="px-4 py-3 text-right text-sm text-gray-700 dark:text-gray-300">
                  BDT{tx.amount.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
}
