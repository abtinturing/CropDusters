import { GOOGLE_MAPS_API } from '$env/static/private';
import { buildUrl } from '$lib/urlUtils';
import { json } from '@sveltejs/kit';

import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ url }) => {
	const id = url.searchParams.get('id');
  if (!id) {
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
	const APIUrl = 'https://maps.googleapis.com/maps/api/place/details/json';
	const builtURL = buildUrl(APIUrl, {
		fields: 'address_components,icon',
		place_id: id,
		key: GOOGLE_MAPS_API
	});
  const response = await fetch(builtURL)
  const data = await response.json()
  // console.log(data)
	return json(data);
};
