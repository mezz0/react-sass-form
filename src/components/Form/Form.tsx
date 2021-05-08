import React, { useState } from "react";
import styled from "styled-components";
import Logo from '../../assets/Form/Logo.svg'

import './index.scss'

const Wrapper = styled.div`
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

interface WithPRops {
  
}

const NavBar: React.FC<WithPRops> = () => {
  const [ loading, setLoading ] = useState<Boolean>(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    
    // fetch('../api/sign-in', 
    //   {
    //     body: JSON.stringify({
    //       emailAddress: e.target.email.value,
    //     }),
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     method: 'POST'
    //   }
    // ).then(
    //   (res: any) => console.log(res)
    // )
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
        <input id='email' type='email' required defaultValue='mehul1226@hotmail.com'></input>
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
