import React, { useState } from "react";
import { app } from "../firebase/firebase";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { produrl } from "../helper";

const CreateRestaurant = () => {
  const [formdata, setFormdata] = useState({
    name: "",
    desc: "",
    rating: 0,
    reviewcount: 0,
    imageurl: "",
    cuisine: [],
  });

  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // State to manage the loader

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === "cuisine") {
      setFormdata((prevData) => ({
        ...prevData,
        [name]: Array.from(event.target.selectedOptions, (option) => option.value),
      }));
    } else {
      setFormdata((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

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
      const storageRef = ref(storage, `restaurant/` + fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
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

  const handleSubmit = async () => {
    if (file) {
      setIsLoading(true); // Show loader
      try {
        const url = await storeImage(file);
        const updatedFormdata = { ...formdata, imageurl: url };
        const response = await fetch(`${produrl}restuarant/createRestuarant`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedFormdata),
        });

        const data = await response.json();

        if (response.ok) {
          console.log("Restaurant created successfully:", data);
          setFormdata({
            name: "",
            desc: "",
            rating: 0,
            reviewcount: 0,
            imageurl: "",
            cuisine: [],
          });
          setFile(null);
          window.location.reload();
        } else {
          console.error("Failed to create restaurant:", data);
        }
      } catch (error) {
        console.error("Error:", error.message);
      } finally {
        setIsLoading(false); // Hide loader
      }
    } else {
      alert("Please select an image for the restaurant.");
    }
  };

  return (
    <form className="space-y-2">
      <div>
        <label htmlFor="name" className="block text-sm p-1 font-medium text-gray-700">
          Restaurant Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter the restaurant name"
          value={formdata.name}
          onChange={handleInputChange}
          autoComplete="off"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
      </div>

      <div>
        <label htmlFor="desc" className="block text-sm p-1 font-medium text-gray-700">
          Description
        </label>
        <textarea
          name="desc"
          id="desc"
          placeholder="Enter the description of the restaurant"
          value={formdata.desc}
          onChange={handleInputChange}
          autoComplete="off"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
        ></textarea>
      </div>

      <div>
        <label htmlFor="rating" className="block text-sm p-1 font-medium text-gray-700">
          Rating (0-5)
        </label>
        <input
          type="number"
          name="rating"
          id="rating"
          placeholder="Enter the rating"
          autoComplete="off"
          value={formdata.rating}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
      </div>

      <div>
        <label htmlFor="reviewcount" className="block text-sm p-1 font-medium text-gray-700">
          Review Count
        </label>
        <input
          type="number"
          name="reviewcount"
          id="reviewcount"
          placeholder="Enter the review count"
          value={formdata.reviewcount}
          onChange={handleInputChange}
          autoComplete="off"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
      </div>

      <div>
        <label htmlFor="cuisine" className="block text-sm p-1 font-medium text-gray-700">
          Cuisine
        </label>
        <select
          name="cuisine"
          id="cuisine"
          value={formdata.cuisine}
          onChange={handleInputChange}
          multiple
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
        >
          <option value="North Indian">North Indian</option>
          <option value="South Indian">South Indian</option>
          <option value="Chinese">Chinese</option>
          <option value="American">American</option>
          <option value="Desserts">Desserts</option>
          <option value="Ice Cream">Ice Cream</option>
          <option value="Biryani">Biryani</option>
          <option value="Punjabi">Punjabi</option>
          <option value="Gujarati">Gujarati</option>
          <option value="Bengali">Bengali</option>
          <option value="Mughlai">Mughlai</option>
          <option value="Italian">Italian</option>
          <option value="Mexican">Mexican</option>
          <option value="Thai">Thai</option>
          <option value="Continental">Continental</option>
          <option value="Fast Food">Fast Food</option>
          <option value="Tandoori">Tandoori</option>
          <option value="Street Food">Street Food</option>
          <option value="Others">Others</option>
        </select>
      </div>

      <div>
        <label htmlFor="image" className="block text-sm p-1 font-medium text-gray-700">
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
        {isLoading ? "Processing..." : "Create Restaurant"}
      </button>

      {isLoading && (
        <div className="flex justify-center mt-4">
          <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-orange-500"></div>
        </div>
      )}
    </form>
  );
};

export default CreateRestaurant;
