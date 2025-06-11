import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Courses = () => {
  const courses = [
    {
      id: "english",
      title: "Английский язык",
      description: "От начального до продвинутого уровня",
      icon: "BookOpen",
      color: "from-etute-red to-red-400",
      features: [
        "Разговорная практика с носителями",
        "Подготовка к ОГЭ и ЕГЭ",
        "Бизнес-английский",
        "Грамматика и лексика",
      ],
      levels: ["Beginner", "Intermediate", "Advanced"],
      duration: "6-12 месяцев",
      price: "1,000₽/час",
    },
    {
      id: "chinese",
      title: "Китайский язык",
      description: "Мандаринский диалект с нуля",
      icon: "Languages",
      color: "from-etute-yellow to-yellow-400",
      features: [
        "Изучение иероглифов",
        "Правильное произношение тонов",
        "Культурный контекст",
        "HSK подготовка",
      ],
      levels: ["HSK 1-2", "HSK 3-4", "HSK 5-6"],
      duration: "8-15 месяцев",
      price: "1,200₽/час",
    },
  ];

  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-6 text-gray-900">
            Наши курсы
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Выберите язык и начните свое путешествие к свободному общению
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {courses.map((course) => (
            <Card
              key={course.id}
              className="group hover:shadow-xl transition-shadow duration-300 border-0 overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${course.color}`}></div>
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4 mb-4">
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-r ${course.color} flex items-center justify-center`}
                  >
                    <Icon
                      name={course.icon as any}
                      size={24}
                      className="text-white"
                    />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-montserrat">
                      {course.title}
                    </CardTitle>
                    <CardDescription className="text-lg">
                      {course.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Что изучаем:
                  </h4>
                  <ul className="space-y-2">
                    {course.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center space-x-2 text-gray-700"
                      >
                        <Icon
                          name="Check"
                          size={16}
                          className="text-green-500 flex-shrink-0"
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-between items-center py-4 border-t border-gray-100">
                  <div className="space-y-1">
                    <p className="text-sm text-gray-600">Длительность</p>
                    <p className="font-semibold">{course.duration}</p>
                  </div>
                  <div className="space-y-1 text-right">
                    <p className="text-sm text-gray-600">Стоимость</p>
                    <p className="font-semibold text-etute-red">
                      {course.price}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {course.levels.map((level) => (
                    <span
                      key={level}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {level}
                    </span>
                  ))}
                </div>

                <Button className="w-full bg-etute-red hover:bg-etute-red-dark text-white font-semibold">
                  <Icon name="BookOpen" className="mr-2" size={16} />
                  Записаться на курс
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
