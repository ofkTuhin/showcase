export const getData = async () => {
  const res = await fetch("http://glacial-lake-15784.herokuapp.com/data/");

  const { result } = await res.json();

  return result;
};
export const getLoginData = async () => {
  const res = await fetch(
    "http://glacial-lake-15784.herokuapp.com/login/loginData/"
  );

  const { result } = await res.json();

  return result;
};
