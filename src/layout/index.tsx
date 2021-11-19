import React, { useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Sidebar from "../components/sidebar";
import Search from "../components/search";
import { fetchData } from "../utils/fetch";
import css from "./layout.module.css";

const Layout: React.FC = () => {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const onChange = (q: string) => setQuery(q);
  const openMenu = () => setOpen(!open);
  return (
    <div className={css.body}>
      <header className={css.headerSection}>
        <Header />
        <button onClick={openMenu} className={css.menuBtn}>
          Menu
        </button>
      </header>
      <div className={css.content}>
        <div className={`${css.sidebar} ${open ? css.open : ""}`}>
          <Sidebar />
        </div>
        <div className={css.main}>
          <div>
            <Search.SearchInput placeholder="search..." onChange={onChange} />
          </div>
          <div>
            <Search.SearchResult fetchData={fetchData} query={query} />
          </div>
        </div>
      </div>
      <footer className={css.footer}>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
