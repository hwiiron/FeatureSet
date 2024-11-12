import { Route, Routes } from "react-router-dom";

import "./App.css";

import Header from "../layouts/Header";
import Home from "./Home";
import Tags from "./Tags/Tags";
import FilePreview from "./File-Preview/FilePreview";
import NumberReplace from "./NumberReplace/NumberReplace";
import Skeleton from "./Skeleton/Skeleton";
import TotalMessage from "./TotalMessage/TotalMessage";

import Test from "./Test/Test";
import Notfound from "./Notfound";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filePreview" element={<FilePreview />} />
        <Route path="/tags" element={<Tags />} />
        <Route path="/NumberReplace" element={<NumberReplace />} />
        <Route path="/Skeleton" element={<Skeleton />} />
        <Route path="/TotalMessage" element={<TotalMessage />} />

        <Route path="/Test" element={<Test />} />

        <Route path="*" element={<Notfound />}></Route>
      </Routes>
    </>
  );
}

export default App;
