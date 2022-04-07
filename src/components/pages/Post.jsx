import React from "react";
import { Navigate, useNavigate, Route, Routes } from "react-router-dom";

function Post() {
  const status = 200;
  if (status === 404) {
    return <Navigate to="/notfound" />;
  }
  return (
    <div>
      <h1>Post</h1>
      <Routes>
        <Route path="/show" element={<h1>hi</h1>}></Route>
      </Routes>
    </div>
  );
}

export default Post;
