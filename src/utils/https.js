const BASE_URL = "https://failteireland.azure-api.net/opendata-api/v1/";

// activities
// https://failteireland.azure-api.net/opendata-api/v1/attractions
export const GET = async (endpoint) => {
  const res = await fetch(`${BASE_URL}${endpoint}`);
  const data = await res.json();
  return data;
};
// https://failteireland.azure-api.net/opendata-api/v1/accommodation?$filter=name%20eq%20%27Abbey%20Hotel%27
