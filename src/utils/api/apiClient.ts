import FormData from "form-data";

interface FetchPostOptions {
  headers?: HeadersInit_;
  body?: BodyInit_;
  signal?: AbortSignal;
}

const UAT_API_URL = "https://342c-2a09-bac5-492e-18be-00-277-77.ngrok.io";
const PRODUCTION_API_URL = "";

export const isProduction = false;
const API_URL = isProduction ? PRODUCTION_API_URL : UAT_API_URL;

export const getData = async (
  { route, query }: { route: string; query: string },
) => {
  console.log("endpoint : ", `${API_URL}/${route}`);

  const response = await fetch(`${API_URL}/${route}${query}`, {});

  console.log(await response.text());
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

  console.log(await response.text());
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data = await response.json();
  return data;
};
