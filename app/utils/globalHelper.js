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
