import { theme } from 'antd';
import { data } from 'autoprefixer';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import Spinner from '../components/Spinner/Spinner';

const CompanyInfo = () => {
  const params = useParams()
  const [company, setFindData] = useState(null)
  const { loading, setLoading } = useContext(AuthContext)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(import.meta.env.VITE_BACKEND_ENDPOINT + "/companies");
        const finded = response.data?.find(item => item.name === params.id);
        setFindData(finded);
        setLoading(false)
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false)
      }
    };
    fetchData();
  }, [params.id]);

  return (

    company ? 
       <>
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
          <div className="bg-white p-8 rounded shadow-md max-w-md">
            <h1 className="text-2xl font-semibold mb-4">{company.name}</h1>
            <p className="text-gray-600 mb-4">{company.information}</p>
            <p className="text-gray-600 mb-2">
              <strong>Telephone:</strong> {company.telephone}
            </p>
            <p className="text-gray-600 mb-2">
              <strong>CV Email:</strong> {company.cvEmail}
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Address:</strong> {company.address}
            </p>
            <p className="text-gray-600 mb-2">
              <strong>City:</strong> {company.city}
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Created At:</strong> {company.createdAt}
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Field of Activity:</strong> {company.fieldOfActivity}
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Number of Employees:</strong> {company.numberOfEmployees}
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Website:</strong> <a href={company.siteOfCompany}>{company.siteOfCompany}</a>
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Facebook Profile:</strong> <a href={company.facebookProfileLink}>{company.facebookProfileLink}</a>
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Instagram Profile:</strong> <a href={company.instagramProfileLink}>{company.instagramProfileLink}</a>
            </p>
            <p className="text-gray-600 mb-2">
              <strong>LinkedIn Profile:</strong> <a href={company.linkedinProfileLink}>{company.linkedinProfileLink}</a>
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Twitter Profile:</strong> <a href={company.twitterProfileLink}>{company.twitterProfileLink}</a>
            </p>
          </div>
        </div>
      </> : <Spinner/>


  );
};

export default CompanyInfo;
