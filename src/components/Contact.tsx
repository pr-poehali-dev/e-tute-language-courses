import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Contact = () => {
  const contactInfo = [
    {
      icon: "MapPin",
      title: "Адрес",
      details: ["г. Москва, ул. Тверская, 15", 'БЦ "Центральный", 3 этаж'],
    },
    {
      icon: "Phone",
      title: "Телефон",
      details: ["+7 (495) 123-45-67", "+7 (916) 987-65-43"],
    },
    {
      icon: "Mail",
      title: "Email",
      details: ["info@e-tute.ru", "support@e-tute.ru"],
    },
    {
      icon: "Clock",
      title: "Режим работы",
      details: ["Пн-Пт: 9:00 - 21:00", "Сб-Вс: 10:00 - 18:00"],
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-6 text-gray-900">
            Свяжитесь с нами
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Есть вопросы? Мы всегда готовы помочь и предоставить подробную
            консультацию
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((item, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-sm hover:shadow-md transition-shadow"
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-etute-red to-etute-yellow rounded-lg flex items-center justify-center">
                        <Icon
                          name={item.icon as any}
                          size={20}
                          className="text-white"
                        />
                      </div>
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {item.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600 text-sm">
                        {detail}
                      </p>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold font-montserrat mb-4 text-gray-900">
                Социальные сети
              </h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-colors"
                >
                  <Icon name="Facebook" size={20} />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-white hover:bg-pink-600 transition-colors"
                >
                  <Icon name="Instagram" size={20} />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white hover:bg-green-600 transition-colors"
                >
                  <Icon name="MessageCircle" size={20} />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center text-white hover:bg-blue-500 transition-colors"
                >
                  <Icon name="Send" size={20} />
                </a>
              </div>
            </div>
          </div>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-montserrat">
                Оставьте заявку
              </CardTitle>
              <p className="text-gray-600">Мы свяжемся с вами в течение часа</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Имя
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-etute-red"
                  placeholder="Ваше имя"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Телефон
                </label>
                <input
                  type="tel"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-etute-red"
                  placeholder="+7 (999) 123-45-67"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-etute-red"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Интересующий курс
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-etute-red">
                  <option>Выберите курс</option>
                  <option>Английский язык</option>
                  <option>Китайский язык</option>
                  <option>Оба курса</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Сообщение
                </label>
                <textarea
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-etute-red"
                  placeholder="Дополнительная информация..."
                ></textarea>
              </div>
              <Button className="w-full bg-etute-red hover:bg-etute-red-dark text-white font-semibold">
                <Icon name="Send" className="mr-2" size={16} />
                Отправить заявку
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
