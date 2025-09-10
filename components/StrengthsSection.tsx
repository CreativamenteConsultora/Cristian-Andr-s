import React from 'react';

const strengths = [
    {
        title: "FORTALEZA 1",
        description: "Amplio conocimiento del proceso, los instrumentos, rúbricas y recursos del proceso de evaluación para desarrollar propuesta de asesoría.",
        color: "bg-blue-600"
    },
    {
        title: "FORTALEZA 2",
        description: "Asesoría realizadas por docentes con experiencia y calificados en procesos de evaluación y estándares de competencias profesionales.",
        color: "bg-purple-600"
    },
    {
        title: "FORTALEZA 3",
        description: "Diseño de programas personalizados, flexibles y adecuados a la realidad personal y laboral que requiera el solicitante.",
        color: "bg-indigo-700"
    }
];

const StrengthCard: React.FC<{ title: string; description: string; color: string; index: number }> = ({ title, description, color, index }) => (
    <div className={`p-6 rounded-2xl text-white shadow-2xl transform hover:scale-105 transition-transform duration-300 ${color}`} style={{ zIndex: 10 - index }}>
        <h3 className="text-xl font-bold border-b-2 border-white pb-2 mb-3 inline-block">{title}</h3>
        <p className="text-base leading-relaxed">{description}</p>
    </div>
);

const StrengthsSection: React.FC = () => {
    return (
        <section className="h-full w-full flex flex-col justify-center items-center bg-white p-4 md:p-8">
            <div className="container mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="font-display text-3xl md:text-4xl text-gray-800 mb-2">Modelo de Asesoría</h2>
                    <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
                        La eficacia y respuesta oportuna de nuestro programa se fundamenta en estas tres fortalezas.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {strengths.map((strength, index) => (
                        <StrengthCard key={index} {...strength} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StrengthsSection;
