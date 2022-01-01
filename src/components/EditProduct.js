import axios from "axios";
import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
export const EditProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const history = useHistory();
  const { id } = useParams();

  const saveProduct = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/products", {
      title: title,
      price: price,
    });
    history.push("/");
  };

  const getProductById = async () => {
    const response = await axios.get(`http://localhost:5000/products/${id}`);
    setTitle(response.data.title);
    setPrice(response.data.price);
  };

  useEffect(() => {
    getProductById();
  }, []);
  return (
    <div>
      <form onSubmit={saveProduct}>
        <div className="field">
          <label className="label">Title</label>
          <input
            className="input"
            type="text"
            name="title"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="field">
          <label className="label">Price</label>
          <input
            className="input"
            type="text"
            name="price"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="field">
          <button className="button is-primary">Save</button>
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
