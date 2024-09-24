import { ChevronUpCircle } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Função para rolar para o topo
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // rolagem suave
    });
  };

  // Monitora a rolagem para exibir ou esconder o botão
  const toggleVisibility = useCallback(() => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, [toggleVisibility]);

  return (
    <div className="fixed bottom-8 right-8">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none"
          type="button"
        >
          <ChevronUpCircle />
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
