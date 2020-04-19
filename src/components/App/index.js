// == Import npm
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route } from 'react-router';

// == Import
import LogInForm from 'src/components/LogInForm';
import SignUpForm from 'src/components/SignUpForm';

import './styles.css';

// == Composant
const App = () => {
  const dispatch = useDispatch();
  const clickCount = useSelector((state) => state.counter);

  return (
    <div className="app">
      {/* formulaire se connecter */}
      <Route exact path="/">
        <LogInForm />
      </Route>
      {/* formulaire s'inscrire */}
      <Route exact path="/SignUpForm">
        <SignUpForm />
      </Route>
    </div>
  );
};

// == Export
export default App;
