// Translation strings for supported languages
const translations = {
  ka: {
    title: "გამოიცანი საქართველოს შესახებ 🇬🇪",
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
        options: ["-- აირჩიე პასუხი --", "ბაზალეთი", "პარავანი", "ლისი"],
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
    title: "Guess About Georgia 🇬🇪",
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
  }
};

export default translations;
