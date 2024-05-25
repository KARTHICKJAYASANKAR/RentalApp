import React, { useState } from 'react';

function ProductForm() {
    const [imageUrl, setImageUrl] = useState(null);
    const [price, setPrice] = useState(0);
    const [category, setCategory] = useState('');
  
    const handleImageUpload = (event) => {
      const imageFile = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(imageFile);
      reader.onload = () => setImageUrl(reader.result);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Handle form submission logic here
      console.log('Product details:', { imageUrl, price, category });
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Image:
          <input type="file" onChange={handleImageUpload} />
        </label>
        {imageUrl && <img src={imageUrl} alt="Uploaded product" />}
        <label>
          Price:
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
        </label>
        <label>
          Category:
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">Select a category</option>
            <option value="electronics">Electronics</option>
            <option value="fashion">Fashion</option>
            {/* Add more category options here */}
          </select>
        </label>
        <div className="button-container">
          <button type="submit">Interested</button>
          <button type="button">Not Interested</button>
        </div>
      </form>
    );
  }
  
  export default ProductForm;