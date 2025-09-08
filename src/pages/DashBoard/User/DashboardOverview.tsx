import { useGetMyTransactionsQuery } from '@/redux/features/transaction/transaction.api';
import TransactionList from '@/components/TransactionList';
import { useGetMyWalletQuery } from '@/redux/features/wallet/wallet.api';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router';

export default function DashboardOverview() {
  const { data: walletResp } = useGetMyWalletQuery(undefined);
  const wallet = walletResp?.data;
  const { data: txResp } = useGetMyTransactionsQuery({ page: 1, limit: 5 });
  const recent = txResp?.transactions ?? [];
  const total = txResp?.total ?? 0;

  return (
    <div data-aos="zoom-in" data-aos-duration="1500" className="space-y-8 p-6">
      {/* Wallet & Stats Section */}
      <div className="grid gap-6 md:grid-cols-3">
        {/* Wallet Balance */}
        <Card className="col-span-2 border border-purple-200 shadow-md dark:border-purple-800">
          <CardHeader>
            <CardTitle className="text-muted-foreground text-sm">
              Wallet Balance
            </CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-between">
            <div>
              <div className="text-3xl font-extrabold text-purple-600 dark:text-purple-400">
                BDT{(wallet?.balance ?? 0).toLocaleString()}
              </div>
              <div className="text-muted-foreground mt-1 text-sm">
                Status: {wallet?.status ?? 'N/A'}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Link to="/user/deposit">
                <Button
                  variant="gradient"
                  className="w-28 bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                >
                  Deposit
                </Button>
              </Link>
              <Link to="/user/withdraw">
                <Button
                  variant="gradient"
                  className="w-28 bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                >
                  Withdraw
                </Button>
              </Link>

              <Link to="/user/Send">
                <Button
                  variant="gradient"
                  className="w-28 bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                >
                  Send
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <Card className="border border-gray-200 shadow-md dark:border-gray-700">
          <CardHeader>
            <CardTitle className="text-muted-foreground text-sm">
              Quick Stats
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Total Transactions:</span>
              <span className="font-semibold">{total}</span>
            </div>
            <div className="flex justify-between">
              <span>Recent Shown:</span>
              <span className="font-semibold">{recent.length}</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Transactions */}
      <Card className="border border-gray-200 shadow-md dark:border-gray-700">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">
            Recent Transactions
          </CardTitle>
        </CardHeader>
        <CardContent>
          {recent.length > 0 ? (
            <>
              <TransactionList items={recent} />
              <div className="mt-4 text-right">
                <Link
                  to="/user/transactions"
                  className="text-sm font-medium text-purple-600 hover:underline"
                >
                  View all transactions →
                </Link>
              </div>
            </>
          ) : (
            <p className="text-muted-foreground text-sm">
              No recent transactions.
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
