import { Todo } from "./Todo";

const TODO_LIST: string[] = [
  "todo 1",
  "todo 2",
  "todo 3",
  "todo 4",
  "todo 5",
  "todo 6",
  "todo 7",
  "todo 8",
  "todo 9",
];

const NoteBook = () => (
  <div className="relative h-[500px] w-full max-w-md rounded-xl bg-black p-4">
    <div className="flex size-full flex-col rounded-md bg-yellow-50">
      <div>1</div>
      <div className="grid flex-1 grid-rows-5">
        {TODO_LIST.map((item, index) =>
          index < 5 ? <Todo key={index} description={item} /> : null,
        )}
      </div>
      <div>3</div>
    </div>
  </div>
);

export { NoteBook };
