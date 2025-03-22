import "./taskcard.css";
import { useState, useEffect } from "react";
import axios from "axios";

export const TaskCard = ({ task, handleupdate }) => {
  return (
    <div
      className={
        task.completed ? "taskgrid taskCompleted" : "taskgrid taskNotCompleted"
      }
    >
      <div className="cardheader">
        <i
          onClick={() =>
            handleupdate(task.id, task.title, task.completed, !task.archived)
          }
          className="bi bi-archive"
        ></i>
      </div>
      <div
        className="tasktext"
        onClick={() =>
          handleupdate(task.id, task.title, !task.completed, task.archived)
        }
      >
        {task.title}
      </div>
    </div>
  );
};
