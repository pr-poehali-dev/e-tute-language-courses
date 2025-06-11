import Icon from "@/components/ui/icon";

const About = () => {
  const advantages = [
    {
      icon: "UserCheck",
      title: "Опытные преподаватели",
      description:
        "Наши учителя - дипломированные специалисты с международными сертификатами",
    },
    {
      icon: "Clock",
      title: "Гибкое расписание",
      description: "Занимайтесь в удобное время: утром, днем или вечером",
    },
    {
      icon: "Smartphone",
      title: "Современные технологии",
      description:
        "Интерактивные уроки, мобильное приложение, онлайн-платформа",
    },
    {
      icon: "Target",
      title: "Индивидуальный подход",
      description: "Программа обучения адаптируется под ваши цели и уровень",
    },
    {
      icon: "MessageCircle",
      title: "Разговорная практика",
      description: "Еженедельные speaking clubs с носителями языка",
    },
    {
      icon: "Trophy",
      title: "Гарантия результата",
      description: "Возврат средств, если не достигните поставленных целей",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-6 text-gray-900">
            Почему выбирают <span className="text-etute-red">E-tute</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы создали идеальную среду для изучения языков, объединив
            традиционные методики с современными технологиями и индивидуальным
            подходом к каждому студенту.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {advantages.map((item, index) => (
            <div key={index} className="group text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-etute-red to-etute-yellow rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Icon
                  name={item.icon as any}
                  size={28}
                  className="text-white"
                />
              </div>
              <h3 className="text-xl font-semibold font-montserrat mb-3 text-gray-900">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-r from-etute-red to-etute-yellow rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-bold font-montserrat mb-4">
            Готовы начать изучение языка?
          </h3>
          <p className="text-xl text-red-100 mb-8">
            Запишитесь на бесплатное пробное занятие и оцените качество обучения
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-etute-red hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
              <Icon name="Calendar" className="inline mr-2" size={20} />
              Записаться на пробный урок
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-etute-red px-8 py-3 rounded-lg font-semibold transition-colors">
              <Icon name="Download" className="inline mr-2" size={20} />
              Скачать программу курса
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
