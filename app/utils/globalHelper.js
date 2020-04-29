export function getUsername() {
  if (process.env.NODE_ENV !== 'production') {
    return 'mehwishumar';
  }
  const hostName = window.location.hostname.split('.');
  let userName = hostName[0];
  if (hostName.length > 2) {
    [, userName] = hostName;
  }
  return userName;
}

export const parseQueryParam = location =>
  location.search
    .slice(1)
    .split('&')
    .reduce((queryParamObject, param) => {
      const params = param.split('=');
      // eslint-disable-next-line no-param-reassign, prefer-destructuring
      queryParamObject[params[0]] = params[1];
      return queryParamObject;
    }, {});
