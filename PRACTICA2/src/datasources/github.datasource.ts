
import axios from 'axios';

const githubApi = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Authorization: `Bearer ${process.env.GITHUB_TOKEN}`, // Asegúrate de tener el token en tu .env
  },
});

export default githubApi;
