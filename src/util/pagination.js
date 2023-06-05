
export const paginationLogic = (currentPage, residents) => {

  if(!residents){
    return {
      pages: [1],
      residentsInPage: []
    }
  }



  const RESIDENTS_PER_PAGE = 6

  const totalPages = Math.ceil(residents.length / RESIDENTS_PER_PAGE)


  const SliceStart = (currentPage - 1) * RESIDENTS_PER_PAGE
  const SliceEnd = SliceStart + RESIDENTS_PER_PAGE
  const residentsInPage = residents.slice(SliceStart, SliceEnd)

  const pages = []
  

  for (let i = 1; i <= totalPages; i++){
    pages.push(i)
  }

  return {
    residentsInPage,
    pages
  }
}