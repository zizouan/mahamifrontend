import { NoteCard } from "./NoteCard";

export const NotesList = () => {
  return (
    <>
      <NoteCard result="sucsess">
        <h3>You Have done this Task</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          eos ratione consectetur voluptatum? Facilis natus inventore, quod
          dolorem blanditiis temporibus.
        </p>
      </NoteCard>
      <NoteCard result="fail">
        <h3>You Need To do this Task</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
      </NoteCard>
    </>
  );
};
