import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAddMoneyMutation } from "@/redux/features/transaction/transaction.api";

export default function AddMoney() {
  const [userId, setUserId] = useState("");
  const [amount, setAmount] = useState("");
  const [addMoney, { isLoading }] = useAddMoneyMutation();

  const handleSubmit = async () => {
    await addMoney({ userId, amount: Number(amount) });
    setUserId("");
    setAmount("");
  };

  return (
    <div className="space-y-4">
      <Input
        placeholder="User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <Input
        placeholder="Amount"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <Button onClick={handleSubmit} disabled={isLoading}>
        {isLoading ? "Processing..." : "Add Money"}
      </Button>
    </div>
  );
}
