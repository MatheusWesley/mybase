import { Route, Routes } from "react-router-dom";
import { List } from "./pages/List";
import { NewPost } from "./pages/NewPost";

export function Router () {
  return (
    <Routes>
      <Route path="/" element={<List />} />
      <Route path="/NewPost" element={<NewPost />} />
    </Routes>
  );
}