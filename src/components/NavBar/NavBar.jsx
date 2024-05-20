import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const NavBar = () => {

    const [open, setOpen] = useState(false);
    const routes = [
      { id: 1, path: "/", name: "Home" },
      { id: 2, path: "/about", name: "About" },
      { id: 3, path: "/contact", name: "Contact" },
      { id: 4, path: "/products", name: "Products" },
      { id: 5, path: "*", name: "NotFound" },
    ];

    return (
      <nav className="text-black p-4 bg-cyan-400">
        <div className="text-2xl md:hidden" onClick={() => setOpen(!open)}>
          {open === true ? (
            <AiOutlineClose></AiOutlineClose>
          ) : (
            <AiOutlineMenu></AiOutlineMenu>
          )}
        </div>
        <ul
          className={`md:flex duration-1000 absolute md:static bg-cyan-400 px-4 ${open ? "top-14" : "-top-60"}`}
        >
          {routes.map((route) => (
            <Link key={route.id} route={route}></Link>
          ))}
        </ul>
      </nav>
    );
};

export default NavBar;