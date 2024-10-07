function buildUrl(baseUrl, params) {
  const url = new URL(baseUrl);
  const queryParams = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    if (value !== void 0) {
      queryParams.append(key, String(value));
    }
  }
  url.search = queryParams.toString();
  return url.toString();
}
export {
  buildUrl as b
};
