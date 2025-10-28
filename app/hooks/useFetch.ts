import { useState } from "react";

export function useFetch(baseUrl: string) {
  const [isLoading, setIsLoading] = useState(false);

  const request = async <T>(url: string, options: RequestInit): Promise<T[]> => {
    setIsLoading(true);
    const res = await fetch(baseUrl + url, {
      headers: { "Content-Type": "application/json" },
      ...options,
    });
    setIsLoading(false);

    if (!res.ok) return [];
    return res.json();
  };

  const get = <T>(url: string) => request<T>(url, { method: "GET" });
  const post = (url: string, data: any) =>
    request(url, { method: "POST", body: JSON.stringify(data) });
  const put = (url: string, data: any) =>
    request(url, { method: "PUT", body: JSON.stringify(data) });
  const del = (url: string) => request(url, { method: "DELETE" });

  return { isLoading, get, post, put, del };
}
