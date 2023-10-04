import React, { useState } from "react";

function ProductForm() {
  const [productData, setProductData] = useState({
    title: "",
    description: "",
    brand: "",
    gender: "male",
    price: 0,
    thumbnail: "",
    discountPercentage: 0,
    category: [],
    color: [],
    size: [],
    availableStock: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  };

  const handleCategoryChange = (e) => {
    const { options } = e.target;
    const selectedCategories = [];
    for (const option of options) {
      if (option.selected) {
        selectedCategories.push(option.value);
      }
    }
    setProductData({
      ...productData,
      category: selectedCategories,
    });
  };

  const handleColorChange = (e) => {
    const { options } = e.target;
    const selectedColors = [];
    for (const option of options) {
      if (option.selected) {
        selectedColors.push(option.value);
      }
    }
    setProductData({
      ...productData,
      color: selectedColors,
    });
  };
  const handleMultipleSelectChange = (e) => {
    const { name, options } = e.target;
    const selectedValues = Array.from(options)
      .filter((option) => option.selected)
      .map((option) => option.value);

    setProductData({
      ...productData,
      [name]: selectedValues,
    });
  };

  const handleSizeChange = (e) => {
    const { options } = e.target;
    const selectedSizes = [];
    for (const option of options) {
      if (option.selected) {
        selectedSizes.push(option.value);
      }
    }
    setProductData({
      ...productData,
      size: selectedSizes,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(productData); // You can send this data to your backend or perform further actions here
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          name="title"
          value={productData.title}
          onChange={handleInputChange}
        />
      </label>
      <br />

      <label>
        Description:
        <input
          type="text"
          name="description"
          value={productData.description}
          onChange={handleInputChange}
        />
      </label>
      <br />

      <label>
        Brand:
        <input
          type="text"
          name="brand"
          value={productData.brand}
          onChange={handleInputChange}
        />
      </label>
      <br />

      <label>
        Gender:
        <select
          name="gender"
          value={productData.gender}
          onChange={handleInputChange}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="kids">Kids</option>
        </select>
      </label>
      <br />

      <label>
        Price:
        <input
          type="number"
          name="price"
          value={productData.price}
          onChange={handleInputChange}
        />
      </label>
      <br />

      <label>
        Thumbnail URL:
        <input
          type="text"
          name="thumbnail"
          value={productData.thumbnail}
          onChange={handleInputChange}
        />
      </label>
      <br />

      <label>
        Discount Percentage:
        <input
          type="number"
          name="discountPercentage"
          value={productData.discountPercentage}
          onChange={handleInputChange}
        />
      </label>
      <br />

      <label>
        Category:
        <select
          multiple
          name="category"
          value={productData.category}
          onChange={handleCategoryChange}
        >
          <option value="shoes">Shoes</option>
          <option value="sports">Sports</option>
        </select>
      </label>
      <br />

      <label>
        Color:
        <select
          multiple
          name="color"
          value={productData.color}
          onChange={handleColorChange}
        >
          <option value="red">Red</option>
          <option value="black">Black</option>
          <option value="white">White</option>
        </select>
      </label>
      <br />

      <label>
        Size:
        <select
          multiple
          name="size"
          value={productData.size}
          onChange={handleMultipleSelectChange}
        >
          <option value="44">44</option>
          <option value="45">45</option>
          <option value="42">42</option>
          <option value="43">43</option>
        </select>
      </label>
      <br />

      <label>
        Available Stock:
        <input
          type="number"
          name="availableStock"
          value={productData.availableStock}
          onChange={handleInputChange}
        />
      </label>
      <br />

      <button type="submit">Submit</button>
    </form>
  );
}

export default ProductForm;
