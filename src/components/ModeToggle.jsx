import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const ModeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="fixed top-5 right-5 space-x-2">
      <button onClick={() => toggleTheme('dark')} className="px-2 py-1 bg-gray-800 text-white rounded">Dark</button>
      <button onClick={() => toggleTheme('hacker')} className="px-2 py-1 bg-green-600 text-black rounded">Hacker</button>
      <button onClick={() => toggleTheme('bhakti')} className="px-2 py-1 bg-orange-500 text-white rounded">Bhakti</button>
    </div>
  );
};

export default ModeToggle;
