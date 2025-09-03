import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { cn } from '@/lib/utils';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link, useNavigate } from 'react-router';
import Password from '@/components/Password';
import { toast } from 'sonner';
import {
  useCheckUserExistsMutation,
  useRegisterMutation,
  useUserInfoQuery,
} from '@/redux/features/auth/auth.api';

const registerSchema = z
  .object({
    name: z
      .string()
      .min(3, {
        error: 'Name is too short',
      })
      .max(50),
    email: z.email(),
    password: z.string().min(8, { error: 'Password is too short' }),
    confirmPassword: z
      .string()
      .min(8, { error: 'Confirm Password is too short' }),
    role: z.enum(['USER', 'AGENT']),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Password do not match',
    path: ['confirmPassword'],
  });

import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import config from '@/config';


interface RegisterFormProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ className, ...props }) => {
  const [register] = useRegisterMutation();
  const navigate = useNavigate();

  const [openRoleModal, setOpenRoleModal] = useState(false);
  const [isCheckingUser, setIsCheckingUser] = useState(false);

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      role: 'USER',
    },
  });

  const onSubmit = async (data: z.infer<typeof registerSchema>) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      password: data.password,
      role: data.role,
    };

    try {
      const result = await register(userInfo).unwrap();
      console.log(result);
      toast.success('User created successfully');
      navigate('/verify', { state: data.email });
    } catch (error) {
      console.error(error);
    }
  };

  const handleGoogleClick = () => {
    window.location.assign(`${config.baseUrl}/auth/google`);
  };

  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Register your account</h1>
        <p className="text-muted-foreground text-sm">
          Enter your details to create an account
        </p>
      </div>

      <div className="grid gap-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Type Your name" {...field} />
                  </FormControl>
                  <FormDescription className="sr-only">
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Type Your email"
                      type="email"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription className="sr-only">
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Select Role as User/Agent</FormLabel>
                  <FormControl>
                    <select
                      {...field}
                      value={field.value || 'USER'}
                      onChange={(e) => field.onChange(e.target.value)}
                      className="w-full rounded border bg-white px-2 py-1  text-black dark:bg-black dark:text-white border-purple-500"
                    >
                      <option
                        value="USER"
                        className="bg-white text-black dark:bg-black dark:text-white "
                      >
                        User
                      </option>
                      <option
                        value="AGENT"
                        className="bg-white text-black dark:bg-black dark:text-white"
                      >
                        Agent
                      </option>
                    </select>
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
                    <Password {...field} />
                  </FormControl>
                  <FormDescription className="sr-only">
                    This is your public display name.
                  </FormDescription>
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
                    <Password {...field} />
                  </FormControl>
                  <FormDescription className="sr-only">
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <button
              type="submit"
              className="group relative z-10 w-full cursor-pointer overflow-hidden rounded-full border-2 border-purple-500 bg-gradient-to-r from-blue-700 via-purple-500 to-pink-500 px-6 py-1.5 font-sans text-xs font-bold text-white transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 sm:px-8 sm:py-2 sm:text-sm md:px-10 md:py-2.5 md:text-base"
            >
              <span className="absolute inset-0 z-0 -translate-x-full bg-gradient-to-r from-blue-950 via-purple-950 to-blue-950 transition-transform duration-300 ease-in-out group-hover:translate-x-0"></span>

              <span className="relative">Submit</span>
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
          disabled={isCheckingUser}
          type="button"
          className="group relative z-10 w-full cursor-pointer overflow-hidden rounded-full border-2 border-purple-500 bg-gradient-to-r from-blue-700 via-purple-500 to-pink-500 px-6 py-1.5 font-sans text-xs font-bold text-white transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 sm:px-8 sm:py-2 sm:text-sm md:px-10 md:py-2.5 md:text-base"
        >
          <span className="absolute inset-0 z-0 translate-x-full bg-gradient-to-r from-blue-950 via-purple-950 to-blue-950 transition-transform duration-300 ease-in-out group-hover:translate-x-0"></span>

          <span className="relative">
            {isCheckingUser ? 'Checking...' : 'Login with Google'}
          </span>
        </button>
      </div>

      <div className="text-center text-sm">
        Already have an account?{' '}
        <Link
          to="/login"
          className="text-pink-500 underline underline-offset-4"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default RegisterForm;
