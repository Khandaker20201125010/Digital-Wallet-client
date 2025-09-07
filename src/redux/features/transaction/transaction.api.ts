// src/redux/features/transaction/transaction.api.ts
import { baseApi } from '@/redux/baseApi';

export const transactionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // ----------------- USER -----------------
    userWithdraw: builder.mutation<{ success: boolean }, number>({
      query: (amount) => ({
        url: '/transactions',
        method: 'POST',
        data: { type: 'withdraw', amount },
      }),
      invalidatesTags: ['WALLET', 'TRANSACTION'],
    }),

    sendMoney: builder.mutation<
      { success: boolean },
      { to: string; amount: number }
    >({
      query: ({ to, amount }) => ({
        url: '/transactions',
        method: 'POST',
        data: { type: 'send', to, amount },
      }),
      invalidatesTags: ['WALLET', 'TRANSACTION'],
    }),

    // GET /transactions/my-transactions?page=..&limit=..&type=..&startDate=..&endDate=..
    getMyTransactions: builder.query<
      { transactions: any[]; total: number; page: number; limit: number },
      {
        page?: number;
        limit?: number;
        type?: string;
        startDate?: string;
        endDate?: string;
      }
    >({
      query: ({ page = 1, limit = 10, type, startDate, endDate }) => {
        const params = new URLSearchParams();
        params.set('page', String(page));
        params.set('limit', String(limit));
        if (type) params.set('type', type);
        if (startDate) params.set('startDate', startDate);
        if (endDate) params.set('endDate', endDate);

        return {
          url: `/transactions/my-transactions?${params.toString()}`,
          method: 'GET',
        };
      },
      // backend sendResponse puts the useful payload into response.data
      transformResponse: (response: any) => {
        // if backend wrap: { statusCode, success, message, data: { transactions, total, page, limit } }
        // return data directly to caller
        return response?.data ?? response;
      },
      providesTags: ['TRANSACTION'],
    }),

    // ----------------- AGENT -----------------
    agentCashIn: builder.mutation<
      { success: boolean },
      { userId: string; amount: number }
    >({
      query: ({ userId, amount }) => ({
        url: '/transactions',
        method: 'POST',
        data: { type: 'cash_in', to: userId, amount },
      }),
      invalidatesTags: ['WALLET', 'TRANSACTION'],
    }),

    agentCashOut: builder.mutation<
      { success: boolean },
      { userId: string; amount: number }
    >({
      query: ({ userId, amount }) => ({
        url: '/transactions',
        method: 'POST',
        data: { type: 'cash_out', to: userId, amount },
      }),
      invalidatesTags: ['WALLET', 'TRANSACTION'],
    }),

    // Admin/all transactions -- backend has GET /transactions/all-transactions
    getAllTransactions: builder.query<
      { transactions: any[]; total: number; page: number; limit: number },
      {
        page?: number;
        limit?: number;
        type?: string;
        startDate?: string;
        endDate?: string;
      }
    >({
      query: ({ page = 1, limit = 20, type, startDate, endDate }) => {
        const params = new URLSearchParams();
        params.set('page', String(page));
        params.set('limit', String(limit));
        if (type) params.set('type', type);
        if (startDate) params.set('startDate', startDate);
        if (endDate) params.set('endDate', endDate);

        return {
          url: `/transactions/all-transactions?${params.toString()}`,
          method: 'GET',
        };
      },
      transformResponse: (response: any) => response?.data ?? response,
      providesTags: ['TRANSACTION'],
    }),
    // Deposit requests
    createDepositRequest: builder.mutation<
      any,
      { amount: number; note?: string }
    >({
      query: ({ amount, note }) => ({
        url: '/deposit-requests',
        method: 'POST',
        data: { amount, note },
      }),
      invalidatesTags: ['TRANSACTION', 'WALLET', 'DEPOSIT_REQUEST'],
    }),

    getMyDepositRequests: builder.query<any, { page?: number; limit?: number }>(
      {
        query: ({ page = 1, limit = 20 }) => ({
          url: `/deposit-requests/my?page=${page}&limit=${limit}`,
          method: 'GET',
        }),
        transformResponse: (r: any) => r.data ?? r,
        providesTags: ['DEPOSIT_REQUEST'],
      },
    ),

    getPendingDepositRequests: builder.query<
      any,
      { page?: number; limit?: number }
    >({
      query: ({ page = 1, limit = 50 }) => ({
        url: `/deposit-requests/pending?page=${page}&limit=${limit}`,
        method: 'GET',
      }),
      transformResponse: (r: any) => r.data ?? r,
      providesTags: ['DEPOSIT_REQUEST'],
    }),

    approveDepositRequest: builder.mutation<any, { id: string }>({
      query: ({ id }) => ({
        url: `/deposit-requests/${id}/approve`,
        method: 'PATCH',
      }),
      invalidatesTags: ['DEPOSIT_REQUEST', 'TRANSACTION', 'WALLET'],
    }),

    rejectDepositRequest: builder.mutation<
      any,
      { id: string; reason?: string }
    >({
      query: ({ id, reason }) => ({
        url: `/deposit-requests/${id}/reject`,
        method: 'PATCH',
        data: { reason },
      }),
      invalidatesTags: ['DEPOSIT_REQUEST'],
    }),
  }),

  overrideExisting: false,
});

export const {
  useUserWithdrawMutation,
  useSendMoneyMutation,
  useGetMyTransactionsQuery,
  useAgentCashInMutation,
  useAgentCashOutMutation,
  useGetAllTransactionsQuery,
  useCreateDepositRequestMutation,
  useGetMyDepositRequestsQuery,
  useGetPendingDepositRequestsQuery,
  useApproveDepositRequestMutation,
  useRejectDepositRequestMutation,
} = transactionApi;
