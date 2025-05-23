"use client";

import React, { useState } from "react";
import { FiLock, FiEye, FiEyeOff } from "react-icons/fi";

const Input = ({ label, icon: Icon, type, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="mb-4 w-full h-full bg-center">
      <label className="block text-sm font-medium text-gray-300 mb-1 flex items-center">
        {Icon && <Icon className="mr-2 text-blue-400" />}
        {label}
      </label>
      <div className="relative">
        <input
          type={showPassword ? "text" : type}
          className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          {...props}
        />
        {type === "password" && (
          <button
            type="button"
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-white"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FiEyeOff /> : <FiEye />}
          </button>
        )}
      </div>
    </div>
  );
};

export default function ChangePasswordPage() {
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (formData.newPassword !== formData.confirmPassword) {
      setError("New passwords don't match");
      return;
    }

    if (formData.newPassword.length < 8) {
      setError("New password must be at least 8 characters long");
      return;
    }

    try {
      // Here you would typically make an API call to change the password
      // For now, we'll just simulate a successful password change
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSuccess("Password changed successfully");
      setFormData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
    } catch (err) {
      setError("Failed to change password. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div className="px-6 py-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-blue-400">
              Change Password
            </h2>
            <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center text-2xl text-blue-400">
              <FiLock />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              label="Current Password"
              icon={FiLock}
              name="currentPassword"
              type="password"
              value={formData.currentPassword}
              onChange={handleInputChange}
              required
              placeholder="Enter your current password"
            />
            <Input
              label="New Password"
              icon={FiLock}
              name="newPassword"
              type="password"
              value={formData.newPassword}
              onChange={handleInputChange}
              required
              placeholder="Enter your new password"
            />
            <Input
              label="Confirm New Password"
              icon={FiLock}
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
              placeholder="Confirm your new password"
            />

            {error && <div className="text-red-500 text-sm">{error}</div>}
            {success && <div className="text-green-500 text-sm">{success}</div>}

            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              Change Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
