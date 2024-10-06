
import { wait } from '$lib/serverUtils';
import { json } from '@sveltejs/kit';

import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ url }) => {
	const lat = url.searchParams.get('latChunk');
	const lng = url.searchParams.get('lngChunk');
	const month = url.searchParams.get('month');
	if (!lat || !lng || !month) {
		return new Response(JSON.stringify({ error: 'Missing required parameters' }), {
			status: 400, // Bad Request
			headers: {
				'Content-Type': 'application/json'
			}
		});
	}
  // ? Temporarily comment out
	const APIUrl = 'https://predict-353861714818.us-central1.run.app/';
	const response = await fetch(APIUrl, {
		method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
		body: JSON.stringify({
			features: [[lat, lng, month]]
		})
	});
	const data = await response.json();
  // ? ----------------------
  // await wait(1500)
  // const data = {prediction: [Math.random() * 100]}
	
	return json(data);
};
