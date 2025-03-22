import { useState, useRef } from "react";
import "./addTask.css";
import axios from "axios";

export const AddTask = ({ tasks, setTasks, handleRefresh }) => {
  const [TaskName, SetTaskName] = useState("");
  const [Progress, SetProgress] = useState(false);
  const tasknameref = useRef("");

  function handleChange(e) {
    SetTaskName(e.target.value);
  }
  function handleDelete() {
    SetTaskName("");
    SetProgress(false);
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/store", {
        id: Math.floor(10000 + Math.random() * 90000),
        title: TaskName,
        completed: Boolean(Progress),
      });
      console.log("Task added:", response.data);
      setTasks([...tasks, response.data.task]);
    } catch (error) {
      console.error("Error adding task:", error);
    }
    handleDelete();
    handleRefresh();
  };
  return (
    <section>
      <form className="taskform" onSubmit={handleSubmit}>
        <label className="tasknamelabel" htmlFor="taskname">
          اضف مهمة جديدة :
        </label>
        <textarea
          name="taskname"
          id="taskname"
          rows="5"
          cols="40"
          className="taskname"
          autoComplete="off"
          placeholder="اكتب مهمتك"
          onChange={handleChange}
          value={TaskName}
          ref={tasknameref}
        />
        <select
          onChange={(e) => SetProgress(e.target.value)}
          name="progress"
          id="progress"
          value={Progress}
        >
          <option value="false">لم تنجز</option>
          <option value="true">تم انجازها</option>
        </select>
        <button className="addtaskbutton" type="Submit">
          حفظ
        </button>
        <button className="addtaskbutton" type="button" onClick={handleDelete}>
          مسح
        </button>
      </form>
    </section>
  );
};
