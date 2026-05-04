import { useContext } from "react";
import { NoteContext } from "../../context/NoteContext";
import { useNavigate } from "react-router-dom";

function Home() {
  const { notes, loading, deleteNote, updateNote } = useContext(NoteContext);
  const navigate = useNavigate();

  // 🔄 Loading state
  if (loading) {
    return (
      <div className="flex justify-center items-center h-[70vh]">
        <h1 className="text-2xl font-semibold text-gray-600">
          Loading notes...
        </h1>
      </div>
    );
  }

  // 📭 Empty state
  if (!notes || notes.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center h-[70vh]">
        <h1 className="text-2xl text-gray-500 mb-4">
          No notes found 😢
        </h1>

        <button
          onClick={() => navigate("/create")}
          className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg shadow"
        >
          + Create Note
        </button>
      </div>
    );
  }

  // ✅ Update handler
  const handleUpdate = (note) => {
    const newTitle = prompt("Enter new title", note.title);
    const newContent = prompt("Enter new content", note.content);

    if (!newTitle || !newContent) return;

    updateNote(note._id, {
      title: newTitle,
      content: newContent,
    });
  };

  return (
    <div className="px-4 py-4 max-w-7xl mx-auto">

      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold text-gray-800">
          My Notes
        </h1>

        <button
          onClick={() => navigate("/create")}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm shadow-sm transition"
        >
          + Create Note
        </button>
      </div>

      {/* Notes Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {notes.map((note) => (
          <div
            key={note._id}
            className="bg-white border rounded-xl p-4 shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300"
          >
            {/* Title */}
            <h2 className="text-lg font-semibold text-gray-800">
              {note.title}
            </h2>

            {/* Content */}
            <p className="text-gray-600 text-sm mt-1 mb-3 line-clamp-2">
              {note.content}
            </p>

            {/* Footer */}
            <div className="flex justify-between items-center text-xs text-gray-400">
              <span>
                {new Date(note.createdAt).toLocaleDateString()}
              </span>

              <div className="flex gap-3">
                {/* Update */}
                <button
                  onClick={() => handleUpdate(note)}
                  className="text-blue-500 hover:text-blue-700"
                >
                  Update
                </button>

                {/* Delete */}
                <button
                  onClick={() => deleteNote(note._id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Delete
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;