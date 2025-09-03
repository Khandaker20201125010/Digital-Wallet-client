import { baseApi } from '@/redux/baseApi';
import type {
  IUser,
  UpdateUserPayload,
} from '@/redux/Ineterfaces/user.interface';

export const agentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    updateProfile: builder.mutation<IUser, FormData>({
      query: (formData) => ({
        url: '/user/me',
        method: 'PATCH',
        data: formData,
      }),
      invalidatesTags: ['USER'],
    }),
    changePassword: builder.mutation<
      { message: string },
      { oldPassword: string; newPassword: string }
    >({
      query: (data) => ({
        url: '/auth/change-password',
        method: 'PATCH',
        data, // ✅ axiosBaseQuery uses this as request body
      }),
    }),
  }),
});

export const { useUpdateProfileMutation, useChangePasswordMutation } = agentApi;
