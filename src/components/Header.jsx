import { useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi';
import logo from '../assets/images/getlinked.png'


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
          <Link to="/home">
            <div>
              <img src={logo} alt='' />
            </div>
          </Link>
          
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
              <button className='gradient-button bg-headingColor mx-[30px] p-[10px] w-[150px] rounded'>
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