import { Method } from "./types/method";

export const baselinkerClient = async <T>(
  method: Method,
  params = {}
): Promise<T> => {
  const baselinkerUrl = "https://api.baselinker.com/connector.php";

  const headers = {
    "X-BLToken": process.env.BASELINKER_API_TOKEN as string,
  };

  const res = await fetch(baselinkerUrl, {
    method: "POST",
    headers,
    body: new URLSearchParams({ method, parameters: JSON.stringify(params) }),
  });
  const data = await res.json();

  return data;
};
