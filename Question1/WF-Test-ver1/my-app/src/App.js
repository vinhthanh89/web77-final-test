import "./styles.css";
import TodoList from "./TodoList";
import TodoListHeader from "./TodoListHeader";
import Form from "./Form";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";



const App = () => {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

const Home = () => {
  const [task, setTask] = useState(
    JSON.parse(localStorage.getItem("taskData")) || []
  );

  useEffect(() => {
    localStorage.setItem("taskData", JSON.stringify(task));
  }, [task]);

  const handleAddTodo = (newtask) => {
    setTask([...task, newtask]);
  };

  const handleIsComplete = (taskId) => {
    setTask((prevTodos) =>
      prevTodos.map((taskItem) =>
        taskItem.id === taskId
          ? { ...taskItem, isCompleted: !taskItem.isCompleted }
          : taskItem
      )
    );
  };

  const NotFinishTask = task.filter((item) => item.isCompleted === false);

  return (
    <div className="App">
      <div className="container">
        <TodoListHeader />
        <TodoList task={task} handleIsComplete={handleIsComplete} NotFinishTask={NotFinishTask} />
        <Form handleAddTodo={handleAddTodo} task={task}  />
      </div>
      <Footer />
    </div>
  );
};

export default App
