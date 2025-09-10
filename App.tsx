import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ContextSection from './components/ContextSection';
import StrengthsSection from './components/StrengthsSection';
import DiagramSection from './components/DiagramSection';
import Module1Section from './components/Module1Section';
import Module2Section from './components/Module2Section';
import Module3Section from './components/Module3Section';
import AssistanceSection from './components/AssistanceSection';
import CtaSection from './components/CtaSection';
import SearchResultsModal from './components/SearchResultsModal';

const sections = [
  <HeroSection />,
  <ContextSection />,
  <StrengthsSection />,
  <DiagramSection />,
  <Module1Section />,
  <Module2Section />,
  <Module3Section />,
  <AssistanceSection />,
  <CtaSection />,
];

const searchableContent = [
  { slideIndex: 0, title: "Inicio", content: "Transforma tu Evaluación Docente. Te ofrecemos herramientas conceptuales, técnicas y prácticas para abordar con éxito la Elaboración del Portafolio y el proceso de Evaluación Docente. Descubre Nuestros Programas" },
  { slideIndex: 1, title: "Contexto", content: "¿Qué es Evolución Docente? Es un programa que permite ofrecer soluciones colaborativas para entregar herramientas conceptuales, técnicas y prácticas para que profesoras y profesores puedan abordar de manera efectiva el proceso de Evaluación Docente y la Elaboración del Portafolio. ¿Cuál es el contexto? La evaluación docente en Chile, bajo la Ley N° 21.625, establece el Sistema de Reconocimiento, que evalúa conocimientos específicos y pedagógicos por medio del Portafolio o la Evaluación de Conocimientos Específicos y Pedagógicos (ECEP). ¿En qué te ayuda Evolución Docente? FACILITA la entrega de los productos requeridos en el portafolio. REDUCE el exceso de tiempo. PROMUEVE el desarrollo de competencias docentes. GARANTIZA un acompañamiento oportuno y responsable." },
  { slideIndex: 2, title: "Fortalezas", content: "Modelo de Asesoría. La eficacia y respuesta oportuna de nuestro programa se fundamenta en estas tres fortalezas. FORTALEZA 1: Amplio conocimiento del proceso, los instrumentos, rúbricas y recursos del proceso de evaluación. FORTALEZA 2: Asesoría realizadas por docentes con experiencia y calificados. FORTALEZA 3: Diseño de programas personalizados, flexibles y adecuados a la realidad." },
  { slideIndex: 3, title: "Diagrama de Módulos", content: "¿Qué tareas forman parte del Portafolio? El Portafolio está organizado en tres Módulos. MÓDULO 1: Planificación, Evaluación formativa, Reflexión socioemocionales. MÓDULO 2: Tarea 4 Clase grabada. MÓDULO 3: Tarea 5 Trabajo colaborativo. Módulos 1 y 2 se desarrollan con estudiantes entre 7° Básico y 4° Medio. Módulo 3 corresponde a aspectos transversales." },
  { slideIndex: 4, title: "Módulo 1", content: "Módulo 1: Planificación, Evaluación y Reflexión. Tareas del Módulo: Planificación, Evaluación formativa, Reflexión socioemocionales. ¿Qué me evaluarán? Coherencia, diversidad, evaluación formativa, análisis de resultados, reflexión, capacidad de identificar fortalezas. Desempeño Esperado: Diseño de experiencias innovadoras, uso sistemático de datos, clima de aula positivo, reflexión crítica. Instrucciones Clave: Realizar con estudiantes de 7° Básico a 4° Medio, articular las tres tareas, fundamentar en el Marco para la Buena Enseñanza." },
  { slideIndex: 5, title: "Módulo 2", content: "Módulo 2: Clase Grabada. Tarea del Módulo: Tarea 4 Clase grabada, presentar grabación de 40 minutos. ¿Qué me evaluarán? Ambiente de aprendizaje, participación y colaboración, organización de actividades, pensamiento crítico, creativo o metacognición. Desempeño Esperado: Involucra a estudiantes en la construcción de aprendizajes, aprovecha intervenciones, monitorea aprendizajes actitudinales. Instrucciones Clave: Seleccionar un Objetivo de Aprendizaje (OA), planificar clase de 40 minutos, confirmar fecha y hora de grabación." },
  { slideIndex: 6, title: "Módulo 3", content: "Módulo 3: Trabajo Colaborativo. Tarea del Módulo: Tarea 5 Trabajo colaborativo, describir una experiencia y reflexionar. Incluye parte obligatoria y voluntaria. ¿Qué me evaluarán? Capacidad para trabajar colaborativamente, contribución a metas comunes, comunicación efectiva, reflexión sobre el rol. Desempeño Esperado: Liderazgo de iniciativas colaborativas, uso de la colaboración para desarrollo profesional, generación de conocimiento pedagógico. Instrucciones Clave: No es obligatorio desarrollarlo en un curso particular, puede ser con docentes, directivos, etc." },
  { slideIndex: 7, title: "Asistencias", content: "Lo que tu necesitas. Asistencias integrales, flexibles y personalizadas. MAPA: Modalidad Online Grupal, visión panorámica. RUTA: Modalidad Online Individual, te guiamos en un módulo específico. META: Modalidad Online Acompañamiento Integral Individual, soporte completo para tu portafolio." },
  { slideIndex: 8, title: "Agendar Sesión", content: "Conoce Más Sobre Nuestras Asistencias. Agenda tu Sesión y Comienza tu Evolución. Selecciona el Servicio, Escoge Fecha y Hora, Ingresa tus Datos, ¡Listo! Revisa tu Correo. Agendar Ahora. Google Calendar." },
];

interface SearchResult {
  slideIndex: number;
  title: string;
  snippet: string;
}

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const goToSlide = useCallback((slideIndex: number) => {
    if (slideIndex >= 0 && slideIndex < sections.length) {
      setCurrentSlide(slideIndex);
    }
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev < sections.length - 1 ? prev + 1 : prev));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  const handleSearch = (query: string) => {
    if (!query.trim()) {
      setSearchResults([]);
      setIsModalOpen(false);
      return;
    }

    const lowerCaseQuery = query.toLowerCase();
    const results: SearchResult[] = [];
    const regex = new RegExp(`(${query})`, 'gi');

    for (const item of searchableContent) {
      if (item.content.toLowerCase().includes(lowerCaseQuery)) {
        const index = item.content.toLowerCase().indexOf(lowerCaseQuery);
        const start = Math.max(0, index - 50);
        const end = Math.min(item.content.length, index + lowerCaseQuery.length + 50);
        
        let snippet = item.content.substring(start, end);
        snippet = snippet.replace(/</g, "&lt;").replace(/>/g, "&gt;");
        snippet = snippet.replace(regex, '<strong class="bg-yellow-200 rounded-sm px-0.5">$1</strong>');

        results.push({
          slideIndex: item.slideIndex,
          title: item.title,
          snippet: `${start > 0 ? '...' : ''}${snippet}${end < item.content.length ? '...' : ''}`
        });
      }
    }
    setSearchResults(results);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="bg-gray-50 h-screen w-screen overflow-hidden flex flex-col">
      <Header goToSlide={goToSlide} currentSlide={currentSlide} onSearch={handleSearch} />

      <main className="flex-grow relative overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}vw)`, width: `${sections.length * 100}vw` }}
        >
          {sections.map((sectionElement, index) => {
            let elementToRender = sectionElement;
            // Add goToSlide prop to module sections
            if ([4, 5, 6].includes(index)) {
              elementToRender = React.cloneElement(sectionElement, { goToSlide });
            }
            return (
              <div key={index} className="w-screen h-full flex-shrink-0 box-border">
                {elementToRender}
              </div>
            );
          })}
        </div>

        {/* Navigation Arrows */}
        {currentSlide > 0 && (
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/50 hover:bg-white/80 rounded-full p-2 z-30 transition-opacity"
            aria-label="Previous slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}
        {currentSlide < sections.length - 1 && (
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/50 hover:bg-white/80 rounded-full p-2 z-30 transition-opacity"
            aria-label="Next slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}

        {/* Navigation Dots */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
          {sections.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-[#00AEEF] scale-125' : 'bg-gray-300 hover:bg-gray-400'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </main>

      <SearchResultsModal 
        isOpen={isModalOpen}
        results={searchResults}
        onClose={closeModal}
        onNavigate={goToSlide}
      />
    </div>
  );
};

export default App;