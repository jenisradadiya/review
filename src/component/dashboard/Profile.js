import React, { useState, useEffect } from "react";
import { FaUser, FaPhone, FaEnvelope, FaBriefcase, FaLink } from "react-icons/fa";

const Profile = () => {

  const [profileData, setProfileData] = useState({
    name: "",
    mobileNumber: "",
    email: "",
    businessName: "",
    businessLink: "",
  });

  useEffect(() => {
  const fetchProfileData = async () => {
   const fetchedData = {
        name: "XYZ",
        mobileNumber: "8574857485",
        email: "xyz@xyz.com",
        businessName: "ABC Fashion",
        businessLink: "https://abcfashion.com",
      };
      setProfileData(fetchedData);
    };

    fetchProfileData();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 xl:-mt-9">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-3xl">
        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800 mb-1 text-center">
          Profile Information
        </h2>
        <p className="text-gray-500 text-center mb-8">
          You can view your page name, email, mobile number, and other details below.
        </p>

        <div className="space-y-6">
          {/* Page Name */}
          <div>
            <label className="block text-gray-600 font-medium mb-1">
              Name <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center border rounded-lg p-2 bg-gray-50">
              <FaUser className="text-gray-500 mr-3" />
              <input
                type="text"
                value={profileData.name}
                readOnly
                className="flex-1 bg-transparent outline-none text-gray-700"
              />
            </div>
          </div>

          {/* Mobile Number */}
          <div>
            <label className="block text-gray-600 font-medium mb-1">
              Mobile Number <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center border rounded-lg p-2 bg-gray-50">
              <FaPhone className="text-gray-500 mr-3" />
              <input
                type="text"
                value={profileData.mobileNumber}
                readOnly
                className="flex-1 bg-transparent outline-none text-gray-700"
              />
            </div>
          </div>

          {/* Email Address */}
          <div>
            <label className="block text-gray-600 font-medium mb-1">
              Email Address <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center border rounded-lg p-2 bg-gray-50">
              <FaEnvelope className="text-gray-500 mr-3" />
              <input
                type="email"
                value={profileData.email}
                readOnly
                className="flex-1 bg-transparent outline-none text-gray-700"
              />
            </div>
          </div>

          {/* Business Name */}
          <div>
            <label className="block text-gray-600 font-medium mb-1">
              Business Name <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center border rounded-lg p-2 bg-gray-50">
              <FaBriefcase className="text-gray-500 mr-3" />
              <input
                type="text"
                value={profileData.businessName}
                readOnly
                className="flex-1 bg-transparent outline-none text-gray-700"
              />
            </div>
          </div>

          {/* Business Link */}
          <div>
            <label className="block text-gray-600 font-medium mb-1">
              Business Link <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center border rounded-lg p-2 bg-gray-50">
              <FaLink className="text-gray-500 mr-3" />
              <a
                href={profileData.businessLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-blue-600 underline"
              >
                {profileData.businessLink}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
