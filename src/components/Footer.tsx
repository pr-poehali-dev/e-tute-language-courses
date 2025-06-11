import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-etute-red to-etute-yellow rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <span className="text-2xl font-bold font-montserrat">E-tute</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Ведущая школа изучения английского и китайского языков в Москве.
              Помогаем достигать языковых целей с 2019 года.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://wa.me/79615019263"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-etute-red transition-colors"
              >
                <Icon name="MessageCircle" size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-etute-red transition-colors"
              >
                <Icon name="Instagram" size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-etute-red transition-colors"
              >
                <Icon name="MessageCircle" size={18} />
              </a>
              <a
                href="https://t.me/79615019263"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-etute-red transition-colors"
              >
                <Icon name="Send" size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold font-montserrat mb-4">
              Курсы
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a
                  href="#"
                  className="hover:text-etute-yellow transition-colors"
                >
                  Английский для начинающих
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-etute-yellow transition-colors"
                >
                  Бизнес-английский
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-etute-yellow transition-colors"
                >
                  подготовка к ОГЭ ЕГЭ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-etute-yellow transition-colors"
                >
                  Китайский HSK
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-etute-yellow transition-colors"
                >
                  Разговорные клубы
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold font-montserrat mb-4">
              Контакты
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center space-x-2">
                <Icon name="Phone" size={16} />
                <span>+79615019263</span>
              </li>
              <li className="flex items-center space-x-2">
                <Icon name="Mail" size={16} />
                <span>e-tute@mail.ru</span>
              </li>
              <li className="flex items-center space-x-2">
                <Icon name="Clock" size={16} />
                <span>круглосуточно</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; 2024 E-tute. Все права защищены. | Политика
            конфиденциальности | Условия использования
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
