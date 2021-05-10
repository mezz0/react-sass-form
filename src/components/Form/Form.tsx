import React, { useState } from "react";
import styled from "styled-components";
import Logo from '../../assets/Form/Logo.svg'

import './form.scss'

const Wrapper = styled.div`
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

interface WithProps {
  
}

const NavBar: React.FC<WithProps> = () => {
  const [ loading, setLoading ] = useState<Boolean>(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    
    setTimeout(() => {
      setLoading(false);
    }, 2000)
  }

  return (
    <Wrapper id='wrapper'>
      <div id='logocontainer'>
        <img src={Logo} alt='' id='logo' />
        <span>&reg;</span>
      </div>
      <h2 id='title'>Operations Studio</h2>
      <p id='subline'>Please enter your email below</p>
      <StyledForm onSubmit={handleSubmit}>
        <label htmlFor='email'>Email Address</label>
        <input id='email' type='email' required></input>
        <div id='rememberme'>
          <input id='checkbox' type='checkbox' />
          <label htmlFor='checkbox'>Remember this device</label>
        </div>
        {!loading ? (
          <button type='submit' className='submit' >Sign In</button>
        ) : (
          <button type='submit' className='submit' disabled>Loading...</button>
        )}
      </StyledForm>
    </Wrapper>
  );
};

export default NavBar;
