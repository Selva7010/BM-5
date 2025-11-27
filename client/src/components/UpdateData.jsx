import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

export default function UpdateData() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: ""
  });

  const [formError, setFormError] = useState("");
  const [success, setSuccess] = useState("");

  // Fetch Single Data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(`${process.env.REACT_APP_URL}/api/TaskManager/${id}`);

        if (result.data?.success) {
          setFormData(result.data.data);
        } else {
          setFormError("Data not found.");
        }
      } catch (error) {
        setFormError(error.message);
      }
    };

    fetchData();
  }, [id]);

  // Handle input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Update
  const handleUpdate = async () => {
    try {
      const update = await axios.patch(`${process.env.REACT_APP_URL}/api/TaskManager/update/${id}`, formData);

      if(update.data?.success){
        setSuccess("Updated Successfully!");
        navigate("/HomePage");
      }
      
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg space-y-4">
      
      <h2 className="text-xl font-bold text-center">Edit Customer</h2>

      {formError && <p className="text-red-500 text-center">{formError}</p>}
      {success && <p className="text-green-500 text-center">{success}</p>}

      <input
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Enter title"
        className="w-full border px-4 py-2 rounded-md"
      />

      <input
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Enter description"
        className="w-full border px-4 py-2 rounded-md"
      />

      <button
        onClick={handleUpdate}
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
      >
        Update Customer
      </button>
    </div>
  );
}
