import React, { useState, useContext } from "react";
import TimerForm from "./TimerForm";
import { TimersContext } from "../providers/TimersProvider";

export default function ToggleableTimerForm(props) {
  const [isOpen, setIsOpen] = useState(false);
  const { createTimer } = useContext(TimersContext);

  const handleFormOpen = () => {
    setIsOpen(true);
  };

  const handleFormClose = () => {
    setIsOpen(false);
  };

  const handleCreateTimer = (timerData) => {
    handleFormClose();
    createTimer(timerData);
  };

  if (isOpen) {
    return (
      <TimerForm
        handleSubmitForm={handleCreateTimer}
        handleCancel={handleFormClose}
      />
    );
  }
  return (
    <div>
      <button onClick={handleFormOpen}>+</button>
    </div>
  );
}
