# cinevision

# Cine Vision

Aplicação web desenvolvida em React que permite pesquisar filmes, visualizar detalhes e gerenciar uma lista de favoritos. A aplicação consome dados da API do The Movie Database (TMDb) para exibir informações atualizadas sobre filmes.

---

## Funcionalidades

- **Busca de Filmes:** Pesquise filmes pelo nome com resultados em tempo real.
-  **Listagem de Filmes:** Veja os filmes mais populares ou os resultados da sua busca.
-  **Gerenciamento de Favoritos:** Adicione ou remova filmes da sua lista de favoritos, com armazenamento local no navegador (**localStorage**).
-  **Detalhes do Filme:** Acesse informações como sinopse, avaliação e imagem do cartaz.
-  **Interface Moderna e Responsiva:** Desenvolvida com **React**, **Bootstrap** e **Styled-Components** para oferecer uma ótima experiência em qualquer dispositivo.
-  **Roteamento:** Navegação fluida entre as páginas utilizando **React Router**.

---

##  Tecnologias Utilizadas

- ⚛️ **React** – Biblioteca para construção da interface.
- 🔗 **React Router DOM** – Roteamento entre páginas.
- 🎨 **Styled-Components** – Estilização de componentes com CSS-in-JS.
- 🎥 **React Icons** – Biblioteca de ícones.
- 🅱️ **Bootstrap** – Layout responsivo e componentes de UI.
- 🌐 **Axios** – Consumo de APIs HTTP.
- 📦 **TMDb API** – Fonte dos dados dos filmes.

---

## Como Obter sua API Key do TMDb 

1. Acesse o site [TMDb](https://www.themoviedb.org/) e crie uma conta (gratuita).
2. No seu perfil, vá até **Configurações > API**.
3. Clique em **Solicitar uma chave de API**.
4. Complete os dados solicitados (nome do app, descrição, URL etc.).
5. Após aprovação, você verá sua **API Key (v3 auth)**.
6. Copie essa chave, pois ela será usada no seu projeto.

---

## Configuração do Projeto

### 1️ Clone o Repositório

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

### 2️ Instale as Dependências

```bash
npm install
```

### 3️ Crie o Arquivo `.env`

Na raiz do projeto, crie um arquivo chamado `.env` e adicione suas chaves:

```env
REACT_APP_API_KEY=SUA_API_KEY
REACT_APP_IMG=https://image.tmdb.org/t/p/w500
REACT_APP_API=https://api.themoviedb.org/3/movie/
REACT_APP_SEARCH=https://api.themoviedb.org/3/search/movie
```

### 4️ Inicie o Projeto

```bash
npm start
```

O projeto estará rodando em:

```
http://localhost:3000
```
---

## Scripts Disponíveis

- `npm start` – Roda o app em modo desenvolvimento.

---

## Observações Importantes

- As informações sobre os filmes são obtidas diretamente da API do **TMDb**.
- A lista de filmes favoritos é salva no navegador do usuário usando **localStorage**, portanto, não é compartilhada entre dispositivos ou navegadores.
- Nunca exponha sua API Key publicamente em repositórios públicos. Adicione o arquivo `.env` no seu `.gitignore`.

## Contato

Desenvolvido por **Leonardo**.  
Email: fonsecaleonardo86@email.com
