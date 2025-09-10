import React, { useState } from 'react';

const ButterflyIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 50 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M25.4,14.3c-0.8-1.5-2.2-3.1-2.2-5.1c0-2.8,2.3-5,5.1-5c2.1,0,3.9,1.3,4.7,3.1c0.3,0.6,0.3,1.3,0,1.9
	c-2.3,4.6-7.8,11.5-7.8,11.5s7.3-0.2,10.6,2.2c1.9,1.4,1.9,4,0,5.4c-1.3,1-3.1,1.5-4.9,1.5c-2,0-3.9-0.7-5.4-2
	c-2.3-2,2.3-5.2,0-7.2c1.1-1,2.6-1.7,4.3-2.1" stroke="#00AEEF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M24.6,14.3c0.8-1.5,2.2-3.1,2.2-5.1c0-2.8-2.3-5-5.1-5c-2.1,0-3.9,1.3-4.7,3.1c-0.3,0.6-0.3,1.3,0,1.9
	c2.3,4.6,7.8,11.5,7.8,11.5s-7.3-0.2-10.6,2.2c-1.9,1.4-1.9,4,0,5.4c1.3,1,3.1,1.5,4.9,1.5c2,0,3.9-0.7,5.4-2
	c2.3-2,2.3-5.2,0-7.2c-1.1-1-2.6-1.7-4.3-2.1" stroke="#00AEEF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="25" y1="13" x2="35" y2="2" stroke="#00AEEF" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

interface HeaderProps {
    goToSlide: (index: number) => void;
    currentSlide: number;
    onSearch: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ goToSlide, currentSlide, onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const navLinks = [
        { name: "Contexto", slideIndex: 1 },
        { name: "Módulos", slideIndex: 3 },
        { name: "Asistencias", slideIndex: 7 },
    ];

    const getLinkClassName = (slideIndex: number) => {
        let isActive = currentSlide === slideIndex;
        // Special case for Módulos link, active for slides 3, 4, 5, 6
        if (slideIndex === 3 && currentSlide >= 3 && currentSlide <= 6) {
            isActive = true;
        }

        if (isActive) {
            return "bg-[#880E4F] text-white";
        }
        return "bg-white text-[#880E4F] hover:bg-pink-100";
    };

    const handleSearchSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSearch(searchTerm);
    };

    return (
        <header className="bg-[#C2185B] shadow-md w-full z-40">
            <div className="container mx-auto px-6 py-3 flex justify-between items-center">
                <div className="flex items-center cursor-pointer" onClick={() => goToSlide(0)}>
                    <div className="relative w-64 h-20">
                        <div className="absolute top-12 right-0">
                           <ButterflyIcon className="w-12 h-12 text-[#00AEEF]" />
                        </div>
                        <div className="absolute top-2 left-0 w-full h-16 border-2 border-[#00AEEF] rounded-lg"></div>
                        <div className="absolute top-10 left-0 w-full h-10 bg-[#00AEEF]"></div>
                        <div className="absolute top-2.5 left-0 w-full text-center">
                            <span className="font-display text-4xl text-white tracking-wide">evolucion</span>
                        </div>
                        <div className="absolute top-11 left-0 w-full text-center">
                             <div className="bg-white inline-block px-4 rounded-md">
                                <span className="text-[#00AEEF] text-xl font-bold tracking-widest">DOCENTE</span>
                             </div>
                        </div>
                         <div className="absolute top-[70px] left-0 w-full text-center">
                            <span className="text-white text-xs font-semibold tracking-widest">CREATIVAMENTE CONSULTORA</span>
                        </div>
                    </div>
                </div>
                <nav className="hidden md:flex space-x-4 items-center">
                     {navLinks.map((link) => (
                         <button
                            key={link.name}
                            onClick={() => goToSlide(link.slideIndex)}
                            className={`px-4 py-2 rounded-md font-semibold transition duration-300 text-sm ${getLinkClassName(link.slideIndex)}`}
                        >
                            {link.name}
                        </button>
                    ))}
                    <button onClick={() => goToSlide(8)} className={`px-4 py-2 rounded-md font-semibold transition duration-300 text-sm ${getLinkClassName(8)}`}>
                        Agendar Sesión
                    </button>
                    <form onSubmit={handleSearchSubmit} className="relative group">
                        <input 
                            type="search" 
                            placeholder="Buscar..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="px-3 py-2 rounded-full border-2 border-transparent bg-white/20 text-white placeholder-white/70 focus:bg-white focus:text-gray-800 focus:placeholder-gray-500 focus:border-[#00AEEF] focus:outline-none transition-all duration-300 w-10 h-10 focus:w-48 group-hover:w-48"
                            aria-label="Buscar en el sitio"
                        />
                        <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-white group-focus-within:text-[#00AEEF] transition-colors" aria-label="Iniciar búsqueda">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </form>
                </nav>
            </div>
        </header>
    );
};

export default Header;