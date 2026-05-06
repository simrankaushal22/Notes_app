import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import CreateNote from "./pages/CreateNote";

function App() {
  return (
    <div className="min-h-screen flex flex-col"> {/* FULL HEIGHT */}

      {/* Navbar */}
      <NavBar />

      {/* Main content */}
      <main className=".flex-grow {
    flex-grow: 1;
}"> {/*PUSHES FOOTER DOWN */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateNote />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default App;