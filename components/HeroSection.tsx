import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-white h-full w-full flex justify-center items-center">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4 leading-tight">
          Transforma tu <span className="text-[#00AEEF]">Evaluación Docente</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Te ofrecemos herramientas conceptuales, técnicas y prácticas para abordar con éxito la Elaboración del Portafolio y el proceso de Evaluación Docente.
        </p>
        <button className="bg-[#00AEEF] text-white font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition duration-300 text-lg">
          Descubre Nuestros Programas
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
