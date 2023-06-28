// export const GET = (endpoint, key, value) => {
//   fetch(`https://www.thecocktaildb.com/api/json/v1/1/${endpoint}?${key}=${value}`)
//     .then(res => res.json())
//     .then(data => {
//       return data
//     })
// };


export const GET = async (endpoint, key, value) => {
  const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/${endpoint}?${key}=${value}`);
  const data = await res.json();
  return data;
};