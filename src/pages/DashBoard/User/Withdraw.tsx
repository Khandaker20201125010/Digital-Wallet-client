import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { useUserWithdrawMutation } from '@/redux/features/transaction/transaction.api';

export default function WithdrawPage() {
  const [amount, setAmount] = useState<number | ''>('');
  const [withdraw, { isLoading }] = useUserWithdrawMutation();

  const handleWithdraw = async () => {
    if (!amount || Number(amount) <= 0) {
      toast.error('Enter a valid amount');
      return;
    }
    try {
      await withdraw(Number(amount)).unwrap();
      toast.success(`Successfully withdrew BDT${amount}`);
      setAmount('');
    } catch (err: any) {
      toast.error(err?.data?.message || 'Withdrawal failed');
    }
  };

  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="1500"
      className="relative flex min-h-[80vh] items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      {/* Background blur */}
      <div className="absolute h-[450px] w-[600px] rounded-full bg-purple-500 opacity-50 blur-[180px] dark:bg-purple-700"></div>

      <Card className="relative w-full max-w-md rounded-xl border border-red-200 bg-white shadow-2xl sm:max-w-lg dark:border-red-700 dark:bg-gray-900">
        <CardContent className="space-y-6 sm:space-y-8">
          <h2 className="bg-gradient-to-r from-red-600 via-pink-500 to-purple-500 bg-clip-text text-center text-2xl font-extrabold text-transparent sm:text-3xl">
            Withdraw Money
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300">
            Enter the amount you want to withdraw from your wallet.
          </p>

          <div className="relative">
            <label className="absolute -top-3 left-3 bg-white px-1 text-sm text-gray-500 dark:bg-gray-900">
              Amount (BDT)
            </label>
            <input
              type="number"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) =>
                setAmount(e.target.value === '' ? '' : Number(e.target.value))
              }
              className="w-full rounded-md border p-4 pt-5 focus:ring-2 focus:ring-red-500 focus:outline-none"
            />
          </div>

          <Button
            onClick={handleWithdraw}
            disabled={isLoading}
            variant="gradient"
            className="w-full rounded-xl py-3 text-sm font-semibold transition-all hover:scale-105 sm:py-4 sm:text-base"
          >
            {isLoading ? 'Processing...' : 'Withdraw'}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
