import '../styles/globals.css'
import { UserContext } from "../components/UserContext/UserContext";
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [login, setLogin] = useState(false);

  return <UserContext.Provider value={[login, setLogin]}>
    <Component {...pageProps} />
  </UserContext.Provider>
}

export default MyApp
