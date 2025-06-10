// Translation strings for supported languages
const translations = {
  ka: {
    title: "გამოიცანი საქართველოს შესახებ",
    subtitle: "თუ გამოიცნობ სწორად – მიიღებ 50%-იან ფასდაკლებას!<br>თუკი ვერ – მაინც მიიღებ 35%-იანს!",
    questions: [
      {
        question: "რომელია საქართველოს დედაქალაქი?",
        options: ["-- აირჩიე პასუხი --", "ბათუმი", "თბილისი", "ქუთაისი"],
        answer: 2
      },
      {
        question: "რომელია საქართველოს ყველაზე მაღალი მთა?",
        options: ["-- აირჩიე პასუხი --", "ყაზბეგი", "შხარა", "თეთნულდი"],
        answer: 2
      },
      {
        question: "რომელი მდინარე გაედინება თბილისში?",
        options: ["-- აირჩიე პასუხი --", "მტკვარი", "რიონი", "ენგური"],
        answer: 1
      },
      {
        question: "რომელია ქართული ღვინის ცნობილი სახეობა?",
        options: ["-- აირჩიე პასუხი --", "საფერავი", "შარდონე", "კაბერნე"],
        answer: 1
      },
      {
        question: "რომელია საქართველოს შავი ზღვის კურორტი?",
        options: ["-- აირჩიე პასუხი --", "ბათუმი", "გუდაური", "ბაკურიანი"],
        answer: 1
      },
      {
        question: "რომელია საქართველოს ეროვნული კერძი?",
        options: ["-- აირჩიე პასუხი --", "ხინკალი", "სუში", "პიცა"],
        answer: 1
      },
      {
        question: "რომელი ქალაქია ცნობილი გოგირდის აბანოებით?",
        options: ["-- აირჩიე პასუხი --", "ქუთაისი", "თბილისი", "ბათუმი"],
        answer: 2
      },
      {
        question: "რომელია საქართველოს ეროვნული სიმბოლო?",
        options: ["-- აირჩიე პასუხი --", "ვაზის ფოთოლი", "მზის ყვავილი", "მუხის ფოთოლი"],
        answer: 1
      },
      {
        question: "რომელია საქართველოს ყველაზე დიდი ტბა?",
        options: ["-- აირჩიე პასუხი --", "ბაზალეთი", "ფარავანი", "ლისი"],
        answer: 2
      },
      {
        question: "რომელი ქალაქია ცნობილი მუსიკალური ფესტივალებით ზაფხულში?",
        options: ["-- აირჩიე პასუხი --", "ბათუმი", "თელავი", "რუსთავი"],
        answer: 1
      },
      {
        question: "რომელია საქართველოს უძველესი ქალაქი?",
        options: ["-- აირჩიე პასუხი --", "მცხეთა", "ფოთი", "გორი"],
        answer: 1
      },
      {
        question: "რომელია საქართველოს ყველაზე გრძელი მდინარე?",
        options: ["-- აირჩიე პასუხი --", "რიონი", "მტკვარი", "ენგური"],
        answer: 2
      },
      {
        question: "რომელია საქართველოს ყველაზე დიდი ეროვნული პარკი?",
        options: ["-- აირჩიე პასუხი --", "ბორჯომ-ხარაგაული", "ვაშლოვანი", "მტირალა"],
        answer: 1
      },
      {
        question: "რომელი ქალაქია ცნობილი ნარიყალას ციხით?",
        options: ["-- აირჩიე პასუხი --", "თბილისი", "ქუთაისი", "ბათუმი"],
        answer: 1
      },
      {
        question: "რომელია საქართველოს ყველაზე პოპულარული სათხილამურო კურორტი?",
        options: ["-- აირჩიე პასუხი --", "გუდაური", "ბათუმი", "ფოთი"],
        answer: 1
      },
      {
        question: "რომელია საქართველოს ყველაზე დიდი კუნძული?",
        options: ["-- აირჩიე პასუხი --", "ტამარისი", "პალიასტომი", "არ არსებობს დიდი კუნძული"],
        answer: 3
      },
      {
        question: "რომელი ქალაქია ცნობილი ბაგრატის ტაძრით?",
        options: ["-- აირჩიე პასუხი --", "ქუთაისი", "თბილისი", "ბათუმი"],
        answer: 1
      },
      {
        question: "რომელია საქართველოს ყველაზე ცნობილი მღვიმე?",
        options: ["-- აირჩიე პასუხი --", "პრომეთეს მღვიმე", "სათაფლია", "დავითგარეჯა"],
        answer: 1
      },
      {
        question: "რომელია საქართველოს ყველაზე დიდი ბაზრობა?",
        options: ["-- აირჩიე პასუხი --", "ლილო", "დეზერტირების", "საბურთალო"],
        answer: 1
      },
      {
        question: "რომელია საქართველოს ყველაზე პოპულარული ტკბილეული?",
        options: ["-- აირჩიე პასუხი --", "ჩურჩხელა", "შოკოლადი", "მარციპანი"],
        answer: 1
      }
    ],
    submit: "გაგზავნა",
    correct: "გილოცავ! 🎉 შენ მიიღე 50%-იანი ფასდაკლება!",
    wrong: "კინაღამ გამოიცანი! შენ მიიღე 35%-იანი ფასდაკლება! 🧡",
    choose: "გთხოვ აირჩიე პასუხი ☝️"
  },
  en: {
    title: "Guess About Georgia",
    subtitle: "Guess correctly – get a 50% discount!<br>If not – you still get 35% off!",
    questions: [
      {
        question: "What is the capital of Georgia?",
        options: ["-- Choose an answer --", "Batumi", "Tbilisi", "Kutaisi"],
        answer: 2
      },
      {
        question: "Which is the highest mountain in Georgia?",
        options: ["-- Choose an answer --", "Kazbegi", "Shkhara", "Tetnuldi"],
        answer: 2
      },
      {
        question: "Which river flows through Tbilisi?",
        options: ["-- Choose an answer --", "Mtkvari", "Rioni", "Enguri"],
        answer: 1
      },
      {
        question: "Which is a famous Georgian wine?",
        options: ["-- Choose an answer --", "Saperavi", "Chardonnay", "Cabernet"],
        answer: 1
      },
      {
        question: "Which is a Black Sea resort in Georgia?",
        options: ["-- Choose an answer --", "Batumi", "Gudauri", "Bakuriani"],
        answer: 1
      },
      {
        question: "Which is a traditional Georgian dish?",
        options: ["-- Choose an answer --", "Khinkali", "Sushi", "Pizza"],
        answer: 1
      },
      {
        question: "Which city is famous for sulfur baths?",
        options: ["-- Choose an answer --", "Kutaisi", "Tbilisi", "Batumi"],
        answer: 2
      },
      {
        question: "Which is a national symbol of Georgia?",
        options: ["-- Choose an answer --", "Grape leaf", "Sunflower", "Oak leaf"],
        answer: 1
      },
      {
        question: "Which is the largest lake in Georgia?",
        options: ["-- Choose an answer --", "Bazaleti", "Paravani", "Lisi"],
        answer: 2
      },
      {
        question: "Which city is famous for summer music festivals?",
        options: ["-- Choose an answer --", "Batumi", "Telavi", "Rustavi"],
        answer: 1
      },
      {
        question: "Which is the oldest city in Georgia?",
        options: ["-- Choose an answer --", "Mtskheta", "Poti", "Gori"],
        answer: 1
      },
      {
        question: "Which is the longest river in Georgia?",
        options: ["-- Choose an answer --", "Rioni", "Mtkvari", "Enguri"],
        answer: 2
      },
      {
        question: "Which is the largest national park in Georgia?",
        options: ["-- Choose an answer --", "Borjomi-Kharagauli", "Vashlovani", "Mtirala"],
        answer: 1
      },
      {
        question: "Which city is famous for Narikala Fortress?",
        options: ["-- Choose an answer --", "Tbilisi", "Kutaisi", "Batumi"],
        answer: 1
      },
      {
        question: "Which is the most popular ski resort in Georgia?",
        options: ["-- Choose an answer --", "Gudauri", "Batumi", "Poti"],
        answer: 1
      },
      {
        question: "Which is the largest island in Georgia?",
        options: ["-- Choose an answer --", "Tamarisi", "Paliastomi", "There is no large island"],
        answer: 3
      },
      {
        question: "Which city is famous for Bagrati Cathedral?",
        options: ["-- Choose an answer --", "Kutaisi", "Tbilisi", "Batumi"],
        answer: 1
      },
      {
        question: "Which is the most famous cave in Georgia?",
        options: ["-- Choose an answer --", "Prometheus Cave", "Sataplia", "David Gareja"],
        answer: 1
      },
      {
        question: "Which is the largest market in Georgia?",
        options: ["-- Choose an answer --", "Lilo", "Deserters", "Saburtalo"],
        answer: 1
      },
      {
        question: "Which is the most popular Georgian sweet?",
        options: ["-- Choose an answer --", "Churchkhela", "Chocolate", "Marzipan"],
        answer: 1
      }
    ],
    submit: "Submit",
    correct: "Congratulations! 🎉 You get a 50% discount!",
    wrong: "Almost! You get a 35% discount! 🧡",
    choose: "Please select an answer ☝️"
  },
  fr: {
    title: "Devinez la Géorgie",
    subtitle: "Devinez correctement – obtenez une réduction de 50 % !<br>Sinon – vous bénéficiez toujours d'une réduction de 35 % !",
    questions: [
      {
        question: "Quelle est la capitale de la Géorgie ?",
        options: ["-- Choisissez une réponse --", "Batoumi", "Tbilissi", "Kutaisi"],
        answer: 2
      },
      {
        question: "Quelle est la plus haute montagne de Géorgie ?",
        options: ["-- Choisissez une réponse --", "Kazbegui", "Chkhara", "Tetnouldi"],
        answer: 2
      },
      {
        question: "Quelle rivière traverse Tbilissi ?",
        options: ["-- Choisissez une réponse --", "Mtkvari", "Rioni", "Engouri"],
        answer: 1
      },
      {
        question: "Quel est un vin géorgien célèbre ?",
        options: ["-- Choisissez une réponse --", "Saperavi", "Chardonnay", "Cabernet"],
        answer: 1
      },
      {
        question: "Quelle est une station balnéaire de la mer Noire en Géorgie ?",
        options: ["-- Choisissez une réponse --", "Batoumi", "Goudaouri", "Bakouriani"],
        answer: 1
      },
      {
        question: "Quel est un plat traditionnel géorgien ?",
        options: ["-- Choisissez une réponse --", "Khinkali", "Sushi", "Pizza"],
        answer: 1
      },
      {
        question: "Quelle ville est célèbre pour ses bains sulfureux ?",
        options: ["-- Choisissez une réponse --", "Koutaïssi", "Tbilissi", "Batoumi"],
        answer: 2
      },
      {
        question: "Quel est un symbole national de la Géorgie ?",
        options: ["-- Choisissez une réponse --", "Feuille de vigne", "Tournesol", "Feuille de chêne"],
        answer: 1
      },
      {
        question: "Quel est le plus grand lac de Géorgie ?",
        options: ["-- Choisissez une réponse --", "Bazaleti", "Paravani", "Lisi"],
        answer: 2
      },
      {
        question: "Quelle ville est célèbre pour ses festivals de musique d'été ?",
        options: ["-- Choisissez une réponse --", "Batoumi", "Telavi", "Roustavi"],
        answer: 1
      },
      {
        question: "Quelle est la plus ancienne ville de Géorgie ?",
        options: ["-- Choisissez une réponse --", "Mtskheta", "Poti", "Gori"],
        answer: 1
      },
      {
        question: "Quelle est la plus longue rivière de Géorgie ?",
        options: ["-- Choisissez une réponse --", "Rioni", "Mtkvari", "Engouri"],
        answer: 2
      },
      {
        question: "Quel est le plus grand parc national de Géorgie ?",
        options: ["-- Choisissez une réponse --", "Borjomi-Kharagauli", "Vashlovani", "Mtirala"],
        answer: 1
      },
      {
        question: "Quelle ville est célèbre pour la forteresse de Narikala ?",
        options: ["-- Choisissez une réponse --", "Tbilissi", "Koutaïssi", "Batoumi"],
        answer: 1
      },
      {
        question: "Quelle est la station de ski la plus populaire de Géorgie ?",
        options: ["-- Choisissez une réponse --", "Goudaouri", "Batoumi", "Poti"],
        answer: 1
      },
      {
        question: "Quelle est la plus grande île de Géorgie ?",
        options: ["-- Choisissez une réponse --", "Tamarisi", "Paliastomi", "Il n'y a pas de grande île"],
        answer: 3
      },
      {
        question: "Quelle ville est célèbre pour la cathédrale de Bagrati ?",
        options: ["-- Choisissez une réponse --", "Koutaïssi", "Tbilissi", "Batoumi"],
        answer: 1
      },
      {
        question: "Quelle est la grotte la plus célèbre de Géorgie ?",
        options: ["-- Choisissez une réponse --", "Grotte de Prométhée", "Sataplia", "David Gareja"],
        answer: 1
      },
      {
        question: "Quel est le plus grand marché de Géorgie ?",
        options: ["-- Choisissez une réponse --", "Lilo", "Deserteurs", "Sabourtalo"],
        answer: 1
      },
      {
        question: "Quel est le bonbon géorgien le plus populaire ?",
        options: ["-- Choisissez une réponse --", "Churchkhela", "Chocolat", "Massepain"],
        answer: 1
      }
    ],
    submit: "Soumettre",
    correct: "Félicitations ! 🎉 Vous obtenez une réduction de 50 % !",
    wrong: "Presque ! Vous obtenez une réduction de 35 % ! 🧡",
    choose: "Veuillez sélectionner une réponse ☝️"
  },
  de: {
    title: "Über Georgien raten",
    subtitle: "Richtig geraten – 50% Rabatt!<br>Wenn nicht – erhalten Sie immer noch 35% Rabatt!",
    questions: [
      {
        question: "Was ist die Hauptstadt Georgiens?",
        options: ["-- Wählen Sie eine Antwort --", "Batumi", "Tiflis", "Kutaisi"],
        answer: 2
      },
      {
        question: "Welches ist der höchste Berg in Georgien?",
        options: ["-- Wählen Sie eine Antwort --", "Kasbegi", "Schchara", "Tetnuldi"],
        answer: 2
      },
      {
        question: "Welcher Fluss fließt durch Tiflis?",
        options: ["-- Wählen Sie eine Antwort --", "Mtkvari", "Rioni", "Enguri"],
        answer: 1
      },
      {
        question: "Welcher ist ein berühmter georgischer Wein?",
        options: ["-- Wählen Sie eine Antwort --", "Saperawi", "Chardonnay", "Cabernet"],
        answer: 1
      },
      {
        question: "Welcher ist ein Schwarzmeer-Kurort in Georgien?",
        options: ["-- Wählen Sie eine Antwort --", "Batumi", "Gudauri", "Bakuriani"],
        answer: 1
      },
      {
        question: "Welches ist ein traditionelles georgisches Gericht?",
        options: ["-- Wählen Sie eine Antwort --", "Chinkali", "Sushi", "Pizza"],
        answer: 1
      },
      {
        question: "Welche Stadt ist berühmt für Schwefelbäder?",
        options: ["-- Wählen Sie eine Antwort --", "Kutaisi", "Tiflis", "Batumi"],
        answer: 2
      },
      {
        question: "Welches ist ein nationales Symbol Georgiens?",
        options: ["-- Wählen Sie eine Antwort --", "Weinblatt", "Sonnenblume", "Eichenblatt"],
        answer: 1
      },
      {
        question: "Welches ist der größte See in Georgien?",
        options: ["-- Wählen Sie eine Antwort --", "Bazaleti", "Parawani", "Lisi"],
        answer: 2
      },
      {
        question: "Welche Stadt ist bekannt für Sommer-Musikfestivals?",
        options: ["-- Wählen Sie eine Antwort --", "Batumi", "Telawi", "Rustawi"],
        answer: 1
      },
      {
        question: "Welches ist die älteste Stadt Georgiens?",
        options: ["-- Wählen Sie eine Antwort --", "Mtskheta", "Poti", "Gori"],
        answer: 1
      },
      {
        question: "Welcher ist der längste Fluss in Georgien?",
        options: ["-- Wählen Sie eine Antwort --", "Rioni", "Mtkvari", "Enguri"],
        answer: 2
      },
      {
        question: "Welches ist der größte Nationalpark in Georgien?",
        options: ["-- Wählen Sie eine Antwort --", "Bordschomi-Charagauli", "Waschlowani", "Mtirala"],
        answer: 1
      },
      {
        question: "Welche Stadt ist berühmt für die Festung Narikala?",
        options: ["-- Wählen Sie eine Antwort --", "Tiflis", "Kutaisi", "Batumi"],
        answer: 1
      },
      {
        question: "Welches ist das beliebteste Skigebiet in Georgien?",
        options: ["-- Wählen Sie eine Antwort --", "Gudauri", "Batumi", "Poti"],
        answer: 1
      },
      {
        question: "Welches ist die größte Insel in Georgien?",
        options: ["-- Wählen Sie eine Antwort --", "Tamarisi", "Paliastomi", "Es gibt keine große Insel"],
        answer: 3
      },
      {
        question: "Welche Stadt ist berühmt für die Bagrati-Kathedrale?",
        options: ["-- Wählen Sie eine Antwort --", "Kutaisi", "Tiflis", "Batumi"],
        answer: 1
      },
      {
        question: "Welches ist die berühmteste Höhle in Georgien?",
        options: ["-- Wählen Sie eine Antwort --", "Prometheus-Höhle", "Sataplia", "David Garedscha"],
        answer: 1
      },
      {
        question: "Welches ist der größte Markt in Georgien?",
        options: ["-- Wählen Sie eine Antwort --", "Lilo", "Deserteurs", "Saburtalo"],
        answer: 1
      },
      {
        question: "Welches ist die beliebteste georgische Süßigkeit?",
        options: ["-- Wählen Sie eine Antwort --", "Churchchela", "Schokolade", "Marzipan"],
        answer: 1
      }
    ],
    submit: "Senden",
    correct: "Herzlichen Glückwunsch! 🎉 Sie erhalten 50% Rabatt!",
    wrong: "Fast! Sie erhalten 35% Rabatt! 🧡",
    choose: "Bitte wählen Sie eine Antwort ☝️"
  },
  ru: {
    title: "Угадай о Грузии",
    subtitle: "Угадай правильно – получи скидку 50%!<br>Если нет – все равно получишь 35%!",
    questions: [
      {
        question: "Какая столица Грузии?",
        options: ["-- Выберите ответ --", "Батуми", "Тбилиси", "Кутаиси"],
        answer: 2
      },
      {
        question: "Какая самая высокая гора в Грузии?",
        options: ["-- Выберите ответ --", "Казбеги", "Шхара", "Тетнулди"],
        answer: 2
      },
      {
        question: "Какая река протекает через Тбилиси?",
        options: ["-- Выберите ответ --", "Мтквари", "Риони", "Энгури"],
        answer: 1
      },
      {
        question: "Какое известное грузинское вино?",
        options: ["-- Выберите ответ --", "Саперави", "Шардоне", "Каберне"],
        answer: 1
      },
      {
        question: "Какой черноморский курорт в Грузии?",
        options: ["-- Выберите ответ --", "Батуми", "Гудаури", "Бакуриани"],
        answer: 1
      },
      {
        question: "Какое традиционное грузинское блюдо?",
        options: ["-- Выберите ответ --", "Хинкали", "Суши", "Пицца"],
        answer: 1
      },
      {
        question: "Какой город известен серными банями?",
        options: ["-- Выберите ответ --", "Кутаиси", "Тбилиси", "Батуми"],
        answer: 2
      },
      {
        question: "Какой национальный символ Грузии?",
        options: ["-- Выберите ответ --", "Виноградный лист", "Подсолнух", "Дубовый лист"],
        answer: 1
      },
      {
        question: "Какое самое большое озеро в Грузии?",
        options: ["-- Выберите ответ --", "Базалети", "Паравани", "Лиси"],
        answer: 2
      },
      {
        question: "Какой город известен летними музыкальными фестивалями?",
        options: ["-- Выберите ответ --", "Батуми", "Телави", "Рустави"],
        answer: 1
      },
      {
        question: "Какой самый древний город в Грузии?",
        options: ["-- Выберите ответ --", "Мцхета", "Поти", "Гори"],
        answer: 1
      },
      {
        question: "Какая самая длинная река в Грузии?",
        options: ["-- Выберите ответ --", "Риони", "Мтквари", "Энгури"],
        answer: 2
      },
      {
        question: "Какой самый большой национальный парк в Грузии?",
        options: ["-- Выберите ответ --", "Боржоми-Харагаули", "Вашлованский", "Мтирала"],
        answer: 1
      },
      {
        question: "Какой город известен крепостью Нарикала?",
        options: ["-- Выберите ответ --", "Тбилиси", "Кутаиси", "Батуми"],
        answer: 1
      },
      {
        question: "Какой самый популярный горнолыжный курорт в Грузии?",
        options: ["-- Выберите ответ --", "Гудаури", "Батуми", "Поти"],
        answer: 1
      },
      {
        question: "Какой самый большой остров в Грузии?",
        options: ["-- Выберите ответ --", "Тамариси", "Палиастоми", "Большого острова нет"],
        answer: 3
      },
      {
        question: "Какой город известен собором Баграта?",
        options: ["-- Выберите ответ --", "Кутаиси", "Тбилиси", "Батуми"],
        answer: 1
      },
      {
        question: "Какая самая известная пещера в Грузии?",
        options: ["-- Выберите ответ --", "Пещера Прометея", "Сатаплия", "Давид Гареджи"],
        answer: 1
      },
      {
        question: "Какой самый большой рынок в Грузии?",
        options: ["-- Выберите ответ --", "Лило", "Дезертирский", "Сабуртало"],
        answer: 1
      },
      {
        question: "Какая самая популярная грузинская сладость?",
        options: ["-- Выберите ответ --", "Чурчхела", "Шоколад", "Марципан"],
        answer: 1
      }
    ],
    submit: "Отправить",
    correct: "Поздравляем! 🎉 Вы получаете скидку 50%!",
    wrong: "Почти! Вы получаете скидку 35%! 🧡",
    choose: "Пожалуйста, выберите ответ ☝️"
  },
  tr: {
    title: "Gürcistan Hakkında Tahmin Et 🇬🇪",
    subtitle: "Doğru Tahmin Et – %50 indirim kazan!<br>Değilse – yine de %35 indirim kazanırsın!",
    questions: [
      {
        question: "Gürcistan'ın başkenti neresidir?",
        options: ["-- Bir cevap seçin --", "Batum", "Tiflis", "Kutaisi"],
        answer: 2
      },
      {
        question: "Gürcistan'ın en yüksek dağı hangisidir?",
        options: ["-- Bir cevap seçin --", "Kazbek", "Şhara", "Tetnuldi"],
        answer: 2
      },
      {
        question: "Tiflis'ten hangi nehir geçmektedir?",
        options: ["-- Bir cevap seçin --", "Mtkvari", "Rioni", "Enguri"],
        answer: 1
      },
      {
        question: "Ünlü bir Gürcü şarabı hangisidir?",
        options: ["-- Bir cevap seçin --", "Saperavi", "Chardonnay", "Cabernet"],
        answer: 1
      },
      {
        question: "Gürcistan'da bir Karadeniz tatil beldesi hangisidir?",
        options: ["-- Bir cevap seçin --", "Batum", "Gudauri", "Bakuriani"],
        answer: 1
      },
      {
        question: "Geleneksel bir Gürcü yemeği hangisidir?",
        options: ["-- Bir cevap seçin --", "Hinkali", "Suşi", "Pizza"],
        answer: 1
      },
      {
        question: "Hangi şehir kükürt banyolarıyla ünlüdür?",
        options: ["-- Bir cevap seçin --", "Kutaisi", "Tiflis", "Batum"],
        answer: 2
      },
      {
        question: "Gürcistan'ın ulusal sembolü hangisidir?",
        options: ["-- Bir cevap seçin --", "Üzüm yaprağı", "Ayçiçeği", "Meşe yaprağı"],
        answer: 1
      },
      {
        question: "Gürcistan'ın en büyük gölü hangisidir?",
        options: ["-- Bir cevap seçin --", "Bazaleti", "Paravani", "Lisi"],
        answer: 2
      },
      {
        question: "Hangi şehir yaz müzik festivalleriyle ünlüdür?",
        options: ["-- Bir cevap seçin --", "Batum", "Telavi", "Rustavi"],
        answer: 1
      },
      {
        question: "Gürcistan'ın en eski şehri hangisidir?",
        options: ["-- Bir cevap seçin --", "Mtskheta", "Poti", "Gori"],
        answer: 1
      },
      {
        question: "Gürcistan'ın en uzun nehri hangisidir?",
        options: ["-- Bir cevap seçin --", "Rioni", "Mtkvari", "Enguri"],
        answer: 2
      },
      {
        question: "Gürcistan'ın en büyük milli parkı hangisidir?",
        options: ["-- Bir cevap seçin --", "Borjomi-Kharagauli", "Vashlovani", "Mtirala"],
        answer: 1
      },
      {
        question: "Hangi şehir Narikala Kalesi ile ünlüdür?",
        options: ["-- Bir cevap seçin --", "Tiflis", "Kutaisi", "Batum"],
        answer: 1
      },
      {
        question: "Gürcistan'ın en popüler kayak merkezi hangisidir?",
        options: ["-- Bir cevap seçin --", "Gudauri", "Batum", "Poti"],
        answer: 1
      },
      {
        question: "Gürcistan'ın en büyük adası hangisidir?",
        options: ["-- Bir cevap seçin --", "Tamarisi", "Paliastomi", "Büyük bir ada yoktur"],
        answer: 3
      },
      {
        question: "Hangi şehir Bagrati Katedrali ile ünlüdür?",
        options: ["-- Bir cevap seçin --", "Kutaisi", "Tiflis", "Batum"],
        answer: 1
      },
      {
        question: "Gürcistan'ın en ünlü mağarası hangisidir?",
        options: ["-- Bir cevap seçin --", "Prometheus Mağarası", "Sataplia", "David Gareja"],
        answer: 1
      },
      {
        question: "Gürcistan'ın en büyük pazarı hangisidir?",
        options: ["-- Bir cevap seçin --", "Lilo", "Dezertirler", "Saburtalo"],
        answer: 1
      },
      {
        question: "Gürcistan'ın en popüler tatlısı hangisidir?",
        options: ["-- Bir cevap seçin --", "Çurçhela", "Çikolata", "Marzipan"],
        answer: 1
      }
    ],
    submit: "Gönder",
    correct: "Tebrikler! 🎉 %50 indirim kazandınız!",
    wrong: "Neredeyse! %35 indirim kazandınız! 🧡",
    choose: "Lütfen bir cevap seçin ☝️"
  },
  ar: {
    title: "تخمين حول جورجيا",
    subtitle: "إذا خمنت بشكل صحيح - ستحصل على خصم 50٪!<br>إذا لم يكن كذلك - فلا يزال بإمكانك الحصول على خصم 35٪!",
    questions: [
      {
        question: "ما هي عاصمة جورجيا؟",
        options: ["-- اختر إجابة --", "باتومي", "تبليسي", "كوتايسي"],
        answer: 2
      },
      {
        question: "ما هو أعلى جبل في جورجيا؟",
        options: ["-- اختر إجابة --", "كازبيجي", "شخارا", "تيتنولدي"],
        answer: 2
      },
      {
        question: "أي نهر يتدفق عبر تبليسي؟",
        options: ["-- اختر إجابة --", "متكفاري", "ريوني", "إنغوري"],
        answer: 1
      },
      {
        question: "ما هو النبيذ الجورجي الشهير؟",
        options: ["-- اختر إجابة --", "سابيرافي", "شاردونيه", "كابرنيه"],
        answer: 1
      },
      {
        question: "ما هو منتجع البحر الأسود في جورجيا؟",
        options: ["-- اختر إجابة --", "باتومي", "جوداوري", "باكورياني"],
        answer: 1
      },
      {
        question: "ما هو الطبق الجورجي التقليدي؟",
        options: ["-- اختر إجابة --", "خينكالي", "سوشي", "بيتزا"],
        answer: 1
      },
      {
        question: "أي مدينة تشتهر بالحمامات الكبريتية؟",
        options: ["-- اختر إجابة --", "كوتايسي", "تبليسي", "باتومي"],
        answer: 2
      },
      {
        question: "ما هو الرمز الوطني لجورجيا؟",
        options: ["-- اختر إجابة --", "ورقة العنب", "دوار الشمس", "ورقة البلوط"],
        answer: 1
      },
      {
        question: "ما هي أكبر بحيرة في جورجيا؟",
        options: ["-- اختر إجابة --", "بازاليتي", "بارافاني", "ليسي"],
        answer: 2
      },
      {
        question: "أي مدينة تشتهر بمهرجانات الموسيقى الصيفية؟",
        options: ["-- اختر إجابة --", "باتومي", "تيلافي", "روستافي"],
        answer: 1
      },
      {
        question: "ما هي أقدم مدينة في جورجيا؟",
        options: ["-- اختر إجابة --", "متسخيتا", "فوتي", "غوري"],
        answer: 1
      },
      {
        question: "ما هو أطول نهر في جورجيا؟",
        options: ["-- اختر إجابة --", "ريوني", "متكفاري", "إنغوري"],
        answer: 2
      },
      {
        question: "ما هي أكبر حديقة وطنية في جورجيا؟",
        options: ["-- اختر إجابة --", "بورجومي-خاراجولي", "فاشلوفاني", "متيرالا"],
        answer: 1
      },
      {
        question: "أي مدينة تشتهر بقلعة ناريكالا؟",
        options: ["-- اختر إجابة --", "تبليسي", "كوتايسي", "باتومي"],
        answer: 1
      },
      {
        question: "ما هو أشهر منتجع تزلج في جورجيا؟",
        options: ["-- اختر إجابة --", "غودوري", "باتومي", "فوتي"],
        answer: 1
      },
      {
        question: "ما هي أكبر جزيرة في جورجيا؟",
        options: ["-- اختر إجابة --", "تاماريسي", "بالياستومي", "لا توجد جزيرة كبيرة"],
        answer: 3
      },
      {
        question: "أي مدينة تشتهر بكاتدرائية باغراتي؟",
        options: ["-- اختر إجابة --", "كوتايسي", "تبليسي", "باتومي"],
        answer: 1
      },
      {
        question: "ما هي أشهر كهف في جورجيا؟",
        options: ["-- اختر إجابة --", "كهف بروميثيوس", "ساتابليا", "ديفيد غاريجا"],
        answer: 1
      },
      {
        question: "ما هو أكبر سوق في جورجيا؟",
        options: ["-- اختر إجابة --", "ليلو", "ديزيرتيرس", "سابورتالو"],
        answer: 1
      },
      {
        question: "ما هي أشهر حلوى جورجية؟",
        options: ["-- اختر إجابة --", "تشورشخيلا", "شوكولاتة", "مارزيبان"],
        answer: 1
      }
    ],
    submit: "إرسال",
    correct: "تهانينا! 🎉 لقد حصلت على خصم 50٪!",
    wrong: "تقريبا! لقد حصلت على خصم 35٪! 🧡",
    choose: "الرجاء اختيار إجابة ☝️"
  },
  hi: {
    title: "जॉर्जिया के बारे में अनुमान लगाएँ",
    subtitle: "अगर सही अनुमान लगाया – 50% छूट पाएँ!<br>अगर नहीं – फिर भी 35% छूट पाएँ!",
    questions: [
      {
        question: "जॉर्जिया की राजधानी क्या है?",
        options: ["-- एक उत्तर चुनें --", "बटुमी", "त्बिलिसी", "कुतासी"],
        answer: 2
      },
      {
        question: "जॉर्जिया का सबसे ऊँचा पर्वत कौन सा है?",
        options: ["-- एक उत्तर चुनें --", "काज़बेगी", "शखारा", "तितनुलडी"],
        answer: 2
      },
      {
        question: "त्बिलिसी से कौन सी नदी बहती है?",
        options: ["-- एक उत्तर चुनें --", "मत्कवारी", "रियोनी", "इंगुरी"],
        answer: 1
      },
      {
        question: "एक प्रसिद्ध जॉर्जियाई शराब कौन सी है?",
        options: ["-- एक उत्तर चुनें --", "सपेरावी", "शार्डोने", "कैबरनेट"],
        answer: 1
      },
      {
        question: "जॉर्जिया में एक काला सागर रिसॉर्ट कौन सा है?",
        options: ["-- एक उत्तर चुनें --", "बटुमी", "गुदौरी", "बकुरीयानी"],
        answer: 1
      },
      {
        question: "एक पारंपरिक जॉर्जियाई व्यंजन कौन सा है?",
        options: ["-- एक उत्तर चुनें --", "खिनकली", "सुशी", "पिज्जा"],
        answer: 1
      },
      {
        question: "कौन सा शहर सल्फर स्नान के लिए प्रसिद्ध है?",
        options: ["-- एक उत्तर चुनें --", "कुतासी", "त्बिलिसी", "बटुमी"],
        answer: 2
      },
      {
        question: "जॉर्जिया का राष्ट्रीय प्रतीक क्या है?",
        options: ["-- एक उत्तर चुनें --", "अंगूर का पत्ता", "सूरजमुखी", "ओक का पत्ता"],
        answer: 1
      },
      {
        question: "जॉर्जिया की सबसे बड़ी झील कौन सी है?",
        options: ["-- एक उत्तर चुनें --", "बाज़ालेती", "पारावानी", "लिसी"],
        answer: 2
      },
      {
        question: "कौन सा शहर गर्मियों के संगीत समारोहों के लिए प्रसिद्ध है?",
        options: ["-- एक उत्तर चुनें --", "बटुमी", "टेलावी", "रुस्तावी"],
        answer: 1
      },
      {
        question: "जॉर्जिया का सबसे पुराना शहर कौन सा है?",
        options: ["-- एक उत्तर चुनें --", "मत्सखेता", "पोती", "गोरी"],
        answer: 1
      },
      {
        question: "जॉर्जिया की सबसे लंबी नदी कौन सी है?",
        options: ["-- एक उत्तर चुनें --", "रियोनी", "मत्कवारी", "इंगुरी"],
        answer: 2
      },
      {
        question: "जॉर्जिया का सबसे बड़ा राष्ट्रीय उद्यान कौन सा है?",
        options: ["-- एक उत्तर चुनें --", "बोरजोमी-खारगाउली", "वाश्लोवानी", "मतिराला"],
        answer: 1
      },
      {
        question: "कौन सा शहर नारिकला किले के लिए प्रसिद्ध है?",
        options: ["-- एक उत्तर चुनें --", "त्बिलिसी", "कुतासी", "बटुमी"],
        answer: 1
      },
      {
        question: "जॉर्जिया का सबसे लोकप्रिय स्की रिसॉर्ट कौन सा है?",
        options: ["-- एक उत्तर चुनें --", "गुदौरी", "बटुमी", "पोती"],
        answer: 1
      },
      {
        question: "जॉर्जिया का सबसे बड़ा द्वीप कौन सा है?",
        options: ["-- एक उत्तर चुनें --", "तमारिसी", "पालियास्टोमी", "कोई बड़ा द्वीप नहीं है"],
        answer: 3
      },
      {
        question: "कौन सा शहर बगराती कैथेड्रल के लिए प्रसिद्ध है?",
        options: ["-- एक उत्तर चुनें --", "कुतासी", "त्बिलिसी", "बटुमी"],
        answer: 1
      },
      {
        question: "जॉर्जिया की सबसे प्रसिद्ध गुफा कौन सी है?",
        options: ["-- एक उत्तर चुनें --", "प्रोमेथियस गुफा", "सताप्लिया", "डेविड गारेजा"],
        answer: 1
      },
      {
        question: "जॉर्जिया का सबसे बड़ा बाजार कौन सा है?",
        options: ["-- एक उत्तर चुनें --", "लिलो", "डेज़र्टर्स", "सबुरतालो"],
        answer: 1
      },
      {
        question: "जॉर्जिया की सबसे लोकप्रिय मिठाई कौन सी है?",
        options: ["-- एक उत्तर चुनें --", "चर्चखेला", "चॉकलेट", "मारज़िपन"],
        answer: 1
      }
    ],
    submit: "जमा करें",
    correct: "बधाई हो! 🎉 आपको 50% की छूट मिली!",
    wrong: "लगभग! आपको 35% की छूट मिली! 🧡",
    choose: "कृपया एक उत्तर चुनें ☝️"
  },
  zh_CN: {
    title: "猜猜格鲁吉亚",
    subtitle: "如果猜对了 – 获得 50% 折扣！<br>如果不是 – 您仍然可以获得 35% 的折扣！",
    questions: [
      {
        question: "格鲁吉亚的首都在哪里？",
        options: ["-- 选择一个答案 --", "巴统", "第比利斯", "库塔伊西"],
        answer: 2
      },
      {
        question: "格鲁吉亚最高的山是哪座？",
        options: ["-- 选择一个答案 --", "卡兹别克", "什哈拉", "特图努尔迪"],
        answer: 2
      },
      {
        question: "哪条河流经第比利斯？",
        options: ["-- 选择一个答案 --", "姆特瓦里", "里奥尼", "恩古里"],
        answer: 1
      },
      {
        question: "哪种是著名的格鲁吉亚葡萄酒？",
        options: ["-- 选择一个答案 --", "萨别拉维", "霞多丽", "赤霞珠"],
        answer: 1
      },
      {
        question: "格鲁吉亚的黑海度假胜地是哪一个？",
        options: ["-- 选择一个答案 --", "巴统", "古道里", "巴库里亚尼"],
        answer: 1
      },
      {
        question: "哪种是传统的格鲁吉亚菜肴？",
        options: ["-- 选择一个答案 --", "赫inkali", "寿司", "披萨"],
        answer: 1
      },
      {
        question: "哪个城市以硫磺浴场闻名？",
        options: ["-- 选择一个答案 --", "库塔伊西", "第比利斯", "巴统"],
        answer: 2
      },
      {
        question: "格鲁吉亚的国家象征是什么？",
        options: ["-- 选择一个答案 --", "葡萄叶", "向日葵", "橡树叶"],
        answer: 1
      },
      {
        question: "格鲁吉亚最大的湖泊是哪一个？",
        options: ["-- 选择一个答案 --", "巴扎莱蒂", "帕拉瓦尼", "利西"],
        answer: 2
      },
      {
        question: "哪个城市以夏季音乐节闻名？",
        options: ["-- 选择一个答案 --", "巴统", "特拉维", "鲁斯塔维"],
        answer: 1
      },
      {
        question: "格鲁吉亚最古老的城市是哪一个？",
        options: ["-- 选择一个答案 --", "姆茨赫塔", "波季", "哥里"],
        answer: 1
      },
      {
        question: "格鲁吉亚最长的河流是哪一条？",
        options: ["-- 选择一个答案 --", "里奥尼", "姆特瓦里", "恩古里"],
        answer: 2
      },
      {
        question: "格鲁吉亚最大的国家公园是哪一个？",
        options: ["-- 选择一个答案 --", "博尔若米-哈拉高利", "瓦什洛瓦尼", "姆蒂拉拉"],
        answer: 1
      },
      {
        question: "哪个城市以纳里卡拉要塞闻名？",
        options: ["-- 选择一个答案 --", "第比利斯", "库塔伊西", "巴统"],
        answer: 1
      },
      {
        question: "格鲁吉亚最受欢迎的滑雪胜地是哪一个？",
        options: ["-- 选择一个答案 --", "古道里", "巴统", "波季"],
        answer: 1
      },
      {
        question: "格鲁吉亚最大的岛屿是哪一个？",
        options: ["-- 选择一个答案 --", "塔马里西", "帕利亚斯托米", "没有大岛屿"],
        answer: 3
      },
      {
        question: "哪个城市以巴格拉特大教堂闻名？",
        options: ["-- 选择一个答案 --", "库塔伊西", "第比利斯", "巴统"],
        answer: 1
      },
      {
        question: "格鲁吉亚最著名的洞穴是哪一个？",
        options: ["-- 选择一个答案 --", "普罗米修斯洞穴", "萨塔普利亚", "大卫加列亚"],
        answer: 1
      },
      {
        question: "格鲁吉亚最大的市场是哪一个？",
        options: ["-- 选择一个答案 --", "利洛", "退伍军人", "萨布尔塔洛"],
        answer: 1
      },
      {
        question: "格鲁吉亚最受欢迎的甜点是哪一个？",
        options: ["-- 选择一个答案 --", "丘尔奇赫拉", "巧克力", "杏仁糖"],
        answer: 1
      }
    ],
    submit: "提交",
    correct: "恭喜！🎉 您获得了 50% 的折扣！",
    wrong: "差点！您获得了 35% 的折扣！🧡",
    choose: "请选择一个答案 ☝️"
  }
};

export default translations;
