import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useUserWithdrawMutation } from "@/redux/features/transaction/transaction.api";

export default function WithdrawPage() {
  const [amount, setAmount] = useState<number | "">("");
  const [withdraw, { isLoading }] = useUserWithdrawMutation();

  const handleWithdraw = async () => {
    if (!amount || Number(amount) <= 0) {
      toast.error("Enter a valid amount");
      return;
    }
    try {
      await withdraw(Number(amount)).unwrap();
      toast.success(`Successfully withdrew ₹${amount}`);
      setAmount("");
    } catch (err: any) {
      toast.error(err?.data?.message || "Withdrawal failed");
    }
  };

  return (
    <div data-aos="zoom-in" data-aos-duration="1500" className="relative min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 ">
      {/* Background blur */}
        <div className="absolute h-[450px] w-[600px] rounded-full bg-purple-500 opacity-50 blur-[180px] dark:bg-purple-700"></div>

      <Card className="relative w-full max-w-md sm:max-w-lg border border-red-200 dark:border-red-700 shadow-2xl bg-white dark:bg-gray-900 rounded-xl">
        <CardContent className="space-y-6 sm:space-y-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-red-600 via-pink-500 to-purple-500 bg-clip-text text-transparent text-center">
            Withdraw Money
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-center">
            Enter the amount you want to withdraw from your wallet.
          </p>

          <div className="relative">
            <label className="absolute -top-3 left-3 bg-white dark:bg-gray-900 px-1 text-gray-500 text-sm">
              Amount (₹)
            </label>
            <input
              type="number"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value === "" ? "" : Number(e.target.value))}
              className="w-full p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 pt-5"
            />
          </div>

          <Button
            onClick={handleWithdraw}
            disabled={isLoading}
            variant="gradient"
            className="w-full py-3 sm:py-4 text-sm sm:text-base font-semibold rounded-xl transition-all hover:scale-105"
          >
            {isLoading ? "Processing..." : "Withdraw"}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
