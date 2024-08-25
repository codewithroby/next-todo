import { NoteBook } from "~/components/todos/NoteBook";

const HomePage = () => (
  <main>
    <section className="flex min-h-[100dvh] items-center justify-center">
      <div className="container flex justify-center">
        <NoteBook />
      </div>
    </section>
  </main>
);

export default HomePage;
