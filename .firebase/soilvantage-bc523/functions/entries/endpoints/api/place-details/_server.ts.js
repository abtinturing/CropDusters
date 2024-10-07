import { G as GOOGLE_MAPS_API } from "../../../../chunks/private.js";
import { b as buildUrl } from "../../../../chunks/urlUtils.js";
import { j as json } from "../../../../chunks/index.js";
const GET = async ({ url }) => {
  const id = url.searchParams.get("id");
  if (!id) {
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
  const APIUrl = "https://maps.googleapis.com/maps/api/place/details/json";
  const builtURL = buildUrl(APIUrl, {
    fields: "address_components,icon",
    place_id: id,
    key: GOOGLE_MAPS_API
  });
  const response = await fetch(builtURL);
  const data = await response.json();
  return json(data);
};
export {
  GET
};
