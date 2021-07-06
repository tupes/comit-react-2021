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

  handleCreateTimer = (timerData) => {
    this.handleFormClose();
    this.props.handleSubmitForm(timerData);
  };

  render() {
    if (this.state.isOpen) {
      return (
        <TimerForm
          handleSubmitForm={this.handleCreateTimer}
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
