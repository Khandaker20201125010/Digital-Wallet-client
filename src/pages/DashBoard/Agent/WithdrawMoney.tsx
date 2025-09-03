import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useWithdrawMoneyMutation } from "@/redux/features/transaction/transaction.api";

export default function WithdrawMoney() {
  const [userId, setUserId] = useState("");
  const [amount, setAmount] = useState("");
  const [withdrawMoney, { isLoading }] = useWithdrawMoneyMutation();

  const handleSubmit = async () => {
    await withdrawMoney({ userId, amount: Number(amount) });
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
        {isLoading ? "Processing..." : "Withdraw Money"}
      </Button>
    </div>
  );
}
