var hi=new Audio("audio/yager/koroche_zdorova.mp3");$(".header").click((function(){hi.play()}));let names=["Йогра","Ягра","Ягер","Ягор","Ягуар","Егор","Гоша","Грыша","Джордж","Джорджинио","Швагер","Крюгер","Стрингер","Игорь","Квакер","Йогурт","Егерь","Ядгар","Электроегор","Шлёпа","Шлёндра","Ягр","Шляпа","Шлёпок","Яга","Шлягер","Грыжа","Ярик","Егермейстер","Егорилла","Грошык","Горе","Швабра","Ягрон","Ятаган","Янычар","Ярило","Янцзы","Ярополк","Флюгер","Фляга","Ягрик","Фликер","Юнгер","Егурт","Юнга","Ягурец","Яруллин","Шиндр","Мындр","Ягрус","Егорище","Егорёк","Рыгор","Грека","Ярулинн","Гренка","Гангрена","Гроб","Тигр","Гогер","Юнкер","Янор","Жокер","Жорик","Жора","Жароха","Жмых","Жерех","Егошка","Геша","Егорик","Егорка","Кагор","Кент","Мотор","Крекер","Грильяж","Яромир","Ёринобу","Ёжик","Жэужык","Жужик","Живчик","Жывёла","Жоржик","Хоккей","Какей","Жрец","Жокей","Егоза","Гашиш","Гоголь","Гегель","Гитлер","Еггер","Григор","Грэг","Кракен","Гемор","Гомер","Голем","Горгулья","Гомункул","Ярослав","Копырь","Упырь"],names_c=["Гашиш","Гегель","Геша","Гитлер","Гоголь","Голем","Гомер","Гомункул","Горгулья","Грека","Гренка","Григор","Грильяж","Грэг","Еггер","Егорёк","Егорик","Егорка","Егошка","Ёжик","Ёринобу","Жароха","Жерех","Жмых","Жокей","Жокер","Жора","Жоржик","Жорик","Жрец","Жужик","Жывёла","Йогра","Кагор","Какей","Кент","Копырь","Кракен","Крекер","Мотор","Рыгор","Упырь","Фликер","Флюгер","Фляга","Хоккей","Юнга","Юнгер","Юнкер","Ягрик","Ягрус","Ягурец","Янцзы","Янычар","Ярило","Яромир","Ярополк","Ярослав","Ярулинн","Яруллин"],names_a=["Гоша","Грыжа","Грыша","Джорджинио","Егор","Йогурт","Крюгер","Тигр","Швабра","Швагер","Шлёндра","Шлёпа","Шлягер","Шляпа","Электроегор","Ягер","Ягор","Ягуар","Ядгар"],names_r=["Гангрена","Гемор","Гогер","Горе","Гроб","Грошык","Джордж","Егермейстер","Егерь","Егоза","Егорилла","Егорище","Егурт","Живчик","Жэужык","Игорь","Квакер","Мындр","Стрингер","Шиндр","Шлёпок","Яга","Ягр","Ягра","Ягрон","Янор","Ярик","Ятаган"];var n=names.length,rn=Math.floor(Math.random()*n);console.log("Name: "+n,rn,names[n-1]);let namessort=[];namessort=names.slice(),namessort.sort();let j=5,surnames=["Летуаль","Ледовар","Ледокол","Литомент","Литаврас","Ледобас","Лореаль","Клитовор","Литорас","Литак","Литаврасина","Ледамыр","Листожор","Самовар","Сыкватар","Литавор (ударение на О)","Литавор (ударение на А)","Шумовар","Ледоруб","Мойдодыр","Литаворище","Жонглёр","Матрас","Кентавр","Минотавр","Живодёр","Живанши","Лионель","Леопольд","Акварель","Линолеум","Ювелир","Юбиляр","Каламбур","Цвикль","Сыровар","Литовский вор","Литовский мент","Гольджи","Годзилла","Копатель","Лепрекон","Литота"],surnames_c=["Ледобас","Литорас","Литак","Литаврасина","Ледамыр","Шумовар","Ледоруб","Литаворище","Жонглёр","Матрас","Кентавр","Минотавр","Живанши","Лионель","Леопольд","Акварель","Линолеум","Юбиляр","Каламбур","Цвикль","Сыровар","Литовский вор","Литовский мент","Гольджи","Годзилла","Копатель","Лепрекон","Литота"],surnames_a=["Летуаль","Самовар","Литавор (ударение на О)","Литавор (ударение на А)"],surnames_r=["Ледовар","Ледокол","Литомент","Литаврас","Лореаль","Клитовор","Листожор","Сыкватар","Мойдодыр","Живодёр","Ювелир"];var s=surnames.length,rs=Math.floor(Math.random()*s);console.log("Surname: "+s,rs,surnames[s-1]);let surnamessort=[];surnamessort=surnames.slice(),surnamessort.sort(),$(document).ready((function(){$(".navigation__burger").click((function(e){$(".navigation__burger, .navigation__menu").toggleClass("active"),$("body").toggleClass("lock")}))})),$(document).ready((function(){console.log("")})),document.querySelector(".header").style.backgroundImage=`url("img/header/yager${Math.floor(5*Math.random()+1)}.jpg")`,console.log(document.querySelector(".header").style.backgroundImage),$(document).ready((function(){$(".catalog__title").click((function(){$(this).toggleClass("active").next().slideToggle(),$(this).parent().toggleClass("active"),$(this).next().css("display","flex")})),$(".catalog__list").empty();for(var e=0;e<n;e++)e%10==0&&0!=e&&e!=n&&$("#names_unsorted").append("<br>"),$("#names_unsorted").append("<li>"+(e+1)+". "+names[e]+"</li>");for(e=0;e<s;e++)e%10==0&&0!=e&&e!=s&&$("#surnames_unsorted").append("<br>"),$("#surnames_unsorted").append("<li>"+(e+1)+". "+surnames[e]+"</li>")}));