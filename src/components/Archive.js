import { useState, useEffect } from "react";
import "./Archive.css";
import axios from "axios";

export const Archive = ({ refresh, handleupdate, handledelete }) => {
  const [archive, setArchive] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/mytasks")
      .then((response) => {
        if (JSON.stringify(archive) !== JSON.stringify(response.data.data)) {
          setArchive(response.data.data);
        }
      })
      .catch((error) => console.error(error));
  }, [refresh]); // ✅ Prevents infinite re-renders

  return (
    <div className="archive">
      <i className="bi bi-archive"></i> الارشيف
      {archive.map((task) =>
        task.archived ? (
          <div key={task.id} className="task-box">
            <div className="archivedtext">{task.title}</div>
            <div className="archivedlogo">
              <i
                onClick={() => handledelete(task.id)}
                className="bi bi-trash"
              ></i>
              <i
                onClick={() =>
                  handleupdate(
                    task.id,
                    task.title,
                    task.completed,
                    !task.archived
                  )
                }
                className="bi bi-skip-start-circle-fill"
              ></i>
            </div>
          </div>
        ) : null
      )}
    </div>
  );
};
