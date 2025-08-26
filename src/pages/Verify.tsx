import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/components/ui/input-otp';
import { cn } from '@/lib/utils';
import {
  useSendOtpMutation,
  useVerifyOtpMutation,
} from '@/redux/features/auth/auth.api';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router';
import { toast } from 'sonner';
import z from 'zod';
import { Loader2, MailCheck, MailOpen } from 'lucide-react';

const FormSchema = z.object({
  pin: z.string().min(6, {
    message: 'Your one-time password must be 6 characters.',
  }),
});

export default function Verify() {
  const location = useLocation();
  const navigate = useNavigate();
  const [email] = useState(location.state);
  const [confirmed, setConfirmed] = useState(false);
  const [sendOtp, { isLoading: isSending }] = useSendOtpMutation();
  const [verifyOtp, { isLoading: isVerifying }] = useVerifyOtpMutation();
  const [timer, setTimer] = useState(0);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pin: '',
    },
  });

  const handleSendOtp = async () => {
    const toastId = toast.loading('Sending OTP');

    try {
      const res = await sendOtp({ email: email }).unwrap();

      if (res.success) {
        toast.success('OTP sent to your email', { id: toastId });
        setConfirmed(true);
        setTimer(60); // Set to 60 seconds
      }
    } catch (err) {
      toast.error('Failed to send OTP', { id: toastId });
      console.log(err);
    }
  };

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    const toastId = toast.loading('Verifying OTP');
    const userInfo = {
      email,
      otp: data.pin,
    };

    try {
      const res = await verifyOtp(userInfo).unwrap();
      if (res.success) {
        toast.success('Email verified successfully!', { id: toastId });
        setConfirmed(true);
        navigate('/');
      }
    } catch (err) {
      toast.error('Invalid verification code', { id: toastId });
      console.log(err);
    }
  };

 
  useEffect(() => {
    if (timer <= 0) return;

    const intervalId = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timer,email, confirmed]);

  return (
    <div className="min-h-screen text-black dark:text-white flex items-center justify-center p-4">
        <div className="absolute h-[450px] w-[600px] rounded-full bg-purple-500 opacity-50 blur-[180px] dark:bg-purple-700"></div>
      {confirmed ? (
        <Card className="relative w-full  max-w-md rounded-2xl border-purple-700 shadow-xl backdrop-blur-md border">
          
          <CardHeader className="space-y-4 text-center pb-2 ">
            <div className="flex justify-center">
              <div className="p-3 bg-purple-100 rounded-full">
                <MailCheck className="h-8 w-8 text-purple-600" />
              </div>
            </div>
            <CardTitle className="text-2xl font-bold text-gray-800 dark:text-gray-100">
              Check your email
            </CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-400 text-base">
              We sent a verification code to
            </CardDescription>
            <p className="font-semibold text-purple-700 text-lg">{email}</p>
          </CardHeader>

          <CardContent className="pb-2">
            <Form {...form}>
              <form
                id="otp-form"
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="pin"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Enter verification code
                      </FormLabel>
                      <FormControl>
                        <div className="flex justify-center">
                          <InputOTP
                            maxLength={6}
                            value={field.value}
                            onChange={field.onChange}
                            className="justify-center gap-2"
                          >
                            <InputOTPGroup className="gap-2">
                              {[0, 1, 2, 3, 4, 5].map((i) => (
                                <InputOTPSlot
                                  key={i}
                                  index={i}
                                  className="h-14 w-12 rounded-xl border-2 border-purple-200 text-lg font-bold shadow-sm transition-all focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                                />
                              ))}
                            </InputOTPGroup>
                          </InputOTP>
                        </div>
                      </FormControl>

                      <FormDescription className="mt-6 text-center text-sm">
                        <Button
                          onClick={handleSendOtp}
                          type="button"
                          variant="link"
                          disabled={timer > 0 || isSending}
                          className={cn(
                            'p-0 text-sm',
                            timer === 0 && !isSending
                              ? 'text-purple-600 hover:text-purple-800 cursor-pointer'
                              : 'cursor-not-allowed text-gray-400',
                          )}
                        >
                          {isSending ? (
                            <>
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              Sending...
                            </>
                          ) : timer === 0 ? (
                            'Resend verification code'
                          ) : (
                            `Resend in ${timer}s`
                          )}
                        </Button>
                      </FormDescription>
                      <FormMessage className="text-center" />
                    </FormItem>
                  )}
                />
              </form>
            </Form>
          </CardContent>

          <CardFooter className="pt-2">
            <button
              form="otp-form"
              type="submit"
              disabled={isVerifying}
              className="group relative z-10 w-full cursor-pointer overflow-hidden rounded-full border-2 border-purple-500 bg-gradient-to-r from-blue-700 via-purple-500 to-pink-500 px-6 py-1.5 font-sans text-xs font-bold text-white transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 sm:px-8 sm:py-2 sm:text-sm md:px-10 md:py-2.5 md:text-base"
            >
              <span className="absolute inset-0 z-0 -translate-x-full bg-gradient-to-r from-blue-950 via-purple-950 to-blue-950 transition-transform duration-300 ease-in-out group-hover:translate-x-0"></span>
              {isVerifying ? (
                <span className="flex items-center justify-center">
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Verifying...
                </span>
              ) : (
                <span className="relative">Verify Email</span>
              )}
            </button>
          </CardFooter>
        </Card>
      ) : (
        <Card className="w-full max-w-md rounded-2xl bg-white/80 shadow-xl backdrop-blur-md border-0">
          <CardHeader className="space-y-4 text-center pb-2">
            <div className="flex justify-center">
              <div className="p-3 bg-blue-100 rounded-full">
                <MailOpen className="h-8 w-8 text-blue-600" />
              </div>
            </div>
            <CardTitle className="text-2xl font-bold text-gray-800">
              Verify your email
            </CardTitle>
            <CardDescription className="text-gray-600 text-base">
              We'll send a verification code to
            </CardDescription>
            <p className="font-semibold text-blue-700 text-lg">{email}</p>
          </CardHeader>

          <CardFooter className="pt-2">
            <button
              onClick={handleSendOtp}
              disabled={isSending}
              className="group relative z-10 w-full cursor-pointer overflow-hidden rounded-full border-2 border-purple-500 bg-gradient-to-r from-blue-700 via-purple-500 to-pink-500 px-6 py-1.5 font-sans text-xs font-bold text-white transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 sm:px-8 sm:py-2 sm:text-sm md:px-10 md:py-2.5 md:text-base"
            >
              <span className="absolute inset-0 z-0 -translate-x-full bg-gradient-to-r from-blue-950 via-purple-950 to-blue-950 transition-transform duration-300 ease-in-out group-hover:translate-x-0"></span>
              {isSending ? (
                <span className="flex items-center justify-center">
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </span>
              ) : (
                <span className="relative">Send Verification Code</span>
              )}
            </button>
          </CardFooter>
        </Card>
      )}
    </div>
  );
}