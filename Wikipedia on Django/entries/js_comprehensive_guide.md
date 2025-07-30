# JavaScript: Повний путівник від основ до магії веброзробки

*"Якщо HTML — це кістки вебсторінки, а CSS — її шкіра та одяг, то JavaScript — це нервова система, яка дає їй життя"*

## Навіщо це все потрібно? (Теорія та історія)

Уяви, що ти будуєш будинок. HTML дає тобі стіни, двері, вікна — структуру. CSS робить його красивим — фарбує стіни, вибирає меблі, налаштовує освітлення. Але що робить будинок живим? Можливість увімкнути світло, відкрити двері, приготувати каву, послухати музику. Це і є JavaScript — мова, яка додає інтерактивність до статичних HTML-сторінок.

### Маленька історія великої мови

Давним-давно, у 1995 році (коли твої батьки ще користувалися дискетами), молодий програміст на ім'я Brendan Eich працював у компанії Netscape. Йому дали завдання створити мову програмування **за 10 днів**. Так, ти не ослухався — за десять днів! 

Результатом стала мова, яку спочатку назвали Mocha, потім LiveScript, а зрештою — JavaScript. Назва "JavaScript" була маркетинговою хитрістю, щоб "підігріти" популярність Java. Насправді ці мови не мають нічого спільного, окрім кількох літер у назві.

**Цікавий факт**: JavaScript спочатку працював лише в браузері Netscape Navigator. Сьогодні на JavaScript працюють не тільки всі вебсайти світу, а й сервери, мобільні додатки, десктопні програми і навіть космічні кораблі NASA!

### Чому JavaScript — це круто?

1. **Мова клієнтської сторони**: Код виконується в браузері користувача, а не на сервері. Це означає миттєвий відгук без затримок на завантаження сторінок.

2. **Подійно-орієнтоване програмування**: JavaScript чекає на дії користувача (клік, введення тексту, наведення миші) і миттєво реагує.

3. **Динамічна типізація**: Не потрібно заздалегідь вказувати тип змінної — JavaScript сам зрозуміє.

4. **Функціональне програмування**: Функції можна передавати як змінні, що відкриває неймовірні можливості.

## Твоя перша програма JavaScript

Давай почнемо з чогось простого, але ефектного:

```html
<!DOCTYPE html>
<html lang="uk">
<head>
    <title>Моя перша JavaScript програма</title>
    <script>
        alert('Привіт, JavaScript світ! 🎉');
    </script>
</head>
<body>
    <h1>Ласкаво просимо в світ JavaScript!</h1>
</body>
</html>
```

**Що тут відбувається?**
- `<script>` теги говорять браузеру: "Увага! Тут буде JavaScript код!"
- `alert()` — це функція, яка показує модальне вікно з повідомленням
- Код виконується одразу при завантаженні сторінки

**Типова помилка новачків**: Забувають закрити тег `</script>` або ставлять крапку з комою після `alert()`. В HTML це не критично, але краще одразу привчатися до правильного синтаксису!

## Події — серце інтерактивності

JavaScript без подій — це як автомобіль без бензину. Технічно він є, але нікуди не їздить.

### Що таке подія?

Подія — це будь-яка дія користувача або браузера:
- Клік мишею
- Натискання клавіші
- Наведення курсора
- Завантаження сторінки
- Прокручування сторінки
- Зміна розміру вікна

У реальному житті це схоже на дзвінок телефону — коли він дзвонить (подія), ти відповідаєш (виконуєш код).

```html
<!DOCTYPE html>
<html lang="uk">
<head>
    <title>Моя перша інтерактивна сторінка</title>
    <script>
        function привітання() {
            alert('Вітаю! Ти тільки що натиснув на кнопку! 🎊');
        }
    </script>
</head>
<body>
    <h1>Натисни на кнопку!</h1>
    <button onclick="привітання()">Магічна кнопка ✨</button>
</body>
</html>
```

**Розбір по крихтах:**
- `function привітання()` — створюємо функцію (набір інструкцій)
- `onclick="привітання()"` — кажемо кнопці: "Коли тебе натиснуть, виконай функцію привітання"
- Дужки `()` після назви функції означають "виконати зараз"

**Аналогія з реального життя**: Уяви, що ти програмуєш пульт від телевізора. Кнопка "Увімкнути" (подія) → телевізор вмикається (функція). Без натискання кнопки нічого не відбувається!

## Змінні — пам'ять твоєї програми

Змінна — це коробочка з етикеткою, куди ти можеш щось покласти та забрати пізніше.

### Три способи створення змінних

```javascript
var стараМода = "Так робили в 1995 році";
let сучаснийСпосіб = "Так роблять зараз";
const незміннеЗначення = "Це ніколи не зміниться";
```

**Історія та логіка:**
- `var` — перший спосіб оголошення змінних у JavaScript. Має глобальну область видимості (видна скрізь у програмі). Сьогодні практично не використовується через потенційні проблеми.
- `let` — сучасний спосіб. Має блокову область видимості (видна тільки в межах фігурних дужок `{}`).
- `const` — для значень, які не змінюються (константи). Походить від "constant".

### Практичний приклад — лічильник

```html
<!DOCTYPE html>
<html lang="uk">
<head>
    <title>Волшебний лічильник</title>
    <script>
        let лічильник = 0; // Починаємо з нуля
        
        function порахувати() {
            лічильник++; // Збільшуємо на 1 (лічильник = лічильник + 1)
            alert(`Зараз лічильник показує: ${лічильник}`);
        }
    </script>
</head>
<body>
    <h1>Лічильник кліків</h1>
    <button onclick="порахувати()">Натисни мене! 🖱️</button>
</body>
</html>
```

**Магія template literals (шаблонних рядків):**
- Зворотні лапки `` ` `` замість звичайних `"` або `'`
- `${змінна}` — вставляє значення змінної в рядок
- Це як заповнення форми: "Мене звати ______" → "Мене звати Олександр"

**Типові помилки:**
- Забути оголосити змінну (`let` або `const`)
- Спробувати змінити `const` (JavaScript видасть помилку)
- Переплутати `=` (присвоєння) з `===` (порівняння)

## querySelector — твій GPS у DOM

DOM (Document Object Model) — це як карта твоєї HTML-сторінки. `querySelector` — це GPS, який допомагає знайти потрібний елемент.

```html
<!DOCTYPE html>
<html lang="uk">
<head>
    <title>Граємося з DOM</title>
    <script>
        function змінитиТекст() {
            // Знаходимо заголовок і змінюємо його
            let заголовок = document.querySelector('h1');
            
            if (заголовок.innerHTML === 'Привіт! 👋') {
                заголовок.innerHTML = 'До побачення! 👋';
            } else {
                заголовок.innerHTML = 'Привіт! 👋';
            }
        }
    </script>
</head>
<body>
    <h1>Привіт! 👋</h1>
    <button onclick="змінитиТекст()">Змінити привітання</button>
</body>
</html>
```

**Що відбувається:**
1. `document.querySelector('h1')` — знаходить перший елемент `<h1>` на сторінці
2. `innerHTML` — це "внутрішність" елемента (те, що між відкриваючим і закриваючим тегом)
3. `===` — суворе порівняння (перевіряє і значення, і тип)

**Селектори в querySelector (як у CSS):**
```javascript
document.querySelector('h1')        // За тегом
document.querySelector('#моїй-id')   // За ID
document.querySelector('.мій-клас')  // За класом
document.querySelector('div p')      // Перший p усередині div
```

## Маніпулювання DOM — творимо дива

DOM Manipulation — це як гра в конструктор Lego з вебсторінками. Можеш додавати, змінювати, прибирати елементи в реальному часі!

### Покращений лічильник

```html
<!DOCTYPE html>
<html lang="uk">
<head>
    <title>Розумний лічильник</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            padding: 50px;
        }
        
        .лічильник {
            font-size: 48px;
            color: #3498db;
            margin: 20px 0;
        }
        
        .кнопка {
            font-size: 18px;
            padding: 10px 20px;
            margin: 10px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        
        .збільшити { background-color: #2ecc71; color: white; }
        .зменшити { background-color: #e74c3c; color: white; }
        .скинути { background-color: #95a5a6; color: white; }
    </style>
    <script>
        let лічильник = 0;
        
        function оновитиДисплей() {
            document.querySelector('.лічильник').innerHTML = лічильник;
            
            // Додаємо спецефекти для кратних 10
            if (лічильник % 10 === 0 && лічильник !== 0) {
                alert(`🎉 Вітаємо! Ви досягли ${лічильник}! 🎉`);
            }
        }
        
        function збільшити() {
            лічильник++;
            оновитиДисплей();
        }
        
        function зменшити() {
            лічильник--;
            оновитиДисплей();
        }
        
        function скинути() {
            лічильник = 0;
            оновитиДисплей();
        }
    </script>
</head>
<body>
    <h1>Розумний лічильник 🧠</h1>
    <div class="лічильник">0</div>
    
    <button class="кнопка збільшити" onclick="збільшити()">➕ Збільшити</button>
    <button class="кнопка зменшити" onclick="зменшити()">➖ Зменшити</button>
    <button class="кнопка скинути" onclick="скинути()">🔄 Скинути</button>
</body>
</html>
```

**Нові концепції:**
- Модульність: кожна функція робить одну річ і робить її добре
- `%` (модуло) — остача від ділення. `10 % 3 = 1` (бо 10 ÷ 3 = 3 остача 1)
- Комбінування CSS і JavaScript для красивих ефектів

## Краща архітектура коду

**Проблема inline JavaScript:**
Поки що ми писали JavaScript прямо в HTML (`onclick="функція()"`). Це як писати замітки на полях підручника — швидко, але неакуратно.

**Рішення — зовнішні файли:**

### counter.html
```html
<!DOCTYPE html>
<html lang="uk">
<head>
    <title>Професійний лічильник</title>
    <script src="counter.js"></script>
</head>
<body>
    <h1>Професійний лічильник</h1>
    <div id="лічильник">0</div>
    <button id="кнопка-збільшити">Збільшити</button>
    <button id="кнопка-зменшити">Зменшити</button>
</body>
</html>
```

### counter.js
```javascript
let лічильник = 0;

function оновитиДисплей() {
    document.querySelector('#лічильник').innerHTML = лічильник;
    
    if (лічильник % 10 === 0 && лічильник !== 0) {
        alert(`🎊 Круглий результат: ${лічильник}!`);
    }
}

function збільшити() {
    лічильник++;
    оновитиДисплей();
}

function зменшити() {
    лічильник--;
    оновитиДисплей();
}

// Чекаємо повного завантаження сторінки
document.addEventListener('DOMContentLoaded', function() {
    // Прив'язуємо події до кнопок
    document.querySelector('#кнопка-збільшити').onclick = збільшити;
    document.querySelector('#кнопка-зменшити').onclick = зменшити;
});
```

**Чому це краще:**
1. **Читабельність**: HTML займається структурою, JavaScript — логікою
2. **Повторне використання**: один JS файл можна підключити до кількох HTML сторінок
3. **Командна робота**: один програміст працює з HTML, інший з JavaScript
4. **Кешування**: браузер зберігає JS файл, що прискорює завантаження

**DOMContentLoaded — чому це важливо:**
Уяви, що ти намагаєшся увімкнути телевізор, але він ще не підключений до розетки. Так само JavaScript може спробувати знайти HTML елементи, які ще не завантажилися. `DOMContentLoaded` гарантує, що сторінка повністю готова.

## Події — глибинне занурення

Подій в JavaScript величезна кількість. Ось найпопулярніші:

### Події миші
- `onclick` — клік
- `onmouseover` — наведення курсора
- `onmouseout` — відведення курсора
- `onmousedown` — натискання кнопки миші
- `onmouseup` — відпускання кнопки миші

### Події клавіатури
- `onkeydown` — натискання клавіші
- `onkeyup` — відпускання клавіші
- `onkeypress` — комбінація натискання+відпускання

### Події форм
- `onsubmit` — відправка форми
- `onchange` — зміна значення
- `onfocus` — фокус на елементі
- `onblur` — втрата фокусу

### Приклад інтерактивної форми

```html
<!DOCTYPE html>
<html lang="uk">
<head>
    <title>Розумна форма</title>
    <style>
        .форма-контейнер {
            max-width: 400px;
            margin: 50px auto;
            padding: 20px;
            border: 2px solid #3498db;
            border-radius: 10px;
            font-family: Arial, sans-serif;
        }
        
        .поле {
            margin: 10px 0;
            padding: 10px;
            width: 100%;
            border: 1px solid #ddd;
            border-radius: 5px;
            font-size: 16px;
        }
        
        .поле:focus {
            border-color: #3498db;
            outline: none;
        }
        
        .кнопка {
            background-color: #3498db;
            color: white;
            padding: 12px 24px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
        }
        
        .кнопка:disabled {
            background-color: #bdc3c7;
            cursor: not-allowed;
        }
        
        .результат {
            margin-top: 20px;
            padding: 10px;
            background-color: #ecf0f1;
            border-radius: 5px;
        }
    </style>
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const імяПоле = document.querySelector('#ім\'я');
            const віковеПоле = document.querySelector('#вік');
            const кнопкаНадіслати = document.querySelector('#надіслати');
            const результатДів = document.querySelector('#результат');
            
            // Функція перевірки валідності форми
            function перевиритиФорму() {
                const ім_я = імяПоле.value.trim();
                const вік = parseInt(віковеПоле.value);
                
                if (ім_я.length >= 2 && вік >= 1 && вік <= 120) {
                    кнопкаНадіслати.disabled = false;
                } else {
                    кнопкаНадіслати.disabled = true;
                }
            }
            
            // Слухаємо зміни в полях
            імяПоле.addEventListener('keyup', перевиритиФорму);
            віковеПоле.addEventListener('keyup', перевиритиФорму);
            
            // Обробляємо відправку форми
            document.querySelector('#моя-форма').addEventListener('submit', function(e) {
                e.preventDefault(); // Не перезавантажуємо сторінку
                
                const ім_я = імяПоле.value.trim();
                const вік = parseInt(віковеПоле.value);
                
                let повідомлення = `Привіт, ${ім_я}! `;
                
                if (вік < 13) {
                    повідомлення += 'Ти ще дитина! 🧒';
                } else if (вік < 20) {
                    повідомлення += 'Ти підліток! 🤟';
                } else if (вік < 65) {
                    повідомлення += 'Ти дорослий! 💼';
                } else {
                    повідомлення += 'Ти мудрець! 🧙‍♂️';
                }
                
                результатДів.innerHTML = повідомлення;
            });
            
            // Спочатку перевіряємо форму
            перевиритиФорму();
        });
    </script>
</head>
<body>
    <div class="форма-контейнер">
        <h2>Розкажи про себе</h2>
        <form id="моя-форма">
            <input type="text" id="ім'я" class="поле" placeholder="Твоє ім'я" autofocus>
            <input type="number" id="вік" class="поле" placeholder="Твій вік" min="1" max="120">
            <button type="submit" id="надіслати" class="кнопка">Надіслати</button>
        </form>
        <div id="результат" class="результат"></div>
    </div>
</body>
</html>
```

**Новинки в цьому коді:**
- `addEventListener()` — сучасний спосіб прив'язки подій (краще за `onclick`)
- `e.preventDefault()` — зупиняє стандартну поведінку (в даному випадку — перезавантаження сторінки)
- `trim()` — прибирає пробіли на початку і в кінці рядка
- `parseInt()` — перетворює рядок на число
- Динамічне вмикання/вимикання кнопки

## Стрілкові функції — елегантність коду

У 2015 році в JavaScript з'явилися стрілкові функції — більш короткий і елегантний спосіб написання функцій.

### Порівняння синтаксису

```javascript
// Старий спосіб
function поздоровити(ім_я) {
    return `Привіт, ${ім_я}!`;
}

// Новий спосіб (стрілкова функція)
const поздороврити = (ім_я) => {
    return `Привіт, ${ім_я}!`;
};

// Ще коротше (якщо тільки один рядок коду)
const поздоровити = ім_я => `Привіт, ${ім_я}!`;
```

### Практичний приклад з кольорами

```html
<!DOCTYPE html>
<html lang="uk">
<head>
    <title>Кольоровий перемикач</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            padding: 50px;
            transition: all 0.3s ease;
        }
        
        h1 {
            font-size: 48px;
            margin: 30px 0;
            transition: color 0.3s ease;
        }
        
        .кнопка {
            margin: 10px;
            padding: 15px 25px;
            border: none;
            border-radius: 25px;
            font-size: 16px;
            cursor: pointer;
            transition: transform 0.2s ease;
        }
        
        .кнопка:hover {
            transform: scale(1.1);
        }
        
        .червона { background-color: #e74c3c; color: white; }
        .синя { background-color: #3498db; color: white; }
        .зелена { background-color: #2ecc71; color: white; }
        .жовта { background-color: #f39c12; color: white; }
        .фіолетева { background-color: #9b59b6; color: white; }
    </style>
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const заголовок = document.querySelector('#головний-заголовок');
            
            // Знаходимо всі кнопки кольорів
            document.querySelectorAll('.кнопка-кольору').forEach(кнопка => {
                кнопка.addEventListener('click', () => {
                    const колір = кнопка.dataset.колір;
                    заголовок.style.color = колір;
                    
                    // Додаємо невеликий спецефект
                    заголовок.style.transform = 'scale(1.1)';
                    setTimeout(() => {
                        заголовок.style.transform = 'scale(1)';
                    }, 200);
                });
            });
        });
    </script>
</head>
<body>
    <h1 id="головний-заголовок">Змінюй мій колір! 🎨</h1>
    
    <button class="кнопка червона кнопка-кольору" data-колір="red">Червоний</button>
    <button class="кнопка синя кнопка-кольору" data-колір="blue">Синій</button>
    <button class="кнопка зелена кнопка-кольору" data-колір="green">Зелений</button>
    <button class="кнопка жовта кнопка-кольору" data-колір="gold">Жовтий</button>
    <button class="кнопка фіолетова кнопка-кольору" data-колір="purple">Фіолетовий</button>
</body>
</html>
```

**Нові концепції:**
- `data-*` атрибути — спосіб зберігати додаткову інформацію в HTML
- `dataset` — JavaScript властивість для доступу до `data-*` атрибутів
- `querySelectorAll()` — знаходить ВСІ елементи, які відповідають селектору
- `forEach()` — виконує функцію для кожного елемента в масиві
- `setTimeout()` — виконує код через певний час

## Консоль розробника — твій найкращий друг

Консоль — це як рентген для твоєї вебсторінки. Можеш подивитися "всередину" і зрозуміти, що відбувається.

### Як відкрити консоль:
- **Chrome/Edge**: F12 або Ctrl+Shift+I
- **Firefox**: F12 або Ctrl+Shift+K
- **Safari**: Cmd+Option+I (Mac)

### Корисні команди консолі

```javascript
// Вивести повідомлення в консоль
console.log("Привіт, консоль!");

// Вивести попередження
console.warn("Це попередження!");

// Вивести помилку
console.error("Це помилка!");

// Вивести об'єкт в зручному вигляді
console.table({ім_я: "Олександр", вік: 25, професія: "програміст"});

// Перевірити, скільки часу займає виконання коду
console.time("тест швидкості");
// ... якийсь код ...
console.timeEnd("тест швидкості");
```

### Дебаггінг з консоллю

```html
<!DOCTYPE html>
<html lang="uk">
<head>
    <title>Дебаггінг приклад</title>
    <script>
        function складнаФункція(а, б) {
            console.log(`Початкові значення: а = ${а}, б = ${б}`);
            
            const результат = а * б + 10;
            console.log(`Проміжний результат: ${результат}`);
            
            if (результат > 50) {
                console.warn("Результат досить великий!");
            }
            
            console.log(`Фінальний результат: ${результат}`);
            return результат;
        }
        
        document.addEventListener('DOMContentLoaded', () => {
            document.querySelector('#тест-кнопка').addEventListener('click', () => {
                const результат = складнаФункція(7, 8);
                document.querySelector('#результат').innerHTML = `Результат: ${результат}`;
            });
        });
    </script>
</head>
<body>
    <h1>Відправ консоль і натисни кнопку</h1>
    <button id="тест-кнопка">Тестувати функцію</button>
    <div id="результат"></div>
</body>
</html>
```

## TODO список — великий проект

Тепер створимо справжню веб-аплікацію — TODO список з усіма сучасними фішками:

### todo.html
```html
<!DOCTYPE html>
<html lang="uk">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Мій розумний TODO список</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            padding: 20px;
        }
        
        .контейнер {
            max-width: 600px;
            margin: 0 auto;
            background: white;
            border-radius: 15px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
            overflow: hidden;
        }
        
        .заголовок {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 30px;
            text-align: center;
            font-size: 28px;
        }
        
        .форма-додавання {
            padding: 20px;
            background: #f8f9fa;
            border-bottom: 1px solid #e9ecef;
        }
        
        .поле-вводу {
            width: 70%;
            padding: 15px;
            border: 2px solid #e9ecef;
            border-radius: 10px;
            font-size: 16px;
            outline: none;
            transition: border-color 0.3s;
        }
        
        .поле-вводу:focus {
            border-color: #667eea;
        }
        
        .кнопка-додати {
            width: 25%;
            margin-left: 5%;
            padding: 15px;
            background: #28a745;
            color: white;
            border: none;
            border-radius: 10px;
            font-size: 16px;
            cursor: pointer;
            transition: background-color 0.3s;
        }
        
        .кнопка-додати:hover:not(:disabled) {
            background: #218838;
        }
        
        .кнопка-додати:disabled {
            background: #6c757d;
            cursor: not-allowed;
        }
        
        .список-завдань {
            max-height: 400px;
            overflow-y: auto;
        }
        
        .завдання {
            display: flex;
            align-items: center;
            padding: 15px 20px;
            border-bottom: 1px solid #e9ecef;
            transition: background-color 0.3s;
        }
        
        .завдання:hover {
            background: #f8f9fa;
        }
        
        .завдання.виконано {
            background: #d4edda;
            text-decoration: line-through;
            opacity: 0.7;
        }
        
        .чекбокс {
            margin-right: 15px;
            transform: scale(1.2);
        }
        
        .текст-завдання {
            flex: 1;
            font-size: 16px;
        }
        
        .кнопка-видалити {
            background: #dc3545;
            color: white;
            border: none;
            padding: 8px 12px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 12px;
        }
        
        .кнопка-видалити:hover {
            background: #c82333;
        }
        
        .статистика {
            padding: 20px;
            background: #f8f9fa;
            text-align: center;
            color: #6c757d;
            border-top: 1px solid #e9ecef;
        }
        
        .пусто {
            text-align: center;
            padding: 50px;
            color: #6c757d;
            font-size: 18px;
        }
    </style>
    <script src="todo.js"></script>
</head>
<body>
    <div class="контейнер">
        <div class="заголовок">
            📝 Мій розумний TODO список
        </div>
        
        <div class="форма-додавання">
            <form id="форма-завдання">
                <input 
                    type="text" 
                    id="поле-завдання" 
                    class="поле-вводу" 
                    placeholder="Додати нове завдання..." 
                    autofocus
                    maxlength="100"
                >
                <button type="submit" id="кнопка-додати" class="кнопка-додати" disabled>
                    ➕ Додати
                </button>
            </form>
        </div>
        
        <div id="список-завдань" class="список-завдань">
            <div class="пусто">
                🎯 Поки що завдань немає.<br>
                Додайте перше завдання вище!
            </div>
        </div>
        
        <div id="статистика" class="статистика">
            Загалом завдань: <span id="загалом">0</span> | 
            Виконано: <span id="виконано">0</span> | 
            Залишилось: <span id="залишилось">0</span>
        </div>
    </div>
</body>
</html>
```

### todo.js
```javascript
// Масив для зберігання всіх завдань
let завдання = [];

// Лічильник для унікальних ID
let наступнийID = 1;

// Функція для створення нового завдання
function створитиЗавдання(текст) {
    return {
        id: наступнийID++,
        текст: текст,
        виконано: false,
        часСтворення: new Date()
    };
}

// Функція для оновлення відображення списку завдань
function оновитиСписок() {
    const контейнерСписку = document.querySelector('#список-завдань');
    
    // Якщо немає завдань, показуємо повідомлення
    if (завдання.length === 0) {
        контейнерСписку.innerHTML = `
            <div class="пусто">
                🎯 Поки що завдань немає.<br>
                Додайте перше завдання вище!
            </div>
        `;
        return;
    }
    
    // Очищуємо контейнер
    контейнерСписку.innerHTML = '';
    
    // Додаємо кожне завдання
    завдання.forEach(завдання => {
        const елементЗавдання = document.createElement('div');
        елементЗавдання.className = `завдання ${завдання.виконано ? 'виконано' : ''}`;
        елементЗавдання.innerHTML = `
            <input 
                type="checkbox" 
                class="чекбокс" 
                ${завдання.виконано ? 'checked' : ''}
                onchange="перемкнутиСтан(${завдання.id})"
            >
            <span class="текст-завдання">${завдання.текст}</span>
            <button class="кнопка-видалити" onclick="видалитиЗавдання(${завдання.id})">
                🗑️ Видалити
            </button>
        `;
        
        контейнерСписку.appendChild(елементЗавдання);
    });
}

// Функція для оновлення статистики
function оновитиСтатистику() {
    const загалом = завдання.length;
    const виконано = завдання.filter(з => з.виконано).length;
    const залишилось = загалом - виконано;
    
    document.querySelector('#загалом').textContent = загалом;
    document.querySelector('#виконано').textContent = виконано;
    document.querySelector('#залишилось').textContent = залишилось;
}

// Функція для додавання нового завдання
function додатиЗавдання() {
    const полеВводу = document.querySelector('#поле-завдання');
    const текст = полеВводу.value.trim();
    
    if (текст === '') {
        alert('❌ Будь ласка, введіть текст завдання!');
        return;
    }
    
    // Перевіряємо, чи немає дублікатів
    const існуюче = завдання.find(з => з.текст.toLowerCase() === текст.toLowerCase());
    if (існуюче) {
        alert('⚠️ Таке завдання вже існує!');
        полеВводу.focus();
        return;
    }
    
    // Створюємо і додаємо нове завдання
    const новеЗавдання = створитиЗавдання(текст);
    завдання.push(новеЗавдання);
    
    // Очищуємо поле вводу
    полеВводу.value = '';
    
    // Оновлюємо інтерфейс
    оновитиСписок();
    оновитиСтатистику();
    оновитиКнопкуДодавання();
    
    // Фокусуємось назад на поле вводу
    полеВводу.focus();
    
    console.log(`✅ Додано завдання: "${текст}"`);
}

// Функція для перемикання стану завдання
function перемкнутиСтан(id) {
    const завдання_знайдене = завдання.find(з => з.id === id);
    if (завдання_знайдене) {
        завдання_знайдене.виконано = !завдання_знайдене.виконано;
        
        оновитиСписок();
        оновитиСтатистику();
        
        const статус = завдання_знайдене.виконано ? 'виконано' : 'не виконано';
        console.log(`🔄 Завдання "${завдання_знайдене.текст}" тепер ${статус}`);
    }
}

// Функція для видалення завдання
function видалитиЗавдання(id) {
    const індекс = завдання.findIndex(з => з.id === id);
    if (індекс !== -1) {
        const видаленеЗавдання = завдання[індекс];
        
        // Підтвердження видалення
        if (confirm(`❓ Ви впевнені, що хочете видалити завдання "${видаленеЗавдання.текст}"?`)) {
            завдання.splice(індекс, 1);
            
            оновитиСписок();
            оновитиСтатистику();
            
            console.log(`🗑️ Видалено завдання: "${видаленеЗавдання.текст}"`);
        }
    }
}

// Функція для оновлення стану кнопки додавання
function оновитиКнопкуДодавання() {
    const полеВводу = document.querySelector('#поле-завдання');
    const кнопкаДодати = document.querySelector('#кнопка-додати');
    
    кнопкаДодати.disabled = полеВводу.value.trim() === '';
}

// Ініціалізація після завантаження сторінки
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 TODO додаток завантажено!');
    
    // Отримуємо посилання на елементи
    const полеВводу = document.querySelector('#поле-завдання');
    const форма = document.querySelector('#форма-завдання');
    
    // Слухаємо введення тексту для активації кнопки
    полеВводу.addEventListener('input', оновитиКнопкуДодавання);
    
    // Слухаємо відправку форми
    форма.addEventListener('submit', (e) => {
        e.preventDefault(); // Не перезавантажуємо сторінку
        додатиЗавдання();
    });
    
    // Додаємо кілька тестових завдань для демонстрації
    const тестовіЗавдання = [
        'Вивчити JavaScript',
        'Створити перший веб-додаток',
        'Прочитати документацію MDN'
    ];
    
    тестовіЗавдання.forEach(текст => {
        завдання.push(створитиЗавдання(текст));
    });
    
    // Позначимо перше завдання як виконане
    if (завдання.length > 0) {
        завдання[0].виконано = true;
    }
    
    // Ініціальне відображення
    оновитиСписок();
    оновитиСтатистику();
    оновитиКнопкуДодавання();
});
```

**Що нового в цьому коді:**
- **Об'єкти**: Кожне завдання — це об'єкт з властивостями (id, текст, статус, час створення)
- **Масиви**: Зберігаємо всі завдання в масиві
- **Методи масивів**: `find()`, `filter()`, `forEach()`, `splice()`
- **Шаблонні рядки**: Для створення HTML динамічно
- **Валідація**: Перевірка на пусті поля та дублікати

## Інтервали — автоматичне виконання

Іноді потрібно, щоб код виконувався автоматично через певні проміжки часу.

### Годинник в реальному часі

```html
<!DOCTYPE html>
<html lang="uk">
<head>
    <title>Живий годинник</title>
    <style>
        body {
            font-family: 'Courier New', monospace;
            background: #000;
            color: #00ff00;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            margin: 0;
        }
        
        .годинник {
            font-size: 64px;
            text-align: center;
            border: 2px solid #00ff00;
            padding: 20px;
            border-radius: 10px;
            background: rgba(0, 255, 0, 0.1);
            box-shadow: 0 0 20px #00ff00;
        }
        
        .дата {
            font-size: 24px;
            margin-top: 10px;
            opacity: 0.8;
        }
    </style>
    <script>
        function оновитиЧас() {
            const зараз = new Date();
            
            // Форматуємо час
            const години = зараз.getHours().toString().padStart(2, '0');
            const хвилини = зараз.getMinutes().toString().padStart(2, '0');
            const секунди = зараз.getSeconds().toString().padStart(2, '0');
            
            const час = `${години}:${хвилини}:${секунди}`;
            
            // Форматуємо дату
            const дні = ['неділя', 'понеділок', 'вівторок', 'середа', 'четвер', 'п\'ятниця', 'субота'];
            const місяці = ['січня', 'лютого', 'березня', 'квітня', 'травня', 'червня', 
                           'липня', 'серпня', 'вересня', 'жовтня', 'листопада', 'грудня'];
            
            const деньТижня = дні[зараз.getDay()];
            const день = зараз.getDate();
            const місяць = місяці[зараз.getMonth()];
            const рік = зараз.getFullYear();
            
            const дата = `${деньТижня}, ${день} ${місяць} ${рік}`;
            
            // Оновлюємо на сторінці
            document.querySelector('#час').textContent = час;
            document.querySelector('#дата').textContent = дата;
        }
        
        document.addEventListener('DOMContentLoaded', () => {
            // Відразу показуємо час
            оновитиЧас();
            
            // Оновлюємо кожну секунду
            setInterval(оновитиЧас, 1000);
        });
    </script>
</head>
<body>
    <div class="годинник">
        <div id="час">00:00:00</div>
        <div id="дата" class="дата">Завантаження...</div>
    </div>
</body>
</html>
```

**Нові методи Date:**
- `new Date()` — поточна дата і час
- `getHours()`, `getMinutes()`, `getSeconds()` — компоненти часу
- `getDay()`, `getDate()`, `getMonth()`, `getFullYear()` — компоненти дати
- `padStart(2, '0')` — додає нулі на початок (5 → 05)

### Автоматичний лічильник

```javascript
let лічильник = 0;
let інтервал = null;
let працює = false;

function запуститиЛічильник() {
    if (!працює) {
        інтервал = setInterval(() => {
            лічильник++;
            document.querySelector('#лічильник').textContent = лічильник;
        }, 1000);
        працює = true;
        
        document.querySelector('#кнопка-запуск').textContent = 'Зупинити';
    } else {
        зупинитиЛічильник();
    }
}

function зупинитиЛічильник() {
    if (інтервал) {
        clearInterval(інтервал);
        інтервал = null;
        працює = false;
        
        document.querySelector('#кнопка-запуск').textContent = 'Запустити';
    }
}

function скинутиЛічильник() {
    зупинитиЛічильник();
    лічильник = 0;
    document.querySelector('#лічильник').textContent = лічильник;
}
```

**Важливо пам'ятати:**
- `setInterval()` повертає ID інтервалу
- `clearInterval(id)` зупиняє інтервал
- Завжди зупиняйте інтервали, коли вони не потрібні (щоб не витрачати ресурси)

## Локальне сховище — пам'ять браузера

До цього часу всі наші дані зникали при перезавантаженні сторінки. Локальне сховище дозволяє зберігати інформацію в браузері користувача.

### Покращений лічильник з пам'яттю

```javascript
// Перевіряємо, чи є збережений лічильник
let лічильник = parseInt(localStorage.getItem('мій-лічильник')) || 0;

function оновитиЛічильник() {
    document.querySelector('#лічильник').textContent = лічильник;
    // Зберігаємо в локальному сховищі
    localStorage.setItem('мій-лічильник', лічильник);
}

function збільшити() {
    лічильник++;
    оновитиЛічильник();
}

function зменшити() {
    лічильник--;
    оновитиЛічильник();
}

function скинути() {
    лічильник = 0;
    оновитиЛічильник();
    // Можна також видалити з локального сховища
    // localStorage.removeItem('мій-лічильник');
}

document.addEventListener('DOMContentLoaded', () => {
    // Відразу показуємо збережений лічильник
    оновитиЛічильник();
    
    // Прив'язуємо події
    document.querySelector('#збільшити').onclick = збільшити;
    document.querySelector('#зменшити').onclick = зменшити;
    document.querySelector('#скинути').onclick = скинути;
});
```

### TODO з локальним сховищем

```javascript
// Функція для збереження завдань в локальному сховищі
function зберегтиЗавдання() {
    localStorage.setItem('мої-завдання', JSON.stringify(завдання));
    console.log('💾 Завдання збережено в локальному сховищі');
}

// Функція для завантаження завдань з локального сховища
function завантажитиЗавдання() {
    const збереженіЗавдання = localStorage.getItem('мої-завдання');
    
    if (збереженіЗавдання) {
        завдання = JSON.parse(збереженіЗавдання);
        
        // Відновлюємо наступний ID
        if (завдання.length > 0) {
            наступнийID = Math.max(...завдання.map(з => з.id)) + 1;
        }
        
        console.log(`📂 Завантажено ${завдання.length} завдань з локального сховища`);
    }
}

// Модифікуємо функції для автоматичного збереження
function додатиЗавдання() {
    // ... попередній код ...
    
    // Додаємо збереження
    зберегтиЗавдання();
}

function перемкнутиСтан(id) {
    // ... попередній код ...
    
    // Додаємо збереження
    зберегтиЗавдання();
}

function видалитиЗавдання(id) {
    // ... попередній код ...
    
    // Додаємо збереження
    зберегтиЗавдання();
}

// При ініціалізації завантажуємо збережені завдання
document.addEventListener('DOMContentLoaded', () => {
    завантажитиЗавдання();
    
    // ... решта коду ініціалізації ...
});
```

**Методи localStorage:**
- `localStorage.setItem(ключ, значення)` — зберегти
- `localStorage.getItem(ключ)` — отримати
- `localStorage.removeItem(ключ)` — видалити
- `localStorage.clear()` — очистити все

**Важливо:**
- localStorage зберігає тільки рядки
- Для об'єктів використовуйте `JSON.stringify()` і `JSON.parse()`
- localStorage доступний тільки в межах одного домену
- Має обмеження на розмір (зазвичай 5-10 МБ)

## API та AJAX — з'єднання зі світом

API (Application Programming Interface) — це як міжнародний переклад між різними програмами. Один сервіс може отримати дані від іншого, навіть якщо вони написані різними мовами.

### JavaScript об'єкти — основа API

```javascript
// Простий об'єкт
let користувач = {
    ім_я: 'Олександр',
    вік: 25,
    професія: 'програміст'
};

// Доступ до властивостей
console.log(користувач.ім_я);        // Олександр
console.log(користувач['вік']);      // 25

// Додавання нових властивостей
користувач.місто = 'Київ';
користувач['хобі'] = ['програмування', 'читання'];

// Вкладені об'єкти
let профіль = {
    особиста_інформація: {
        ім_я: 'Марія',
        вік: 23
    },
    освіта: {
        університет: 'КПІ',
        факультет: 'ІАТЕ'
    },
    навички: ['JavaScript', 'Python', 'HTML', 'CSS']
};

// Доступ до вкладених даних
console.log(профіль.особиста_інформація.ім_я);  // Марія
console.log(профіль.навички[0]);                // JavaScript
```

### Обмін валют — справжній API

Створимо додаток для перевірки курсів валют:

```html
<!DOCTYPE html>
<html lang="uk">
<head>
    <title>Курси валют</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 600px;
            margin: 50px auto;
            padding: 20px;
            background: linear-gradient(135deg, #1e3c72, #2a5298);
            color: white;
            border-radius: 15px;
        }
        
        .контейнер {
            background: rgba(255, 255, 255, 0.1);
            padding: 30px;
            border-radius: 15px;
            backdrop-filter: blur(10px);
        }
        
        .поле {
            width: 100%;
            padding: 12px;
            margin: 10px 0;
            border: none;
            border-radius: 8px;
            font-size: 16px;
        }
        
        .кнопка {
            background: #ff6b6b;
            color: white;
            padding: 12px 24px;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-size: 16px;
            transition: background 0.3s;
        }
        
        .кнопка:hover {
            background: #ff5252;
        }
        
        .результат {
            margin-top: 20px;
            padding: 20px;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 10px;
            font-size: 18px;
            text-align: center;
        }
        
        .завантаження {
            color: #ffd93d;
        }
        
        .помилка {
            color: #ff4757;
        }
        
        .успіх {
            color: #2ed573;
        }
    </style>
    <script src="currency.js"></script>
</head>
<body>
    <div class="контейнер">
        <h1>💰 Курси валют</h1>
        <p>Перевірте актуальний курс обміну валют</p>
        
        <form id="форма-валют">
            <select id="від-валюти" class="поле">
                <option value="USD">🇺🇸 Долар США (USD)</option>
                <option value="EUR">🇪🇺 Євро (EUR)</option>
                <option value="GBP">🇬🇧 Фунт стерлінгів (GBP)</option>
                <option value="UAH">🇺🇦 Гривня (UAH)</option>
                <option value="PLN">🇵🇱 Злотий (PLN)</option>
            </select>
            
            <select id="до-валюти" class="поле">
                <option value="UAH">🇺🇦 Гривня (UAH)</option>
                <option value="USD">🇺🇸 Долар США (USD)</option>
                <option value="EUR">🇪🇺 Євро (EUR)</option>
                <option value="GBP">🇬🇧 Фунт стерлінгів (GBP)</option>
                <option value="PLN">🇵🇱 Злотий (PLN)</option>
            </select>
            
            <input 
                type="number" 
                id="сума" 
                class="поле" 
                placeholder="Введіть суму" 
                value="1" 
                min="0.01" 
                step="0.01"
            >
            
            <button type="submit" class="кнопка">🔄 Конвертувати</button>
        </form>
        
        <div id="результат" class="результат" style="display: none;"></div>
    </div>
</body>
</html>
```

```javascript
// currency.js
document.addEventListener('DOMContentLoaded', () => {
    const форма = document.querySelector('#форма-валют');
    const результатДів = document.querySelector('#результат');
    
    форма.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const відВалюти = document.querySelector('#від-валюти').value;
        const доВалюти = document.querySelector('#до-валюти').value;
        const сума = parseFloat(document.querySelector('#сума').value);
        
        if (сума <= 0) {
            показатиРезультат('❌ Будь ласка, введіть коректну суму!', 'помилка');
            return;
        }
        
        if (відВалюти === доВалюти) {
            показатиРезультат(`✅ ${сума} ${відВалюти} = ${сума} ${доВалюти}`, 'успіх');
            return;
        }
        
        await конвертуватиВалюту(відВалюти, доВалюти, сума);
    });
    
    // Показуємо актуальний курс USD/UAH при завантаженні
    конвертуватиВалюту('USD', 'UAH', 1);
});

function показатиРезультат(текст, тип = '') {
    const результатДів = document.querySelector('#результат');
    результатДів.innerHTML = текст;
    результатДів.className = `результат ${тип}`;
    результатДів.style.display = 'block';
}

async function конвертуватиВалюту(від, до, сума) {
    показатиРезультат('⏳ Завантаження курсу...', 'завантаження');
    
    try {
        // Використовуємо безкоштовний API для курсів валют
        const відповідь = await fetch(`https://api.exchangerate-api.com/v4/latest/${від}`);
        
        if (!відповідь.ok) {
            throw new Error(`HTTP помилка! статус: ${відповідь.status}`);
        }
        
        const дані = await відповідь.json();
        
        if (!дані.rates || !дані.rates[до]) {
            throw new Error(`Курс для валюти ${до} не знайдено`);
        }
        
        const курс = дані.rates[до];
        const результат = (сума * курс).toFixed(2);
        
        показатиРезультат(
            `💱 ${сума} ${від} = ${результат} ${до}<br>
            <small>Курс: 1 ${від} = ${курс.toFixed(4)} ${до}</small>`,
            'успіх'
        );
        
        console.log(`✅ Конвертація: ${сума} ${від} → ${результат} ${до}`);
        
    } catch (помилка) {
        console.error('❌ Помилка при отриманні курсу:', помилка);
        показатиРезультат(
            `❌ Помилка: ${помилка.message}<br>
            <small>Перевірте підключення до інтернету</small>`,
            'помилка'
        );
    }
}
```

**Новинки в цьому коді:**
- `async/await` — сучасний спосіб роботи з асинхронним кодом
- `fetch()` — для HTTP запитів
- `try/catch` — обробка помилок
- `response.ok` — перевірка успішності запиту
- `response.json()` — перетворення відповіді в JavaScript об'єкт

### Розуміємо асинхронність

JavaScript — однопотокова мова, але може виконувати асинхронні операції:

```javascript
console.log('1. Початок');

// Синхронна операція
console.log('2. Синхронний код');

// Асинхронна операція з затримкою
setTimeout(() => {
    console.log('4. Асинхронний код (через 2 секунди)');
}, 2000);

console.log('3. Кінець синхронного коду');

// Результат:
// 1. Початок
// 2. Синхронний код  
// 3. Кінець синхронного коду
// 4. Асинхронний код (через 2 секунди)
```

### Проміси (Promises) — майбутнє значення

```javascript
// Створення промісу
function отриматиПогоду(місто) {
    return new Promise((resolve, reject) => {
        // Імітуємо запит до API
        setTimeout(() => {
            if (місто === 'Київ') {
                resolve({
                    температура: 22,
                    опис: 'сонячно',
                    вологість: 60
                });
            } else {
                reject(new Error('Місто не знайдено'));
            }
        }, 1000);
    });
}

// Використання промісу з .then()
отриматиПогоду('Київ')
    .then(погода => {
        console.log(`Температура: ${погода.температура}°C`);
        console.log(`Опис: ${погода.опис}`);
    })
    .catch(помилка => {
        console.error('Помилка:', помилка.message);
    });

// Використання промісу з async/await
async function показатиПогоду(місто) {
    try {
        const погода = await отриматиПогоду(місто);
        console.log(`🌡️ ${погода.температура}°C, ${погода.опис}`);
    } catch (помилка) {
        console.error('❌', помилка.message);
    }
}
```

## Додаткові APIs — розширюємо можливості

### Геолокація — де я знаходжуся?

```html
<!DOCTYPE html>
<html lang="uk">
<head>
    <title>Моє місцезнаходження</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 500px;
            margin: 50px auto;
            padding: 20px;
            text-align: center;
        }
        
        .кнопка {
            background: #4CAF50;
            color: white;
            padding: 15px 30px;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-size: 16px;
            margin: 10px;
        }
        
        .інформація {
            margin: 20px 0;
            padding: 15px;
            background: #f0f0f0;
            border-radius: 8px;
        }
    </style>
    <script>
        function отриматиМісцезнаходження() {
            const статусДів = document.querySelector('#статус');
            
            if (!navigator.geolocation) {
                статусДів.innerHTML = '❌ Геолокація не підтримується цим браузером';
                return;
            }
            
            статусДів.innerHTML = '📍 Визначаю місцезнаходження...';
            
            navigator.geolocation.getCurrentPosition(
                // Успіх
                (позиція) => {
                    const широта = позиція.coords.latitude;
                    const довгота = позиція.coords.longitude;
                    const точність = позиція.coords.accuracy;
                    
                    статусДів.innerHTML = `
                        <h3>📍 Ваше місцезнаходження:</h3>
                        <p><strong>Широта:</strong> ${широта.toFixed(6)}</p>
                        <p><strong>Довгота:</strong> ${довгота.toFixed(6)}</p>
                        <p><strong>Точність:</strong> ±${точність.toFixed(0)} метрів</p>
                        <a href="https://www.google.com/maps?q=${широта},${довгота}" target="_blank">
                            🗺️ Відкрити на Google Maps
                        </a>
                    `;
                },
                // Помилка
                (помилка) => {
                    let повідомлення = '';
                    switch(помилка.code) {
                        case помилка.PERMISSION_DENIED:
                            повідомлення = 'Доступ до геолокації заборонено користувачем';
                            break;
                        case помилка.POSITION_UNAVAILABLE:
                            повідомлення = 'Інформація про місцезнаходження недоступна';
                            break;
                        case помилка.TIMEOUT:
                            повідомлення = 'Час очікування геолокації вичерпано';
                            break;
                        default:
                            повідомлення = 'Невідома помилка геолокації';
                            break;
                    }
                    статусДів.innerHTML = `❌ ${повідомлення}`;
                },
                // Опції
                {
                    enableHighAccuracy: true,
                    timeout: 10000,
                    maximumAge: 60000
                }
            );
        }
        
        document.addEventListener('DOMContentLoaded', () => {
            document.querySelector('#кнопка-геолокація').addEventListener('click', отриматиМісцезнаходження);
        });
    </script>
</head>
<body>
    <h1>🌍 Геолокація</h1>
    <p>Натисніть кнопку, щоб визначити ваше поточне місцезнаходження</p>
    
    <button id="кнопка-геолокація" class="кнопка">📍 Визначити місцезнаходження</button>
    
    <div id="статус" class="інформація">
        Натисніть кнопку вище, щоб почати
    </div>
</body>
</html>
```

### Сповіщення браузера

```javascript
function надіслатиСповіщення(заголовок, повідомлення) {
    // Перевіряємо підтримку
    if (!("Notification" in window)) {
        alert("Цей браузер не підтримує сповіщення");
        return;
    }
    
    // Перевіряємо дозвіл
    if (Notification.permission === "granted") {
        // Створюємо сповіщення
        const сповіщення = new Notification(заголовок, {
            body: повідомлення,
            icon: "https://via.placeholder.com/64x64.png?text=📋",
            badge: "https://via.placeholder.com/32x32.png?text=✅"
        });
        
        // Автоматично закриваємо через 5 секунд
        setTimeout(() => сповіщення.close(), 5000);
        
    } else if (Notification.permission !== "denied") {
        // Запитуємо дозвіл
        Notification.requestPermission().then((дозвіл) => {
            if (дозвіл === "granted") {
                надіслатиСповіщення(заголовок, повідомлення);
            }
        });
    }
}

// Використання
document.querySelector('#сповіщення-кнопка').addEventListener('click', () => {
    надіслатиСповіщення(
        "Завдання виконано! ✅", 
        "Ви успішно завершили вивчення JavaScript основ!"
    );
});
```

### Работа с файлами

```html
<!DOCTYPE html>
<html lang="uk">
<head>
    <title>Робота з файлами</title>
    <style>
        .файл-зона {
            border: 2px dashed #ccc;
            border-radius: 10px;
            width: 100%;
            height: 200px;
            text-align: center;
            padding: 20px;
            margin: 20px 0;
            transition: border-color 0.3s;
        }
        
        .файл-зона.активна {
            border-color: #007bff;
            background-color: #f0f8ff;
        }
        
        .превью {
            max-width: 100%;
            max-height: 300px;
            margin: 10px 0;
        }
    </style>
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const файловийВвід = document.querySelector('#файловий-ввід');
            const файловаЗона = document.querySelector('#файлова-зона');
            const превьюДів = document.querySelector('#превью');
            
            // Обробка кліку на зону
            файловаЗона.addEventListener('click', () => {
                файловийВвід.click();
            });
            
            // Обробка вибору файлу
            файловийВвід.addEventListener('change', обробитиФайли);
            
            // Drag & Drop
            файловаЗона.addEventListener('dragover', (e) => {
                e.preventDefault();
                файловаЗона.classList.add('активна');
            });
            
            файловаЗона.addEventListener('dragleave', () => {
                файловаЗона.classList.remove('активна');
            });
            
            файловаЗона.addEventListener('drop', (e) => {
                e.preventDefault();
                файловаЗона.classList.remove('активна');
                
                const файли = e.dataTransfer.files;
                обробитиФайли({target: {files: файли}});
            });
            
            function обробитиФайли(подія) {
                const файли = подія.target.files;
                превьюДів.innerHTML = '';
                
                Array.from(файли).forEach(файл => {
                    const читач = new FileReader();
                    
                    if (файл.type.startsWith('image/')) {
                        читач.onload = (e) => {
                            const зображення = document.createElement('img');
                            зображення.src = e.target.result;
                            зображення.className = 'превью';
                            превьюДів.appendChild(зображення);
                        };
                        читач.readAsDataURL(файл);
                        
                    } else if (файл.type === 'text/plain') {
                        читач.onload = (e) => {
                            const текст = document.createElement('pre');
                            текст.textContent = e.target.result;
                            текст.style.background = '#f5f5f5';
                            текст.style.padding = '10px';
                            текст.style.borderRadius = '5px';
                            превьюДів.appendChild(текст);
                        };
                        читач.readAsText(файл);
                    }
                    
                    // Інформація про файл
                    const інфо = document.createElement('p');
                    інфо.innerHTML = `
                        📄 <strong>${файл.name}</strong><br>
                        Розмір: ${(файл.size / 1024).toFixed(2)} KB<br>
                        Тип: ${файл.type || 'невідомий'}
                    `;
                    превьюДів.appendChild(інфо);
                });
            }
        });
    </script>
</head>
<body>
    <h1>📁 Робота з файлами</h1>
    
    <input type="file" id="файловий-ввід" multiple accept="image/*,text/plain" style="display: none;">
    
    <div id="файлова-зона" class="файл-зона">
        <p>📁 Натисніть або перетягніть файли сюди</p>
        <p><small>Підтримуються зображення та текстові файли</small></p>
    </div>
    
    <div id="превью"></div>
</body>
</html>
```

## Типові помилки та як їх уникнути

### 1. Забути про асинхронність

```javascript
// ❌ Неправильно
function отриматиДані() {
    let результат;
    fetch('/api/data')
        .then(response => response.json())
        .then(data => {
            результат = data; // Це не спрацює!
        });
    return результат; // undefined
}

// ✅ Правильно
async function отриматиДані() {
    const response = await fetch('/api/data');
    const результат = await response.json();
    return результат;
}
```

### 2. Не перевіряти на null/undefined

```javascript
// ❌ Неправильно
function оновитиТекст() {
    const елемент = document.querySelector('#неіснуючий-елемент');
    елемент.innerHTML = 'новий текст'; // TypeError!
}

// ✅ Правильно
function оновитиТекст() {
    const елемент = document.querySelector('#неіснуючий-елемент');
    if (елемент) {
        елемент.innerHTML = 'новий текст';
    } else {
        console.warn('Елемент не знайдено!');
    }
}
```

### 3. Проблеми з this в стрілкових функціях

```javascript
const об_єкт = {
    ім_я: 'Тест',
    
    // ❌ Стрілкова функція не має власного this
    методСтрілка: () => {
        console.log(this.ім_я); // undefined
    },
    
    // ✅ Звичайна функція має правильний this
    методЗвичайний: function() {
        console.log(this.ім_я); // "Тест"
    }
};
```

### 4. Забути preventDefault для форм

```javascript
// ❌ Форма перезавантажує сторінку
document.querySelector('form').addEventListener('submit', (e) => {
    const дані = new FormData(e.target);
    надіслатиДані(дані);
});

// ✅ Зупиняємо стандартну поведінку
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault(); // Важливо!
    const дані = new FormData(e.target);
    надіслатиДані(дані);
});
```

## Підсумок — що ми вивчили

🎉 **Вітаємо! Ви освоїли основи JavaScript!**

### Ключові концепції:
1. **Змінні** (`let`, `const`, `var`) — контейнери для даних
2. **Функції** — блоки коду, які можна викликати повторно
3. **Події** — реакція на дії користувача
4. **DOM** — програмування структури HTML сторінки
5. **Асинхронність** — робота з API та затримками
6. **Локальне сховище** — збереження даних в браузері

### Практичні навички:
- ✅ Створення інтерактивних сторінок
- ✅ Робота з формами та валідацією
- ✅ Використання API для отримання даних
- ✅ Збереження даних локально
- ✅ Обробка помилок та дебаггінг

### Що далі?

Тепер ви готові до:
- **Фреймворків**: React, Vue.js, Angular
- **Node.js**: JavaScript на сервері
- **ES6+ функції**: деструктуризація, модулі, класи
- **TypeScript**: типізований JavaScript
- **Progressive Web Apps**: створення мобільних додатків

### Останні поради:

1. **Практикуйтесь щодня** — навіть 15 хвилин кодингу краще за 3 години раз на тиждень
2. **Читайте чужий код** — GitHub, CodePen, Stack Overflow
3. **Створюйте проекти** — todo списки, калькулятори, ігри
4. **Не бійтесь помилок** — кожна помилка це урок
5. **Користуйтесь консоллю** — ваш найкращий друг для дебаггінгу

**Пам'ятайте**: JavaScript — це не просто мова програмування, це ключ до створення інтерактивного веб-досвіду. Від простих анімацій до складних веб-додатків — все починається з основ, які ви щойно вивчили!

Тепер йдіть і творіть дива! 🚀✨
