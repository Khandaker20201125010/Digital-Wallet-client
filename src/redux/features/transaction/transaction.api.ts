import { baseApi } from "@/redux/baseApi";


export const transactionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAgentTransactions: builder.query({
      query: () => ({
        url: "/transactions/my", // assume backend has agent-specific
        method: "GET",
      }),
      providesTags: ["TRANSACTION"],
    }),
    addMoney: builder.mutation({
      query: (data) => ({
        url: "/transactions/cash-in",
        method: "POST",
        data,
      }),
      invalidatesTags: ["WALLET", "TRANSACTION"],
    }),
    withdrawMoney: builder.mutation({
      query: (data) => ({
        url: "/transactions/cash-out",
        method: "POST",
        data,
      }),
      invalidatesTags: ["WALLET", "TRANSACTION"],
    }),
  }),
});

export const {
  useGetAgentTransactionsQuery,
  useAddMoneyMutation,
  useWithdrawMoneyMutation,
} = transactionApi;
