import axios from 'axios';
import { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const [dentist, setDentist] = useState({});
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  
  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => {
      setDentist(res.data);

      setTimeout(() => {
        setLoading(false);
      }, 800);
    });
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-100 dark:bg-zinc-950 text-gray-900 dark:text-white">
        <div className="w-96 p-6 rounded-lg shadow-lg bg-white dark:bg-zinc-950 border border-gray-300 dark:border-gray-700 shadow-lg dark:shadow-zinc-800">
          <div className="animate-pulse space-y-4">
            <div className="h-6 bg-gray-300 dark:bg-neutral-900 rounded w-1/2 mx-auto"></div>
            <div className="h-48 bg-gray-300 dark:bg-neutral-900  rounded-lg"></div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-300 dark:bg-neutral-900  rounded"></div>
              <div className="h-4 bg-gray-300 dark:bg-neutral-900  rounded w-3/4"></div>
              <div className="h-4 bg-gray-300 dark:bg-neutral-900  rounded w-1/2"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 dark:bg-zinc-950 text-gray-900 dark:text-white">
      <div className="w-96 p-6 rounded-lg shadow-lg bg-white dark:bg-zinc-950 border border-gray-300 dark:border-gray-700 shadow-lg dark:shadow-zinc-800">
        <h1 className="text-2xl font-bold mb-4 text-center">{dentist.name}</h1>
        <img
          className="w-full h-48 object-cover rounded-lg mb-4"
          src="/images/bestDoctor.jpg"
          alt="Doctor"
        />
        <div className="space-y-2">
          <p className="text-lg">
            <strong>Email:</strong> {dentist.email}
          </p>
          <p className="text-lg">
            <strong>Phone:</strong> {dentist.phone}
          </p>
          <p className="text-lg">
            <strong>Website:</strong> <a href={`http://${dentist.website}`} className="text-blue-500 underline">{dentist.website}</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
