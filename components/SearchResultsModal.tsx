import React from 'react';

interface SearchResult {
    slideIndex: number;
    title: string;
    snippet: string;
}

interface SearchResultsModalProps {
    results: SearchResult[];
    isOpen: boolean;
    onClose: () => void;
    onNavigate: (slideIndex: number) => void;
}

const SearchResultsModal: React.FC<SearchResultsModalProps> = ({ results, isOpen, onClose, onNavigate }) => {
    if (!isOpen) return null;

    const handleResultClick = (slideIndex: number) => {
        onNavigate(slideIndex);
        onClose();
    };

    return (
        <div 
            className="fixed inset-0 bg-black/60 z-50 flex justify-center items-center p-4 transition-opacity duration-300 animate-fade-in"
            onClick={onClose}
            aria-modal="true"
            role="dialog"
        >
            <div 
                className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[80vh] flex flex-col"
                onClick={(e) => e.stopPropagation()}
            >
                <header className="p-4 border-b flex justify-between items-center flex-shrink-0">
                    <h2 className="text-xl font-bold text-gray-800">Resultados de la Búsqueda</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-800" aria-label="Cerrar modal">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </header>
                <main className="p-6 overflow-y-auto">
                    {results.length > 0 ? (
                        <ul className="space-y-4">
                            {results.map((result, index) => (
                                <li 
                                    key={index} 
                                    onClick={() => handleResultClick(result.slideIndex)}
                                    className="p-4 border rounded-lg hover:bg-gray-100 hover:shadow-md cursor-pointer transition-all duration-200"
                                    role="button"
                                    tabIndex={0}
                                    onKeyPress={(e) => e.key === 'Enter' && handleResultClick(result.slideIndex)}
                                >
                                    <h3 className="font-semibold text-[#00AEEF] mb-1">Encontrado en: {result.title}</h3>
                                    <p className="text-sm text-gray-700" dangerouslySetInnerHTML={{ __html: result.snippet }}></p>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <div className="text-center py-10">
                             <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p className="mt-4 text-gray-500">No se encontraron resultados para tu búsqueda.</p>
                        </div>
                    )}
                </main>
            </div>
             <style>{`
                @keyframes fade-in {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                .animate-fade-in {
                    animation: fade-in 0.3s ease-out forwards;
                }
            `}</style>
        </div>
    );
};

export default SearchResultsModal;