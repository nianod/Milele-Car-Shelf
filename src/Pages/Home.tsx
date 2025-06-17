import { FaSearch } from "react-icons/fa";

const Home = () => {
  const handleApi = (e: React.FormEvent) => {
    e.preventDefault();
    alert("API Fetched");
  };

  return (
    <div>
      <h2 className="font-bold text-xl m-2">Cars for Hire & Sale</h2>
      <div className="border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded w-[50%] flex justify-between m-auto p-1">
        <input
          className="outline-none focus:ring-2 focus:ring-blue-500 w-full"
          type="text"
          placeholder="Search A Car By Brand or Model"
        />
        <button
          onClick={handleApi}
          className="p-2 bg-gray-400 rounded cursor-pointer flex items-center gap-2 text-white"
        >
          <FaSearch />
          Search
        </button>
      </div>
    </div>
  );
};

export default Home;
