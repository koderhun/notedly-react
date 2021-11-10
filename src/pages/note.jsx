import React from 'react';
// Импортируем зависимости GraphQL
import { useQuery, gql } from '@apollo/client';
// Импортируем компонент Note
import Note from '../components/Note';

const GET_NOTE = gql`
  query note($id: ID!) {
    note(id: $id) {
      id
      createdAt
      content
      favoriteCount
      author {
        username
        id
        avatar
      }
    }
  }
`;

const NotePage = props => {
  // Сохраняем id из url в виде переменной
  const id = props.match.params.id;
  // Запрашиваем хук, передавая значение id в качестве переменной
  const { loading, error, data } = useQuery(GET_NOTE, { variables: { id } });
  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error! Note not found</p>;
  // Если загрузка данных произошла успешно, отображаем их в UI
  return <Note note={data.note} />;
};

export default NotePage;
