import { Alert } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function UserProfile({ success }) {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("user"));
    const token = JSON.parse(localStorage.getItem("token"));
    const [alert, setAlert] = useState(false)
    useEffect(() => {
        if (!user) {
            navigate("/");
        }
    }, [success]);

    const [isEditMode, setIsEditMode] = useState(false);
    const [updatedUser, setUpdatedUser] = useState({
        city: user.city,
        confirmPassword: user.confirmPassword,
        dateOfBirth: user.dateOfBirth,
        email: user.email,
        gender: user.gender,
        name: user.name,
        password: user.password,
        phone: user.phone,
        photoUrl: null,
        surname: user.surname
    });

    const handleEditClick = () => {
        setIsEditMode(true);
    };

    const handleUpdateClick = async () => {
        const apiUrl = import.meta.env.VITE_BACKEND_ENDPOINT;

        try {
            console.log(updatedUser);
            const response = await axios.put(
                `${apiUrl}/users`,
                updatedUser,
                {
                    headers: {
                        Authorization: token,
                        "Content-type": "application/json; charset=UTF-8"
                    }
                }
            );
            console.log("User updated");
            setAlert(true)
            localStorage.setItem("user" , JSON.stringify(updatedUser))
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
                                    src={updatedUser.photoUrl ? updatedUser.photoUrl : "https://www.pngmart.com/files/22/User-Avatar-Profile-PNG-Isolated-Transparent-Picture.png"}
                                    alt="avatar"
                                    className="rounded-full w-36 mx-auto p-2"
                                />
                                <div className="flex justify-center space-x-1 mb-2">
                                    <button className="bg-slate-500  text-white py-2 px-4 rounded">
                                        {user.name + "  "}  
                                        {user.surname}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-8">
                        <div className="mb-4">
                            <div className="bg-white p-6 rounded shadow-md">
                                <form>
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
                                        onClick={isEditMode ? handleUpdateClick : handleEditClick}
                                        disabled={isEditMode && !user}
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
