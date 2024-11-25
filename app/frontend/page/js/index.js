function establish_host() {
  return fetch('/api/handshake')
  .then(response => {
    return response.ok;
  })
  .catch(error => {
    return false;
  });
}

export { establish_host };
