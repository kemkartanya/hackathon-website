import { useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi';


const navLinks = [
  {
    path: '/timeline',
    display: 'Timeline',
  },
  {
    path: '/overview',
    display: 'Overview',
  },
  {
    path: '/faqs',
    display: 'FAQs',
  },
  {
    path: '/contact',
    display: 'Contact',
  },
];

const Header = () => {
  const headerRef = useRef(null);


  const handleStickyHeader = () => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky__header');
      } else {
        headerRef.current.classList.remove('sticky__header');
      }
    });
  };

  useEffect(() => {
    handleStickyHeader();

    return () => window.removeEventListener('scroll', handleStickyHeader);
  }, []);

  return (
    <header className='header'>
      <div >
        <div className="flex items-center justify-between">
          {/* =================== logo =================== */}
          <div>
            <h1>getlinked</h1>
          </div>

          {/* =================== menu =================== */}
          <div className="flex items-center gap-4">
            <ul className="flex items-center gap-[2.7rem]">
              {navLinks.map((link, index) => (
                <NavLink
                  to={link.path}
                  key={index}
                  className={(navClass) =>
                    navClass.isActive
                      ? 'text-primaryColor text-[16px] leading-7 font-[600]'
                      : 'text-[16px] leading-7 font-[500] hover:text-primaryColor'
                  }
                >
                  {link.display}
                </NavLink>
              ))}
            </ul>
            

            <Link to="/register">
              <button className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded">
                Register
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;