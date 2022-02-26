import React, { useContext, useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import { useRouter } from "next/router";
import { UserContext } from "../../components/UserContext/UserContext";
import { getLoginData } from "../../lib/data";

const Login = ({ loginData }) => {
  const [login, setLogin] = useContext(UserContext);
  const router = useRouter();

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const handleSignIn = () => {
    loginData.map((data) => {
      if (data.username == user.username && data.password == user.password) {
        setLogin(true);
      } else {
        alert("username or password incorrect");
      }

      return loginData;
    });
  };
  useEffect(() => {
    if (login) {
      router.push("/add-data");
    }
  });
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Layout login={login}>
      <div className="flex items-center h-screen w-full">
        <div className="w-full bg-white p-8 m-4 md:max-w-sm md:mx-auto">
          <span className="block w-full text-2xl uppercase font-bold mb-4">
            Login
          </span>
          <form className="mb-4" onSubmit={handleSubmit}>
            <div className="mb-4 md:w-full">
              <label htmlFor="email" className="block mb-2">
                Username
              </label>
              <input
                onChange={handleChange}
                value={user.username}
                required
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="text"
                name="username"
                id="email"
                placeholder="Username or Email"
              />
            </div>
            <div className="mb-6 md:w-full">
              <label htmlFor="password" className="block mb-2">
                Password
              </label>
              <input
                onChange={handleChange}
                value={user.password}
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
            </div>
            <button
              onClick={handleSignIn}
              className="bg-green-500 hover:bg-green-700 text-white uppercase text-sm font-semibold px-4 py-2 rounded"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};
export const getStaticProps = async () => {
  const loginData = await getLoginData();
  console.log(loginData);

  return {
    props: {
      loginData: loginData,
    },
    revalidate: 5,
  };
};
export default Login;
