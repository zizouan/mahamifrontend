import { useState, useEffect } from "react";
import { TaskCard } from "./TaskCard";
import "./TaskList.css";
import axios from "axios";

export const TasksList = ({ tasks, handleupdate }) => {
  const [visible, setVisible] = useState(true);

  return (
    <>
      <div className="tasklist">
        {tasks.map((task) =>
          !task.archived ? (
            <TaskCard key={task.id} task={task} handleupdate={handleupdate} />
          ) : null
        )}
      </div>
    </>
  );
};
