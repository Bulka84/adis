export interface Region {
  id: number;
  region: string;
  city: string;
  date: string;
  year: number;
  active: boolean;
  country: string;
  totalArm: number;
  totalSubstations: number;
}

export const regions: Region[] = [
  { id: 1, region: "Свердловская область", city: "Екатеринбург", date: "22.04.1992", year: 1992, active: true, country: "Россия", totalArm: 495, totalSubstations: 89 },
  { id: 2, region: "Пермский край", city: "Пермь", date: "22.06.1993", year: 1993, active: true, country: "Россия", totalArm: 322, totalSubstations: 60 },
  { id: 3, region: "Самарская область", city: "Самара", date: "30.07.1993", year: 1993, active: false, country: "Россия", totalArm: 0, totalSubstations: 0 },
  { id: 4, region: "Тюменская область", city: "Тюмень", date: "17.09.1993", year: 1993, active: false, country: "Россия", totalArm: 94, totalSubstations: 15 },
  { id: 5, region: "Смоленская область", city: "Смоленск", date: "24.07.1995", year: 1995, active: false, country: "Россия", totalArm: 49, totalSubstations: 13 },
  { id: 6, region: "Волгоградская область", city: "Волгоград", date: "04.11.1995", year: 1995, active: false, country: "Россия", totalArm: 367, totalSubstations: 0 },
  { id: 7, region: "ХМАО", city: "Сургут", date: "09.12.1995", year: 1995, active: false, country: "Россия", totalArm: 78, totalSubstations: 10 },
  { id: 8, region: "Республика Латвия", city: "Рига", date: "14.04.1997", year: 1997, active: false, country: "Латвия", totalArm: 169, totalSubstations: 15 },
  { id: 9, region: "Вологодская область", city: "Череповец", date: "17.02.1998", year: 1998, active: false, country: "Россия", totalArm: 47, totalSubstations: 7 },
  { id: 10, region: "Ивановская область", city: "Иваново", date: "26.02.2000", year: 2000, active: false, country: "Россия", totalArm: 36, totalSubstations: 6 },
  { id: 11, region: "Владимирская область", city: "Владимир", date: "30.06.2001", year: 2001, active: false, country: "Россия", totalArm: 26, totalSubstations: 3 },
  { id: 12, region: "Новгородская область", city: "Великий Новгород", date: "10.11.2001", year: 2001, active: false, country: "Россия", totalArm: 22, totalSubstations: 4 },
  { id: 13, region: "Республика Мордовия", city: "Саранск", date: "12.04.2003", year: 2003, active: false, country: "Россия", totalArm: 20, totalSubstations: 3 },
  { id: 15, region: "Московская область", city: "Люберцы", date: "04.09.2004", year: 2004, active: false, country: "Россия", totalArm: 201, totalSubstations: 0 },
  { id: 16, region: "Томская область", city: "Томск", date: "30.10.2004", year: 2004, active: true, country: "Россия", totalArm: 139, totalSubstations: 43 },
  { id: 17, region: "Республика Карелия", city: "Петрозаводск", date: "16.11.2005", year: 2005, active: true, country: "Россия", totalArm: 22, totalSubstations: 4 },
  { id: 19, region: "Иркутская область", city: "Иркутск", date: "29.11.2006", year: 2006, active: true, country: "Россия", totalArm: 217, totalSubstations: 56 },
  { id: 20, region: "Псковская область", city: "Великие Луки", date: "25.11.2008", year: 2008, active: false, country: "Россия", totalArm: 11, totalSubstations: 2 },
  { id: 21, region: "Удмуртская Республика", city: "Ижевск", date: "04.07.2009", year: 2009, active: true, country: "Россия", totalArm: 164, totalSubstations: 35 },
  { id: 22, region: "Читинская область", city: "Чита", date: "01.10.2010", year: 2010, active: false, country: "Россия", totalArm: 18, totalSubstations: 1 },
  { id: 23, region: "Кемеровская область", city: "Юрга", date: "21.09.2011", year: 2011, active: false, country: "Россия", totalArm: 13, totalSubstations: 3 },
  { id: 24, region: "Рязанская область", city: "Ряжск", date: "23.12.2011", year: 2011, active: false, country: "Россия", totalArm: 60, totalSubstations: 20 },
  { id: 26, region: "Ульяновская область", city: "Ульяновск", date: "08.11.2012", year: 2012, active: true, country: "Россия", totalArm: 147, totalSubstations: 40 },
  { id: 28, region: "Челябинская область", city: "Челябинск", date: "30.01.2013", year: 2013, active: true, country: "Россия", totalArm: 260, totalSubstations: 72 },
  { id: 29, region: "Магаданская область", city: "Магадан", date: "21.04.2014", year: 2014, active: true, country: "Россия", totalArm: 16, totalSubstations: 1 },
  { id: 30, region: "Сахалинская область", city: "Южно-Сахалинск", date: "13.10.2014", year: 2014, active: true, country: "Россия", totalArm: 101, totalSubstations: 18 },
  { id: 31, region: "Ненецкий автономный округ", city: "Нарьян-Мар", date: "24.11.2015", year: 2015, active: true, country: "Россия", totalArm: 6, totalSubstations: 1 },
  { id: 32, region: "Ленинградская область", city: "Всеволожск", date: "27.01.2016", year: 2016, active: false, country: "Россия", totalArm: 16, totalSubstations: 2 },
  { id: 33, region: "Республика Тыва", city: "Кызыл", date: "19.05.2016", year: 2016, active: true, country: "Россия", totalArm: 93, totalSubstations: 20 },
  { id: 34, region: "Красноярский край", city: "Красноярск", date: "30.10.2018", year: 2018, active: true, country: "Россия", totalArm: 313, totalSubstations: 88 },
  { id: 35, region: "Республика Хакасия", city: "Абакан", date: "09.06.2020", year: 2020, active: true, country: "Россия", totalArm: 69, totalSubstations: 21 },
];
