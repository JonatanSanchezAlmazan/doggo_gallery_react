import { useNavigate, useParams } from 'react-router-dom';

const BreedDetail = ({ breeds }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const breed = breeds.find((b) => b.id === parseInt(id));

  const backHome = () => {
    navigate('/');
  };
  return (
    <section className=" w-full flex flex-col gap-10 justify-start items-start p-5">
      <button onClick={backHome} className="cursor-pointer border rounded-lg p-1">
        Volver a galería
      </button>
      <div className="border p-2 flex flex-col max-w-[800px] rounded-lg flex flex-col gap-5 m-auto">
        <h1>Nombre: {breed.name}</h1>
        <img src={breed.image?.url} alt={breed.name} />
        <div>
          <p>Grupo: {breed.group}</p>
          <p>Temperamento: {breed.temperament}</p>
          <p>Origen: {breed.origin}</p>
          <p>Esperanza de vida: {breed.life_span}</p>
          <p>Criado para: {breed.bred_for}</p>
        </div>
      </div>
    </section>
  );
};

export default BreedDetail;
