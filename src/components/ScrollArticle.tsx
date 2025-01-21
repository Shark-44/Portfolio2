import { useEffect, useRef } from 'react';

const ScrollArticle = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      // Sélectionne les articles et force leur typage en HTMLElement[]
      const articles = container.querySelectorAll('.article') as NodeListOf<HTMLElement>;
      const containerHeight = container.clientHeight;

      articles.forEach((article) => {
        const rect = article.getBoundingClientRect();
        const articleHeight = rect.height;
        const centerOffset = (containerHeight - articleHeight) / 2;

        // Calculer la progression de défilement relative à l'article
        const progress = Math.max(
          0,
          Math.min(1, (rect.top - centerOffset) / containerHeight)
        );

        // Styles dynamiques
        const opacity = 1 - Math.abs(0.5 - progress) * 2;
        const transformScale = 1 - Math.abs(0.5 - progress) * 0.1;
        const rotateX = (0.5 - progress) * 40;

        article.style.opacity = String(opacity);
        article.style.transform = `translateY(0) scale(${transformScale}) rotateX(${rotateX}deg)`;
      });
    };

    container.addEventListener('scroll', handleScroll);
    handleScroll(); // Appel initial

    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="h-full w-full overflow-y-auto relative scroll-smooth"
    >
      <div className="absolute top-0 left-0 right-0 p-8">
        <div className="flex flex-col">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
            <article
              key={index}
              className="article transform-gpu opacity-0 translate-y-12 scale-95 transition-all duration-20 bg-white rounded-lg shadow-lg p-6 mx-auto max-w-3xl"
            >
              <h2 className="text-2xl font-bold mb-1 text-gray-800">Article {index}</h2>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </article>
          ))}
        </div>
      </div>

      <style>
        {`
          .overflow-y-auto {
            scrollbar-width: thin;
            scrollbar-color: rgba(155, 155, 155, 0.5) transparent;
          }

          .overflow-y-auto::-webkit-scrollbar {
            width: 6px;
          }

          .overflow-y-auto::-webkit-scrollbar-track {
            background: transparent;
          }

          .overflow-y-auto::-webkit-scrollbar-thumb {
            background-color: rgba(155, 155, 155, 0.5);
            border-radius: 20px;
            border: transparent;
          }
        `}
      </style>
    </div>
  );
};

export default ScrollArticle;
