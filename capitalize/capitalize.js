const capitalize = (str) => {
  let regex = /^\S/;
  return str.replace(regex,el => el.toUpperCase());
}

export default capitalize;