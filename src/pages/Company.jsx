import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner/Spinner';
import NotFound from './NotFound';
import uniqId from 'uniqid'
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Company = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const { loading, setLoading } = useContext(AuthContext)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          import.meta.env.VITE_BACKEND_ENDPOINT + "/companies"
        );
        setData(response.data);
        setLoading(false);
        setFilteredData(response.data);
      } catch (error) {
        setLoading(false);
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const getRandomUnsplashImage = () => {
    return "https://img.freepik.com/free-psd/engraved-black-logo-mockup_125540-223.jpg?w=2000";
  };

  const filterData = (value) => {
    const filtered = data.filter(item =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <div className="mx-auto py-8 md:px-8 px-1">
      <div className="max-w-screen-lg mx-auto mb-6">
        <input
          onChange={(e) => filterData(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          type="text"
          placeholder="Find Company..."
        />
      </div>

      <div className="flex justify-center overflow-x-hidden duration-700">
        {loading ? (
          <Spinner />
        ) : filteredData.length === 0 ? (
          <NotFound />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container">
            {filteredData.map(company => (
              <Link to={company.name}
                key={uniqId()}
                className="bg-white border border-gray-300 rounded-lg shadow-md p-3"
              >
                <h3 className="text-xl font-semibold mb-2">{company.name}</h3>
                <p className="text-gray-600 mb-4">
                  {company.information || "Şirket bilgisi bulunamadı."}
                </p>
                <img
                  src={company.photoUrl}
                  alt={company.name}
                  className="w-full h-40 object-cover rounded-md"
                />
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Company;
