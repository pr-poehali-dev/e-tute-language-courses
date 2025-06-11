import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-etute-red via-red-500 to-etute-yellow py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold font-montserrat mb-6 animate-fade-in">
            Изучайте языки с <span className="text-etute-yellow">E-tute</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-red-100 leading-relaxed">
            Профессиональные курсы английского и китайского языков. Современные
            методики, опытные преподаватели, гарантированный результат.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-etute-yellow hover:bg-etute-yellow-dark text-gray-900 font-semibold text-lg px-8 py-3"
            >
              <Icon name="Play" className="mr-2" size={20} />
              Начать обучение
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-etute-red text-lg px-8 py-3"
            >
              <Icon name="Phone" className="mr-2" size={20} />
              Бесплатная консультация
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Icon
                name="Users"
                size={32}
                className="mx-auto mb-4 text-etute-yellow"
              />
              <h3 className="text-xl font-semibold mb-2">1000+ студентов</h3>
              <p className="text-red-100">Довольных выпускников</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Icon
                name="Award"
                size={32}
                className="mx-auto mb-4 text-etute-yellow"
              />
              <h3 className="text-xl font-semibold mb-2">5 лет опыта</h3>
              <p className="text-red-100">На рынке образования</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Icon
                name="Star"
                size={32}
                className="mx-auto mb-4 text-etute-yellow"
              />
              <h3 className="text-xl font-semibold mb-2">4.9/5 рейтинг</h3>
              <p className="text-red-100">От наших студентов</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
