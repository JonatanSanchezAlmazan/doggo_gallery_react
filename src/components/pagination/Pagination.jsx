const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
  function goToNextPage() {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }

  function goToPrevPage() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }
  return (
    <div className="flex justify-center items-center gap-5 mt-5  ">
      <button onClick={goToPrevPage} disabled={currentPage === 1} className="border p-2 rounded disabled:opacity-50">
        Anterior
      </button>
      <span className="flex items-center">
        {currentPage} de {totalPages}
      </span>
      <button onClick={goToNextPage} disabled={currentPage === totalPages} className="border p-2 rounded disabled:opacity-50">
        Siguiente
      </button>
    </div>
  );
};

export default Pagination;
