import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',

  params: {
    key: "d0eee989808c4d92ad3a6673bd38f774"
  }
});
