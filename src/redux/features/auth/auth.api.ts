import { baseApi } from '@/redux/baseApi';
import type { ISendOtp, IVerifyOtp } from '@/redux/Ineterfaces/auth.interface';
import type { IResponse } from '@/redux/Ineterfaces/otp.interface';
import type { IUserFilters } from '@/redux/Ineterfaces/user.interface';

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
      query: ({ id, ...payload }) => ({
        url: `/user/${id}`,
        method: 'PATCH',
        data: payload,
      }),
      invalidatesTags: ['USER'],
    }),

    getAllUsers: builder.query<any[], IUserFilters | void>({
      query: (filters) => {
        // Construct query params from filters
        const params = new URLSearchParams();
        if (filters?.role) params.append('role', filters.role);
        if (filters?.isApproved)
          params.append('isApproved', filters.isApproved);
        if (filters?.isActive) params.append('isActive', filters.isActive);
        if (filters?.search) params.append('search', filters.search);

        return {
          url: `/user/all-users?${params.toString()}`,
          method: 'GET',
        };
      },
      transformResponse: (response: any) => response.data ?? [],
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
    setPassword: builder.mutation<{ message: string }, { password: string }>({
      query: (body) => ({
        url: '/auth/set-password',
        method: 'POST',
        data: body,
      }),
    }),
    searchUsersByEmail: builder.query<any[], string>({
      query: (email) => ({
        url: `/user/search?email=${encodeURIComponent(email)}`, // ✅ singular 'user'
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }),
      transformResponse: (response: any) => response.data ?? [],
    }),
    selectRole: builder.mutation({
      query: ({ email, role }) => ({
        url: '/auth/select-role',
        method: 'PATCH',
        data: { email, role },
      }),
      invalidatesTags: ['USER'],
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
  useSetPasswordMutation,

  useSearchUsersByEmailQuery,
  useGetAllUsersQuery,
  useSelectRoleMutation,
} = authApi;
