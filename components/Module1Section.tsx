import React from 'react';

const evaluatedCompetencies = [
    "Coherencia entre planificación, objetivos y actividades.",
    "Consideración de la diversidad y necesidades de los estudiantes.",
    "Uso de estrategias de evaluación formativa efectivas.",
    "Análisis de resultados para la toma de decisiones pedagógicas.",
    "Profundidad de la reflexión sobre el aprendizaje socioemocional.",
    "Capacidad para identificar fortalezas y áreas de mejora en la práctica.",
];

const outstandingPerformance = [
    "Diseño de experiencias de aprendizaje innovadoras e inclusivas.",
    "Uso sistemático de datos de evaluación para retroalimentar y ajustar la enseñanza.",
    "Creación de un clima de aula que promueve activamente el bienestar socioemocional.",
    "Reflexión crítica que conecta la práctica con la teoría pedagógica.",
    "Evidencia de impacto positivo en el aprendizaje de todos los estudiantes.",
];

const instructions = [
    "Realizar con estudiantes de un curso entre 7° Básico y 4° Medio.",
    "Las tareas pueden desarrollarse con el mismo curso o con cursos distintos.",
    "Asegurar que las tres tareas estén articuladas y muestren un ciclo de práctica reflexiva.",
    "Fundamentar todas las decisiones pedagógicas en el Marco para la Buena Enseñanza.",
    "Utilizar evidencia concreta (ej. trabajos de estudiantes) para respaldar el análisis.",
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

interface Module1SectionProps {
    goToSlide?: (index: number) => void;
}

const Module1Section: React.FC<Module1SectionProps> = ({ goToSlide }) => {
    return (
        <section id="modulo1" className="h-full w-full flex flex-col justify-center items-center bg-gray-50 px-4 py-2 relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-4">
                    <h2 className="font-display text-3xl md:text-4xl text-gray-800 mb-1">Módulo 1</h2>
                    <p className="text-xl md:text-2xl text-gray-700">Planificación, Evaluación y Reflexión</p>
                </div>
                
                <div className="grid lg:grid-cols-5 gap-4 mb-4 items-stretch">
                    <div className="lg:col-span-3 bg-white p-4 rounded-lg shadow-md text-left flex flex-col">
                        <p className="font-semibold text-md text-gray-700 mb-2">Tareas del Módulo:</p>
                        <ul className="space-y-1 text-sm text-gray-600 list-decimal list-inside mb-3">
                            <li><span className="font-semibold">"Planificación...":</span> Describir tres experiencias de aprendizaje y fundamentar su diseño.</li>
                            <li><span className="font-semibold">"Evaluación formativa":</span> Describir una estrategia de monitoreo y analizar sus resultados.</li>
                            <li><span className="font-semibold">"Reflexión... socioemocionales":</span> Reflexionar sobre aspectos de su práctica que facilitan o dificultan el desarrollo socioemocional.</li>
                        </ul>
                         <p className="font-semibold text-gray-700 mt-auto">Evidencia Requerida: <span className="font-normal text-gray-600 text-sm">Documentos escritos que describan la planificación, la estrategia de evaluación y la reflexión socioemocional.</span></p>
                    </div>

                    <div className="lg:col-span-2 bg-white p-4 rounded-lg shadow-md flex flex-col">
                        <h3 className="font-bold text-lg text-gray-800 mb-2 text-center">Video Clave del Módulo 1</h3>
                        <div className="aspect-video w-full rounded-lg overflow-hidden shadow-inner">
                            <iframe
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/k-a-S44d6aA"
                                title="Video Explicativo: Planificación y Evaluación para el Aprendizaje"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <p className="text-xs text-center text-gray-500 mt-2">Un resumen de 2 minutos sobre los conceptos fundamentales de este módulo.</p>
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
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-full max-w-5xl px-8 flex justify-end">
                    <button 
                        onClick={() => goToSlide(5)}
                        className="flex items-center gap-2 bg-[#00AEEF] text-white font-bold py-2 px-4 rounded-full hover:bg-opacity-90 transition duration-300 shadow-lg"
                        aria-label="Ir al Módulo 2: Clase Grabada"
                    >
                        <span>Siguiente Módulo: Clase Grabada</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </button>
                </div>
            )}
        </section>
    );
};

export default Module1Section;