import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import LoginPage from "./layout/LoginPage";
import Signin from "./pages/signin.jsx";
import Register from "./pages/register.jsx";
import RootLayOut from "./layout/RootLayOut";
import Home from "./pages/HomePage.jsx";
import PreferencesPage from "./pages/Preferences.jsx";
import ContactLayout from "./layout/ContactLayout.jsx";
import ComplaintForm from "./pages/ComplaintForm";
import SocialMedia from "./pages/SocialMedia";
import CreateBlog from "./pages/CreateBlog.jsx";
import Profile from "./pages/Profile.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayOut />}>
        <Route index element={<Home />} />
        <Route path="preferences" element={<PreferencesPage />} />
        <Route path="/login" element={<LoginPage />}>
          <Route index element={<Signin />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="contact" element={<ContactLayout />}>
          <Route path="complaint-form" element={<ComplaintForm />} />
          <Route path="social-media" element={<SocialMedia />} />
        </Route>
        <Route path="create-blog" element={<CreateBlog />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    )
  );

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={route} />
      </QueryClientProvider>
    </>
  );
}

export default App;
