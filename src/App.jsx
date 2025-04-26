import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import BreedDetail from './pages/breedDetail/BreedDetail';
import Header from './components/header/Header';
import { useEffect, useState } from 'react';

function App() {
  const [breeds, setBreeds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const response = await fetch(`https://api.thedogapi.com/v1/breeds?&api_key=${import.meta.env.VITE_API_KEY}`);
        const data = await response.json();
        setBreeds(data);
        setLoading(false);
        setError(null);
      } catch (error) {
        setBreeds([]);
        setError(error);
      }
    };
    fetchBreeds();
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home breeds={breeds} loading={loading} error={error} />} />
        <Route path="/breed/:id" element={<BreedDetail breeds={breeds} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
