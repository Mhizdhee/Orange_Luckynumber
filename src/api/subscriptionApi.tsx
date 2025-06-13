import axios from "axios";

const API_BASE = "https://api.ydplatform.com/api";
// const API_BASE = "/api/api";

const PASSWORD = import.meta.env.VITE_YD_API_PASSWORD;

const tokenCache: Record<number, { tokenId: string; expiry: string }> = {};

export const getToken = async (serviceId: number) => {
  if (tokenCache[serviceId]) {
    return { TokenID: tokenCache[serviceId].tokenId };
  }
  const response = await axios.post(`${API_BASE}/Login`, {
    serviceID: serviceId,
    Password: PASSWORD,
  });

  if (!response.data || !response.data.TokenID) {
    throw new Error("TokenID missing in response");
  }

  const { TokenID, TokenExpiration } = response.data;

  if (!TokenID) {
    throw new Error("TokenID missing in response");
  }
  tokenCache[serviceId] = { tokenId: TokenID, expiry: TokenExpiration };

  return { TokenID };
};

export const subscribeUser = async ({
  tokenId,
  msisdn,
  serviceId,
}: {
  tokenId: string;
  msisdn: string;
  serviceId: number;
}) => {
  const transactionId = `www_${new Date().toISOString().replace(/[-:.]/g, "")}`;
  const response = await axios.post(`${API_BASE}/subscribe`, {
    TokenID: tokenId,
    MSISDN: msisdn,
    ServiceID: serviceId,
    TransactionID: transactionId,
  });
  return response.data;
};
