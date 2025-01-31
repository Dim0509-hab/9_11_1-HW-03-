const personGenerator = {
    surnameJson: `{  
        "count": 16,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Ивэтта",
            "id_2": "Лизэтта",
            "id_3": "Мюзэтта",
            "id_4": "Жанэтта",
            "id_5": "Жоржэтта",
            "id_6": "Клорэтта",
            "id_7": "Флорэтта",
            "id_8": "Генриетта",
            "id_9": "Полетта",
            "id_10": "Колетта"
        }
    }`,
    patronymicJson: `{
        "count": 15,
        "list": {     
            "id_1": "Ивэттов",
            "id_2": "Лизэттов",
            "id_3": "Мюзэттов",
            "id_4": "Жанэттов",
            "id_5": "Жоржэттов",
            "id_6": "Клорэттов",
            "id_7": "Флорэттов",
            "id_8": "Генриеттов",
            "id_9": "Полеттов",
            "id_10": "Колеттов",
            "id_11": "Дмитриев",
            "id_12": "Михаилов",
            "id_13": "Даниилов",
            "id_14": "Егоров",
            "id_15": "Андреев"
        }
    }`,
    professionMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Програмист",
            "id_2": "Слесарь",
            "id_3": "Воспитатель",
            "id_4": "Тракторист",
            "id_5": "Инженер",
            "id_6": "Архитектор",
            "id_7": "ЭйчАр менеджер",
            "id_8": "Мерчендайзер",
            "id_9": "Бухгалтер",
            "id_10": "Клининг менеджер"
        }
    }`,

    professionFemaleJson: `{               
        "count": 10,
        "list": {     
            "id_1": "Медсестра",
            "id_2": "Доярка",
            "id_3": "Швея",
            "id_4": "Гувернантка",    
            "id_5": "Модель",
            "id_6": "Стюардесса",      
            "id_7": "Нянечка",
            "id_8": "Актриса",
            "id_9": "Певица",
            "id_10": "Закройщица"
        }
    }`,
    birthMonthJson: `{               
        "count": 12,
        "list": {     
            "id_1": "января",
            "id_2": "февраля",
            "id_3": "марта",
            "id_4": "апреля",    
            "id_5": "мая",
            "id_6": "июня",      
            "id_7": "июля",
            "id_8": "августа",
            "id_9": "сентября",
            "id_10": "октября",
            "id_11": "ноября",
            "id_12": "декабря"            
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomBitrhDay31: (max = 31, min = 1) => Math.floor(Math.random() * (max - min + 1) + min),
    randomBitrhDay28: (max = 28, min = 1) => Math.floor(Math.random() * (max - min + 1) + min),  
    randomBitrhDay30: (max = 30, min = 1) => Math.floor(Math.random() * (max - min + 1) + min), 

    /*const randomGender = (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min) ? GENDER_MALE : GENDER_FEMALE  ,*/
    
    randomGender: function() {                                      //  Пол  
        const randomValue1 = Math.round(Math.random() * 1) ;
        if (randomValue1 == 1 )    {
            return this.GENDER_MALE;
           
        } else return this.GENDER_FEMALE;                            

    },

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

        randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

   
    randomFirstName: function() {                                       // Имя
        if   (this.person.gender == "Мужчина"  ) {
            
            return this.randomValue(this.firstNameMaleJson);
        }  else     return this.randomValue(this.firstNameFemaleJson);     
        
    },

    randomPatronymiс: function() {                                    // Отчество

        if   (this.person.gender == "Мужчина"  ) {
            
            return this.randomValue(this.patronymicJson)+ "ич";
        }  else   return this.randomValue(this.patronymicJson)+ "нa"; 

    },
    
    randomSurname: function() {                                    // Фамилия

        if   (this.person.gender == "Мужчина"  ) {
            
            return this.randomValue(this.surnameJson);
        }  else    return this.randomValue(this.surnameJson)+ "a"; 

    },

    randomProfession: function() {                                              // Профессия
        if   (this.person.gender == "Мужчина"  ) {
            
            return this.randomValue(this.professionMaleJson); 
        }  else    return this.randomValue(this.professionFemaleJson); 
       
    },

    randomMonthDay: function() {                                    // Месяц рождения  
                 
        return this.randomValue(this.birthMonthJson);
       
    },  
    
    randomBitrhYear: (max = 2010, min = 1960) => Math.floor(Math.random() * (max - min + 1) + min),  // Год рождения


    

    randomBitrhDay: (max = 31, min = 1) => Math.floor(Math.random() * (max - min + 1) + min),   // День рождения

     
    
    


    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surname = this.randomSurname();
        this.person.patronymic = this.randomPatronymiс();
        this.person.profession = this.randomProfession();
        this.person.birthYear = this.randomBitrhYear();
        this.person.birthDay = this.randomBitrhDay();
        this.person.monthDay = this.randomMonthDay();
        return this.person;
    }

    
};
