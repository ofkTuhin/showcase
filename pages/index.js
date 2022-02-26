import Layout from "../components/Layout/Layout";
import MainPage from "../components/MainPage/MainPage";
import Sidebar from "../components/SideBar/Sidebar";
import { getData } from "../lib/data";
import { useState, useEffect } from "react";
import ThemeData from "../components/FilterTheme/ThemeData";

export default function Home({ post }) {
  const [theme, setTheme] = useState(null);
  const [search, setSearch] = useState("");
  const [select, setSelect] = useState(false);
  const [filter, setFilter] = useState([]);
  const [posts, setPosts] = useState([]);
  // sidebar functionality
  const currentDate = new Date().getDate();
  const handleInput = (themeName) => {
    setTheme(themeName);

    setSelect(!select);
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    setSearch("");
  };

  const handleSearch = (searchData) => {
    setSearch(searchData);
  };
  // mainPage functionality
  useEffect(() => {
    const filterByTheme = post.filter((data) => data.themeName == theme);
    console.log(filterByTheme.length);
    setFilter(filterByTheme);
    const searchTheme = post.filter((val) => {
      if (search === "") {
        return "";
      } else if (val.themeName?.toLowerCase().includes(search.toLowerCase())) {
        return val;
      } else if (val.category?.toLowerCase().includes(search.toLowerCase())) {
        return val;
      }
    });
    if (searchTheme.length) {
      setPosts(searchTheme);
    } else if (filterByTheme.length != 0) {
      setPosts(filterByTheme);
    } else {
      if (theme == "all") {
        setPosts(post);
      } else {
        setPosts(post);
      }
    }
  }, [post, theme, search]);

  const handleFilter = (e) => {
    console.log(e);
    setSelect(false);
    const dateFilter = posts.filter(
      (d) => currentDate - new Date(d.updateDate).getDate() <= e
    );
    if (e == "all") {
      if (filter.length) {
        setPosts(filter);
      } else {
        setPosts(post);
      }
    } else {
      setPosts(dateFilter);
    }
    console.log(posts);
  };

  return (
    <Layout>
      <div className="flex flex-wrap">
        <Sidebar
          post={post}
          handleInput={handleInput}
          handleSearch={handleSearch}
        ></Sidebar>

        <div className="w-2/3">
          <ThemeData
            posts={posts}
            handleFilter={handleFilter}
            select={select}
            themeName={theme}
          ></ThemeData>
          <MainPage post={posts}></MainPage>
        </div>
      </div>
    </Layout>
  );
}
export const getServerSideProps = async () => {
  const allData = await getData();

  return {
    props: {
      post: allData,
    },
  };
};
