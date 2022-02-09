import { Outlet } from 'react-router-dom';

import { Content } from './styled';

import Header from '@layouts/common/Header';
import Footer from '@layouts/common/Footer';
import { Container } from '@layouts/common';

const MainLayout = () => {
  return (
    <>
      <Header />
      <Content>
        <Container>
          <Outlet />
        </Container>
      </Content>
      <Footer />
    </>
  );
};

export default MainLayout;
