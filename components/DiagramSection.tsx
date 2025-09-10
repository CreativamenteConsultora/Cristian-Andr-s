import React from 'react';

const ModuleBox: React.FC<{
    moduleNumber: number;
    tasks: React.ReactNode;
    important?: string;
    bgColor: string;
}> = ({ moduleNumber, tasks, important, bgColor }) => (
    <div className={`rounded-lg shadow-md text-white flex flex-col ${bgColor}`}>
        <div className="p-2 flex items-center space-x-2 border-b border-white/20">
            <h3 className="font-bold text-md">MÓDULO</h3>
            <span className="text-xl font-bold">{moduleNumber}</span>
        </div>
        <div className="p-3 text-left text-xs">
            {tasks}
            {important && <p className="mt-2 text-yellow-300 font-semibold">IMPORTANTE: <span className="font-normal">{important}</span></p>}
        </div>
    </div>
);

const DescriptionBox: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="border border-gray-300 rounded-lg p-3 text-xs text-gray-800 bg-gray-50 h-full flex items-center justify-center">
        <div className="text-center">{children}</div>
    </div>
);

const Arrow: React.FC<{ top: string; left: string; width: string; }> = ({ top, left, width }) => (
    <div className="absolute flex items-center z-0" style={{ top, left, width }}>
        <div className="flex-grow h-0.5 bg-gray-400"></div>
        <div style={{
            width: 0,
            height: 0,
            borderTop: '8px solid transparent',
            borderBottom: '8px solid transparent',
            borderLeft: '12px solid #9ca3af', // gray-400
        }}></div>
    </div>
);

const DiagramSection: React.FC = () => {
    const module1Tasks = (
        <ul className="space-y-1 list-disc list-inside">
            <li><strong>"Planificación...":</strong> describir tres experiencias de aprendizaje.</li>
            <li><strong>"Evaluación formativa":</strong> describir una estrategia de monitoreo.</li>
            <li><strong>"Reflexión... socioemocionales":</strong> reflexionar sobre aspectos de su práctica.</li>
        </ul>
    );

    const module2Tasks = (
        <p><strong>Tarea 4 "Clase grabada":</strong> presentar la grabación de una clase de 40 min. y completar una ficha descriptiva.</p>
    );

    const module3Tasks = (
        <p><strong>Tarea 5 "Trabajo colaborativo":</strong> describir una experiencia de trabajo colaborativo y reflexionar sobre ella.</p>
    );

    return (
        <section className="h-full w-full flex flex-col justify-center items-center bg-white p-2">
            <div className="container mx-auto px-4 text-center">
                <h2 className="font-display text-2xl md:text-3xl text-gray-800 mb-1">¿Qué tareas forman parte del Portafolio?</h2>
                <p className="text-sm text-gray-600 max-w-3xl mx-auto mb-4">
                    El Portafolio está organizado en tres Módulos, cada uno con sus respectivas tareas:
                </p>

                <div className="relative w-full max-w-5xl mx-auto">
                    <div className="grid grid-cols-2 gap-8 items-center">
                        {/* Left Column */}
                        <div className="flex flex-col gap-3 z-10">
                            <ModuleBox moduleNumber={1} tasks={module1Tasks} bgColor="bg-blue-600" />
                            <ModuleBox moduleNumber={2} tasks={module2Tasks} bgColor="bg-teal-600" />
                            <ModuleBox moduleNumber={3} tasks={module3Tasks} important="Incluye una parte obligatoria y otra voluntaria." bgColor="bg-indigo-600" />
                        </div>

                        {/* Right Column */}
                        <div className="flex flex-col gap-12 z-10 h-full justify-around">
                             <DescriptionBox>
                                <>
                                <strong>Módulos 1 y 2</strong> se desarrollan con estudiantes entre 7° Básico y 4° Medio de la asignatura inscrita.
                                <br /><br />
                                Pueden realizarse con el mismo curso o con cursos distintos.
                                </>
                            </DescriptionBox>
                            <DescriptionBox>
                                <strong>Módulo 3</strong> corresponde a aspectos transversales. <strong>No está ligado a un curso, nivel o asignatura en particular.</strong>
                            </DescriptionBox>
                        </div>
                    </div>
                    
                    {/* Arrows */}
                    <Arrow top="28%" left="calc(50% - 20px)" width="40px" />
                    <Arrow top="82%" left="calc(50% - 20px)" width="40px" />
                </div>
            </div>
        </section>
    );
};

export default DiagramSection;