import React, {useState, useEffect} from 'react';

export default function Themes() {
  let [selectedTheme, setSelectedTheme] = useState(localStorage.getItem('selectedTheme') || 'light');

  const lightTheme = () => {
    document.documentElement.style.setProperty('--main-bg-color', 'white');
    document.documentElement.style.setProperty('--main-text-color', '#4b4b4b');
    document.documentElement.style.setProperty('--main-accent-color', '#3a3a3a');
    document.documentElement.style.setProperty('--secondary-accent-color', '#adadad');
    document.documentElement.style.setProperty('--main-overlay-color', 'rgba(0, 0, 0, 0.5)');
    document.documentElement.style.setProperty('--secondary-overlay-color', 'rgba(0, 0, 0, 0)');
    saveTheme('light');
  };
  
  const darkTheme = () => {
    document.documentElement.style.setProperty('--main-bg-color', '#1e1f25');
    document.documentElement.style.setProperty('--main-text-color', '#adadad');
    document.documentElement.style.setProperty('--main-accent-color', '#c5c5c5');
    document.documentElement.style.setProperty('--secondary-accent-color', '#4b4b4b');
    document.documentElement.style.setProperty('--main-overlay-color', 'rgba(255, 255, 255, 0.2)');
    document.documentElement.style.setProperty('--secondary-overlay-color', 'rgba(0, 0, 0, 0)');
    saveTheme('dark');
  };

  const changeTheme = () => {
    if (selectedTheme === 'light') {
      darkTheme();
      saveTheme('dark');
    }
    else {
      lightTheme();
      saveTheme('light');
    }
  };

  const saveTheme = (theme) => {
    selectedTheme = theme;
    setSelectedTheme(selectedTheme);
    localStorage.setItem('selectedTheme', selectedTheme);
  };

  useEffect(() => {
    if (selectedTheme === 'light') {
      lightTheme();
    }
    else {
      darkTheme();
    }
  }, []);

  return (
    <div className="themes"  onClick={changeTheme}>
      <div className="themes-item active">
        <i id="theme" className={selectedTheme === 'light' ? 'fas fa-moon' : 'fas fa-sun'}></i>
      </div>
    </div>
  );
};