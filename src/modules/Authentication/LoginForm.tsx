import Password from '@/components/Password';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import config from '@/config';
import { cn } from '@/lib/utils';
import { useLoginMutation } from '@/redux/features/auth/auth.api';
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { useForm } from 'react-hook-form';
import type { FieldValues, SubmitHandler } from 'react-hook-form';
import { Link, useNavigate } from 'react-router';
import { toast } from 'sonner';

export function LoginForm({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const navigate = useNavigate();
  const form = useForm();
  const [login] = useLoginMutation();
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const res = await login(data).unwrap();
      console.log(res);

      // Check if user is verified
      if (res.data.user && !res.data.user.isVerified) {
        toast.error('Your account is not verified');
        navigate('/verify', { state: data.email });
        return;
      }

      // Otherwise, proceed to dashboard
      navigate('/');
    } catch (err) {
      const error = err as FetchBaseQueryError;
      toast.error('Login failed');
      console.log(error);
    }
  };

  const handleGoogleClick = () => {
    window.location.assign(`${config.baseUrl}/auth/google`);
  };

  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Login to your account</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Enter your email below to login to your account
        </p>
      </div>
      <div className="grid gap-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Type Your email"
                      {...field}
                      value={field.value || ''}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Password
                     
                      placeholder="********"
                      {...field}
                      value={field.value || ''}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <button
              type="submit"
              className="group relative z-10 w-full cursor-pointer overflow-hidden rounded-full border-2 border-purple-500 bg-gradient-to-r from-blue-700 via-purple-500 to-pink-500 px-6 py-1.5 font-sans text-xs font-bold text-white transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 sm:px-8 sm:py-2 sm:text-sm md:px-10 md:py-2.5 md:text-base"
            >
              <span className="absolute inset-0 z-0 -translate-x-full bg-gradient-to-r from-blue-950 via-purple-950 to-blue-950 transition-transform duration-300 ease-in-out group-hover:translate-x-0"></span>

              <span className="relative">Login</span>
            </button>
          </form>
        </Form>

        <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
          <span className="bg-background text-muted-foreground relative z-10 px-2">
            Or continue with
          </span>
        </div>

        <button
          onClick={handleGoogleClick}
          type="button"
          className="group relative z-10 w-full cursor-pointer overflow-hidden rounded-full border-2 border-purple-500 bg-gradient-to-r from-blue-700 via-purple-500 to-pink-500 px-6 py-1.5 font-sans text-xs font-bold text-white transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 sm:px-8 sm:py-2 sm:text-sm md:px-10 md:py-2.5 md:text-base"
        >
          <span className="absolute inset-0 z-0 translate-x-full bg-gradient-to-r from-blue-950 via-purple-950 to-blue-950 transition-transform duration-300 ease-in-out group-hover:translate-x-0"></span>

          <span className="relative">Login with Google</span>
        </button>
      </div>
      <div className="text-center text-sm">
        Don&apos;t have an account?{' '}
        <Link
          to="/register"
          replace
          className="text-pink-500 underline underline-offset-4"
        >
          Register
        </Link>
      </div>
    </div>
  );
}
