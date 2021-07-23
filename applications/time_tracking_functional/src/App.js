import { useContext } from "react";
import { TimersContext } from "./providers/TimersProvider";
import EditableTimerList from "./components/EditableTimerList";
import ToggleableTimerForm from "./components/ToggleableTimerForm";

function App() {
  const { timers } = useContext(TimersContext);

  return (
    <div>
      <div>
        <EditableTimerList
          timers={timers}
          handleSubmitForm={null}
          handleDeleteTimer={null}
        />
        <ToggleableTimerForm />
      </div>
    </div>
  );
}

export default App;
