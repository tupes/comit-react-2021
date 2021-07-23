import React from "react";
import EditableTimer from "./EditableTimer";

export default function EditableTimerList(props) {
  const timers = props.timers.map((timer) => (
    <EditableTimer
      key={timer.id}
      id={timer.id}
      title={timer.title}
      project={timer.project}
      handleSubmitForm={props.handleSubmitForm}
      handleDeleteTimer={props.handleDeleteTimer}
    />
  ));
  return <div id="timers">{timers}</div>;
}
