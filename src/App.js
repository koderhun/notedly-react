import React from 'react';
import ReactDOM from 'react-dom';
// Импортируем библиотеки Apollo Client
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
// Импортируем маршруты
import Pages from '/pages';
import GlobalStyle from './components/GlobalStyle.jsx';
// Настраиваем API URI и кэш
const uri = process.env.API_URI;
const cache = new InMemoryCache();
const client = new ApolloClient({
  uri,
  cache,
  connectToDevTools: true,
})

const App = () => {
  return (
    <ApolloProvider client={client}>
      <GlobalStyle />
      <Pages />
    </ApolloProvider>
  );
};
ReactDOM.render(<App />, document.getElementById('root'));