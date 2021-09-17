import React from 'react';
import ReactDOM from 'react-dom';

const arr = ['a', 'b', 'c', 'd', 'e'];
const arr1 = [<p>a</p>, <p>b</p>, <p>c</p>, <p>d</p>, <p>e</p>];
const App = () => {
  return (
    <div>
      <div title='arr'>
        <h1>Print array</h1>
        {arr.map(item => (
          <p>{item}</p>
        ))}
      </div>
      <div title='arr1'>
        <h1>Print array1</h1>
        {arr1.map(item => (
          <p>{item}</p>
        ))}
      </div>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById('root'));
