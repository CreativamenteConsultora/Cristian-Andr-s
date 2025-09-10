import React from 'react';

const evaluatedCompetencies = [
    "Capacidad para trabajar colaborativamente con pares y otros.",
    "Contribución activa a la consecución de metas comunes.",
    "Habilidades de comunicación efectiva y resolución de conflictos.",
    "Reflexión sobre el propio rol y el impacto del trabajo colaborativo.",
    "Vinculación de la colaboración con la mejora de los aprendizajes."
];

const outstandingPerformance = [
    "Liderazgo de iniciativas colaborativas que impactan en la escuela.",
    "Uso de la colaboración como estrategia para el desarrollo profesional.",
    "Generación de conocimiento pedagógico a través del trabajo en equipo.",
    "Reflexión profunda que evidencia un aprendizaje transformador.",
    "Promoción de una cultura de colaboración en su comunidad."
];

const instructions = [
    "No es obligatorio desarrollarlo en un curso o asignatura particular.",
    "La experiencia puede ser con docentes, directivos, asistentes, etc.",
    "Diferenciar claramente la parte obligatoria de la voluntaria.",
    "Seleccionar una experiencia significativa que permita una reflexión profunda.",
    "Focalizar la reflexión en los aprendizajes profesionales obtenidos."
];

const InfoCard: React.FC<{ title: string; items: string[]; icon: React.ReactNode; bgColor: string }> = ({ title, items, icon, bgColor }) => (
    <div className={`p-6 rounded-2xl text-white shadow-2xl flex flex-col h-full transform hover:scale-105 transition-transform duration-300 ${bgColor}`}>
        <div className="flex items-center mb-4">
            {icon}
            <h3 className="text-xl font-bold ml-3">{title}</h3>
        </div>
        <ul className="space-y-2 list-disc list-inside text-gray-200 text-sm flex-grow">
            {items.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
    </div>
);

interface Module3SectionProps {
    goToSlide?: (index: number) => void;
}

const Module3Section: React.FC<Module3SectionProps> = ({ goToSlide }) => {
    return (
        <section id="modulo3" className="h-full w-full flex flex-col justify-center items-center bg-gray-50 p-4 relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-4">
                    <h2 className="font-display text-3xl md:text-4xl text-gray-800 mb-1">Módulo 3</h2>
                    <p className="text-xl md:text-2xl text-gray-700 mb-3">Trabajo Colaborativo</p>
                    <div className="bg-white p-3 rounded-lg shadow-md max-w-4xl mx-auto text-left">
                        <p className="font-semibold text-md text-gray-700 mb-1">Tarea del Módulo:</p>
                        <ul className="space-y-1 text-sm text-gray-600 list-decimal list-inside">
                             <li><span className="font-semibold">Tarea 5 "Trabajo colaborativo":</span> Describir una experiencia de trabajo colaborativo y reflexionar a partir de ella.</li>
                        </ul>
                        <p className="text-sm text-red-600 mt-2">IMPORTANTE: El Módulo 3 incluye una parte de carácter obligatorio y otra de carácter voluntario u optativo.</p>
                         <p className="font-semibold text-gray-700 mt-2">Evidencia Requerida: <span className="font-normal text-gray-600 text-sm">Documento escrito que describa y reflexione sobre una experiencia de trabajo colaborativo.</span></p>
                    </div>
                </div>
                <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
                    <InfoCard 
                        title="¿Qué me evaluarán?"
                        items={evaluatedCompetencies}
                        bgColor="bg-blue-600"
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>}
                    />
                    <InfoCard 
                        title="Desempeño Esperado"
                        items={outstandingPerformance}
                        bgColor="bg-purple-600"
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-12v4m-2-2h4m6 4v4m-2-2h4M17 3h4M19 5v4" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9.5l.933 1.884a1 1 0 00.744.545l2.08.302-1.506 1.468a1 1 0 00-.287.885l.355 2.072-1.86-.978a1 1 0 00-.93 0l-1.86.978.355-2.072a1 1 0 00-.287-.885L7.247 12.23l2.08-.302a1 1 0 00.744-.545L12 9.5z" /></svg>}
                    />
                    <InfoCard 
                        title="Instrucciones Clave"
                        items={instructions}
                        bgColor="bg-indigo-700"
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                    />
                </div>
            </div>
             {goToSlide && (
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-full max-w-5xl px-8 flex justify-between">
                    <button 
                        onClick={() => goToSlide(5)}
                        className="flex items-center gap-2 bg-white text-gray-700 font-bold py-2 px-4 rounded-full hover:bg-gray-200 transition duration-300 shadow-lg border"
                        aria-label="Ir al Módulo 2: Clase Grabada"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                        </svg>
                        <span>Módulo Anterior: Clase Grabada</span>
                    </button>
                    <button 
                        onClick={() => goToSlide(7)}
                        className="flex items-center gap-2 bg-green-500 text-white font-bold py-2 px-4 rounded-full hover:bg-green-600 transition duration-300 shadow-lg"
                        aria-label="Ir a la sección de Asistencias"
                    >
                        <span>Ver Tipos de Asistencia</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </button>
                </div>
            )}
        </section>
    );
};

export default Module3Section;