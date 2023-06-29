import {useQuery} from "@tanstack/react-query";
import { API } from "../../api/api";
import { CharactersList } from "../../components/CharactersList/CharactersList";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import { returnCharactersArray } from "../../utils/returnCharactersArray";
import {returnTotalPageNumber} from "../../utils/returnTotalPageNumber";
import styles from './Main.module.css'

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
      debugger
      changePage(selectedItem.selected+1)
    }

  return (
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
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName={styles.pagination}
        activeClassName={styles.active}
        renderOnZeroPageCount={null}
      />
    </div>
  );
};
