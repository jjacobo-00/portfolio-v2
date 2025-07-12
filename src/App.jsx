import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import { useTheme } from './hooks/useTheme.jsx';

function App() {
  const { theme, toggleTheme } = useTheme();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // 1.5 seconds

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    const bgColor = theme === 'dark' ? 'bg-gray-900' : 'bg-white';
    console.log(theme);

    return (
      <div
        className={`loader h-screen flex flex-col items-center justify-center ${bgColor} text-[#1261A0] font-mono transition-colors duration-500`}
      >
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#1261A0] mb-4"></div>
        <p className="text-lg">Generating UI, please wait...</p>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <Home />
    </>
  );
}

export default App;
