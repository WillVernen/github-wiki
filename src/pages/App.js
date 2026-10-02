import { useState } from 'react';
import gitlogo from '../assets/github.png';
import Input from '../components/Input';
import Button from '../components/Button';
import ItemRepo from '../components/ItemRepo';
import { api } from '../services/api';

import { Container, Feedback, SearchForm } from './styles';

function App() {
  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleSearchRepo = async (event) => {
    event.preventDefault();

    const [owner, repository, ...extraParts] = currentRepo.trim().split('/');

    if (!owner || !repository || extraParts.length > 0) {
      setMessage('Informe o repositório no formato proprietário/repositório.');
      setIsError(true);
      return;
    }

    const fullName = `${owner}/${repository}`;
    const alreadySaved = repos.some(
      repo => repo.full_name.toLowerCase() === fullName.toLowerCase()
    );

    if (alreadySaved) {
      setMessage('Esse repositório já está na lista.');
      setIsError(true);
      return;
    }

    setIsLoading(true);
    setMessage('');
    setIsError(false);

    try {
      const repositoryPath = [owner, repository].map(encodeURIComponent).join('/');
      const { data } = await api.get(`repos/${repositoryPath}`);

      if (!data?.id) {
        setMessage('O GitHub não retornou um repositório válido.');
        setIsError(true);
        return;
      }

      if (repos.some(repo => repo.id === data.id)) {
        setMessage('Esse repositório já está na lista.');
        setIsError(true);
        return;
      }

      setRepos(previousRepos => [...previousRepos, data]);
      setCurrentRepo('');
    } catch (error) {
      if (error.response?.status === 404) {
        setMessage('Repositório não encontrado. Confira proprietário/repositório.');
      } else {
        setMessage('Não foi possível consultar o GitHub. Tente novamente.');
      }
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }

  const handleRemoveRepo = (id) => {
    setRepos(prevRepos => prevRepos.filter(repo => repo.id !== id));
  }

  return (
    <Container>
      <img src={gitlogo} width={72} height={72} alt="GitHub Logo" />
      <SearchForm aria-label="Buscar repositório no GitHub" onSubmit={handleSearchRepo}>
        <label htmlFor="repository">Repositório</label>
        <Input
          id="repository"
          value={currentRepo}
          onChange={event => setCurrentRepo(event.target.value)}
          placeholder="proprietário/repositório"
          disabled={isLoading}
        />
        <Button disabled={isLoading}>
          {isLoading ? 'Buscando...' : 'Buscar'}
        </Button>
      </SearchForm>
      {message && (
        <Feedback $isError={isError} role={isError ? 'alert' : 'status'}>
          {message}
        </Feedback>
      )}
      {repos.length === 0 && <Feedback>Nenhum repositório salvo ainda.</Feedback>}
      {repos.map(repo => (
        <ItemRepo key={repo.id} handleRemoveRepo={handleRemoveRepo} repo={repo} />
      ))}
    </Container>
  );
}

export default App;
