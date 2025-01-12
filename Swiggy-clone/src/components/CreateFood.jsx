import React, { useState } from "react";
import { app } from "../firebase/firebase";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";

const FoodForm = () => {
  const [foodData, setFoodData] = useState({
    name: "",
    description: "",
    price: 0,
    imageUrl: "",
    isVeg: true,
    type: "",
    restaurantId: "",
  });

  const [file, setFile] = useState(null);

  // Handle text inputs
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFoodData((prevData) => ({
      ...prevData,
      [name]: name === "isVeg" ? value === "true" : value, // Parse `isVeg` as boolean
    }));
  };

  // Handle file input
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const storeImage = async (file) => {
    return new Promise((resolve, reject) => {
      const storage = getStorage(app);
      const fileName = new Date().getTime() + file.name;
      const storageRef = ref(storage, `food/` + fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Upload is ${progress}% done`);
        },
        (error) => {
          reject(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            resolve(downloadURL);
          });
        }
      );
    });
  };

  // Handle form submission
  const handleSubmit = async () => {
    if (file) {
      try {
        const url = await storeImage(file);
        const updatedFoodData = { ...foodData, imageUrl: url };

        const response = await fetch("http://localhost:4000/food/createFood", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedFoodData),
        });

        const data = await response.json();

        if (response.ok) {
          console.log("Food item created successfully:", data);
          alert("Food item created successfully!");
        } else {
          console.error("Failed to create food item:", data);
          alert("Failed to create food item.");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("An error occurred.");
      }
    } else {
      alert("Please select an image for the food item.");
    }
  };

  return (
    <form className="space-y-4">
      <div>
        <label
          htmlFor="name"
          className="block text-sm p-1 font-medium text-gray-700"
        >
          Food Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter the food name"
          value={foodData.name}
          onChange={handleInputChange}
          autoComplete="off"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
      </div>
      <div>
        <label
          htmlFor="description"
          className="block text-sm p-1 font-medium text-gray-700"
        >
          Description
        </label>
        <textarea
          name="description"
          id="description"
          placeholder="Enter the food description"
          value={foodData.description}
          onChange={handleInputChange}
          autoComplete="off"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
        ></textarea>
      </div>
      <div>
        <label
          htmlFor="price"
          className="block text-sm p-1 font-medium text-gray-700"
        >
          Price
        </label>
        <input
          type="number"
          name="price"
          id="price"
          placeholder="Enter the price"
          value={foodData.price}
          onChange={handleInputChange}
          autoComplete="off"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
      </div>
      <div>
        <label
          htmlFor="isVeg"
          className="block text-sm p-1 font-medium text-gray-700"
        >
          Vegetarian
        </label>
        <select
          name="isVeg"
          id="isVeg"
          value={foodData.isVeg}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
        >
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
      </div>
      <div>
        <label
          htmlFor="type"
          className="block text-sm p-1 font-medium text-gray-700"
        >
          Food Type
        </label>
        <input
          type="text"
          name="type"
          id="type"
          placeholder="Enter the food type (e.g., Pizza, Burger)"
          value={foodData.type}
          onChange={handleInputChange}
          autoComplete="off"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
      </div>
      <div>
        <label
          htmlFor="restaurantId"
          className="block text-sm p-1 font-medium text-gray-700"
        >
          Restaurant ID
        </label>
        <input
          type="text"
          name="restaurantId"
          id="restaurantId"
          placeholder="Enter the restaurant ID"
          value={foodData.restaurantId}
          onChange={handleInputChange}
          autoComplete="off"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
      </div>
      <div>
        <label
          htmlFor="image"
          className="block text-sm p-1 font-medium text-gray-700"
        >
          Upload Image
        </label>
        <input
          type="file"
          id="image"
          onChange={handleFileChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
      </div>
      <button
        type="button"
        onClick={handleSubmit}
        className="w-full py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition duration-300"
      >
        Create Food Item
      </button>
    </form>
  );
};

export default FoodForm;
