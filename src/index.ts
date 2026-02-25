import dotenv from "dotenv";
import { fetchWalletData } from "./services/bitcoin";
import { analyzeWallet } from "./services/ai";

dotenv.config();

async function main() {
  const address = process.argv[2];

  if (!address) {
    console.log("Usage: npm run dev:cli <bitcoin_address>");
    process.exit(1);
  }

  const walletData = await fetchWalletData(address);
  const result = await analyzeWallet(walletData);

  console.log(result);
}

main();