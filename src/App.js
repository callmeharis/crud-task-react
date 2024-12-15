import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./pages/create";
import Users from "./pages/users";
import Edit from "./pages/edit";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/users/create" element={<Create />} />
          <Route path="/user/:id" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
