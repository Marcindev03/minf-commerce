export const transformUrlParamsToObject = (
  urlSearchParams: URLSearchParams
) => {
  const paramEntries = Array.from(urlSearchParams.entries());

  const params = Object.fromEntries(paramEntries);

  return params;
};
