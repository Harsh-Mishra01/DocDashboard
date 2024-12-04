import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function NavigationButton({ icon, label, isActive, onClick }) {
  return (
    <div className="flex flex-col items-center" onClick={onClick}>
      <div className={`mx-4 w-12 h-12 rounded-lg border-[2px] border-solid flex items-center justify-center ${isActive ? 'bg-green-600 text-white' : 'border-green-600 text-green-500'}`}>
        {icon}
      </div>
      <span className={`text-sm font-medium mt-2 ${isActive ? 'text-green-600' : 'text-gray-500'}`}>{label}</span>
    </div>
  );
}

function Navigation() {
  const [activeButton, setActiveButton] = useState('');
  const location = useLocation();

  // Set the active button based on the current location path
  useState(() => {
    setActiveButton(location.pathname);
  }, [location.pathname]);

  const handleButtonClick = (path) => {
    setActiveButton(path);
  };

  return (
    <>
    <div className="flex justify-end">
      <Link to="/">
        <NavigationButton
          icon={<i className="fas fa-home"></i>}
          label="Home"
          isActive={activeButton === '/'}
          onClick={() => handleButtonClick('/')}
          />
      </Link>
      <Link to="/docprofile">
        <NavigationButton
          icon={<i className="fas fa-user"></i>}
          label="Doc Profile"
          isActive={activeButton === '/docprofile'}
          onClick={() => handleButtonClick('/docprofile')}
          />
      </Link>
      <Link to="/engagements">
        <NavigationButton
          icon={<i className="fas fa-comments"></i>}
          label="Engagements"
          isActive={activeButton === '/engagements'}
          onClick={() => handleButtonClick('/engagements')}
          />
      </Link>
      <Link to="/">
        <NavigationButton
          icon={<i className="fas fa-close fa-x"></i>}
          label="Close"
          isActive={activeButton === '/close'}
          onClick={() => handleButtonClick('/close')}
          />
      </Link>
    </div>
    </>

  );
}

export default Navigation;
