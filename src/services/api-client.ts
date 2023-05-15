import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "145d85c0430f4633aa1ad8e9c65588af",
  },
});
