// /api/LN/fetch_winners.ts

import type { VercelRequest, VercelResponse } from "@vercel/node";
import axios from "axios";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const response = await axios.get(
      "https://api.ydplatform.com/LN/fetch_winners.ashx",
      {
        headers: {
          // If your API needs headers like authorization, add here
          // 'Authorization': `Bearer ${process.env.API_TOKEN}`,
        },
      }
    );

    // Forward the backend response directly
    res.setHeader("Content-Type", "application/json");
    res.status(200).send(response.data);
  } catch (error: any) {
    console.error("Error proxying fetch_winners:", error.message);
    res.status(error.response?.status || 500).json({ error: error.message });
  }
}
