import React, { useEffect, useState, useCallback } from "react";
import _ from "lodash";
import Card from "../card";
import { Loading } from "../icon";
import css from "./search.module.css";

const ITEM_PER_PAGE = 10;
interface ResultPropsI {
  fetchData: (query: string, page?: number, perPage?: number) => Promise<any>;
  query: string;
}
const SearchResult: React.FC<ResultPropsI> = ({ fetchData, query }) => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>([]);
  const [page, setPage] = useState(1);
  const getData = (query: string, page: number) => {
    setLoading(true);
    fetchData(query, page, ITEM_PER_PAGE).then((res) => {
      setLoading(false);
      setResult(res.data);
    });
  };

  const debounceFetch = useCallback(_.debounce(getData, 500), []);

  const nextPage = () => setPage(() => page + 1);
  const prePage = () => setPage(() => (page > 1 ? page - 1 : page));

  useEffect(() => {
    debounceFetch(query, page);
  }, [fetchData, query, page]);
  return (
    <div>
      <div className={css.pagination}>
        <button onClick={prePage} disabled={page === 1}>
          {"<"}
        </button>
        <button onClick={nextPage} disabled={result.length < ITEM_PER_PAGE}>
          {">"}
        </button>
      </div>
      <div className={css.header}>
        <div>Name</div>
        <div className={css.subheader}>
          <span>starts</span>
          <span>forks</span>
        </div>
      </div>

      {loading ? (
        <div className={css.loading}>
          <Loading />
        </div>
      ) : (
        result.map((item: any) => (
          <Card
            title={item.name}
            repoLink={item.repository_url}
            link={item.homepage}
            desc={item.description}
            stars={item.stars}
            forks={item.forks}
          />
        ))
      )}
    </div>
  );
};

export default SearchResult;
