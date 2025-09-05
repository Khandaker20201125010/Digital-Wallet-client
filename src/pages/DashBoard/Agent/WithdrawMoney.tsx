import { useState } from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useWithdrawMoneyMutation } from '@/redux/features/transaction/transaction.api';
import { toast } from 'sonner';

export default function WithdrawMoney() {
  const [amount, setAmount] = useState('');
  const [withdrawMoney, { isLoading }] = useWithdrawMoneyMutation();

const handleSubmit = async () => {
  if (!userId || !amount) {
    toast.error("Please enter both User ID and Amount");
    return;
  }

  try {
    await withdrawMoney({
      userId,        
      amount: Number(amount),
      type: "cash_out", 
    }).unwrap();

    toast.success(`₹${amount} withdrawn from user ${userId} successfully`);
    setUserId("");
    setAmount("");
  } catch (error: any) {
    toast.error(error?.data?.message || "Something went wrong");
  }
};

  const [userId, setUserId] = useState('');

  return (
    <div className="relative flex min-h-[80vh] items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="absolute h-[450px] w-[600px] rounded-full bg-purple-500 opacity-50 blur-[180px] dark:bg-purple-700"></div>
      <Card className="relative w-full max-w-md border border-purple-200 shadow-lg sm:max-w-lg md:max-w-xl lg:max-w-2xl dark:border-purple-800">
        <CardHeader className="text-center">
          <CardTitle className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-xl font-bold text-transparent sm:text-2xl">
            Withdraw Money
          </CardTitle>
          <CardDescription className="text-sm sm:text-base">
            Enter the amount you want to withdraw from your wallet.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6 sm:space-y-8">
          <div>
            <label>User ID</label>
            <Input
              placeholder="Enter User ID"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
              Amount
            </label>
            <Input
              placeholder="Enter Amount"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full"
            />
          </div>

          <Button
            variant="gradient"
            className="w-full py-3 text-sm sm:py-4 sm:text-base"
            onClick={handleSubmit}
            disabled={isLoading}
          >
            {isLoading ? 'Processing...' : 'Withdraw Money'}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
