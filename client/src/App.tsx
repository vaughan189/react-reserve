import React from 'react';
import './App.scss';
import Index from "./containers/App/index"
import { withRouter } from 'react-router-dom';

const  App = () => {
  return (
    <Index />
  );
}

export default withRouter(App);
