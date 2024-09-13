import Card from "../Components/Card";
import { useGlobalContext } from "../context/Context";

const Favs = () => {
  const { favoriteDentists } = useGlobalContext()
  const favDentists = favoriteDentists()
  
  return (
    <div className="min-h-screen py-8 bg-gray-100 dark:bg-zinc-950 text-black dark:text-white">
      <h1 className="text-3xl font-bold text-center mb-6">Dentistas Favoritos</h1>
      
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-screen-lg mx-auto">
          {favDentists.length > 0 ? (
            favDentists.map((dentist) => (
              <Card
                key={dentist.id}
                id={dentist.id}
                name={dentist.name}
                username={dentist.username}
              />
            ))
          ) : (
            <p className="col-span-full text-center text-xl">No hay dentistas favoritos aún.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Favs;
