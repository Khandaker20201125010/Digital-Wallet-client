import { baseApi } from '@/redux/baseApi';
import type { ISendOtp, IVerifyOtp } from '@/redux/Ineterfaces/auth.interface';
import type { IResponse } from '@/redux/Ineterfaces/otp.interface';

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userInfo) => ({
        url: '/auth/login',
        method: 'POST',
        data: userInfo,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: '/auth/logout',
        method: 'POST',
      }),
      invalidatesTags: ['USER'],
    }),
    updateUser: builder.mutation({
      query: ({ email, role }) => ({
        url: '/auth/update-by-email',
        method: 'PATCH',
        data: { email, role }, // ✅ correct
      }),
    }),
    checkUserExists: builder.mutation<{ exists: boolean }, { email: string }>({
      query: (userInfo) => ({
        url: '/auth/check-exists',
        method: 'POST',
        data: userInfo, // ✅ must use data with axiosBaseQuery
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
        url: '/otp/verify',
        method: 'POST',
        data: userInfo,
      }),
    }),
    userInfo: builder.query({
      query: () => ({
        url: '/user/me',
        method: 'GET',
      }),
      providesTags: (result) =>
        result?.data?.email ? [{ type: 'USER', id: 'CURRENT' }] : ['USER'],
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useSendOtpMutation,
  useVerifyOtpMutation,
  useUpdateUserMutation,
  useCheckUserExistsMutation,
  useUserInfoQuery,
  useLogoutMutation,
} = authApi;
