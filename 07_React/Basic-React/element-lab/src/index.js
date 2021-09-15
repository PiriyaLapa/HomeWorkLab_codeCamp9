import React from 'react';
import ReactDOM from 'react-dom';

// const element = <h1>Hello, world</h1>;
const element1 = React.createElement(
  'h1',
  { style: { color: 'green' } },
  'Resume'
);
const element2 = React.createElement(
  'h2',
  { style: { color: 'blue' } },
  'Piriya Lapa Codecamp#9'
);
const element3 = React.createElement(
  'p',
  { style: { color: 'navy' } },
  'I like green color, my height is 170 cm, my weigth is 68, The best preparation for tomorrow is doing your best today.'
);
const App = () => {
  return (
    <div>
      {element1}
      <br />
      {element2}
      <br />
      {element3}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
