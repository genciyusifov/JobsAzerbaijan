import { Alert } from 'antd';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

function UserProfile({ success }) {
    const navigate = useNavigate();

    let user ; 
    useEffect(()=>{
        user = JSON.parse(localStorage.getItem("user"));
    },[])
    const company = JSON.parse(localStorage.getItem("company"));
    const token = JSON.parse(localStorage.getItem("token"));
    const {stat,setStat} = useContext(AuthContext) 
    const [alert, setAlert] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);

    let initialUser = {};

    if (user) {
        initialUser = { ...user };
    } else if (company) {
        initialUser = { ...company };
    }

    const [updatedUser, setUpdatedUser] = useState({
        ...initialUser,
        password: '',
        confirmPassword: ''
    });

    useEffect(() => {
        if (!user && !company) {
            navigate("/");
        }
    }, [success]);

    const handleEditClick = () => {
        setIsEditMode(true);
    };

    const handleUpdateClick = async () => {
        const apiUrl = import.meta.env.VITE_BACKEND_ENDPOINT;
        let param = user ? "users" : company ? "companies" : null

        try {
            console.log(updatedUser);
            const response = await axios.put(
                `${apiUrl}/${param}`,
                updatedUser,
                {
                    headers: {
                        Authorization: token,
                    }
                }
            );
            setStat(!stat)
            console.log("User updated", response);
            setAlert(true);
            if(user) {
             localStorage.setItem("user", JSON.stringify(updatedUser))  
            }else {
                localStorage.setItem("company", JSON.stringify(updatedUser))
            }
   
            setIsEditMode(false);
        } catch (error) {
            console.error("Error updating user:", error);
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUpdatedUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };
    return (
        <section className="bg-gray-200 flex flex-wrap items-center justify-center">
            <div className="container py-5">
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
                    <div className="lg:col-span-4">
                        <div className="mb-4">
                            <div className="text-center">
                                <img
                                    src={updatedUser.photoUrl ? user ? updatedUser.photoUrl : "https://www.pngmart.com/files/22/User-Avatar-Profile-PNG-Isolated-Transparent-Picture.png" :
                                "https://www.yesenergy.com/hs-fs/hubfs/Yes-Energy-Logo-S(Dark).png?width=3000&name=Yes-Energy-Logo-S(Dark).png"
                                }
                                    alt="avatar"
                                    className="rounded-full w-36 mx-auto p-2"
                                />
                                <div className="flex justify-center space-x-1 mb-2">
                                    <button className="bg-slate-500  text-white py-2 px-4 rounded">
                                        {updatedUser.name}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-8">
                        <div className="mb-4">
                            <div className="bg-white p-6 rounded shadow-md">
                                <form>
                                    {
                                        user ? (
                                            <>
                                                <div className="mb-3">
                                                    <label htmlFor="city" className="block text-gray-600 font-semibold mb-2">City</label>
                                                    <input
                                                        type="text"
                                                        id="city"
                                                        name="city"
                                                        className="w-full border rounded p-2"
                                                        value={updatedUser.city}
                                                        onChange={handleInputChange}
                                                        disabled={!isEditMode}
                                                    />
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="gender" className="block text-gray-600 font-semibold mb-2">Gender</label>
                                                    <input
                                                        type="text"
                                                        id="gender"
                                                        name="gender"
                                                        className="w-full border rounded p-2"
                                                        value={updatedUser.gender}
                                                        onChange={handleInputChange}
                                                        disabled={!isEditMode}
                                                    />
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="name" className="block text-gray-600 font-semibold mb-2">Name</label>
                                                    <input
                                                        type="text"
                                                        id="name"
                                                        name="name"
                                                        className="w-full border rounded p-2"
                                                        value={updatedUser.name}
                                                        onChange={handleInputChange}
                                                        disabled={!isEditMode}
                                                    />
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="surname" className="block text-gray-600 font-semibold mb-2">Surname</label>
                                                    <input
                                                        type="text"
                                                        id="surname"
                                                        name="surname"
                                                        className="w-full border rounded p-2"
                                                        value={updatedUser.surname}
                                                        onChange={handleInputChange}
                                                        disabled={!isEditMode}
                                                    />
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="phone" className="block text-gray-600 font-semibold mb-2">Phone</label>
                                                    <input
                                                        type="tel"
                                                        id="phone"
                                                        name="phone"
                                                        className="w-full border rounded p-2"
                                                        value={updatedUser.phone}
                                                        onChange={handleInputChange}
                                                        disabled={!isEditMode}
                                                    />
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="dateOfBirth" className="block text-gray-600 font-semibold mb-2">Date of Birth</label>
                                                    <input
                                                        type="datetime-local"
                                                        id="dateOfBirth"
                                                        name="dateOfBirth"
                                                        className="w-full border rounded p-2"
                                                        value={updatedUser.dateOfBirth}
                                                        onChange={handleInputChange}
                                                        disabled={!isEditMode}
                                                    />
                                                </div>
                                            </>
                                        ) : company ? (
                                            <>
                                                <div className="mb-3">
                                                    <label htmlFor="address" className="block text-gray-600 font-semibold mb-2">Address</label>
                                                    <input
                                                        type="text"
                                                        id="address"
                                                        name="address"
                                                        className="w-full border rounded p-2"
                                                        value={updatedUser.address}
                                                        onChange={handleInputChange}
                                                        disabled={!isEditMode}
                                                    />
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="city" className="block text-gray-600 font-semibold mb-2">City</label>
                                                    <input
                                                        type="text"
                                                        id="city"
                                                        name="city"
                                                        className="w-full border rounded p-2"
                                                        value={updatedUser.city}
                                                        onChange={handleInputChange}
                                                        disabled={!isEditMode}
                                                    />
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="cvEmail" className="block text-gray-600 font-semibold mb-2">CV Email</label>
                                                    <input
                                                        type="text"
                                                        id="cvEmail"
                                                        name="cvEmail"
                                                        className="w-full border rounded p-2"
                                                        value={updatedUser.cvEmail}
                                                        onChange={handleInputChange}
                                                        disabled={!isEditMode}
                                                    />
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="facebookProfileLink" className="block text-gray-600 font-semibold mb-2">Facebook Profile Link</label>
                                                    <input
                                                        type="text"
                                                        id="facebookProfileLink"
                                                        name="facebookProfileLink"
                                                        className="w-full border rounded p-2"
                                                        value={updatedUser.facebookProfileLink}
                                                        onChange={handleInputChange}
                                                        disabled={!isEditMode}
                                                    />
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="fieldOfActivity" className="block text-gray-600 font-semibold mb-2">Field of Activity</label>
                                                    <input
                                                        type="text"
                                                        id="fieldOfActivity"
                                                        name="fieldOfActivity"
                                                        className="w-full border rounded p-2"
                                                        value={updatedUser.fieldOfActivity}
                                                        onChange={handleInputChange}
                                                        disabled={!isEditMode}
                                                    />
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="foundationDate" className="block text-gray-600 font-semibold mb-2">Foundation Date</label>
                                                    <input
                                                        type="date"
                                                        id="foundationDate"
                                                        name="foundationDate"
                                                        className="w-full border rounded p-2"
                                                        value={updatedUser.foundationDate}
                                                        onChange={handleInputChange}
                                                        disabled={!isEditMode}
                                                    />
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="information" className="block text-gray-600 font-semibold mb-2">Information</label>
                                                    <input
                                                        type="text"
                                                        id="information"
                                                        name="information"
                                                        className="w-full border rounded p-2"
                                                        value={updatedUser.information}
                                                        onChange={handleInputChange}
                                                        disabled={!isEditMode}
                                                    />
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="instagramProfileLink" className="block text-gray-600 font-semibold mb-2">Instagram Profile Link</label>
                                                    <input
                                                        type="text"
                                                        id="instagramProfileLink"
                                                        name="instagramProfileLink"
                                                        className="w-full border rounded p-2"
                                                        value={updatedUser.instagramProfileLink}
                                                        onChange={handleInputChange}
                                                        disabled={!isEditMode}
                                                    />
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="linkedinProfileLink" className="block text-gray-600 font-semibold mb-2">LinkedIn Profile Link</label>
                                                    <input
                                                        type="text"
                                                        id="linkedinProfileLink"
                                                        name="linkedinProfileLink"
                                                        className="w-full border rounded p-2"
                                                        value={updatedUser.linkedinProfileLink}
                                                        onChange={handleInputChange}
                                                        disabled={!isEditMode}
                                                    />
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="name" className="block text-gray-600 font-semibold mb-2">Name</label>
                                                    <input
                                                        type="text"
                                                        id="name"
                                                        name="name"
                                                        className="w-full border rounded p-2"
                                                        value={updatedUser.name}
                                                        onChange={handleInputChange}
                                                        disabled={!isEditMode}
                                                    />
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="numberOfEmployees" className="block text-gray-600 font-semibold mb-2">Number of Employees</label>
                                                    <input
                                                        type="number"
                                                        id="numberOfEmployees"
                                                        name="numberOfEmployees"
                                                        className="w-full border rounded p-2"
                                                        value={updatedUser.numberOfEmployees}
                                                        onChange={handleInputChange}
                                                        disabled={!isEditMode}
                                                    />
                                                </div>
                                            </>
                                        ) : null
                                    }
                                    <div className="mb-3">
                                        <label htmlFor="email" className="block text-gray-600 font-semibold mb-2">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="w-full border rounded p-2"
                                            value={updatedUser.email}
                                            onChange={handleInputChange}
                                            disabled={!isEditMode}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="block text-gray-600 font-semibold mb-2">Password</label>
                                        <input
                                            type="password"
                                            id="password"
                                            name="password"
                                            className="w-full border rounded p-2"
                                            value={updatedUser.password}
                                            onChange={handleInputChange}
                                            disabled={!isEditMode}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="confirmPassword" className="block text-gray-600 font-semibold mb-2">Confirm Password</label>
                                        <input
                                            type="password"
                                            id="confirmPassword"
                                            name="confirmPassword"
                                            className="w-full border rounded p-2"
                                            value={updatedUser.confirmPassword}
                                            onChange={handleInputChange}
                                            disabled={!isEditMode}
                                        />
                                    </div>
                                    <button
                                        type="button"
                                        className="bg-blue-500 text-white py-2 px-4 rounded"
                                        onClick={isEditMode ?  handleUpdateClick : handleEditClick}
                                        // disabled={isEditMode && !user || !company}
                                    >
                                        {isEditMode ? 'Update' : 'Edit'}
                                    </button>
                                    <div className='mt-2'>
                                        {alert && <Alert message="Succes , updating profile" type="success" />}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default UserProfile;
