
type Tx = {
  _id: string;
  from?: { _id?: string; name?: string; email?: string } | string;
  to?: { _id?: string; name?: string; email?: string } | string;
  type: string;
  amount: number;
  fee?: number;
  status?: string;
  reference?: string;
  createdAt?: string;
};

export default function TransactionList({ items }: { items: Tx[] }) {
  if (!items?.length) return <div className="py-4 text-sm text-muted-foreground">No transactions yet.</div>;

  return (
    <div className="divide-y rounded-md border">
      {items.map((t) => (
        <div key={t._id} className="flex items-center justify-between px-4 py-3">
          <div>
            <div className="font-medium">{t.type}</div>
            <div className="text-sm text-muted-foreground">{t.reference}</div>
          </div>
          <div className="text-right">
            <div className="font-semibold">₹{t.amount.toLocaleString()}</div>
            <div className="text-xs text-muted-foreground">
              {t.fee ? `Fee: ₹${t.fee}` : null} • {new Date(t.createdAt ?? "").toLocaleString()}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
