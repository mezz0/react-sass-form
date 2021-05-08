import React from "react";
import styled from "styled-components";

const Wrapper = styled.nav`
  margin: 0;
  background-color: #00000010;
`;


interface WithPRops {
}
const NavBar: React.FC<WithPRops> = () => {
  return (
    <Wrapper>
      <div>Header</div>
    </Wrapper>
  );
};

export default NavBar;
