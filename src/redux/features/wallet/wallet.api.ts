import { baseApi } from "@/redux/baseApi";

export const walletApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMyWallet: builder.query({
      query: () => ({
        url: "/wallets/my-wallet",
        method: "GET",
      }),
      providesTags: ["WALLET"],
    }),
  }),
});

export const { useGetMyWalletQuery } = walletApi;