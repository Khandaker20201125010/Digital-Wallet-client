import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Password from '@/components/Password';
import { toast } from 'sonner';
import {
  useSetPasswordMutation,
  useUserInfoQuery,
} from '@/redux/features/auth/auth.api';

const setPasswordSchema = z
  .object({
    newPassword: z.string().min(8, 'Password must be at least 8 characters'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

type SetPasswordValues = z.infer<typeof setPasswordSchema>;

export default function SetPasswordForm() {
  const [setPassword, { isLoading }] = useSetPasswordMutation();
  const { data: userData } = useUserInfoQuery(undefined);

  const form = useForm<SetPasswordValues>({
    resolver: zodResolver(setPasswordSchema),
    defaultValues: {
      newPassword: '',
      confirmPassword: '',
    },
  });

  const onSubmit = async (values: SetPasswordValues) => {
    try {
      await setPassword({ password: values.newPassword }).unwrap();
      toast.success('Password set successfully');
      form.reset();
    } catch (error: any) {
      toast.error(error?.data?.message || 'Failed to set password');
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Set Password</CardTitle>
        <CardDescription>
          You signed up with Google. Set a password to also log in with email.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <input
              type="text"
              name="username"
              value={userData?.email ?? ''}
              autoComplete="username"
              readOnly
              className="sr-only"
              tabIndex={-1}
              aria-hidden="true"
            />

            <FormField
              control={form.control}
              name="newPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>New Password</FormLabel>
                  <FormControl>
                    <Password {...field} autoComplete="new-password" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Password {...field} autoComplete="new-password" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <button
              type="submit"
              disabled={isLoading}
              className="group relative z-10 mt-6 inline-block cursor-pointer overflow-hidden rounded-full border-2 border-purple-500 bg-gradient-to-r from-blue-950 via-purple-950 to-blue-950 px-6 py-3 font-sans text-base font-bold text-white max-sm:w-full dark:text-white"
            >
              <span className="absolute inset-0 z-[-1] translate-x-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-transform duration-300 ease-in-out group-hover:translate-x-0"></span>
              <span className="relative">
                {isLoading ? 'Setting...' : 'Set Password'}
              </span>
            </button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
