export const get = key => {
  // do stuff
  console.log("get local storage with the key: " + key)
  return localStorage.getItem(key)
}
export const set = (key, value) => {
  console.log("set local storage " + key + " " + value)
  localStorage.setItem(key, value)
}
