import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import './index.css';

const App = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <Router>
            <div className="flex h-screen">
                <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
                <div className="flex flex-col flex-1">
                    <Header toggleSidebar={toggleSidebar} />
                    <main className="flex-1 overflow-y-auto p-4">
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                        </Routes>
                    </main>
                </div>
            </div>
        </Router>
    );
};

export default App;
