import axios from "axios";
const setAuthToken = token => {
  if (token) {

    //authorization token
    axios.defaults.headers.common["Authorization"] = token;
  } else {

    // Deleting auth header
    delete axios.defaults.headers.common["Authorization"];
  }
};
export default setAuthToken;