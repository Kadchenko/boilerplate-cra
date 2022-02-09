import { NavLink } from 'react-router-dom';

import { Container } from '@layouts/common';

const NotFound = () => {
  return (
    <Container>
      <NavLink to="/">go home</NavLink>
      <br />
      <br />
      <h1>not found 404</h1>
    </Container>
  );
};

export default NotFound;
