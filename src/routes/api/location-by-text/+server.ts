import { GOOGLE_MAPS_API } from '$env/static/private';
import { buildUrl } from '$lib/urlUtils';
import { json } from '@sveltejs/kit';

import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ url }) => {
	const text = url.searchParams.get('text');
  if (!text) {
    return new Response(
      JSON.stringify({ error: 'Missing required parameter: text' }),
      {
        status: 400, // Bad Request
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
	const APIUrl = 'https://maps.googleapis.com/maps/api/place/findplacefromtext/json';
	const builtURL = buildUrl(APIUrl, {
		fields: 'formatted_address,name,geometry,place_id',
		input: text,
		inputtype: 'textquery',
		key: GOOGLE_MAPS_API
	});
  const response = await fetch(builtURL)
  const data = await response.json()
  // console.log(data)
	return json(data);
};
