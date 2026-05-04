import { useState, useContext } from "react";
import { NoteContext } from "../../context/NoteContext";
import { useNavigate } from "react-router-dom";

function CreateNote() {
  const { createNote } = useContext(NoteContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });

  const [loading, setLoading] = useState(false);

  // handle input
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.title || !formData.content) {
      alert("All fields are required");
      return;
    }

    setLoading(true);
    await createNote(formData);
    setLoading(false);

    navigate("/"); // go back to home
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Create New Note
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        
        {/* Title */}
        <input
          type="text"
          name="title"
          placeholder="Enter title"
          value={formData.title}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Content */}
        <textarea
          name="content"
          placeholder="Enter content"
          value={formData.content}
          onChange={handleChange}
          rows="5"
          className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold"
        >
          {loading ? "Creating..." : "Create Note"}
        </button>
      </form>
    </div>
  );
}

export default CreateNote;