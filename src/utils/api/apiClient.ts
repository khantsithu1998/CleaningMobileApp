import FormData from "form-data";

interface FetchPostOptions {
  headers?: HeadersInit_;
  body?: BodyInit_;
  signal?: AbortSignal;
}

// you can test with ngrok url you setup // https://cf40-2a09-bac5-492c-137d-00-1f1-1a6.ngrok-free.app 
const UAT_API_URL = "http://localhost:3000"; 
const PRODUCTION_API_URL = "";

export const isProduction = false;
const API_URL = isProduction ? PRODUCTION_API_URL : UAT_API_URL;

export const getData = async (
  { route, query }: { route: string; query: string },
) => {
  console.log("endpoint : ", `${API_URL}/${route}${query}`);

  const response = await fetch(`${API_URL}/${route}${query}`);

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data = await response.json();
  return data;
};

export const postData = async ({ route, raw }: { route: string; raw: any }) => {
  console.log("endpoint : ", `${API_URL}/${route}`);

  const response = await fetch(`${API_URL}/${route}`, {
    method: "POST",
    body: JSON.stringify(raw),
  });

  
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data = await response.json();
  return data;
};
