const URL = "http://localhost:8080"

export const submitForm = (payload) => {
  return fetch(`${URL}/contact`, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...payload,
    }),
  }).then(handleErrors);
};


function handleErrors(response) {
  if (!response.ok) {
      throw response;
  }
  return response.json();
}