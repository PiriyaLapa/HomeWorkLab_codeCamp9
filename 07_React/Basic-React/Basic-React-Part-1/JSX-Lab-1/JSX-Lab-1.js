import React from 'react';
import ReactDOM from 'react-dom';

const myComponent = {
  one: function () {
    return <div>one function</div>;
  },
  two: function (prop) {
    return <h2>{prop.name}</h2>;
  },
  three: function (component) {
    return React.createElement('h1', null, { component });
  },
};

const App = () => {
  return (
    <div title='Lab1'>
      <ul>
        <li>{<myComponent.one />}</li>
        <li>{<myComponent.two name='piriya' />}</li>
      </ul>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
