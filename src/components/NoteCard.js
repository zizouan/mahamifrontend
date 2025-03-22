import { useState } from "react";
export const NoteCard = ({ result, children }) => {
  const [show, setshow] = useState(true);
  return (
    <>
      <div className={show ? "" : "hidden"}>
        <div className={`notecard ${result}`}>
          {children}
          <button
            onClick={() => {
              setshow(!show);
            }}
            className="button"
          >
            Ignore
          </button>
        </div>
      </div>
    </>
  );
};
