import axios from "axios";
import { WalletData } from "../types";

export async function fetchWalletData(address: string): Promise<WalletData> {
  const url = `https://mempool.space/api/address/${address}`;
  const response = await axios.get(url);

  return {
    address: response.data.address,
    balance: response.data.chain_stats.funded_txo_sum -
             response.data.chain_stats.spent_txo_sum,
    txCount: response.data.chain_stats.tx_count
  };
}