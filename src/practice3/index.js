export const getPoetry = () =>
  fetch("https://v1.jinrishici.com/all.json")
    .then((response) => response.json())
    .then((data) => [data.origin, data.author, data.content])
    .catch((err) => console.log(err));

export const getPoetry2 = async () => {
  try {
    const response = await fetch("https://v1.jinrishici.com/all.json");
    const data = await response.json();
    return [data.origin, data.author, data.content];
  } catch (err) {
    console.log(err);
  }
};
