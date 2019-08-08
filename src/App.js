import React from 'react';
import UseInputContainer from "./components/UseInputContainer";
import UsePromiseContainer from "./components/UsePromiseContainer";
import RootComponent from './react-redux-hooks/components';

function App() {
  return (
      <>
          <RootComponent />
          <hr/>
          <UseInputContainer />
          <hr/>
          <UsePromiseContainer/>
      </>
  );
}

export default App;
