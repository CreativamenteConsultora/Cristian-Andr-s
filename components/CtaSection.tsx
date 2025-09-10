import React, { useState } from 'react';

const CtaSection: React.FC = () => {
    const [isScheduling, setIsScheduling] = useState(false);

    const schedulingSteps = [
        {
            title: "Selecciona el Servicio",
            description: "Elige el tipo de sesión que deseas agendar (ej. 'Sesión Gratuita MAPA')."
        },
        {
            title: "Escoge Fecha y Hora",
            description: "Navega por las fechas disponibles y selecciona el bloque horario que mejor se ajuste a ti."
        },
        {
            title: "Ingresa tus Datos",
            description: "Completa un breve formulario con tu nombre, correo y asignatura para preparar la reunión."
        },
        {
            title: "¡Listo! Revisa tu Correo",
            description: "Recibirás una confirmación instantánea y el evento se añadirá a tu calendario."
        }
    ];

    const handleScheduleClick = () => {
        setIsScheduling(true);
        // Simulate loading the calendar widget
        setTimeout(() => {
            setIsScheduling(false);
            // In a real application, you would trigger the calendar link here, e.g.:
            // window.open('YOUR_CALENDAR_LINK', '_blank');
        }, 2500);
    };

    return (
        <section id="agendar" className="h-full w-full flex justify-center items-center bg-gray-50 p-4 md:p-8">
            <div className="container mx-auto px-6">
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden lg:grid lg:grid-cols-2 max-w-6xl mx-auto">
                    <div className="p-6 md:p-10 bg-gradient-to-br from-blue-600 to-cyan-500 text-white flex flex-col justify-center">
                        <h2 className="font-display text-3xl mb-4">Conoce Más Sobre Nuestras Asistencias</h2>
                        <p className="text-base mb-6 leading-relaxed">
                            Cada uno de nuestros programas, MAPA, RUTA y META, está diseñado para ofrecerte el apoyo exacto que necesitas en cada etapa del proceso de evaluación. Desde una visión general hasta un acompañamiento integral.
                        </p>
                        <button className="bg-white text-blue-600 font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition duration-300 self-start">
                            Comparar Programas
                        </button>
                    </div>

                    <div className="p-6 md:p-10">
                        <h2 className="font-display text-3xl text-gray-800 mb-4">Agenda tu Sesión y Comienza tu Evolución</h2>
                        <p className="text-gray-600 mb-6 text-sm">
                            Tu desarrollo profesional no puede esperar. Elige el horario que más te acomode para tu Sesión Gratuita o para tu primera reunión de asesoría. El proceso es rápido y fácil.
                        </p>
                        
                        <div className="space-y-3 mb-6">
                            {schedulingSteps.map((step, index) => (
                                <div key={index} className="flex items-start">
                                    <div className="flex-shrink-0 bg-blue-500 text-white rounded-full h-8 w-8 flex items-center justify-center font-bold mr-4">{index + 1}</div>
                                    <div>
                                        <h4 className="font-semibold text-gray-700">{step.title}</h4>
                                        <p className="text-gray-500 text-sm">{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        <button 
                            onClick={handleScheduleClick}
                            disabled={isScheduling}
                            className="w-full text-center bg-[#00AEEF] text-white font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-all duration-300 text-lg flex items-center justify-center disabled:opacity-75 disabled:cursor-wait"
                        >
                           {isScheduling ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    <span>Abriendo Calendario...</span>
                                </>
                           ) : (
                               'Agendar Ahora'
                           )}
                        </button>
                         <p className="text-xs text-center text-gray-400 mt-2">Se abrirá el widget de Google Calendar</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CtaSection;