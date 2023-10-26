import React, { useEffect, useState } from "react";
import Routes from "./components/routes";
import { UidContext } from "./components/Appcontext";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getUser } from "./actions/user.action";

const App = () => {
  const [uid, setUid] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchToken () {
      try {
        const { data: uid } = await axios({
          method: "get",
          url: `${import.meta.env.VITE_REACT_APP_API_URL}jwtid`,
          withCredentials: true,
        });
        
        setUid(uid);
      } catch (err) {
        console.log('No token', err.message);
      }
    };
    fetchToken();

    if (uid) dispatch(getUser(uid));
  }, [uid, dispatch]);

  return (
    <UidContext.Provider value={uid}>
      <Routes />
    </UidContext.Provider>
  )
}

export default App;