import { Routes, Route } from "react-router-dom";
import Login from "./views/login";
import SignUp from "./views/signUp";
import List from "./views/List";

export default function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signUp" element={<SignUp />} />
                <Route path="/todoList" element={<List />} />
                <Route path="*" element={<h1>無此路徑</h1>} />
            </Routes>
        </div>
    );
}
