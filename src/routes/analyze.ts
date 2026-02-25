import { Router } from "express";
import { fetchWalletData } from "../services/bitcoin";
import { analyzeWallet } from "../services/ai";

const router = Router();

router.get("/:address", async (req, res) => {
  try {
    const walletData = await fetchWalletData(req.params.address);
    const result = await analyzeWallet(walletData);

    res.json({
      walletData,
      aiAnalysis: result
    });
  } catch {
    res.status(500).json({ error: "Analysis failed" });
  }
});

export default router;