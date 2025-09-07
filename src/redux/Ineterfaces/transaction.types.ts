// src/redux/features/transaction/transaction.types.ts

// The shape of filters you can pass to getAllTransactions
export interface GetAllTransactionsParams {
  page?: number;
  limit?: number;
  type?: string;
  status?: string;
  startDate?: string;
  endDate?: string;
  minAmount?: number;
  maxAmount?: number;
}

// The shape of the response returned by getAllTransactions
export interface GetAllTransactionsResponse {
  transactions: any[];
  total: number;
  page: number;
  limit: number;
}
