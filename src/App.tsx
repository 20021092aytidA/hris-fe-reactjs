import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { noShellRouteList, shellRouteList, type RouteApp } from "./routes";
import ShellLayout from "./layout/shell/ShellLayout";
import NoShellLayout from "./layout/noShell/NoShellLayout";
// import useAuth from "./hooks/useAuth";

function App() {
  // const { cookie, isAuthenticated } = useAuth();
  // console.log(cookie, isAuthenticated);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<NoShellLayout />}>
          {noShellRouteList.map((route: RouteApp) => (
            <Route path={route.path} element={route.component} />
          ))}
        </Route>
        <Route element={<ShellLayout />}>
          {shellRouteList.map((route: RouteApp) => (
            <Route path={route.path} element={route.component} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
