import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-app-981c1.firebaseio.com/"
});

export default instance;
