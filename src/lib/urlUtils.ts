
export function buildUrl(baseUrl: string, params: Record<string, string | number | boolean | undefined>): string {
  const url = new URL(baseUrl);
  const queryParams = new URLSearchParams();

  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined) { 
      queryParams.append(key, String(value));
    }
  }

  url.search = queryParams.toString();
  return url.toString();
}

export function debounceAsync(fn, delay = 300) {
  let debounceTimeout;
  let latestCall = null;

  return async function (...args) {
    // Update the latest call to identify the most recent invocation
    latestCall = args;

    // Clear the previous timeout if it exists
    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }

    // Return a promise that resolves only for the most recent call
    return new Promise((resolve) => {
      debounceTimeout = setTimeout(async () => {
        if (args === latestCall) {
          const result = await fn(...args);
          resolve(result);
        }
      }, delay);
    });
  };
}
