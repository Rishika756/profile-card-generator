
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UserInputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      location: '',
      bio: '',
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, age, location, bio } = this.state;
    const user = { name, age, location, bio };
    this.props.onSubmit(user);
    this.setState({ name: '', age: '', location: '', bio: '' }); // Clear the form
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={this.state.age}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={this.state.location}
          onChange={this.handleChange}
        />
        <textarea
          name="bio"
          placeholder="Bio"
          value={this.state.bio}
          onChange={this.handleChange}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

UserInputForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default UserInputForm;
