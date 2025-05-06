export function useLayout(pathname: string) {
  const routes = [
    {
      path: "/",
      name: "about",
    },
    {
      path: "/resume",
      name: "Resume",
    },
    {
      path: "/portfolio",
      name: "Portfolio",
    },
    {
      path: "/blog",
      name: "Blog",
    },
    {
      path: "/contact",
      name: "Contact",
    },
  ];

  const title = pathname === "/"
        ? "About"
        : pathname === "/resume"
        ? "Resume"
        : pathname === "/contact"
        ? "Contact"
        : pathname === "/portfolio"
        ? "Portfolio"
        : "Blog";
        return{
           title, routes
        }
}
