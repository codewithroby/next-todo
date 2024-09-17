import Link from "next/link";
import * as todos from "~/actions/todo-crud";
import { LINKS } from "~/lib/links";
import { TotalTodosCounter } from "~/components/ui/todo/total-todos-counter";

const Header = async () => {
  const initialTotalTodos = await todos.getTotal().then((data) => {
    return data[0].count;
  });

  return (
    <header className="relative flex justify-center">
      <nav className="fixed top-4 z-10 flex">
        <ul className="flex items-center justify-center gap-4 rounded-full bg-white/75 py-2 pl-4 pr-2 shadow-sm backdrop-blur-sm">
          {LINKS.map((link, index) => (
            <li key={index} className="text-sm uppercase">
              <Link href={link.href} aria-label={link.title}>
                {link.title}
              </Link>
            </li>
          ))}
          <li className="rounded-full bg-black px-2 py-1 text-xs uppercase text-white">
            Total Todos :{" "}
            <TotalTodosCounter initialTotalTodos={initialTotalTodos} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export { Header };
