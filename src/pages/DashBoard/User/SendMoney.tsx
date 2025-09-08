import { Card, CardContent } from '@/components/ui/card';
import { useState } from 'react';
import { useSendMoneyMutation } from '@/redux/features/transaction/transaction.api';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';

export default function SendMoneyPage() {
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState<number>(0);
  const [sendMoney, { isLoading }] = useSendMoneyMutation();

  const handleSend = async () => {
    try {
      await sendMoney({ to: recipient, amount }).unwrap();
      toast.success(`Successfully sent BDT${amount} to ${recipient}`);
      setRecipient('');
      setAmount(0);
    } catch (err: any) {
      toast.error(err?.data?.message || 'Transaction failed');
    }
  };

  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="1500"
      className="relative flex min-h-[80vh] items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      <div className="absolute h-[450px] w-[600px] rounded-full bg-purple-500 opacity-50 blur-[180px] dark:bg-purple-700"></div>
      <Card className="dark:border- -700 relative w-full max-w-md rounded-xl border border-red-200 bg-white shadow-2xl sm:max-w-lg dark:bg-gray-900">
        <CardContent className="space-y-6">
          <h2 className="bg-gradient-to-r from-red-600 via-pink-500 to-purple-500 bg-clip-text text-2xl font-extrabold text-transparent sm:text-3xl">
            Send Money
          </h2>

          <div className="space-y-2">
            <label className="block text-gray-700 dark:text-gray-300">
              Recipient (User Id)
            </label>
            <input
              type="text"
              placeholder="Enter recipient"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
              className="w-full rounded-md border p-3 focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-gray-700 dark:text-gray-300">
              Amount (BDT)
            </label>
            <input
              type="number"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-full rounded-md border p-3 focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>

          <Button variant="gradient" onClick={handleSend} disabled={isLoading}>
            {isLoading ? 'Sending...' : 'Send Money'}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
