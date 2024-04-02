import axios from "./customize-axios";

const fetchAllPlaylist = () => {
  return axios.get("/playlist/");
};

const fetchAPlaylist = (id) => {
  return axios.get(`/playlist/${id}`);
};

const fetchAnArtist = (id) => {
  return axios.get(`/artist/${id}`);
};

const fetchAlCategory = () => {
  return axios.get("/category/");
};

const fetchASong = (id) => {
  return axios.get(`/song/${id}`);
};

export {
  fetchAllPlaylist,
  fetchAPlaylist,
  fetchAnArtist,
  fetchAlCategory,
  fetchASong,
};
