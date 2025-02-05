import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import LoginPage from "./layout/LoginPage";
import Signin from "./pages/Signin";
import Register from "./pages/Register";
import RootLayOut from "./layout/RootLayOut";
import Home from "./pages/Home";
function App() {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayOut />}>
        <Route index element={<Home />} />
        <Route path="login" element={<LoginPage />}>
          <Route index element={<Signin />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={route} />;
}

export default App;
