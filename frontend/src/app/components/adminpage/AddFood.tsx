"use client";
import { useState, useEffect } from "react";

type Category = {
  _id: string;
  name: string;
};

export const AddFood = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [foodName, setFoodName] = useState("");
  const [price, setPrice] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [image, setImage] = useState<File | null>(null);

  // Fetch categories for the category select
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/categories");
        const data = await response.json();
        setCategories(data.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  // Function to open the modal
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Function to handle image upload
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
    }
  };

  // Function to handle form submission (add logic to handle data saving here)
  const handleSubmit = () => {
    // Add form submission logic here
    console.log({
      foodName,
      price,
      ingredients,
      selectedCategory,
      image,
    });
    setIsModalOpen(false); // Close the modal after submission
  };

  return (
    <div>
      {/* Add Food Button */}
      <button
        className="px-10 bg-green-500 py-1 text-white rounded-lg"
        onClick={handleOpenModal}
      >
        Add Food
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg relative w-[500px]">
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-black font-bold text-2xl"
            >
              ×
            </button>
            <h3 className="text-xl font-semibold mb-4">Add New Food</h3>
            {/* Form fields */}
            <div className="flex flex-col gap-4">
              <label className="font-medium">Food Name</label>
              <input
                type="text"
                className="border rounded-lg p-2 w-full"
                placeholder="Enter food name"
                value={foodName}
                onChange={(e) => setFoodName(e.target.value)}
              />
              <label className="font-medium">Category</label>
              <select
                className="border rounded-lg p-2 w-full"
                value={selectedCategory || ""}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="" disabled>
                  Select category
                </option>
                {categories.map((category) => (
                  <option key={category._id} value={category._id}>
                    {category.name}
                  </option>
                ))}
              </select>
              <label className="font-medium">Price</label>
              <input
                type="number"
                className="border rounded-lg p-2 w-full"
                placeholder="Enter price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
              <label className="font-medium">Ingredients</label>
              <textarea
                className="border rounded-lg p-2 w-full"
                placeholder="Enter ingredients"
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
              ></textarea>

              <label className="font-medium">Image</label>
              <input
                type="file"
                className="flex border rounded-lg p-2 w-full justify-center items-center"
                accept="image/*"
                onChange={handleImageChange}
              />
              <button
                className="bg-green-500 text-white py-2 rounded-lg w-full"
                onClick={handleSubmit}
              >
                Нэмэх
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
