import React from 'react';
import UserSelectContainer from './UserSelectPage/containers/UserSelectContainer.js';

import './App.css';

function App() {

    const travellers = [{name: "Steve"},{name: "Sam"}];

  return (
      <UserSelectContainer travellers={travellers}/>
  );
}

export default App;
