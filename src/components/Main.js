import { TasksList } from "./TasksList";
import { NotesList } from "./NotesList";
import { AddTask } from "./AddTask";
import { useState, useEffect } from "react";
import axios from "axios";
import { Archive } from "./Archive";
import "./main.css";

export const Main = () => {
  const [tasks, setTasks] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [archived, setArchived] = useState(0);

  const handleRefresh = () => {
    setRefresh((prev) => !prev);
  };

  const handleupdate = (id, title, completed, archived) => {
    /* const newArchived = archived === 1 ? 0 : 1; // or: !archived if using boolean
    const newCompleted = completed === 1 ? 0 : 1;
 */
    axios
      .patch("http://127.0.0.1:8000/api/mytasks", {
        id: id,
        title: title,
        completed: completed,
        archived: archived,
      })
      .then(() => {
        handleRefresh();
      })
      .catch((err) => console.error(err));

    console.log(archived);
  };

  const handledelete = (id) => {
    axios
      .delete(`http://127.0.0.1:8000/api/mytasks/${id}`)
      .then(() => {
        handleRefresh();
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/mytasks")
      .then((response) => setTasks(response.data.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [refresh]);

  return (
    <>
      <div className="container">
        <div className="taskbox">
          <AddTask
            tasks={tasks}
            handleRefresh={handleRefresh}
            setTasks={setTasks}
          />
          <TasksList handleupdate={handleupdate} tasks={tasks} />
        </div>
        <Archive
          refresh={refresh}
          handleupdate={handleupdate}
          handledelete={handledelete}
        />
      </div>
    </>
  );
};
