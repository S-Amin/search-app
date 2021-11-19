import React, { useState } from "react";
import css from "./search.module.css";

interface InputSearchPropsI {
  placeholder?: string;
  onChange: (query: string) => void;
}
const SearchInput: React.FC<InputSearchPropsI> = ({ placeholder, onChange }) => {
  const [query, setQuery] = useState("");
  const clickHandle = (e: any) => {
    const query = e.target.value;
    setQuery(query);
    onChange(query);
  };
  const clear = () => {
    setQuery("");
    onChange("");
  };
  return (
    <div className={css.inputWrapper}>
      <input type="text" className={css.input} placeholder={placeholder} onChange={clickHandle} value={query} />
      {!query ? (
        ""
      ) : (
        <span className={css.closeBtn} onClick={clear}>
          x
        </span>
      )}
    </div>
  );
};

export default SearchInput;
