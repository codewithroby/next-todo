import Link from "next/link";
import { LINKS } from "~/lib/links";

const Header = () => (
  <header className="relative flex justify-center">
    <nav className="fixed top-4 z-10 flex items-center justify-center">
      <ul className="flex gap-4 rounded-full bg-white/75 px-4 py-2 shadow-sm backdrop-blur-sm">
        {LINKS.map((link, index) => (
          <li key={index} className="text-sm uppercase">
            <Link href={link.href} aria-label={link.title}>
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

export { Header };
