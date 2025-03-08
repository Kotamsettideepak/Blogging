import React from "react";
import Trending from "../components/Trending";
import SavedBlogs from "../components/SavedBlogs";
import AllBlogs from "../components/AllBlogs";
import { Divider } from "@mui/material";
import UserPreferance from "../components/UserPreferance";
import ExploreByCategories from "../components/ExploreByCategories";
const HomePage = () => {
  return (
    <>
      <div>
        <Trending />
      </div>
      <Divider />
      <div>
        <SavedBlogs />
      </div>
      <Divider />
      <div>
        <UserPreferance />
      </div>
      <Divider />
      <div>
        <AllBlogs />
      </div>
      <Divider />
      <div>
        <ExploreByCategories />
      </div>
    </>
  );
};

export default HomePage;
