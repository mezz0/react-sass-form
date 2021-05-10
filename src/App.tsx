import React from "react";
import { Switch } from "react-router";
import { Route, withRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Home from "./pages/Home/Home";
import styled from "styled-components";
import "./App.scss";

const AppWrapper = styled.div`
  width: 100%; height: 100vh;
`

interface WithAppProps {
  location: any;
}

const App: React.FC<WithAppProps> = (props) => {
  const { location } = props;

  return (
    <AppWrapper className="App">
      <HelmetProvider>
        <Switch location={location}>
          <Route exact path="/" component={Home} />
        </Switch>
      </HelmetProvider>
    </AppWrapper>
  );
};

export default withRouter(App);


