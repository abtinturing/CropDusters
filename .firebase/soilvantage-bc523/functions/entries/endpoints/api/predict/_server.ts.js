import { j as json } from "../../../../chunks/index.js";
import { M as MODEL_KEY } from "../../../../chunks/private.js";
const GET = async ({ url }) => {
  const lat = url.searchParams.get("latChunk");
  const lng = url.searchParams.get("lngChunk");
  const month = url.searchParams.get("month");
  if (!lat || !lng || !month) {
    return new Response(JSON.stringify({ error: "Missing required parameters" }), {
      status: 400,
      // Bad Request
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
  const APIUrl = "https://predict-353861714818.us-central1.run.app/";
  const response = await fetch(APIUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      features: [[lat, lng, month, MODEL_KEY]]
    })
  });
  const data = await response.json();
  return json(data);
};
export {
  GET
};
