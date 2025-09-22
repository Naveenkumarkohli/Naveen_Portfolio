import icon from '@/asserts/icon_rb.png';
import { useState, useEffect } from 'react';

function Nav() {
    const [navOpen, setNavOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const scrollTo = (id) => {
        setNavOpen(false);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(id);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'skills&projects', 'experience', 'education', 'contact'];
            const scrollPosition = window.scrollY + 100;
            
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        // Use a slight delay to ensure all elements are loaded
        const timer = setTimeout(() => {
            window.addEventListener('scroll', handleScroll);
            handleScroll(); // Initial check
        }, 100);

        return () => {
            clearTimeout(timer);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const isActive = (section) => activeSection === section ? 'active' : '';

    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'skills&projects', label: 'Skills & Projects' },
        { id: 'experience', label: 'Experience' },
        { id: 'education', label: 'Education' },
        { id: 'contact', label: 'Contact' }
    ];

    return (
        <nav className="flex w-full h-[60px] justify-between items-center relative z-50 bg-white shadow-sm">
            <div className='flex h-full items-center justify-center mx-3'>
                <img 
                    src={icon} 
                    alt="My Portfolio" 
                    className='w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] rounded-full object-cover border-2 border-blue-500'
                />
                <h1 className='m-3 text-lg sm:text-xl font-medium'>Naveen Kumar Koyyana</h1>
            </div>
            
            {/* Desktop Navigation */}
            <ul className='hidden h-full items-center mx-2 md:flex space-x-1'>
                {navItems.map((item) => (
                    <li 
                        key={item.id}
                        className={`px-3 py-2 cursor-pointer rounded-md transition-colors ${isActive(item.id) ? 'text-blue-600 bg-blue-100' : 'hover:text-blue-600 hover:bg-blue-50'}`}
                        onClick={() => scrollTo(item.id)}
                    >
                        {item.label}
                    </li>
                ))}
            </ul>

            {/* Mobile Navigation Toggle */}
            <div className='md:hidden mr-4'>
                <button 
                    onClick={() => setNavOpen(!navOpen)}
                    className='p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                    aria-label='Toggle menu'
                >
                    <div className='space-y-1.5'>
                        <span className={`block w-6 h-0.5 bg-gray-700 transition-transform ${navOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                        <span className={`block w-6 h-0.5 bg-gray-700 transition-opacity ${navOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                        <span className={`block w-6 h-0.5 bg-gray-700 transition-transform ${navOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                    </div>
                </button>
            </div>

            {/* Mobile Navigation Menu */}
            {navOpen && (
                <div className='md:hidden absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-lg overflow-hidden'>
                    <ul className='py-2'>
                        {navItems.map((item) => (
                            <li 
                                key={item.id}
                                className={`px-4 py-3 cursor-pointer transition-colors ${isActive(item.id) ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'}`}
                                onClick={() => scrollTo(item.id)}
                            >
                                {item.label}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
}

export default Nav;