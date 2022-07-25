import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { useNews } from "./context/news-context";
import { Home } from "./pages";

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const { newsState } = useNews();

  return (
    <div className="App text-gray-800">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="colored"
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {newsState.loading ? <span className="loader"></span> : <></>}
    </div>
  );
}

export default App;
