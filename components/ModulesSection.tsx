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

const InfoCard: React.FC<{ title: string; items: string[]; icon: React.ReactNode; color: string }> = ({ title, items, icon, color }) => (
    <div className="bg-white p-4 rounded-xl shadow-lg border-t-4" style={{borderColor: color}}>
        <div className="flex items-center mb-3">
            <div className="p-2 rounded-full mr-3" style={{backgroundColor: `${color}20`}}>
               {icon}
            </div>
            <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        </div>
        <ul className="space-y-1 list-disc list-inside text-gray-600 text-sm">
            {items.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
    </div>
);

const ModulesSection: React.FC = () => {
    return (
        <section id="modulos" className="h-full w-full flex flex-col justify-center items-center bg-gray-50 p-4 md:p-8">
            <div className="container mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="font-display text-3xl md:text-4xl text-gray-800 mb-2">Módulo 2: Tarea 4 | Clase Grabada</h2>
                    <p className="text-base md:text-lg text-gray-600 max-w-4xl mx-auto">
                        En esta tarea deberá presentar la grabación de una clase. Es independiente de las otras tareas y puede realizarse antes, durante o después de ellas.
                    </p>
                </div>
                <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
                    <InfoCard 
                        title="¿Qué me evaluarán?"
                        items={evaluatedCompetencies}
                        color="#3b82f6"
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>}
                    />
                    <InfoCard 
                        title="Desempeño Destacado"
                        items={outstandingPerformance}
                        color="#8b5cf6"
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-12v4m-2-2h4m6 4v4m-2-2h4M17 3h4M19 5v4" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9.5l.933 1.884a1 1 0 00.744.545l2.08.302-1.506 1.468a1 1 0 00-.287.885l.355 2.072-1.86-.978a1 1 0 00-.93 0l-1.86.978.355-2.072a1 1 0 00-.287-.885L7.247 12.23l2.08-.302a1 1 0 00.744-.545L12 9.5z" /></svg>}
                    />
                    <InfoCard 
                        title="Instrucciones Clave"
                        items={instructions}
                        color="#10b981"
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                    />
                </div>
            </div>
        </section>
    );
};

export default ModulesSection;
