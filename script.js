var demo = new Vue({
    el: '#main',
    data: {
        searchString: "",

        // Модель данных. Эти данные в другом случае передавались бы ajax'ом, но сейчас описаны прямо здесь для упрощения.

        articles: [
            {
                "title": "Тест: Какой ты вид хлеба?",
                "url": "https://quizterra.com/ru/kakoj-ty-vid-hleba",
                "image": "https://www.gastronom.ru/binfiles/images/20221117/bd2b7cee.jpg"
            },
            {
                "title": "Все квесты игры Ведьмак 3",
                "url": "https://vedmak.fandom.com/wiki/%D0%9A%D0%B2%D0%B5%D1%81%D1%82%D1%8B_(%D0%92%D0%B5%D0%B4%D1%8C%D0%BC%D0%B0%D0%BA_3)",
                "image": "https://img1.festima.ru/1/wGkI0oSKeCVy7v0P"
            },
            {
                "title": "Эффект зловещей долины: суть и причины",
                "url": "https://gb.ru/blog/effekt-zloveschej-doliny/",
                "image": "https://medialeaks.ru/wp-content/uploads/2018/08/02989-597x600.jpg"
            },
            {
                "title": "10 лучших чат ботов Telegram 2023",
                "url": "https://www.darkhackerworld.com/2023/06/chatgpt-telegram-bot.html",
                "image": "https://img.freepik.com/premium-photo/system-artificial-intelligence-chatgpt-chat-bot-ai-technology-smart-robot-ai-chat-gpt-application-software-robot-application-chat-gpt-generative-ai_771426-1569.jpg"
            },
            {
                "title": "25 онлайн-сервисов для подбора психолога",
                "url": "https://vc.ru/u/1167394-mariya-gackaya/584622-25-onlayn-servisov-dlya-poiska-i-podbora-psihologa",
                "image": "https://cojo.ru/wp-content/uploads/2022/12/psikhologiia-illiustratsii-1.webp"
            }
        ]
    },
    computed: {
        // Вычисленное свойство, которое содержит только те статьи, которые соответствуют searchString.
        filteredArticles: function () {
            var articles_array = this.articles,
                searchString = this.searchString;

            if (!searchString) {
                return articles_array;
            }

            searchString = searchString.trim().toLowerCase();

            articles_array = articles_array.filter(function (item) {
                if (item.title.toLowerCase().indexOf(searchString) !== -1) {
                    return item;
                }
            })

            // Возвращает массив с отфильтрованными данными.
            return articles_array;;
        }
    }
});