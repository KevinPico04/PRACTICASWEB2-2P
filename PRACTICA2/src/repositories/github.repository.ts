import githubApi from '../datasources/github.datasource';

interface Repository {
  id: number;
  name: string;
  full_name: string;
  private: boolean;
}

async function obtenerRepositorios(): Promise<Repository[]> {
  try {
    const response = await githubApi.get('/user/repos');
    return response.data;
  } catch (error) {
    throw new Error(`Error al obtener repositorios: ${error}`);
  }
}

export default {
  obtenerRepositorios,
};
