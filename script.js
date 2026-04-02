// ===== БАЗА ДАННЫХ ИГР =====
const gamesData = [
    {
        id: 1,
        title: "GTA VI",
        emoji: "🌴",
        description: "Самая ожидаемая игра десятилетия. Возвращение в Вайс-Сити с невероятной графикой, живым миром и захватывающим сюжетом о дуэте преступников в современной Флориде.",
        genre: ["Экшен", "Открытый мир", "Приключение"],
        platforms: ["PlayStation 5", "Xbox Series X/S"],
        year: 2025,
        age: "18+",
        rating: 9.5,
        price: 5499,
        hours: 60,
        tags: ["new", "hot"],
        mood: ["action", "explore", "story"],
        timeCategory: "very-long",
        priceCategory: "premium"
    },
    {
        id: 2,
        title: "Elder Scrolls VI",
        emoji: "⚔️",
        description: "Долгожданное продолжение легендарной серии RPG. Новый континент, сотни часов контента, полная свобода выбора и магия Тамриэля.",
        genre: ["RPG", "Открытый мир", "Фэнтези"],
        platforms: ["PC", "Xbox Series X/S"],
        year: 2026,
        age: "16+",
        rating: 9.3,
        price: 4999,
        hours: 100,
        tags: ["upcoming"],
        mood: ["explore", "story", "challenge"],
        timeCategory: "very-long",
        priceCategory: "premium"
    },
    {
        id: 3,
        title: "Death Stranding 2: On the Beach",
        emoji: "🌊",
        description: "Продолжение уникального приключения от Хидео Кодзимы. Сэм Портер Бриджес снова выходит в путь в мире, полном загадок и опасностей.",
        genre: ["Приключение", "Экшен", "Стелс"],
        platforms: ["PlayStation 5"],
        year: 2025,
        age: "16+",
        rating: 9.0,
        price: 4499,
        hours: 40,
        tags: ["new"],
        mood: ["explore", "story"],
        timeCategory: "long",
        priceCategory: "premium"
    },
    {
        id: 4,
        title: "Hollow Knight: Silksong",
        emoji: "🦋",
        description: "Долгожданное продолжение Hollow Knight. Играйте за Хорнет в новом огромном подземном мире, полном врагов, боссов и секретов.",
        genre: ["Метроидвания", "Инди", "Платформер"],
        platforms: ["PC", "PlayStation 5", "Xbox Series X/S", "Nintendo Switch"],
        year: 2025,
        age: "12+",
        rating: 9.2,
        price: 1299,
        hours: 35,
        tags: ["new", "hot"],
        mood: ["challenge", "explore"],
        timeCategory: "medium",
        priceCategory: "budget"
    },
    {
        id: 5,
        title: "Fable",
        emoji: "🧙",
        description: "Перезапуск культовой серии от Playground Games. Волшебный мир Альбиона, юмор, моральный выбор и эпические приключения.",
        genre: ["RPG", "Фэнтези", "Открытый мир"],
        platforms: ["PC", "Xbox Series X/S"],
        year: 2025,
        age: "16+",
        rating: 8.5,
        price: 4499,
        hours: 45,
        tags: ["new"],
        mood: ["explore", "story", "action"],
        timeCategory: "long",
        priceCategory: "premium"
    },
    {
        id: 6,
        title: "Metroid Prime 4: Beyond",
        emoji: "🚀",
        description: "Четвёртая часть легендарной серии. Самус Аран возвращается в эпическом приключении с потрясающей атмосферой исследования.",
        genre: ["Экшен", "Приключение", "Шутер"],
        platforms: ["Nintendo Switch"],
        year: 2025,
        age: "12+",
        rating: 8.8,
        price: 3999,
        hours: 25,
        tags: ["new"],
        mood: ["explore", "challenge", "action"],
        timeCategory: "medium",
        priceCategory: "mid"
    },
    {
        id: 7,
        title: "Avowed",
        emoji: "🗡️",
        description: "Новая RPG от Obsidian во вселенной Pillars of Eternity. Живой мир, магия, мечи и глубокий сюжет на Островном архипелаге.",
        genre: ["RPG", "Фэнтези", "Экшен"],
        platforms: ["PC", "Xbox Series X/S"],
        year: 2025,
        age: "16+",
        rating: 8.3,
        price: 3999,
        hours: 30,
        tags: ["new"],
        mood: ["story", "action", "explore"],
        timeCategory: "medium",
        priceCategory: "mid"
    },
    {
        id: 8,
        title: "Monster Hunter Wilds",
        emoji: "🐉",
        description: "Новая глава в серии Monster Hunter. Огромные монстры, динамичная погода, кооператив и бесконечная охота.",
        genre: ["Экшен", "RPG", "Кооператив"],
        platforms: ["PC", "PlayStation 5", "Xbox Series X/S"],
        year: 2025,
        age: "12+",
        rating: 8.7,
        price: 4499,
        hours: 80,
        tags: ["new", "hot"],
        mood: ["action", "challenge", "social"],
        timeCategory: "very-long",
        priceCategory: "premium"
    },
    {
        id: 9,
        title: "Civilization VII",
        emoji: "🏛️",
        description: "Новая часть легендарной стратегии. Ведите свою цивилизацию через эпохи, стройте империю и побеждайте в любом стиле.",
        genre: ["Стратегия", "Пошаговая"],
        platforms: ["PC", "PlayStation 5", "Xbox Series X/S", "Nintendo Switch"],
        year: 2025,
        age: "12+",
        rating: 8.9,
        price: 3499,
        hours: 100,
        tags: ["new"],
        mood: ["challenge", "explore"],
        timeCategory: "very-long",
        priceCategory: "mid"
    },
    {
        id: 10,
        title: "Kingdom Come: Deliverance II",
        emoji: "🏰",
        description: "Продолжение хардкорной средневековой RPG. Реалистичный бой, жизнь средневековой Богемии и захватывающий сюжет.",
        genre: ["RPG", "Средневековье", "Экшен"],
        platforms: ["PC", "PlayStation 5", "Xbox Series X/S"],
        year: 2025,
        age: "16+",
        rating: 8.6,
        price: 3999,
        hours: 50,
        tags: ["new"],
        mood: ["story", "challenge", "action"],
        timeCategory: "long",
        priceCategory: "mid"
    },
    {
        id: 11,
        title: "Stardew Valley: 1.6 Update",
        emoji: "🌾",
        description: "Обновление самой уютной фермерской игры. Новые культуры, события, диалоги и бесконечное расслабление.",
        genre: ["Симулятор", "Инди", "RPG"],
        platforms: ["PC", "PlayStation 5", "Xbox Series X/S", "Nintendo Switch"],
        year: 2025,
        age: "7+",
        rating: 9.1,
        price: 499,
        hours: 200,
        tags: ["new"],
        mood: ["relax", "explore"],
        timeCategory: "very-long",
        priceCategory: "budget"
    },
    {
        id: 12,
        title: "Donkey Kong Bananza",
        emoji: "🍌",
        description: "Новое приключение Донки Конга в полностью разрушаемом 3D-мире. Физика, головоломки и ностальгия.",
        genre: ["Платформер", "Приключение", "Головоломка"],
        platforms: ["Nintendo Switch"],
        year: 2025,
        age: "7+",
        rating: 8.4,
        price: 3999,
        hours: 15,
        tags: ["new"],
        mood: ["relax", "explore"],
        timeCategory: "short",
        priceCategory: "mid"
    },
    {
        id: 13,
        title: "Like a Dragon: Pirate Yakuza in Hawaii",
        emoji: "🏴‍☠️",
        description: "Gorod Majima в роли пирата! Безумный экшен, юмор и приключения в тропиках от создателей Yakuza.",
        genre: ["Экшен", "RPG", "Приключение"],
        platforms: ["PC", "PlayStation 5", "Xbox Series X/S"],
        year: 2025,
        age: "18+",
        rating: 8.5,
        price: 3999,
        hours: 30,
        tags: ["new"],
        mood: ["action", "story"],
        timeCategory: "medium",
        priceCategory: "mid"
    },
    {
        id: 14,
        title: "Indiana Jones and the Great Circle",
        emoji: "🤠",
        description: "Индиана Джонс в полноценном приключении от MachineGames. Головоломки, перестрелки и исследования древних руин.",
        genre: ["Приключение", "Экшен", "Головоломка"],
        platforms: ["PC", "Xbox Series X/S", "PlayStation 5"],
        year: 2025,
        age: "12+",
        rating: 8.7,
        price: 4499,
        hours: 20,
        tags: ["new"],
        mood: ["explore", "action", "challenge"],
        timeCategory: "medium",
        priceCategory: "premium"
    },
    {
        id: 15,
        title: "Marvel Rivals",
        emoji: "🦸",
        description: "Бесплатный командный шутер 6v6 с героями Marvel. Разрушаемость, уникальные способности и динамичные бои.",
        genre: ["Шутер", "Экшен", "Кооператив"],
        platforms: ["PC", "PlayStation 5", "Xbox Series X/S"],
        year: 2025,
        age: "12+",
        rating: 7.8,
        price: 0,
        hours: 999,
        tags: ["new"],
        mood: ["action", "social", "challenge"],
        timeCategory: "very-long",
        priceCategory: "free"
    },
    {
        id: 16,
        title: "Split Fiction",
        emoji: "👫",
        description: "Кооперативное приключение от создателей It Takes Two. Два героя в меняющихся мирах, где каждый видит своё.",
        genre: ["Кооператив", "Приключение", "Платформер"],
        platforms: ["PC", "PlayStation 5", "Xbox Series X/S"],
        year: 2025,
        age: "7+",
        rating: 8.6,
        price: 2999,
        hours: 12,
        tags: ["new", "hot"],
        mood: ["social", "relax", "explore"],
        timeCategory: "short",
        priceCategory: "mid"
    },
    {
        id: 17,
        title: "Clair Obscur: Expedition 33",
        emoji: "🎭",
        description: "Пошаговая RPG с невероятным визуальным стилем. Уникальная боевая система, драма и французский арт-дизайн.",
        genre: ["RPG", "Пошаговая", "Приключение"],
        platforms: ["PC", "PlayStation 5", "Xbox Series X/S"],
        year: 2025,
        age: "16+",
        rating: 8.9,
        price: 3499,
        hours: 35,
        tags: ["new", "hot"],
        mood: ["story", "challenge"],
        timeCategory: "long",
        priceCategory: "mid"
    },
    {
        id: 18,
        title: "Wuchang: Fallen Feathers",
        emoji: "🪶",
        description: "Мрачная soulslike RPG в стиле династии Мин. Жёсткие бои, тёмная атмосфера и китайская мифология.",
        genre: ["Экшен", "RPG", "Souls-like"],
        platforms: ["PC", "PlayStation 5", "Xbox Series X/S"],
        year: 2025,
        age: "16+",
        rating: 8.2,
        price: 3499,
        hours: 40,
        tags: ["new"],
        mood: ["challenge", "action"],
        timeCategory: "long",
        priceCategory: "mid"
    },
    {
        id: 19,
        title: "The Alters",
        emoji: "🪞",
        description: "Научно-фантастическое приключение от 11 bit studios. Создавайте альтер-эго, чтобы выжить на враждебной планете.",
        genre: ["Стратегия", "Приключение", "Научная фантастика"],
        platforms: ["PC"],
        year: 2025,
        age: "12+",
        rating: 8.0,
        price: 1999,
        hours: 10,
        tags: ["new"],
        mood: ["story", "challenge"],
        timeCategory: "short",
        priceCategory: "budget"
    },
    {
        id: 20,
        title: "DOOM: The Dark Ages",
        emoji: "💀",
        description: "Думгай в средневековье! Бензопила, щит и демоны — приквел к DOOM (2016) с новым сеттингом и старым безумием.",
        genre: ["Шутер", "Экшен"],
        platforms: ["PC", "PlayStation 5", "Xbox Series X/S"],
        year: 2025,
        age: "18+",
        rating: 8.8,
        price: 4499,
        hours: 15,
        tags: ["new", "hot"],
        mood: ["action"],
        timeCategory: "short",
        priceCategory: "premium"
    },
    {
        id: 21,
        title: "Pokémon Legends: Z-A",
        emoji: "⚡",
        description: "Продолжение Legends Arceus. Открытый мир Люмиоз-Сити, новые механики и 151 покемон в реальном времени.",
        genre: ["RPG", "Приключение", "Покемоны"],
        platforms: ["Nintendo Switch"],
        year: 2025,
        age: "7+",
        rating: 8.1,
        price: 3999,
        hours: 30,
        tags: ["new"],
        mood: ["explore", "relax", "action"],
        timeCategory: "medium",
        priceCategory: "mid"
    },
    {
        id: 22,
        title: "Hyrule Warriors: Age of Imprisonment",
        emoji: "🗡️",
        description: "Масштабные сражения во вселенной Zelda. Сотни врагов, любимые герои и эпические битвы в стиле мусоу.",
        genre: ["Экшен", "Фэнтези", "Кооператив"],
        platforms: ["Nintendo Switch"],
        year: 2025,
        age: "12+",
        rating: 7.9,
        price: 3499,
        hours: 25,
        tags: ["new"],
        mood: ["action", "social"],
        timeCategory: "medium",
        priceCategory: "mid"
    },
    {
        id: 23,
        title: "Ball x Pit",
        emoji: "🏀",
        description: "Весёлая мультиплеерная игра с физикой. Соревнуйтесь с друзьями в безумных аренах, где мяч — главное оружие.",
        genre: ["Инди", "Кооператив", "Аркада"],
        platforms: ["PC"],
        year: 2025,
        age: "3+",
        rating: 7.5,
        price: 299,
        hours: 999,
        tags: ["new"],
        mood: ["social", "relax"],
        timeCategory: "very-long",
        priceCategory: "free"
    },
    {
        id: 24,
        title: "Outer Worlds 2",
        emoji: "🌌",
        description: "Продолжение сатирической RPG от Obsidian. Новые планеты, выборы с последствиями и фирменный юмор.",
        genre: ["RPG", "Шутер", "Научная фантастика"],
        platforms: ["PC", "Xbox Series X/S"],
        year: 2025,
        age: "16+",
        rating: 8.4,
        price: 3999,
        hours: 40,
        tags: ["new"],
        mood: ["story", "explore", "action"],
        timeCategory: "long",
        priceCategory: "mid"
    },
    {
        id: 25,
        title: "South of Midnight",
        emoji: "🌿",
        description: "Приключение от Hazelight в южной готике. Ткайте магию из нитей реальности, сражайтесь с мифическими существами.",
        genre: ["Приключение", "Экшен", "Фэнтези"],
        platforms: ["PC", "Xbox Series X/S"],
        year: 2025,
        age: "12+",
        rating: 8.0,
        price: 3499,
        hours: 15,
        tags: ["new"],
        mood: ["explore", "story"],
        timeCategory: "short",
        priceCategory: "mid"
    }
];

// ===== ГЛОБАЛЬНОЕ СОСТОЯНИЕ =====
let favorites = JSON.parse(localStorage.getItem('gp_favorites') || '[]');
let pickerState = {
    step: 1,
    answers: {}
};

// ===== ИНИЦИАЛИЗАЦИЯ =====
document.addEventListener('DOMContentLoaded', () => {
    populateFilters();
    renderGames(gamesData);
    updateFavCount();
    setupEventListeners();
    animateCounter('totalGames', gamesData.length);
});

// ===== ЗАПОЛНЕНИЕ ФИЛЬТРОВ =====
function populateFilters() {
    const genres = [...new Set(gamesData.flatMap(g => g.genre))].sort();
    const platforms = [...new Set(gamesData.flatMap(g => g.platforms))].sort();
    const years = [...new Set(gamesData.map(g => g.year))].sort((a, b) => b - a);

    fillSelect('genreFilter', genres);
    fillSelect('platformFilter', platforms);
    fillSelect('yearFilter', years.map(String));
}

function fillSelect(id, items) {
    const select = document.getElementById(id);
    items.forEach(item => {
        const opt = document.createElement('option');
        opt.value = item;
        opt.textContent = item;
        select.appendChild(opt);
    });
}

// ===== ОТРИСОВКА КАРТОЧЕК =====
function renderGames(games) {
    const grid = document.getElementById('gamesGrid');
    const noResults = document.getElementById('noResults');
    const resultsCount = document.getElementById('resultsCount');

    grid.innerHTML = '';
    resultsCount.textContent = `Найдено: ${games.length} игр`;

    if (games.length === 0) {
        noResults.style.display = 'block';
        return;
    }
    noResults.style.display = 'none';

    games.forEach(game => {
        const card = createGameCard(game);
        grid.appendChild(card);
    });
}

function createGameCard(game) {
    const card = document.createElement('div');
    card.className = 'game-card';
    card.onclick = (e) => {
        if (!e.target.closest('.game-card-fav')) {
            openModal(game);
        }
    };

    const isFav = favorites.includes(game.id);
    const badgeClass = game.tags.includes('hot') ? 'badge-hot' :
                       game.tags.includes('upcoming') ? 'badge-upcoming' : 'badge-new';
    const badgeText = game.tags.includes('hot') ? '🔥 Хит' :
                      game.tags.includes('upcoming') ? '📅 Скоро' : '✨ Новинка';

    card.innerHTML = `
        <div class="game-card-image">
            <span class="placeholder-emoji">${game.emoji}</span>
            <span class="game-card-badge ${badgeClass}">${badgeText}</span>
            <div class="game-card-fav">
                <button class="btn-icon ${isFav ? 'favorited' : ''}" 
                        onclick="toggleFavorite(${game.id}, this)" 
                        title="В избранное">
                    ${isFav ? '❤️' : '🤍'}
                </button>
            </div>
        </div>
        <div class="game-card-body">
            <div class="game-card-title">${game.title}</div>
            <div class="game-card-meta">
                ${game.genre.slice(0, 2).map(g => `<span class="tag">${g}</span>`).join('')}
                ${game.platforms.slice(0, 1).map(p => `<span class="tag tag-platform">${p}</span>`).join('')}
            </div>
            <div class="game-card-footer">
                <div class="game-rating">
                    <span class="star">⭐</span>
                    <span>${game.rating}</span>
                </div>
                <div class="game-price ${game.price === 0 ? 'free' : ''}">
                    ${game.price === 0 ? 'Бесплатно' : game.price + ' ₽'}
                </div>
            </div>
        </div>
    `;

    return card;
}

// ===== ИЗБРАННОЕ =====
function toggleFavorite(id, btn) {
    const idx = favorites.indexOf(id);
    if (idx > -1) {
        favorites.splice(idx, 1);
        if (btn) {
            btn.classList.remove('favorited');
            btn.textContent = '🤍';
        }
    } else {
        favorites.push(id);
        if (btn) {
            btn.classList.add('favorited');
            btn.textContent = '❤️';
        }
    }
    localStorage.setItem('gp_favorites', JSON.stringify(favorites));
    updateFavCount();
}

function updateFavCount() {
    document.getElementById('favCount').textContent = favorites.length;
}

function renderFavorites() {
    const grid = document.getElementById('favoritesGrid');
    const noFav = document.getElementById('noFavorites');
    const favGames = gamesData.filter(g => favorites.includes(g.id));

    grid.innerHTML = '';

    if (favGames.length === 0) {
        noFav.style.display = 'block';
        return;
    }
    noFav.style.display = 'none';

    favGames.forEach(game => {
        grid.appendChild(createGameCard(game));
    });
}

// ===== ФИЛЬТРАЦИЯ =====
function applyFilters() {
    const search = document.getElementById('searchInput').value.toLowerCase().trim();
    const genre = document.getElementById('genreFilter').value;
    const platform = document.getElementById('platformFilter').value;
    const year = document.getElementById('yearFilter').value;
    const age = document.getElementById('ageFilter').value;
    const rating = document.getElementById('ratingFilter').value;
    const sort = document.getElementById('sortFilter').value;

    let filtered = gamesData.filter(game => {
        if (search && !game.title.toLowerCase().includes(search)) return false;
        if (genre !== 'all' && !game.genre.includes(genre)) return false;
        if (platform !== 'all' && !game.platforms.includes(platform)) return false;
        if (year !== 'all' && game.year !== parseInt(year)) return false;
        if (age !== 'all') {
            const ageNum = parseInt(age);
            const gameAgeNum = parseInt(game.age);
            if (gameAgeNum > ageNum) return false;
        }
        if (rating !== 'all' && game.rating < parseFloat(rating)) return false;
        return true;
    });

    // Сортировка
    switch (sort) {
        case 'rating-desc': filtered.sort((a, b) => b.rating - a.rating); break;
        case 'rating-asc': filtered.sort((a, b) => a.rating - b.rating); break;
        case 'year-desc': filtered.sort((a, b) => b.year - a.year); break;
        case 'year-asc': filtered.sort((a, b) => a.year - b.year); break;
        case 'name-asc': filtered.sort((a, b) => a.title.localeCompare(b.title)); break;
    }

    renderGames(filtered);
}

function resetFilters() {
    document.getElementById('searchInput').value = '';
    document.getElementById('genreFilter').value = 'all';
    document.getElementById('platformFilter').value = 'all';
    document.getElementById('yearFilter').value = 'all';
    document.getElementById('ageFilter').value = 'all';
    document.getElementById('ratingFilter').value = 'all';
    document.getElementById('sortFilter').value = 'rating-desc';
    renderGames(gamesData);
}

// ===== МОДАЛЬНОЕ ОКНО =====
function openModal(game) {
    const overlay = document.getElementById('modalOverlay');
    const body = document.getElementById('modalBody');
    const isFav = favorites.includes(game.id);

    body.innerHTML = `
        <div class="modal-banner">${game.emoji}</div>
        <h2 class="modal-title">${game.title}</h2>
        <div class="modal-tags">
            ${game.genre.map(g => `<span class="tag">${g}</span>`).join('')}
            ${game.platforms.map(p => `<span class="tag tag-platform">${p}</span>`).join('')}
        </div>
        <p class="modal-description">${game.description}</p>
        <div class="modal-info">
            <div class="info-item">
                <div class="info-label">Оценка</div>
                <div class="info-value">⭐ ${game.rating}/10</div>
            </div>
            <div class="info-item">
                <div class="info-label">Год выхода</div>
                <div class="info-value">📅 ${game.year}</div>
            </div>
            <div class="info-item">
                <div class="info-label">Возрастной рейтинг</div>
                <div class="info-value">🔞 ${game.age}</div>
            </div>
            <div class="info-item">
                <div class="info-label">Цена</div>
                <div class="info-value">💰 ${game.price === 0 ? 'Бесплатно' : game.price + ' ₽'}</div>
            </div>
            <div class="info-item">
                <div class="info-label">Длительность</div>
                <div class="info-value">⏱️ ~${game.hours} ч.</div>
            </div>
            <div class="info-item">
                <div class="info-label">Платформы</div>
                <div class="info-value">🖥️ ${game.platforms.join(', ')}</div>
            </div>
        </div>
        <div class="modal-actions">
            <button class="btn ${isFav ? 'btn-secondary' : 'btn-primary'}" 
                    onclick="toggleFavorite(${game.id}); openModal(gamesData.find(g => g.id === ${game.id}));">
                ${isFav ? '💔 Убрать из избранного' : '❤️ В избранное'}
            </button>
        </div>
    `;

    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('modalOverlay').classList.remove('active');
    document.body.style.overflow = '';
}

// ===== НАВИГАЦИЯ =====
function navigateTo(page) {
    document.querySelectorAll('.page-section').forEach(s => s.classList.remove('active-section'));
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));

    document.getElementById(page).classList.add('active-section');
    document.querySelector(`[data-page="${page}"]`).classList.add('active');

    if (page === 'favorites') {
        renderFavorites();
    }

    if (page === 'picker') {
        resetPicker();
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===== ПОДБОРЩИК =====
function setupPicker() {
    const step = pickerState.step;
    document.querySelectorAll('.picker-step').forEach(s => s.classList.remove('active'));
    document.querySelector(`.picker-step[data-step="${step}"]`).classList.add('active');

    // Индикаторы
    document.querySelectorAll('.indicator').forEach((ind, i) => {
        ind.classList.toggle('active', i === step - 1);
    });

    // Кнопки навигации
    document.getElementById('prevStep').style.display = step > 1 ? 'inline-flex' : 'none';
    document.getElementById('nextStep').disabled = !pickerState.answers[step];
    document.getElementById('nextStep').textContent = step === 5 ? '🎯 Подобрать!' : 'Далее →';
}

function selectOption(step, value) {
    pickerState.answers[step] = value;

    // Обновить UI
    const options = document.querySelectorAll(`.picker-step[data-step="${step}"] .picker-option`);
    options.forEach(opt => {
        opt.classList.toggle('selected', opt.dataset.value === value);
    });

    document.getElementById('nextStep').disabled = false;
}

function nextStep() {
    if (pickerState.step === 5) {
        showPickerResults();
        return;
    }
    pickerState.step++;
    setupPicker();
}

function prevStep() {
    if (pickerState.step > 1) {
        pickerState.step--;
        setupPicker();
    }
}

function resetPicker() {
    pickerState = { step: 1, answers: {} };
    document.getElementById('pickerResults').style.display = 'none';
    document.querySelector('.picker-container').style.display = 'block';
    document.querySelectorAll('.picker-option').forEach(o => o.classList.remove('selected'));
    setupPicker();
}

function showPickerResults() {
    const answers = pickerState.answers;
    const moodMap = {
        action: ['Экшен', 'Шутер', 'Souls-like'],
        story: ['RPG', 'Приключение'],
        relax: ['Симулятор', 'Инди', 'Аркада'],
        challenge: ['Souls-like', 'Головоломка', 'Стратегия'],
        social: ['Кооператив'],
        explore: ['Открытый мир', 'Приключение']
    };

    const moodGenres = moodMap[answers[1]] || [];

    // Фильтрация по ответам
    let scored = gamesData.map(game => {
        let score = 0;

        // Настроение → жанр
        const genreMatch = game.genre.some(g => moodGenres.includes(g));
        if (genreMatch) score += 3;
        const moodMatch = game.mood.includes(answers[1]);
        if (moodMatch) score += 2;

        // Платформа
        if (game.platforms.includes(answers[2])) score += 2;

        // Возраст
        const ageNum = parseInt(answers[3]);
        const gameAgeNum = parseInt(game.age);
        if (gameAgeNum <= ageNum) score += 1;

        // Время
        if (game.timeCategory === answers[4]) score += 1;

        // Цена
        if (answers[5] === 'free' && game.price === 0) score += 2;
        if (answers[5] === 'budget' && game.price <= 1500) score += 1;
        if (answers[5] === 'premium') score += 0.5;

        return { ...game, score };
    });

    // Сортировка по score и rating
    scored.sort((a, b) => b.score - a.score || b.rating - a.rating);

    // Топ-6
    const topGames = scored.slice(0, 6);

    // Показать результаты
    document.querySelector('.picker-container').style.display = 'none';
    const resultsDiv = document.getElementById('pickerResults');
    resultsDiv.style.display = 'block';

    const grid = document.getElementById('pickerGamesGrid');
    grid.innerHTML = '';
    topGames.forEach(game => {
        grid.appendChild(createGameCard(game));
    });
}

// ===== АНИМАЦИЯ СЧЁТЧИКА =====
function animateCounter(id, target) {
    const el = document.getElementById(id);
    let current = 0;
    const step = Math.ceil(target / 30);
    const interval = setInterval(() => {
        current += step;
        if (current >= target) {
            current = target;
            clearInterval(interval);
        }
        el.textContent = current;
    }, 40);
}

// ===== ОБРАБОТЧИКИ СОБЫТИЙ =====
function setupEventListeners() {
    // Навигация
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = link.dataset.page;
            navigateTo(page);
        });
    });

    // Фильтры
    document.getElementById('applyFilters').addEventListener('click', applyFilters);
    document.getElementById('resetFilters').addEventListener('click', resetFilters);

    // Поиск по Enter
    document.getElementById('searchInput').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') applyFilters();
    });

    // Модальное окно
    document.getElementById('modalClose').addEventListener('click', closeModal);
    document.getElementById('modalOverlay').addEventListener('click', (e) => {
        if (e.target === e.currentTarget) closeModal();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });

    // Подборщик — выбор опций
    document.querySelectorAll('.picker-option').forEach(option => {
        option.addEventListener('click', () => {
            const step = option.closest('.picker-step').dataset.step;
            selectOption(parseInt(step), option.dataset.value);
        });
    });

    document.getElementById('nextStep').addEventListener('click', nextStep);
    document.getElementById('prevStep').addEventListener('click', prevStep);
    document.getElementById('restartPicker').addEventListener('click', resetPicker);
    document.getElementById('goToCatalog').addEventListener('click', () => navigateTo('catalog'));
}