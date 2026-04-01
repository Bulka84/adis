import type { Metadata } from "next";
import { Star, Quote, MapPin, Calendar, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Кейсы и отзывы",
  description: "Кейсы внедрения ПК «АДИС» на станциях скорой медицинской помощи. Отзывы и благодарности заказчиков.",
};

const cases = [
  {
    region: "Свердловская область",
    city: "Екатеринбург",
    year: 1992,
    population: "1 495 000",
    workstations: 495,
    substations: 89,
    challenge: "Организация централизованного управления бригадами СМП в городе-миллионнике с разветвлённой сетью подстанций по всей области.",
    solution: "Внедрена расширенная конфигурация с полным набором АРМ, охватывающая Екатеринбург и 63 города и района Свердловской области.",
    results: ["495 рабочих мест в 64 населённых пунктах", "Единый региональный центр управления", "Работает с 1992 года — старейшее внедрение"],
  },
  {
    region: "Пермский край",
    city: "Пермь",
    year: 1993,
    population: "1 055 000",
    workstations: 322,
    substations: 60,
    challenge: "Переход от ручного управления диспетчерской службой к полностью автоматизированной системе в краевом центре и районах.",
    solution: "Поэтапное внедрение ПК «АДИС» в Перми и 18 городах края с обучением персонала и адаптацией под существующую технологию.",
    results: ["322 АРМ в 19 населённых пунктах", "Обучение всех диспетчеров за 2 смены", "Исключение дублирующих выездов"],
  },
  {
    region: "Республика Казахстан",
    city: "Астана",
    year: 2003,
    population: "более 4 000 000",
    workstations: 355,
    substations: 35,
    challenge: "Автоматизация службы скорой помощи в крупных городах Казахстана с единым управлением и контролем качества обслуживания.",
    solution: "Развёрнута система в 13 городах, включая Астану, Шымкент, Карагандинду, Актобе, Атырау и другие, с региональным центром управления.",
    results: ["355 АРМ в 13 городах Казахстана", "Охват крупнейших городов страны", "Работа с зарубежными стандартами СМП"],
  },
  {
    region: "Томская область",
    city: "Томск",
    year: 2004,
    population: "574 000",
    workstations: 139,
    substations: 43,
    challenge: "Организация единой диспетчерской службы для протяжённой области с труднодоступными районами и большими расстояниями.",
    solution: "Внедрена система с региональным центром в Томске и охватом Асино, Колпашево, Стрежевого — с учётом специфики северных территорий.",
    results: ["139 АРМ в 4 крупных центрах", "Контроль бригад в труднодоступных районах", "43 подстанции в единой сети"],
  },
  {
    region: "Республика Карелия",
    city: "Петрозаводск",
    year: 2005,
    population: "278 000",
    workstations: 22,
    substations: 4,
    challenge: "Модернизация диспетчерской службы СМП в столице Карелии с переходом на цифровое управление вызовами.",
    solution: "Внедрена базовая конфигурация ПК «АДИС» с полным охватом станции, включая мобильные АРМ для бригад.",
    results: ["22 АРМ на станции СМП", "Полная цифровизация приёма вызовов", "Стабильная работа с 2005 года"],
  },
  {
    region: "Брянская область",
    city: "Брянск",
    year: 2006,
    population: "1 002 000",
    workstations: 146,
    substations: 44,
    challenge: "Объединение разрозненных диспетчерских служб Брянска и шести районов области в единую управляемую систему.",
    solution: "Создана региональная система с центральной диспетчерской в Брянске и подключением Клинцов, Жуковки, Стародуба, Навли и других районов.",
    results: ["146 АРМ в 7 населённых пунктах", "44 подстанции в единой сети", "Региональный центр мониторинга"],
  },
  {
    region: "Иркутская область",
    city: "Иркутск",
    year: 2006,
    population: "2 375 000",
    workstations: 217,
    substations: 56,
    challenge: "Автоматизация СМП в крупнейшем регионе Сибири с охватом 37 районов, включая труднодоступные северные территории.",
    solution: "Развёрнута полнорегиональная система с центром в Иркутске и охватом всех муниципальных районов, включая Братск, Усть-Илимск и арктические поселения.",
    results: ["217 АРМ в 37 населённых пунктах", "Охват от Иркутска до Бодайбо", "Интеграция с региональным ТЦМК"],
  },
  {
    region: "Удмуртская Республика",
    city: "Ижевск",
    year: 2009,
    population: "1 507 000",
    workstations: 164,
    substations: 35,
    challenge: "Создание единой цифровой диспетчерской службы для республики с централизованным управлением из Ижевска.",
    solution: "Внедрена система в Ижевске и 8 городах республики — Глазов, Сарапул, Воткинск, Можга и другие — с региональным центром.",
    results: ["164 АРМ в 9 городах", "Централизованный мониторинг по всей республике", "35 подстанций в единой сети"],
  },
  {
    region: "Архангельская область",
    city: "Архангельск",
    year: 2012,
    population: "1 104 000",
    workstations: 189,
    substations: 26,
    challenge: "Автоматизация крупной станции СМП с несколькими подстанциями в условиях северного климата и обширной географии области.",
    solution: "Развёрнута полная конфигурация ПК «АДИС» с центральной диспетчерской и 25 подстанциями, включая Северодвинск, Котлас, Нарьян-Мар.",
    results: ["189 АРМ в 25 населённых пунктах", "Сокращение времени приёма вызова на 40%", "Охват всех районов области"],
  },
  {
    region: "Ульяновская область",
    city: "Ульяновск",
    year: 2012,
    population: "1 233 000",
    workstations: 147,
    substations: 40,
    challenge: "Создание единой диспетчерской системы для всех районов Ульяновской области с большим числом малых населённых пунктов.",
    solution: "Внедрена система в Ульяновске и 31 районе области с учётом особенностей сельской местности и малых станций СМП.",
    results: ["147 АРМ в 32 населённых пунктах", "40 подстанций в единой системе", "Охват всех муниципальных районов"],
  },
  {
    region: "Оренбургская область",
    city: "Оренбург",
    year: 2012,
    population: "1 972 000",
    workstations: 125,
    substations: 34,
    challenge: "Модернизация службы СМП в приграничном регионе с несколькими крупными городами и протяжённой территорией.",
    solution: "Развёрнута система в Оренбурге, Орске, Бузулуке и Новотроицке с региональным центром управления и мониторинга.",
    results: ["125 АРМ в 4 городах", "Единый контроль крупнейших городов области", "Региональный диспетчерский центр"],
  },
  {
    region: "Челябинская область",
    city: "Челябинск",
    year: 2013,
    population: "3 466 000",
    workstations: 260,
    substations: 72,
    challenge: "Автоматизация СМП в одном из крупнейших промышленных регионов России с 35 городами и районами.",
    solution: "Создана полнорегиональная система с центром в Челябинске, охватывающая Магнитогорск, Миасс, Копейск, Златоуст и все районы области.",
    results: ["260 АРМ в 35 населённых пунктах", "72 подстанции в единой сети", "Охват всех городов и районов области"],
  },
  {
    region: "Магаданская область",
    city: "Магадан",
    year: 2014,
    population: "140 000",
    workstations: 16,
    substations: 1,
    challenge: "Организация современной диспетчерской службы в отдалённом регионе с экстремальными климатическими условиями.",
    solution: "Внедрена компактная конфигурация ПК «АДИС», адаптированная к условиям Крайнего Севера и особенностям работы СМП в регионе.",
    results: ["16 АРМ на станции СМП Магадана", "Работа в условиях Крайнего Севера", "Стабильная работа с 2014 года"],
  },
  {
    region: "Сахалинская область",
    city: "Южно-Сахалинск",
    year: 2014,
    population: "490 000",
    workstations: 101,
    substations: 18,
    challenge: "Создание единой диспетчерской службы для островного региона с 18 муниципальными районами, разбросанными по Сахалину и Курилам.",
    solution: "Развёрнута система в Южно-Сахалинске и 18 районах области, включая труднодоступные районы Курильских островов.",
    results: ["101 АРМ в 19 населённых пунктах", "Охват всех районов Сахалина и Курил", "Единое управление островным регионом"],
  },
  {
    region: "Ненецкий автономный округ",
    city: "Нарьян-Мар",
    year: 2015,
    population: "44 000",
    workstations: 6,
    substations: 1,
    challenge: "Автоматизация единственной станции СМП в самом малонаселённом регионе России с арктическими условиями работы.",
    solution: "Внедрена специализированная конфигурация ПК «АДИС» для условий Арктики с учётом дистанционного обслуживания системы.",
    results: ["6 АРМ на станции СМП", "Работа в условиях Арктики", "Дистанционное сопровождение"],
  },
  {
    region: "Республика Тыва",
    city: "Кызыл",
    year: 2016,
    population: "330 000",
    workstations: 93,
    substations: 20,
    challenge: "Создание современной диспетчерской службы в труднодоступной горной республике с ограниченной транспортной инфраструктурой.",
    solution: "Развёрнута система в Кызыле и 7 районных центрах Тывы, включая труднодоступные Мугур-Аксы, Тоора-Хем и Кунгуртуг.",
    results: ["93 АРМ в 8 населённых пунктах", "Охват труднодоступных горных районов", "20 подстанций в единой сети"],
  },
  {
    region: "Красноярский край",
    city: "Красноярск",
    year: 2018,
    population: "2 876 000",
    workstations: 313,
    substations: 88,
    challenge: "Автоматизация СМП в крупнейшем регионе России с 54 районами, охватывающем территорию от Красноярска до Арктики.",
    solution: "Создана масштабная система с центром в Красноярске, охватывающая все районы края — от Таймыра и Эвенкии до Норильска и Минусинска.",
    results: ["313 АРМ в 54 населённых пунктах", "Крупнейшее внедрение по числу районов", "Охват от Красноярска до Арктики"],
  },
  {
    region: "Республика Хакасия",
    city: "Абакан",
    year: 2020,
    population: "537 000",
    workstations: 69,
    substations: 21,
    challenge: "Комплексная автоматизация службы СМП всей республики с единовременным охватом всех районов и специализированных учреждений.",
    solution: "В 2020 году запущена система сразу в 15 населённых пунктах Хакасии, включая РКПЦ, РКБ-Санавиацию и все районные центры.",
    results: ["69 АРМ в 15 населённых пунктах", "Одновременный запуск по всей республике", "Интеграция санавиации и РКПЦ"],
  },
];

const testimonials = [
  { quote: "Система позволила значительно сократить время обработки вызовов и повысить качество обслуживания населения. Особенно ценна функция автоматического подбора бригады.", author: "Главный врач станции СМП", city: "Архангельск", year: 2023 },
  { quote: "После внедрения ПК АДИС мы перешли на качественно новый уровень управления бригадами скорой помощи. Генератор отчётов даёт полную картину работы станции.", author: "Заместитель главного врача", city: "Екатеринбург", year: 2023 },
  { quote: "Простой интерфейс позволил обучить весь персонал за 2 смены. Система работает стабильно и надёжно уже более 15 лет без серьёзных сбоев.", author: "Старший диспетчер", city: "Пермь", year: 2022 },
  { quote: "Подсистема Аптека решила проблему учёта медикаментов на подстанциях. Теперь контроль расхода ведётся автоматически.", author: "Заведующая аптекой станции СМП", city: "Саратов", year: 2022 },
];

export default function CasesPage() {
  return (
    <>
      <section className="hero-dark min-h-screen flex items-center py-32 lg:py-40">
        <div className="hero-gradient-overlay" />
        <div className="hero-grid-pattern" />
        <div className="relative z-[2] max-w-[1200px] mx-auto px-6">
          <span className="section-tag section-tag-light mb-4">Кейсы</span>
          <h1 className="text-[clamp(36px,5vw,60px)] font-extrabold text-white leading-[1.1] tracking-[-0.03em] mb-6">
            Кейсы и отзывы
          </h1>
          <p className="text-xl text-white/60 max-w-3xl mb-12">
            Реальные результаты внедрения ПК &laquo;АДИС&raquo; на станциях
            скорой медицинской помощи по всей России и в Казахстане.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: MapPin, value: "35", label: "регионов внедрения" },
              { icon: Star, value: "4.9", label: "средняя оценка" },
              { icon: Calendar, value: "34", label: "года опыта" },
              { icon: CheckCircle, value: "100%", label: "успешных запусков" },
            ].map((item) => (
              <div key={item.label} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 text-center">
                <item.icon size={24} className="text-primary mx-auto mb-3" />
                <div className="text-2xl font-extrabold text-white mb-1">{item.value}</div>
                <div className="text-sm text-white/50">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cases */}
      <section className="py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <span className="section-tag mb-4">Внедрения</span>
            <h2 className="text-[clamp(32px,4vw,48px)] font-extrabold text-gray-900 leading-[1.15] tracking-[-0.03em]">Кейсы внедрений</h2>
          </div>
          <div className="space-y-6">
            {cases.map((item) => (
              <div key={item.city} className="bg-[#e8f0fe] rounded-2xl border border-[#b0ccf5] overflow-hidden card-hover">
                <div className="relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-[3px] gradient-bg" />
                  <div className="p-8 lg:p-10">
                    <div className="flex flex-wrap items-center gap-4 mb-6">
                      <h3 className="text-2xl font-extrabold text-gray-900 flex items-center gap-2">
                        <MapPin size={22} className="text-primary" />
                        {item.city}
                      </h3>
                      <span className="text-sm text-gray-500 font-medium">{item.region}</span>
                      <span className="text-sm gradient-bg-subtle text-primary px-3 py-1 rounded-full font-semibold flex items-center gap-1">
                        <Calendar size={14} />
                        с {item.year} года
                      </span>
                      <span className="text-sm text-gray-500">
                        АРМ: {item.workstations} · ПС: {item.substations}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      <div>
                        <h4 className="text-[13px] font-semibold text-gray-400 uppercase tracking-wider mb-3">Задача</h4>
                        <p className="text-gray-500 leading-relaxed text-[15px]">{item.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-[13px] font-semibold text-gray-400 uppercase tracking-wider mb-3">Решение</h4>
                        <p className="text-gray-500 leading-relaxed text-[15px]">{item.solution}</p>
                      </div>
                      <div>
                        <h4 className="text-[13px] font-semibold text-gray-400 uppercase tracking-wider mb-3">Результаты</h4>
                        <ul className="space-y-2">
                          {item.results.map((r) => (
                            <li key={r} className="flex items-start gap-2 text-gray-500">
                              <CheckCircle size={16} className="text-green-500 shrink-0 mt-0.5" />
                              <span className="text-sm">{r}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#dce0ea]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <span className="section-tag mb-4">Отзывы</span>
            <h2 className="text-[clamp(32px,4vw,48px)] font-extrabold text-gray-900 leading-[1.15] tracking-[-0.03em]">Отзывы заказчиков</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((item, i) => (
              <div key={i} className="bg-[#e8f0fe] p-8 rounded-2xl border border-[#b0ccf5] card-hover">
                <Quote size={32} className="text-primary/20 mb-4" />
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={16} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-500 leading-relaxed mb-6 italic text-[15px]">
                  &laquo;{item.quote}&raquo;
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-gray-900">{item.author}</div>
                    <div className="text-sm text-gray-400">{item.city}</div>
                  </div>
                  <div className="text-sm text-gray-400">{item.year}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
