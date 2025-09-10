import React from 'react';

const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
);

const benefits = [
    { title: "FACILITA", description: "la entrega de los productos requeridos en el portafolio alineados con el contenido requerido." },
    { title: "REDUCE", description: "el exceso de tiempo que el docente dispone para elaborar el material solicitado en el proceso." },
    { title: "PROMUEVE", description: "el desarrollo de competencias docentes sin desvincularse del objetivo del proceso de Evaluación Docente." },
    { title: "GARANTIZA", description: "un acompañamiento oportuno y responsable bajo el ejercicio de un marco ético que valora el desarrollo profesional." },
];

const ContextSection: React.FC = () => {
  return (
    <section id="contexto" className="h-full w-full flex justify-center items-center bg-gray-50 p-4 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-8 items-center">
          <div className="lg:col-span-2 bg-[#00AEEF] p-6 rounded-lg shadow-xl text-white">
            <h2 className="font-display text-3xl mb-3">¿Qué es Evolución Docente?</h2>
            <p className="text-base leading-relaxed">
              Es un programa que permite ofrecer soluciones colaborativas para entregar herramientas conceptuales, técnicas y prácticas para que profesoras y profesores puedan abordar de manera efectiva el proceso de Evaluación Docente y la Elaboración del Portafolio.
            </p>
            <div className="mt-6 bg-green-500 p-4 rounded-lg shadow-inner">
                <h3 className="font-display text-2xl mb-2">¿Cuál es el contexto?</h3>
                <p className="text-sm">
                 La evaluación docente en Chile, bajo la Ley N° 21.625, establece el Sistema de Reconocimiento, que evalúa conocimientos específicos y pedagógicos por medio del Portafolio o la Evaluación de Conocimientos Específicos y Pedagógicos (ECEP).
                </p>
            </div>
          </div>
          <div className="lg:col-span-3">
            <h2 className="font-display text-3xl text-gray-800 mb-4">¿En qué te ayuda Evolución Docente?</h2>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="flex-shrink-0 bg-[#00AEEF] rounded-full p-2 mr-3">
                    <CheckIcon />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContextSection;
