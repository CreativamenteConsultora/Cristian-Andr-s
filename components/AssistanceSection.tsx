import React from 'react';

const plans = [
    {
        name: "MAPA",
        icon: "1",
        color: "from-purple-500 to-indigo-600",
        features: [
            "Modalidad: Online - Grupal (grupos reducidos).",
            "Descripción: Visión panorámica y estratégica para iniciar tu Evaluación Docente.",
            "Duración: 4 sesiones de 90 minutos (2 o 4 semanas).",
            "Recursos: Material de apoyo, análisis de rúbricas, plantillas, etc.",
            "Resultados: Comprensión global, identificación de evidencias y plan de trabajo."
        ]
    },
    {
        name: "RUTA",
        icon: "2",
        color: "from-pink-500 to-rose-500",
        features: [
            "Modalidad: Online - Individual y Personalizada.",
            "Descripción: Te guiamos paso a paso en un módulo específico.",
            "Duración: Paquetes de 3, 5 o 7 horas de asesoría directa.",
            "Recursos: Diagnóstico, sesiones 1 a 1, revisión y retroalimentación.",
            "Resultados: Módulo del portafolio finalizado, alineado y de alto impacto."
        ]
    },
    {
        name: "META",
        icon: "3",
        color: "from-blue-500 to-cyan-500",
        features: [
            "Modalidad: Online - Acompañamiento Integral Individual.",
            "Descripción: El soporte más completo para diseñar y construir tu portafolio.",
            "Duración: Programa de 8 a 10 semanas, sesiones semanales de 60-90 min.",
            "Recursos: Todas las ventajas de RUTA + coaching y plan de trabajo integral.",
            "Resultados: Portafolio completo, coherente y de alta calidad."
        ]
    }
];

const AssistanceCard: React.FC<{ plan: typeof plans[0] }> = ({ plan }) => (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 flex flex-col">
        <div className={`p-6 bg-gradient-to-br ${plan.color} text-white text-center`}>
            <div className="text-7xl font-display font-bold mb-1">{plan.icon}</div>
            <h3 className="text-4xl font-display">{plan.name}</h3>
        </div>
        <div className="p-6 flex-grow">
            <ul className="space-y-2 text-gray-600 text-sm">
                {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>
        </div>
    </div>
);


const AssistanceSection: React.FC = () => {
    return (
        <section id="asistencias" className="h-full w-full flex flex-col justify-center items-center bg-white p-4 md:p-8">
            <div className="container mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="font-display text-3xl md:text-4xl text-gray-800 mb-2">Lo que tu necesitas</h2>
                    <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
                        Asistencias integrales, flexibles y personalizadas de acuerdo a tus necesidades.
                    </p>
                </div>
                <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
                    {plans.map((plan, index) => <AssistanceCard key={index} plan={plan} />)}
                </div>
            </div>
        </section>
    );
};

export default AssistanceSection;
