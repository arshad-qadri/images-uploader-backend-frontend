
import { Route, Routes, useLocation} from "react-router-dom";
import "./App.css";
import AuthLayouts from "./layouts/AuthLayout";
import Layout from "./layouts/Index";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Upload from "./pages/Upload";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const location = useLocation();
  
  return (
    <div>
    

      {["/", "/upload"].includes(location.pathname)  ? (
        <Layout>
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Upload />} path="/upload" />
          </Routes>
            
        </Layout>
      ) : (
        ["/login", "/register"].includes(location.pathname) && (
          <AuthLayouts>
            <Routes>
              <Route element={<Register />} path="/register" />
              <Route element={<Login />} path="/login" />
            </Routes>
          </AuthLayouts>
        )
      )}
    </div>
  );
}

export default App;
