import React, { Component } from "react";
import TimerForm from "./TimerForm";
import Timer from "./Timer";

export default class EditableTimer extends Component {
  state = {
    editFormOpen: false,
  };

  handleFormClose = () => {
    this.setState({ editFormOpen: false });
  };

  handleFormOpen = () => {
    this.setState({ editFormOpen: true });
  };

  handleUpdateTimer = (timerData) => {
    this.handleFormClose();
    this.props.handleSubmitForm(timerData);
  };

  render() {
    if (this.state.editFormOpen) {
      return (
        <TimerForm
          id={this.props.id}
          title={this.props.title}
          project={this.props.project}
          handleSubmitForm={this.handleUpdateTimer}
          handleCancel={this.handleFormClose}
        />
      );
    }
    return (
      <Timer
        id={this.props.id}
        title={this.props.title}
        project={this.props.project}
        elapsed={this.props.elapsed}
        runningSince={this.props.runningSince}
        handleEditForm={this.handleFormOpen}
        handleDeleteTimer={this.props.handleDeleteTimer}
      />
    );
  }
}
