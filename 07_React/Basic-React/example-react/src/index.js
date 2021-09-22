import React from 'react';
import ReactDOM from 'react-dom';

class Acomponent extends React.Component {
  constructor(props) {
    super(props);
    this.surname = 'lapa';
  }
  render() {
    return (
      <div>
        <h1>A Component {this.props.nameprops}</h1>
        <Bcomponent test={this.props.nameprops} />
      </div>
    );
  }
}
class Bcomponent extends React.Component {
  render() {
    return (
      <div>
        <h2>B component</h2>
        <h2>{this.props.test}</h2>
        <Ccomponent test={this.props.test} />
      </div>
    );
  }
}
class Ccomponent extends React.Component {
  render() {
    return (
      <div>
        <h4>{this.props.test}</h4>
        <h3>{this.name}</h3>
      </div>
    );
  }
}
class App extends React.Component {
  showName = () => {
    return <div>MercedesBenz</div>;
  };
  render() {
    return (
      <div>
        Hello world
        <Acomponent nameprops={this.showName()} />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('root'));
