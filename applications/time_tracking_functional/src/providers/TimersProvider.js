import React, { useState, createContext } from "react";
import { v4 as uuidv4 } from "uuid";

export const TimersContext = createContext();

export default function TimersProvider({ children }) {
  const [timers, setTimers] = useState([
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
  ]);

  const createTimer = ({ id, title, project }) => {
    const newTimer = { id: id || uuidv4(), title, project };
    const updatedTimers = [...timers, newTimer];
    setTimers(updatedTimers);
  };

  return (
    <TimersContext.Provider value={{ timers, createTimer }}>
      {children}
    </TimersContext.Provider>
  );
}
