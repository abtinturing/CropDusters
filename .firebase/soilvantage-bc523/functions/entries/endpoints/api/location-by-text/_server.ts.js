import { G as GOOGLE_MAPS_API } from "../../../../chunks/private.js";
import { b as buildUrl } from "../../../../chunks/urlUtils.js";
import { j as json } from "../../../../chunks/index.js";
const GET = async ({ url }) => {
  const text = url.searchParams.get("text");
  if (!text) {
    return new Response(
      JSON.stringify({ error: "Missing required parameter: text" }),
      {
        status: 400,
        // Bad Request
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }
  const APIUrl = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json";
  const builtURL = buildUrl(APIUrl, {
    fields: "formatted_address,name,geometry,place_id",
    input: text,
    inputtype: "textquery",
    key: GOOGLE_MAPS_API
  });
  const response = await fetch(builtURL);
  const data = await response.json();
  return json(data);
};
export {
  GET
};
