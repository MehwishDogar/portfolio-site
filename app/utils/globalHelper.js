function getUsername() {
  const domain = window.location.host;
  const username = domain.split('.');
  username.pop();
  if (username.length > 1) {
    username.shift();
  }
  return username.join();
}

export default getUsername;
