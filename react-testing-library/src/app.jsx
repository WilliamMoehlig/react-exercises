import React from 'react';
import { hot } from 'react-hot-loader/root';
import Alert from './components/alerts/Alert';
import AlertHeader from './components/alerts/AlertHeader';

export function App() {
  return (
    <>
      <h1>Hello from ES2015+</h1>
      <div className="main container-fluid">
        <Alert variant="secondary" dismissible>
          <AlertHeader>Titel</AlertHeader>
          Test
        </Alert>
      </div>
    </>
  );
}

export default hot(App);
