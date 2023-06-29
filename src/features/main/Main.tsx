import {useQuery} from "@tanstack/react-query";
import { API } from "../../api/api";
import { CharactersList } from "../characters/CharactersList/CharactersList";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import { returnCharactersArray } from "../../utils/returnCharactersArray";
import {returnTotalPageNumber} from "../../utils/returnTotalPageNumber";
import styles from './Main.module.css'
import {FilterBlock} from "../../components/filterBlock/FilterBlock";

export const Main = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["characters"],
    queryFn: API.getAllCharacters,
  });

  const [page, changePage] = useState(1);

  if (isLoading) return <div>is loading...</div>;

  if (isError) return <div>Error</div>;

  const currentData = returnCharactersArray(data?.data, page);
  const totalPageCount = returnTotalPageNumber(data?.data.length)

    const changePageHandler = (selectedItem: {selected: number}) => {
      changePage(selectedItem.selected+1)
    }

  return (
    <div className={styles.wrapper}>
      <FilterBlock/>
      <div>
        <CharactersList data={currentData} />
        <ReactPaginate
            nextLabel=">"
            onPageChange={changePageHandler}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={totalPageCount}
            previousLabel="<"
            pageClassName={styles.pageItem}
            previousClassName={styles.pageItem}
            nextClassName={styles.pageItem}
            breakLabel="..."
            containerClassName={styles.pagination}
            activeClassName={styles.active}
            renderOnZeroPageCount={null}
        />
      </div>
    </div>
  );
};
