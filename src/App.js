import React from 'react';

import './styles.css';

const Details = React.lazy(() => import('./Details'));

export const App = () => {
  return (
    <>
      <div className='container'>
        <h1 style={{textAlign: "center", paddingTop: "1em", fontFamily: "monospace", fontWeight: "bold", fontSize: "3em", color: "#bd5734 "}}>React Optimization Code Splitting Components</h1>
        <div className='e6-container' style={{width: "50%", margin: "auto", paddingTop: "2%"}}>
          <div className='e6-content-container'>
            <img src={require('./logo.png')} alt='Restaurant logo' />
            <h1>Your reservation is confirmed.</h1>
          </div>
          <Details />
        </div>
      </div>
      <footer style={{textAlign: "center", paddingTop: "2em", paddingBottom: "2em", fontFamily: "monospace", fontWeight: "bold", fontSize: "2em", color: "#bd5734 "}}>Bucheli Web © 2023</footer>
    </>
  );
};

export default App
