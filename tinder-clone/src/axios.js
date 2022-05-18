import axios from 'axios';

const instance = axios.create({
  baseURL: "https://tinder-backside.herokuapp.com",
});

export default instance;