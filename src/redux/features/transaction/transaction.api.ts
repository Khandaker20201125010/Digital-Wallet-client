import { baseApi } from '@/redux/baseApi';

export const transactionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAgentTransactions: builder.query({
      query: () => ({
        url: '/transactions/my-transactions', // assume backend has agent-specific
        method: 'GET',
      }),
      providesTags: ['TRANSACTION'],
    }),
    addMoney: builder.mutation({
      query: ({ userId, amount }) => ({
        url: '/transactions',
        method: 'POST',
        data: {
          to: userId, // ✅ send as `to`
          type: 'cash_in', // ✅ required type
          amount, // ✅ must be number
        },
      }),
      invalidatesTags: ['WALLET', 'TRANSACTION'],
    }),
    withdrawMoney: builder.mutation({
      query: ({ userId, amount }) => ({
        url: '/transactions',
        method: 'POST',
        data: {
          to: userId,
          type: 'cash_out', // must match backend type
          amount,
        },
      }),
      invalidatesTags: ['WALLET', 'TRANSACTION'],
    }),
  }),
});

export const {
  useGetAgentTransactionsQuery,
  useAddMoneyMutation,
  useWithdrawMoneyMutation,
} = transactionApi;
