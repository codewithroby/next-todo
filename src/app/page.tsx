import { addTodo, updateTodo } from "~/actions/todos";
import { Button } from "~/components/ui/button";

const HomePage = () => (
  <main>
    <section className="flex min-h-[100dvh] items-center justify-center">
      {/* <form action={addTodo}>
        <Button type="submit">Submit</Button>
      </form>
      <form action={updateTodo}>
        <Button type="submit">Update</Button>
      </form> */}
    </section>
  </main>
);

export default HomePage;
