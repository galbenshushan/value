export const setItemToLs = (name = "", value) =>
  localStorage.setItem(name.toString(), JSON.stringify(value));

export const getItemFromLs = (name = "") => JSON.parse(localStorage.getItem(name));

export const removeItemFromLs = (name = "") => localStorage.removeItem(name)