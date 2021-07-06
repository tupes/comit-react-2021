import React, { Component } from "react";
import TimerForm from "./TimerForm";

export default class ToggleableTimerForm extends Component {
  state = {
    isOpen: false,
  };

  handleFormOpen = () => {
    this.setState({ isOpen: true });
  };

  handleFormClose = () => {
    this.setState({ isOpen: false });
  };

  render() {
    if (this.state.isOpen) {
      return (
        <TimerForm
          handleSubmitForm={this.props.handleSubmitForm}
          handleCancel={this.handleFormClose}
        />
      );
    }
    return (
      <div>
        <button onClick={this.handleFormOpen}>+</button>
      </div>
    );
  }
}
