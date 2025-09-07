import { Card, CardContent } from "@/components/ui/card";
import { useGetPendingDepositRequestsQuery, useApproveDepositRequestMutation, useRejectDepositRequestMutation } from "@/redux/features/transaction/transaction.api";
import { useState } from "react";
import { toast } from "sonner";

export default function AgentPendingRequests() {
  const { data, isFetching } = useGetPendingDepositRequestsQuery({ page: 1, limit: 100 });
  const [approve] = useApproveDepositRequestMutation();
  const [reject] = useRejectDepositRequestMutation();
  const [loadingId, setLoadingId] = useState<string | null>(null);

  const handleApprove = async (id: string) => {
    try {
      setLoadingId(id);
      await approve({ id }).unwrap();
      toast.success("Approved and credited user wallet");
      setLoadingId(null);
    } catch (err: any) {
      setLoadingId(null);
      toast.error(err?.data?.message || "Failed to approve");
    }
  };

  const handleReject = async (id: string) => {
    try {
      setLoadingId(id);
      await reject({ id }).unwrap();
      toast.success("Rejected request");
      setLoadingId(null);
    } catch (err: any) {
      setLoadingId(null);
      toast.error(err?.data?.message || "Failed to reject");
    }
  };

  const requests = data?.requests ?? [];

  return (
    <div className="py-6">
      <Card>
        <CardContent>
          <h2 className="text-xl font-bold mb-4">Pending Deposit Requests</h2>

          {isFetching ? <p>Loading...</p> : requests.length === 0 ? <p>No pending requests</p> : (
            <ul className="space-y-3">
              {requests.map((r: any) => (
                <li key={r._id} className="flex items-center justify-between border p-3 rounded">
                  <div>
                    <div className="font-semibold">{r.user?.name ?? r.user}</div>
                    <div className="text-sm text-muted-foreground">{r.user?.email ?? ""}</div>
                    <div className="text-sm mt-1">Amount: ₹{r.amount.toLocaleString()}</div>
                    <div className="text-xs text-muted-foreground">Requested at: {new Date(r.createdAt).toLocaleString()}</div>
                  </div>
                  <div className="flex gap-2">
                    <button onClick={() => handleApprove(r._id)} disabled={loadingId === r._id} className="px-3 py-1 bg-green-600 text-white rounded">
                      Approve
                    </button>
                    <button onClick={() => handleReject(r._id)} disabled={loadingId === r._id} className="px-3 py-1 bg-red-500 text-white rounded">
                      Reject
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
