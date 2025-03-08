import axios from "axios";

const baseUrl = process.env.REACT_APP_BASE_URL;

const api = axios.create({
  baseURL: baseUrl,
  //   withCredentials: true,
});

const fetchTrendingBlogs = async (page = 1, limit = 6) => {
  try {
    const res = await api.get(`/blogs?_page=${page}&_limit=${limit}`);
    console.log("res is displaying ", res);
    // const blogs = res.data.filter((blog) => blog.trending === true);
    return res.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const fetchSavedBlogs = async () => {
  try {
    const res = await api.get("/blogs");
    return res.data;
  } catch (error) {
    return [];
  }
};

export { fetchTrendingBlogs, fetchSavedBlogs };
