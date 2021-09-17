import React from 'react';
import ReactDOM from 'react-dom';

const arr = ['a', 'b', 'c', 'd', 'e'];
const nonKey = arr.map(item => <li>{item}</li>);
const haveKey = arr.map(item => <li key={item}>{item}</li>);

const App = () => {
  return (
    <div>
      <h1>List and Key in React Lab 1</h1>
      <h3>Non key in</h3>
      <p title='NonKey'>{nonKey}</p>{' '}
      {/** Warning: Each child in a list should have a unique "key" prop. */}
      <h3>Have key in</h3>
      <p title='haveKey'>{haveKey}</p> {/** จะไม่ show Warning */}
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById('root'));
