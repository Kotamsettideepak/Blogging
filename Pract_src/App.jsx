import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayOut from "./layout/RootLayOut";
import Home from "./pages/Home";
import ContactLayout from "./layout/ContactLayout";
import ComplaintForm from "./pages/ComplaintForm";
import SocialMedia from "./pages/SocialMedia";
import NotFound from "./pages/NotFound";
function App() {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayOut />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<ContactLayout />}>
          <Route path="complaint-form" element={<ComplaintForm />} />
          <Route path="social-media" element={<SocialMedia />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={route} />;
}

export default App;
