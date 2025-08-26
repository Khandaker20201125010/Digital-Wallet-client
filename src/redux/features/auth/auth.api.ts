import { baseApi } from '@/redux/baseApi';
import type { ISendOtp, IVerifyOtp } from '@/redux/Ineterfaces/auth.interface';
import type { IResponse } from '@/redux/Ineterfaces/otp.interface';

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userInfo) => ({
        url: '/auth/login',
        method: 'POST',
        data: userInfo,
      }),
    }),

    register: builder.mutation({
      query: (userInfo: { name: string; email: string; password: string }) => ({
        url: '/user/register',
        method: 'POST',
        data: userInfo,
      }),
    }),
    sendOtp: builder.mutation<IResponse<null>, ISendOtp>({
      query: (userInfo) => ({
        url: '/otp/send',
        method: 'POST',
        data: userInfo,
      }),
    }),
        verifyOtp: builder.mutation<IResponse<null>, IVerifyOtp>({
      query: (userInfo) => ({
        url: "/otp/verify",
        method: "POST",
        data: userInfo,
      }),
    }),
    
  }),
});

export const { useRegisterMutation, useLoginMutation , useSendOtpMutation, useVerifyOtpMutation } = authApi;
