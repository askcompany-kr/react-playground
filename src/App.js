import React from 'react';
import './App.css';
import UseInputContainer from "./components/UseInputContainer";
import UsePromiseContainer from "./components/UsePromiseContainer";
import RootComponent from './react-redux-hooks/components';
import AntdComponent from "./components/AntdComponent";

function App() {
  return (
      <>
          <RootComponent />
          <hr/>
          <AntdComponent />
          <hr/>
          <UseInputContainer />
          <hr/>
          <UsePromiseContainer/>
      </>
  );
}

export default App;
