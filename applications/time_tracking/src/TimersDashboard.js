import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import EditableTimerList from "./components/EditableTimerList";
import ToggleableTimerForm from "./components/ToggleableTimerForm";

export default class TimersDashboard extends Component {
  state = {
    timers: [
      {
        title: "Practice squat",
        project: "Gym Chores",
        id: uuidv4(),
        elapsed: 5456099,
        runningSince: Date.now(),
      },
      {
        title: "Bake squash",
        project: "Kitchen Chores",
        id: uuidv4(),
        elapsed: 1273998,
        runningSince: null,
      },
    ],
  };

  handleCreateTimer = ({ id, title, project }) => {
    console.log(
      `Handling submit in TimersDashboard from form with title ${title}`
    );
    const newTimer = { id: id || uuidv4(), title, project };
    const updatedTimers = [...this.state.timers, newTimer];
    console.log(updatedTimers.length);
    this.setState({ timers: updatedTimers });
  };

  handleUpdateTimer = ({ id, title, project }) => {
    console.log(
      `Handling update in TimersDashboard from form with title ${title}`
    );
    const updatedTimers = this.state.timers.map((timer) => {
      return timer.id === id ? { ...timer, title, project } : timer;
    });
    this.setState({ timers: updatedTimers });
  };

  handleDeleteTimer = (id) => {
    const filteredTimers = this.state.timers.filter((timer) => timer.id !== id);
    this.setState({ timers: filteredTimers });
  };

  render() {
    return (
      <div>
        <div>
          <EditableTimerList
            timers={this.state.timers}
            handleSubmitForm={this.handleUpdateTimer}
            handleDeleteTimer={this.handleDeleteTimer}
          />
          <ToggleableTimerForm handleSubmitForm={this.handleCreateTimer} />
        </div>
      </div>
    );
  }
}
