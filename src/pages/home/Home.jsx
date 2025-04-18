import { useEffect, useState } from 'react';
import CardBreed from '../../components/cardBreed/CardBreed';
import Loading from '../../components/loading/Loading';

const Home = ({ breeds, loading }) => {
  return (
    <main className="container">
      <section>
        <h2 className="text-[36px] mb-[20px]">Galería de imagenes</h2>
        {loading && <Loading />}
        <div className="flex flex-wrap gap-5 container justify-center items-center">
          {breeds.map((breed) => (
            <CardBreed breed={breed} key={breed.id} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
