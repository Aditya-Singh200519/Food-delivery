import React, { useState } from "react";
import { app } from "../firebase";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";

const FoodForm = ({ rests }) => {
  const [foodData, setFoodData] = useState({
    name: "",
    description: "",
    price: 0,
    imageUrl: "",
    isVeg: true,
    type: "",
    restaurantId: "",
    rating: 0, // Default rating
    reviewCount: 0, // Default review count
  });

  const [file, setFile] = useState(null);

  // Handle text inputs
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFoodData((prevData) => ({
      ...prevData,
      [name]:
        name === "isVeg"
          ? value === "true"
          : name === "rating" || name === "reviewCount"
          ? parseFloat(value) || 0
          : value,
    }));
  };

  // Handle file input
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleRestaurantSelect = (event) => {
    setFoodData((prevData) => ({
      ...prevData,
      restaurantId: event.target.value,
    }));
  };

  const handleFoodTypeSelect = (event) => {
    setFoodData((prevData) => ({
      ...prevData,
      type: event.target.value,
    }));
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

        if (response.status===201) {
          console.log("Food item created successfully:", data);
          setFoodData({
            name: "",
            description: "",
            price: 0,
            imageUrl: "",
            isVeg: true,
            type: "",
            restaurantId: "",
            rating: 0, // Default rating
            reviewCount: 0, // Default review count
          });
          setFile(null); 
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
        <select
          name="type"
          id="type"
          value={foodData.type}
          onChange={handleFoodTypeSelect}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
        >
          <option value="">Select a food type</option>
          <option value="Burger">Burger</option>
          <option value="Pizza">Pizza</option>
          <option value="Noodles">Noodles</option>
          <option value="Chinese">Chinese</option>
          <option value="Kebabs">Kebabs</option>
          <option value="Rolls">Rolls</option>
          <option value="Cakes">Cakes</option>
          <option value="Pasta">Pasta</option>
          <option value="Chicken Curry">Chicken Curry</option>
          <option value="Mutton Curry">Mutton Curry</option>
          <option value="Dessert">Dessert</option>
          <option value="Biryani">Biryani</option>
          <option value="Paratha">Paratha</option>
          <option value="Chaat">Chaat</option>
          <option value="Dosa">Dosa</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div>
        <label
          htmlFor="restaurantId"
          className="block text-sm p-1 font-medium text-gray-700"
        >
          Select Restaurant
        </label>
        <select
          name="restaurantId"
          id="restaurantId"
          value={foodData.restaurantId}
          onChange={handleRestaurantSelect}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
        >
          <option value="">Select a restaurant</option>
          {rests.map((rest) => (
            <option key={rest._id} value={rest._id}>
              {rest.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label
          htmlFor="rating"
          className="block text-sm p-1 font-medium text-gray-700"
        >
          Rating (Out of 5)
        </label>
        <input
          type="number"
          name="rating"
          id="rating"
          placeholder="Enter rating"
          onChange={handleInputChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          
        />
      </div>
      <div>
        <label
          htmlFor="reviewCount"
          className="block text-sm p-1 font-medium text-gray-700"
        >
          Review Count
        </label>
        <input
          type="number"
          name="reviewCount"
          id="reviewCount"
          placeholder="Enter review count"
          onChange={handleInputChange}
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
