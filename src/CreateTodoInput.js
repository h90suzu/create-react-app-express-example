import React, { Component, PropTypes } from 'react';

const propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

class CreateTodoInput extends Component {

  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };

    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeInput(e) {
    const { value } = e.target;
    this.setState({ value });
  }

  handleSubmit(e) {
    e.preventDefault();

    const { value } = this.state;
    if (!value) {
      alert('入力してください');
      return;
    }

    this.props.handleSubmit(value);
    this.setState({ value: '' });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Input Todo ..."
            value={this.state.value}
            onChange={this.handleChangeInput}
          />
        </form>
      </div>
    );
  }
}

CreateTodoInput.propTypes = propTypes;

export default CreateTodoInput;
