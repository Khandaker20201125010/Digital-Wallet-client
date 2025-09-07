import { useState } from "react";

export default function SystemSettings() {
  const [fee, setFee] = useState(2);

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-xl font-semibold">System Settings</h2>
      <div className="rounded-lg border p-4 space-y-3">
        <label className="block text-sm font-medium">Transaction Fee (%)</label>
        <input
          type="number"
          value={fee}
          onChange={(e) => setFee(Number(e.target.value))}
          className="rounded-md border p-2"
        />
        <button className="btn btn-primary">Save</button>
      </div>
    </div>
  );
}
