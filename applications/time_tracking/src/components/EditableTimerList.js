import React, { Component } from "react";
import EditableTimer from "./EditableTimer";

export default class EditableTimerList extends Component {
  render() {
    const timers = this.props.timers.map((timer) => (
      <EditableTimer
        key={timer.id}
        id={timer.id}
        title={timer.title}
        project={timer.project}
        handleSubmitForm={this.props.handleSubmitForm}
        handleDeleteTimer={this.props.handleDeleteTimer}
      />
    ));
    return <div id="timers">{timers}</div>;
  }
}
