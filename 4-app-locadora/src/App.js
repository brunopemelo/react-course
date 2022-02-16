import "./index.css";
import Routes from "./routes";
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from "react-toastify";

export default function App() {
    return (
        <div className="app">
            <Routes></Routes>
            <ToastContainer autoClose={3000}></ToastContainer>
        </div>
    );
}
