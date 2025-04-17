import { useNavigate } from 'react-router-dom';

const CardBreed = ({ breed }) => {
  const navigate = useNavigate();

  const navigateDetail = () => {
    navigate(`/breed/${breed.id}`);
  };

  return (
    <div onClick={navigateDetail} className="w-[300px] h-[300px] border p-2 rounded-lg cursor-pointer" key={breed.id}>
      <div className="w-full h-[250px]">
        <img className="w-full h-full object-fill rounded-lg" src={breed.image?.url} alt={breed.name} width={200} />
      </div>
      <p className="text-center mt-[2px]">{breed.name}</p>
    </div>
  );
};

export default CardBreed;
