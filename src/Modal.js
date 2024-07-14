import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Modal = () => {
  const [data, setData] = useState({
    Title: "",
    Link: "",
    Category: "",
    Image: ""
  });

  const [imageUrl, setImageUrl] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleImageupload = async (event) => {
    try {
      const files = event.target.files;
      if (!files || files.length === 0) {
        throw new Error("No file selected");
      }

      setLoading(true);

      const formData = new FormData();
      for (let i = 0; i < files.length; i++) {
        formData.append("file", files[i]);
      }

      formData.append("upload_preset", "ml_default");
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/doqgcssfm/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );
      if (!response.ok) {
        throw new Error(`Upload failed with status ${response.status}`);
      }

      const data = await response.json();

      setImageUrl((prevImage) => [...prevImage, data.secure_url]);
      console.log(data.secure_url);

      setLoading(false);
    } catch (error) {
      console.error(error.message);
      setLoading(false);
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();

    if (imageUrl.length === 0) {
      console.error("No image to save");
      return;
    }

    try {
      setLoading(true); // Set loading to true when save operation starts
      const def = {
        Image: imageUrl[0],
        Title: data.Title,
        Category: data.Category,
        Link: data.Link,
      };

      const response = await axios.post("https://nemesis-backend.onrender.com/auth/movies", def);
      console.log("Save operation complete", response.data);
      setLoading(false); // Set loading to false when save operation completes
      navigate("/movies");
    } catch (err) {
      console.error(err, "Save operation failed");
      setLoading(false); // Set loading to false if save operation fails
    }
  };

  return (
    <div className="si">
      <div className="notification">
        <main>
          <div className="card-2">
            <img
              src="https://images.unsplash.com/photo-1661435804987-a8aff5752018?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <div className="card-content">
              <span>
                <input
                  type="text"
                  placeholder="Enter the title"
                  value={data.Title}
                  onChange={(e) => setData({ ...data, Title: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Enter the Category"
                  value={data.Category}
                  onChange={(e) => setData({ ...data, Category: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Enter the Link"
                  value={data.Link}
                  onChange={(e) => setData({ ...data, Link: e.target.value })}
                />
              </span>
              <p>
                <input
                  type="file"
                  placeholder="Enter your Image"
                  name="image_url"
                  onChange={handleImageupload}
                  required
                />
              </p>
            </div>
          </div>
        </main>
        <div className="view-all">
          {loading ? (
            <div className="submit-btn">Loading...</div>
          ) : (
            <>
              <div className="submit-btn" onClick={handleSave}>
                SUBMIT
              </div>
              <div className="close-btn" onClick={() => navigate("/layout")}>
                CLOSE
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
