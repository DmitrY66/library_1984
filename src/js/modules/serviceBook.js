// export const API_URI = 'http://localhost:3024/';
export const API_URI = 'https://floating-citadel-97964.herokuapp.com/';

export const getBooks = async (id) => {

  const response = await fetch(`${API_URI}api/books/${id || ''}`);

  if (response.ok) {
    return  response.json();
  }

  throw new Error(response.statusText);
};

export const getLabels = async () => {

  const response = await fetch(`${API_URI}api/label/`);

  if (response.ok) {
    return  response.json();
  }

  throw new Error(response.statusText);
};
