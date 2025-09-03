
import { Card, CardContent } from "@/components/ui/card";
import { useGetAgentTransactionsQuery } from "@/redux/features/transaction/transaction.api";
import { useGetMyWalletQuery } from "@/redux/features/wallet/wallet.api";

export default function AgentDashboardOverview() {
  const { data: wallet } = useGetMyWalletQuery(undefined);
  const { data: transactions } = useGetAgentTransactionsQuery(undefined);

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <CardContent className="p-4">
          <h2 className="text-lg font-semibold">Wallet Summary</h2>
          <p className="mt-2">Balance: ${wallet?.data?.balance ?? 0}</p>
          <p>Status: {wallet?.data?.status}</p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4">
          <h2 className="text-lg font-semibold">Recent Activity</h2>
          <ul className="mt-2 space-y-1 text-sm">
            {transactions?.data?.slice(0, 5).map((tx: any) => (
              <li key={tx._id} className="flex justify-between">
                <span>{tx.type}</span>
                <span>${tx.amount}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
