import { Card, CardContent } from '@/components/ui/card';
import { useState } from 'react';
import { toast } from 'sonner';
import { useCreateDepositRequestMutation } from '@/redux/features/transaction/transaction.api';
import { Button } from '@/components/ui/button';

export default function DepositPage() {
  const [amount, setAmount] = useState<number | ''>('');
  const [note, setNote] = useState('');
  const [createRequest, { isLoading }] = useCreateDepositRequestMutation();

  const handleDeposit = async () => {
    if (!amount || Number(amount) <= 0)
      return toast.error('Enter a valid amount');
    try {
      await createRequest({ amount: Number(amount), note }).unwrap();
      toast.success(
        'Deposit request created. An agent will approve it shortly.',
      );
      setAmount('');
      setNote('');
    } catch (err: any) {
      toast.error(err?.data?.message || 'Failed to create deposit request');
    }
  };

  return (
    <div data-aos="zoom-in" data-aos-duration="1500" className="relative flex min-h-[80vh] items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="absolute h-[450px] w-[600px] rounded-full bg-purple-500 opacity-50 blur-[180px] dark:bg-purple-700"></div>
      <Card className="dark:border- -700 relative w-full max-w-md rounded-xl border border-red-200 bg-white shadow-2xl sm:max-w-lg dark:bg-gray-900">
        <CardContent className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-red-600 via-pink-500 to-purple-500 bg-clip-text text-transparent">Deposit Money</h2>
          <div>
            <label>Amount (₹)</label>
            <input
              type="number"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) =>
                setAmount(e.target.value === '' ? '' : Number(e.target.value))
              }
              className="w-full rounded-md border p-3"
            />
          </div>
          <div>
            <label>Note (optional)</label>
            <input
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="w-full rounded-md border p-10"
            />
          </div>

          <Button
            variant="gradient"
            className="w-full"
            onClick={handleDeposit}
            disabled={isLoading}
          >
            {isLoading ? 'Submitting...' : 'Create Deposit Request'}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
