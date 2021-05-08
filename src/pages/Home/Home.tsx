import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet-async";
import Form from '../../components/Form/Form'

import './index.scss';

const Container = styled.div`
  height: 100vh;
  display: flex;
`;

interface WithProps {
  props: any
}
const Home: React.FC<WithProps> = (props) => {
  return (
    <Container id='home'>
      <Helmet>
        <title>Home: Sign In</title>
      </Helmet>
      <Form />
    </Container>
  );
};

export default Home;


