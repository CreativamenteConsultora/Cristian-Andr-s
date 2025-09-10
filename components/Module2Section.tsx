import React from 'react';

const evaluatedCompetencies = [
    "Promueve un ambiente que propicia el aprendizaje.",
    "Promueve que los y las estudiantes participen y colaboren.",
    "Organiza las actividades para contribuir al logro de los objetivos.",
    "Implementa actividades para desarrollar pensamiento crítico, creativo o metacognición.",
    "Considera las experiencias o conocimientos de los/as estudiantes.",
    "Está alerta a los requerimientos, opiniones y respuestas de sus estudiantes.",
    "Contribuye a desnaturalizar y evitar la reproducción de sesgos y estereotipos de género."
];

const outstandingPerformance = [
    "Involucra a los/as estudiantes en la construcción o descubrimiento de los aprendizajes.",
    "Aprovecha sistemáticamente las intervenciones de sus estudiantes.",
    "Monitorea o promueve el desarrollo de aprendizajes actitudinales o transversales.",
    "Promueve que los/as estudiantes evalúen o cuestionen información.",
    "Sistemáticamente considera los conocimientos o experiencias de los/as estudiantes.",
    "Promueve que los/as estudiantes cuestionen los sesgos o estereotipos de género."
];

const instructions = [
    "Seleccione un Objetivo de Aprendizaje (OA) de las Bases Curriculares vigentes.",
    "Determine el o los objetivos a trabajar en la clase basándose en el OA.",
    "Planifique actividades para una clase de aproximadamente 40 minutos.",
    "Confirme fecha y hora de la grabación (periodo hasta el 10 de noviembre).",
    "Avise con anticipación al curso y a las familias sobre la grabación.",
    "Realice la clase como trabaja habitualmente, mostrando su capacidad de trabajo diferenciado si es curso combinado."
];

// Made card more compact to fit content on screen
const InfoCard: React.FC<{ title: string; items: string[]; icon: React.ReactNode; bgColor: string }> = ({ title, items, icon, bgColor }) => (
    <div className={`p-4 rounded-2xl text-white shadow-2xl flex flex-col h-full transform hover:scale-105 transition-transform duration-300 ${bgColor}`}>
        <div className="flex items-center mb-2">
            {icon}
            <h3 className="text-xl font-bold ml-3">{title}</h3>
        </div>
        <ul className="space-y-1 list-disc list-inside text-gray-200 text-sm flex-grow">
            {items.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
    </div>
);

interface Module2SectionProps {
    goToSlide?: (index: number) => void;
}

const Module2Section: React.FC<Module2SectionProps> = ({ goToSlide }) => {
    return (
        <section id="modulo2" className="h-full w-full flex flex-col justify-center items-center bg-gray-50 px-4 py-2 relative">
            <div className="container mx-auto px-6">
                 <div className="text-center mb-2">
                    <h2 className="font-display text-3xl md:text-4xl text-gray-800 mb-1">Módulo 2</h2>
                    <p className="text-xl md:text-2xl text-gray-700 mb-3">Clase Grabada</p>
                     <div className="bg-white p-3 rounded-lg shadow-md max-w-4xl mx-auto text-left">
                        <p className="font-semibold text-md text-gray-700 mb-1">Tarea del Módulo:</p>
                        <ul className="space-y-1 text-sm text-gray-600 list-decimal list-inside">
                             <li><span className="font-semibold">Tarea 4 "Clase grabada":</span> Presentar la grabación de una clase de aproximadamente 40 minutos y completar una ficha descriptiva de esta.</li>
                        </ul>
                         <p className="font-semibold text-gray-700 mt-2">Evidencia Requerida: <span className="font-normal text-gray-600 text-sm">Grabación de video de una clase de 40 minutos y ficha descriptiva completada.</span></p>
                    </div>
                </div>
                <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-4">
                    <InfoCard 
                        title="¿Qué me evaluarán?"
                        items={evaluatedCompetencies}
                        bgColor="bg-blue-600"
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>}
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
                        onClick={() => goToSlide(4)}
                        className="flex items-center gap-2 bg-white text-gray-700 font-bold py-2 px-4 rounded-full hover:bg-gray-200 transition duration-300 shadow-lg border"
                        aria-label="Ir al Módulo 1: Planificación, Evaluación y Reflexión"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                        </svg>
                        <span>Módulo Anterior: Planificación</span>
                    </button>
                    <button 
                        onClick={() => goToSlide(6)}
                        className="flex items-center gap-2 bg-[#00AEEF] text-white font-bold py-2 px-4 rounded-full hover:bg-opacity-90 transition duration-300 shadow-lg"
                        aria-label="Ir al Módulo 3: Trabajo Colaborativo"
                    >
                        <span>Siguiente Módulo: Trabajo Colaborativo</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </button>
                </div>
            )}
        </section>
    );
};

export default Module2Section;