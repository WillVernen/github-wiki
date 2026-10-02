import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import { api } from '../services/api';

jest.mock('../services/api', () => ({
  api: { get: jest.fn() },
}));

const repository = {
  id: 123,
  name: 'hello-world',
  full_name: 'octocat/hello-world',
  html_url: 'https://github.com/octocat/hello-world',
};

const searchRepository = (value = 'octocat/hello-world') => {
  fireEvent.change(document.querySelector('#repository'), {
    target: { value },
  });
  fireEvent.submit(document.querySelector('form'));
};

beforeEach(() => {
  api.get.mockReset();
});

test('adiciona o repositório e evita uma nova busca para duplicatas', async () => {
  api.get.mockResolvedValueOnce({ data: repository });
  render(<App />);

  searchRepository();

  expect(await screen.findByText('hello-world')).toBeInTheDocument();
  expect(api.get).toHaveBeenCalledWith('repos/octocat/hello-world');

  searchRepository();

  expect(await screen.findByText('Esse repositório já está na lista.')).toBeInTheDocument();
  expect(api.get).toHaveBeenCalledTimes(1);
});

test('mostra uma mensagem específica quando o repositório não existe', async () => {
  api.get.mockRejectedValueOnce({ response: { status: 404 } });
  render(<App />);

  searchRepository();

  expect(await screen.findByText(
    'Repositório não encontrado. Confira proprietário/repositório.'
  )).toBeInTheDocument();
});

test('mostra uma mensagem de rede quando a consulta falha', async () => {
  api.get.mockRejectedValueOnce(new Error('Network Error'));
  render(<App />);

  searchRepository();

  expect(await screen.findByText(
    'Não foi possível consultar o GitHub. Tente novamente.'
  )).toBeInTheDocument();
});

test('remove o item pelo botão sem remover ao abrir o link do repositório', async () => {
  api.get.mockResolvedValueOnce({ data: repository });
  render(<App />);
  searchRepository();

  expect(await screen.findByText('hello-world')).toBeInTheDocument();
  fireEvent.click(screen.getByText('Ver repositório'));
  expect(screen.getByText('hello-world')).toBeInTheDocument();

  fireEvent.click(document.querySelector('button[aria-label="Remover octocat/hello-world"]'));

  expect(screen.queryByText('hello-world')).not.toBeInTheDocument();
  expect(screen.getByText('Nenhum repositório salvo ainda.')).toBeInTheDocument();
});
