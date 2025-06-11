import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-etute-red to-etute-yellow rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">E</span>
            </div>
            <span className="text-2xl font-bold font-montserrat text-gray-900">
              E-tute
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#courses"
              className="text-gray-700 hover:text-etute-red transition-colors"
            >
              Курсы
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-etute-red transition-colors"
            >
              О нас
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-etute-red transition-colors"
            >
              Контакты
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              className="hidden sm:flex border-etute-red text-etute-red hover:bg-etute-red hover:text-white"
            >
              Войти
            </Button>
            <Button className="bg-etute-yellow hover:bg-etute-yellow-dark text-gray-900 font-semibold">
              Записаться
            </Button>
            <button className="md:hidden">
              <Icon name="Menu" size={24} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
