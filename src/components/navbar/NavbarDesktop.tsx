import { shellRouteList, type RouteApp } from "../../routes";
import { Link, useLocation } from "react-router-dom";

export default function NavbarDesktop() {
  const pathname = useLocation();

  return (
    <div className="px-8 h-15 bg-red-700 flex flex-row items-center">
      <div className="flex items-center space-x-6">
        {shellRouteList.map((route: RouteApp) =>
          route.isNavbarNav ? (
            <Link
              to={route.path}
              key={route.path}
              className={`text-gray-100 px-3 py-2 hover:underline ${pathname.pathname === route.path ? "font-bold underline" : ""}`}
            >
              {route.text}
            </Link>
          ) : null,
        )}
      </div>
    </div>
  );
}
