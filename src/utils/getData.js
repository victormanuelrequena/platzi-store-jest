const getData = (api) => {
  return window
    .fetch(api)
    .then(response => response.json())
    .then(response => response)
    .catch(err => err);
};

export default getData;
