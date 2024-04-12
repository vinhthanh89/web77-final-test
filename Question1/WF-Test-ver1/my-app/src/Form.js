import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Form = ({ handleAddTodo, task }) => {
  const today = new Date()
  const futureDate = new Date(today);
  futureDate.setDate(today.getDate() + 60);
  const deadline = Math.ceil((futureDate - today) / (1000 * 60 * 60 * 24));
  const [newTask, setNewTask] = useState({
    id: uuidv4(),
    task: "",
    isCompleted: false,
    deadline: deadline,
  });

  const handleChangeTask = (event) => {
    setNewTask({ ...newTask, task: event.target.value });
  };

  const handleAddNewTask = (event) => {
    event.preventDefault();
    handleAddTodo(newTask);
    setNewTask({
      id: uuidv4(),
      task: "",
      isCompleted: false,
      deadline: deadline,
    });
  };

  return (
    <form onSubmit={handleAddNewTask} className="form">
      <input
        onChange={handleChangeTask}
        value={newTask.task}
        placeholder="Enter task ..."
      />
      <button>Submit</button>
    </form>
  );
};

export default Form;
