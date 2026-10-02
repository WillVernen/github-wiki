# GitHub Wiki

Aplicação web desenvolvida em React para buscar repositórios do GitHub por `proprietário/repositório`, exibir informações do projeto e salvá-las localmente na interface da aplicação.

## Autor

- Will Vernen

## Descrição

O projeto permite:

- buscar um repositório no GitHub
- validar o formato `proprietário/repositório`
- exibir os dados retornados pela API do GitHub
- adicionar repositórios à lista da aplicação
- remover itens da lista quando desejar

## Tecnologias

- React
- JavaScript
- Styled Components
- Axios
- GitHub API

## Pré-requisitos

Antes de iniciar, certifique-se de ter instalado:

- Node.js
- npm

## Como rodar

1. Clone o projeto
2. Acesse a pasta do projeto
3. Instale as dependências:

```bash
npm install
```

4. Inicie a aplicação:

```bash
npm start
```

A aplicação será aberta em:

```text
http://localhost:3000
```

## Scripts disponíveis

- `npm start` — inicia o ambiente de desenvolvimento
- `npm test` — executa os testes
- `npm run build` — gera a versão de produção

## Estrutura do projeto

```text
github-wiki/
├── public/
├── src/
├── package.json
├── README.md
├── LICENSE
└── .gitignore
```

## Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.

## Repositório

- GitHub: https://github.com/WillVernen/github-wiki

## Status

Projeto em desenvolvimento com foco em consumir a API pública do GitHub e aplicar conceitos de React e componentização.
