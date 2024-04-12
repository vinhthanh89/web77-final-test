import { useState } from "react";
import { FaRegCheckCircle, FaRegCircle } from "react-icons/fa";

const TodoList = ({ task, handleIsComplete, NotFinishTask }) => {
  const [showNotFinish, setShowNotFinish] = useState(false);

  const renderNotFinishTask = NotFinishTask.map((item) => {
    return (
      <div
        className={`todo-item-container ${item.isCompleted ? "done" : ""}`}
        key={item.id}
      >
        {item.isCompleted ? (
          <FaRegCheckCircle
            onClick={() => handleIsComplete(item.id)}
            color="#9a9a9a"
            className="item-done-button"
          />
        ) : (
          <FaRegCircle
            onClick={() => handleIsComplete(item.id)}
            className="item-done-button"
            color="#9a9a9a"
          />
        )}
        <div className="item-title">{item.task}</div>
      </div>
    );
  });

  const renderAllTask = task.map((item) => {
    return (
      <div
        className={`todo-item-container ${item.isCompleted ? "done" : ""}`}
        key={item.id}
      >
        {item.isCompleted ? (
          <FaRegCheckCircle
            onClick={() => handleIsComplete(item.id)}
            color="#9a9a9a"
            className="item-done-button"
          />
        ) : (
          <FaRegCircle
            onClick={() => handleIsComplete(item.id)}
            className="item-done-button"
            color="#9a9a9a"
          />
        )}
        <div className="item-title">
          {item.task} -  {item.deadline} day left
        </div>
      </div>
    );
  });

  return (
    <div className="todo-list-container">
      {showNotFinish ? (
        <>
          <div className="todo-item-container">
            <FaRegCheckCircle
              onClick={() => setShowNotFinish(!showNotFinish)}
              className="item-done-button"
              color="#9a9a9a"
            />
            <div className="item-title">Not Finish Task</div>
          </div>
          {renderNotFinishTask}
        </>
      ) : (
        <>
          <div className="todo-item-container">
            <FaRegCircle
              onClick={() => setShowNotFinish(!showNotFinish)}
              className="item-done-button"
              color="#9a9a9a"
            />
            <div className="item-title">All Task</div>
          </div>
          {renderAllTask}
        </>
      )}
    </div>
  );
};

export default TodoList;
