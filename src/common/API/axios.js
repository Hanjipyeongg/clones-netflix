import axios from "axios";

// ini base url untuk membuat request ke database

const webURL = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default webURL;
