import OpenAI from "openai";
import { WalletData } from "../types";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function analyzeWallet(data: WalletData) {
  const prompt = `
Analyze this Bitcoin wallet:

Address: ${data.address}
Balance (sats): ${data.balance}
Transactions: ${data.txCount}

Return:
- Risk summary
- Behavioral profile
- Wallet health score (1-10)
`;

  const completion = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }]
  });

  return completion.choices[0].message.content;
}