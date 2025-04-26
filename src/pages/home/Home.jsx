import { useState } from 'react';
import CardBreed from '../../components/cardBreed/CardBreed';
import Loading from '../../components/loading/Loading';
import Error from '../../components/error/Error';
import Pagination from '../../components/pagination/Pagination';

const Home = ({ breeds, loading, error }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredBreeds, setFilteredBreeds] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  function searchByName() {
    const filtered = breeds.filter((breed) => breed.name.toLowerCase().includes(searchTerm.toLowerCase()));
    setFilteredBreeds(filtered);
    setCurrentPage(1);
  }
  const breedsToShow = filteredBreeds.length > 0 ? filteredBreeds : breeds;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentBreeds = breedsToShow.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(breedsToShow.length / itemsPerPage);

  return (
    <main className="container">
      <section className="flex flex-col gap-10 pb-[50px]">
        <h2 className="text-[36px] mb-[20px]">Galería de imagenes</h2>
        <div className="flex gap-5  items-center">
          <input className="border rounded-lg p-1" type="text" placeholder="Busca por nombre" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          <button className="cursor-pointer border rounded-lg p-1" onClick={searchByName}>
            Buscar
          </button>
        </div>
        {!error && loading && <Loading />}
        <div className="flex flex-wrap gap-5 container justify-center items-center">
          {error && <Error />}
          {currentBreeds.map((breed) => (
            <CardBreed breed={breed} key={breed.id} />
          ))}
          <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
        </div>
      </section>
    </main>
  );
};

export default Home;
