import Card from '../Components/Card';
import { useGlobalContext } from '../context/Context';

const Home = () => {
  const { state } = useGlobalContext();
  const responseData = state.responseData;

  return (
    <main className="min-h-screen py-8  dark:bg-zinc-950 dark:text-white bg-gray-100 text-black">
      <h1 className="text-3xl font-bold text-center mb-6">¡Bienvenido!</h1>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-screen-lg mx-auto">
          {responseData.map((medi) => (
            <Card key={medi.id} id={medi.id} name={medi.name} username={medi.username} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
