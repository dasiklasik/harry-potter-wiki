export const returnTotalPageNumber = (itemsCount: number, itemsPerPage: number = 10) => {
    return Math.ceil(itemsCount / itemsPerPage)
}