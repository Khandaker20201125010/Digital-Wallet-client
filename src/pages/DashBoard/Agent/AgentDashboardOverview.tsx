// src/pages/AgentDashboardOverview.tsx
import { Card, CardContent } from "@/components/ui/card";
import { useGetMyWalletQuery } from "@/redux/features/wallet/wallet.api";
import { useGetMyTransactionsQuery } from "@/redux/features/transaction/transaction.api";

export default function AgentDashboardOverview() {
  // wallet
  const { data: walletResp, isFetching: walletLoading } = useGetMyWalletQuery(undefined);
  // walletResp shape depends on your walletApi; you used earlier walletResp.data - confirm shape
  const wallet = walletResp?.data ?? walletResp ?? null;

  // fetch agent's own transactions (backend route: GET /transactions/my-transactions)
  const { data: txnsData, isFetching: txLoading } = useGetMyTransactionsQuery({
    page: 1,
    limit: 50,
  });

  // txnsData => { transactions, total, page, limit } because we transformed response
  const transactions = txnsData?.transactions ?? [];

  const cashInTotal = transactions
    .filter((t: any) => t.type === "cash_in")
    .reduce((s: number, t: any) => s + (t.amount ?? 0), 0);

  const cashOutTotal = transactions
    .filter((t: any) => t.type === "cash_out")
    .reduce((s: number, t: any) => s + (t.amount ?? 0), 0);

  const recent = transactions.slice(0, 5);

  return (
    <div data-aos="zoom-in" data-aos-duration="1500" className="py-6 grid gap-6 md:grid-cols-3">
      <Card >
        <CardContent>
          <h2 className="text-lg font-semibold">Wallet Summary</h2>
          {walletLoading ? (
            <p>Loading...</p>
          ) : (
            <>
              <p className="mt-2">Balance: ₹{(wallet?.balance ?? 0).toLocaleString()}</p>
              <p>Status: {wallet?.status ?? "unknown"}</p>
            </>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <h2 className="text-lg font-semibold">Transaction Summary</h2>
          {txLoading ? (
            <p>Loading...</p>
          ) : (
            <>
              <p className="mt-2">Total Cash-In: ₹{cashInTotal.toLocaleString()}</p>
              <p>Total Cash-Out: ₹{cashOutTotal.toLocaleString()}</p>
            </>
          )}
        </CardContent>
      </Card>

      <Card className="md:col-span-3">
        <CardContent>
          <h2 className="text-lg font-semibold mb-2">Recent Activity</h2>

          {txLoading ? (
            <p>Loading transactions...</p>
          ) : recent.length === 0 ? (
            <p>No recent transactions</p>
          ) : (
            <ul className="space-y-2">
              {recent.map((tx: any) => (
                <li key={tx._id} className="flex justify-between border-b py-2">
                  <span>{new Date(tx.createdAt).toLocaleString()}</span>
                  <span className="capitalize">{(tx.type ?? "").replace("_", " ")}</span>
                  <span>{tx.to?.email ?? tx.initiatedBy}</span>
                  <span>₹{(tx.amount ?? 0).toLocaleString()}</span>
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
