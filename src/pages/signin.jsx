import React, { useEffect } from 'react';
const SignIn = props => {
  useEffect(() => {
    // Обновляем заголовок документа
    document.title = 'Sign In — Notedly';
  });
  return (
    <div>
      <p>Sign up page</p>
    </div>
  );
};
export default SignIn;
