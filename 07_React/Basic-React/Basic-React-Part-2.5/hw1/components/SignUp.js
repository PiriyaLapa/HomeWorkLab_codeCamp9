import React from 'react';
import axios from 'axios';
import './signup.css';
class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      state: [],
    };
  }
  onChangeInput = event => {
    const FieldName = event.target.name;
    const FieldValue = event.target.value;
    this.setState({
      [FieldName]: FieldValue,
    });
  };

  onSubmithandle = async event => {
    console.log(this.state);
    event.preventDefault();
    if (this.state.password === this.state.confirmPassword) {
      const response = await axios.post('/api/v1/aauth/signp');
      console.log(response.date);
    } else {
      this.setState((this.state.password = ''));
      console.log('Not Match');
    }
  };

  render() {
    const { email, password, confirmPassword } = this.state;
    return (
      <div className='df jcc'>
        <form className='' onSubmit={this.onSubmithandle}>
          <label htmlFor='' name='email'>
            Email
          </label>
          <input
            type='email'
            required
            name='email'
            value={email}
            onChange={this.onChangeInput}
            placeholder='your Email'
          />
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            value={password}
            onChange={this.onChangeInput}
            placeholder='Passsword'
          />
          <label htmlFor=''>ConfirmPassword</label>
          <input
            type='password'
            name='confirm'
            value={confirmPassword.value}
            onChange={this.onChangeInput}
            placeholder='confirm'
          />
          <input type='submit' value='Login' />
        </form>
      </div>
    );
  }
}
export default SignUp;
