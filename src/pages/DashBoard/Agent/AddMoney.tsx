import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import { useAgentCashInMutation } from '@/redux/features/transaction/transaction.api';
import { toast } from 'sonner';

export default function AgentAddMoney() {
  const [userId, setUserId] = useState('');
  const [amount, setAmount] = useState('');
  const [cashIn, { isLoading }] = useAgentCashInMutation();

  const handleSubmit = async () => {
    if (!userId || !amount) {
      toast.error('Please enter both User ID and Amount.');
      return;
    }

    // ensure amount is a number
    const numeric = Number(amount);
    if (!Number.isFinite(numeric) || numeric <= 0) {
      toast.error('Enter a valid positive amount.');
      return;
    }

    try {
      // payload shape must match server zod schema: { type: 'cash_in', to, amount }
      await cashIn({ userId, amount: numeric }).unwrap();
      toast.success(`BDT${numeric} deposited to User ID: ${userId}`);
      setUserId('');
      setAmount('');
    } catch (err: any) {
      // RTK Query error format can be either err.data or err.error; log both
      console.error('AgentCashIn error:', err);
      const serverMessage =
        err?.data?.message || err?.data?.errors || err?.error || err?.message;
      toast.error(String(serverMessage || 'Transaction failed.'));
    }
  };

  return (
    /* same JSX you already have */
    <div className="relative flex min-h-[80vh] items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="absolute h-[450px] w-[600px] rounded-full bg-purple-500 opacity-50 blur-[180px] dark:bg-purple-700"></div>
      <Card
        data-aos="zoom-in"
        data-aos-duration="1500"
        className="relative w-full max-w-md border border-purple-200 shadow-lg sm:max-w-lg md:max-w-xl lg:max-w-2xl dark:border-purple-800"
      >
        <CardHeader className="text-center">
          <CardTitle className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-xl font-bold text-transparent sm:text-2xl">
            Agent Cash-In
          </CardTitle>
          <CardDescription className="text-sm sm:text-base">
            Deposit money into a user’s wallet securely.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6 sm:space-y-8">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
              User ID
            </label>
            <Input
              placeholder="Enter User ID"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              className="w-full"
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
            {isLoading ? 'Processing...' : 'Deposit (Cash-In)'}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
