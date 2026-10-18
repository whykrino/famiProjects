const translations = {
    ru: {
        preloader_subtext: "Игровая студия",
        nav_home: "Главная",
        nav_about: "О студии",
        nav_team: "Создатели",
        nav_games: "Игры",
        hero_tagline: "Мы создаем миры, в которые хочется возвращаться",
        hero_status: "Студия временно заморожена",
        about_title: "О студии",
        about_p1: "FAMI Projects была основана в <span class=\"text-accent\">2023 году</span> как совместный проект двух друзей. В настоящее время один из основателей отошел от разработки, сосредоточившись на других задачах. Второй продолжает развивать студию, в одиночку ведя работу над текущими и будущими проектами.",
        about_p2: "Сейчас деятельность студии находится в стадии <span class=\"text-accent\">заморозки</span>, однако мы не останавливаемся на достигнутом и продолжаем искать новые идеи для будущих игр.",
        team_title: "Создатели",
        creator1_name: "Артем",
        creator1_desc: "Соучредитель студии. На данный момент отошел от активной разработки игр, но продолжает быть частью истории FAMI Projects.",
        creator1_btn: "GitHub",
        creator2_name: "Арсений",
        creator2_desc: "Соучредитель и текущий разработчик. Продолжает развивать студию и вести работу над проектами в одиночку.",
        creator2_btn: "Сайт",
        games_title: "Наши проекты",
        game_status: "Статус: Заморожен",
        game_desc: "Мрачный хоррор, где каждое проклятие приближает тебя к неизбежному. Сражаясь в одиночку с тьмой, ты должен разорвать смертельный круг, пока он не поглотил тебя целиком.",
        tooltip_lang: "Переключить язык"
    },
    en: {
        preloader_subtext: "Game Studio",
        nav_home: "Home",
        nav_about: "About",
        nav_team: "Team",
        nav_games: "Games",
        hero_tagline: "We create worlds you want to return to",
        hero_status: "Studio is temporarily on hold",
        about_title: "About Studio",
        about_p1: "FAMI Projects was founded in <span class=\"text-accent\">2023</span> as a joint project of two friends. Currently, one of the founders has stepped away from development to focus on other tasks. The other continues to develop the studio, working alone on current and future projects.",
        about_p2: "The studio is currently in a state of <span class=\"text-accent\">hibernation</span>, but we are not resting on our laurels and continue to look for new ideas for future games.",
        team_title: "Creators",
        creator1_name: "Artem",
        creator1_desc: "Co-founder of the studio. Currently stepped away from active game development, but remains part of FAMI Projects history.",
        creator1_btn: "GitHub",
        creator2_name: "Arseny",
        creator2_desc: "Co-founder and current developer. Continues to develop the studio and work on projects alone.",
        creator2_btn: "Website",
        games_title: "Our Projects",
        game_status: "Status: Frozen",
        game_desc: "A dark horror where every curse brings you closer to the inevitable. Fighting alone against the darkness, you must break the deadly circle before it consumes you entirely.",
        tooltip_lang: "Switch language"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const preloader = document.getElementById('preloader');
    const app = document.getElementById('app');
    const nav = document.getElementById('main-nav');
    const footer = document.getElementById('site-footer');
    const langToggle = document.getElementById('lang-toggle');
    const langText = document.getElementById('lang-text');
    const langTooltip = document.getElementById('lang-tooltip');
    const header = document.getElementById('site-header');
    
    let currentLang = 'ru';
    let isAnimating = false;

    const githubIcon = `<svg class="btn-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`;
    const webIcon = `<svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`;
    const arrowIcon = `<svg class="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>`;

    preloader.innerHTML = `
        <div class="preloader-content">
            <img src="img/logo.png" alt="Logo" class="preloader-logo">
            <span class="preloader-text">FAMI Projects</span>
            <span class="preloader-subtext" id="pre-subtext"></span>
            <div class="preloader-line"></div>
        </div>
    `;

    const renderStructure = () => {
        nav.innerHTML = `
            <a href="#hero" class="nav-link active" id="nav-hero"></a>
            <a href="#about" class="nav-link" id="nav-about"></a>
            <a href="#team" class="nav-link" id="nav-team"></a>
            <a href="#games" class="nav-link" id="nav-games"></a>
        `;

        app.innerHTML = `
            <section id="hero" class="hero-section anim-trigger active">
                <div class="hero-content">
                    <div class="hero-title reveal-item">FAMI Projects</div>
                    <div class="hero-divider reveal-item"></div>
                    <p class="hero-tagline reveal-item" id="txt-hero-tagline"></p>
                    <div class="hero-status reveal-item">
                        <span class="status-dot"></span>
                        <span id="txt-hero-status"></span>
                    </div>
                </div>
            </section>
            <section id="about" class="about-section anim-trigger">
                <h2 class="reveal-item" id="txt-about-title"></h2>
                <div class="about-content">
                    <p class="reveal-item" id="txt-about-p1"></p>
                    <p class="reveal-item" id="txt-about-p2"></p>
                </div>
            </section>
            <section id="team" class="team-section anim-trigger">
                <h2 class="reveal-item" id="txt-team-title"></h2>
                <div class="team-grid">
                    <div class="creator-card reveal-item">
                        <h3 id="txt-creator1-name"></h3>
                        <span class="creator-nick">nxtxe</span>
                        <p id="txt-creator1-desc"></p>
                        <a href="https://github.com/nxtxe" target="_blank" rel="noopener noreferrer" class="btn-link" id="txt-creator1-btn">${githubIcon}<span class="btn-text"></span>${arrowIcon}</a>
                    </div>
                    <div class="creator-card reveal-item">
                        <h3 id="txt-creator2-name"></h3>
                        <span class="creator-nick">krino</span>
                        <p id="txt-creator2-desc"></p>
                        <a href="https://whykrino.github.io/me/" target="_blank" rel="noopener noreferrer" class="btn-link" id="txt-creator2-btn">${webIcon}<span class="btn-text"></span>${arrowIcon}</a>
                    </div>
                </div>
            </section>
            <section id="games" class="games-section anim-trigger">
                <h2 class="reveal-item" id="txt-games-title"></h2>
                <div class="game-card reveal-item">
                    <div class="game-image-container">
                        <img src="img/curse.png" alt="Curse Of Death" class="game-image">
                    </div>
                    <div class="game-info">
                        <h3>Curse Of Death</h3>
                        <span class="status" id="txt-game-status"></span>
                        <p id="txt-game-desc"></p>
                    </div>
                </div>
            </section>
        `;

        footer.innerHTML = `<p>FAMI PROJECTS</p>`;
    };

    const typeText = (element, text, speed = 4) => {
        return new Promise(resolve => {
            element.innerHTML = '';
            let i = 0;
            let isTag = false;
            let tagBuffer = '';
            let htmlString = '';

            const type = () => {
                if (i < text.length) {
                    const char = text[i];
                    
                    if (char === '<') isTag = true;
                    if (char === '>') {
                        isTag = false;
                        tagBuffer += char;
                        htmlString += tagBuffer;
                        tagBuffer = '';
                        i++;
                        type();
                        return;
                    }

                    if (isTag) {
                        tagBuffer += char;
                    } else {
                        htmlString += char;
                        element.innerHTML = htmlString + (isTag ? tagBuffer : '');
                    }
                    
                    i++;
                    setTimeout(type, speed);
                } else {
                    element.innerHTML = text;
                    resolve();
                }
            };
            type();
        });
    };

    const eraseText = (element, speed = 2) => {
        return new Promise(resolve => {
            const text = element.innerHTML;
            let i = text.length;
            
            const erase = () => {
                if (i > 0) {
                    const char = text[i - 1];
                    if (char === '>') {
                        const openTagIndex = text.lastIndexOf('<', i);
                        if (openTagIndex !== -1) {
                            i = openTagIndex;
                        } else {
                            i--;
                        }
                    } else {
                        i--;
                    }
                    element.innerHTML = text.substring(0, i);
                    setTimeout(erase, speed);
                } else {
                    resolve();
                }
            };
            erase();
        });
    };

    const applyText = (lang, elementId, textKey) => {
        const el = document.getElementById(elementId);
        if (el) {
            if (textKey === 'creator1_btn') {
                el.querySelector('.btn-text').textContent = translations[lang][textKey];
            } else if (textKey === 'creator2_btn') {
                el.querySelector('.btn-text').textContent = translations[lang][textKey];
            } else {
                el.innerHTML = translations[lang][textKey];
            }
        }
    };

    const animateTransition = async (lang) => {
        if (isAnimating) return;
        isAnimating = true;
        langToggle.classList.add('switching');

        const navKeys = ['nav_home', 'nav_about', 'nav_team', 'nav_games'];
        const navIds = ['nav-hero', 'nav-about', 'nav-team', 'nav-games'];
        
        await Promise.all(navIds.map(id => eraseText(document.getElementById(id), 2)));
        await new Promise(r => setTimeout(r, 50));
        navKeys.forEach((key, i) => applyText(lang, navIds[i], key));
        await Promise.all(navIds.map(id => typeText(document.getElementById(id), document.getElementById(id).innerHTML, 4)));

        const heroKeys = ['hero_tagline', 'hero_status'];
        const heroIds = ['txt-hero-tagline', 'txt-hero-status'];
        
        await Promise.all(heroIds.map(id => eraseText(document.getElementById(id), 2)));
        await new Promise(r => setTimeout(r, 50));
        heroKeys.forEach((key, i) => applyText(lang, heroIds[i], key));
        await Promise.all(heroIds.map(id => typeText(document.getElementById(id), document.getElementById(id).innerHTML, 4)));

        const aboutKeys = ['about_title', 'about_p1', 'about_p2'];
        const aboutIds = ['txt-about-title', 'txt-about-p1', 'txt-about-p2'];
        
        await Promise.all(aboutIds.map(id => eraseText(document.getElementById(id), 2)));
        await new Promise(r => setTimeout(r, 50));
        aboutKeys.forEach((key, i) => applyText(lang, aboutIds[i], key));
        await Promise.all(aboutIds.map(id => typeText(document.getElementById(id), document.getElementById(id).innerHTML, 4)));

        const teamKeys = ['team_title', 'creator1_name', 'creator1_desc', 'creator1_btn', 'creator2_name', 'creator2_desc', 'creator2_btn'];
        const teamIds = ['txt-team-title', 'txt-creator1-name', 'txt-creator1-desc', 'txt-creator1-btn', 'txt-creator2-name', 'txt-creator2-desc', 'txt-creator2-btn'];
        
        await Promise.all(teamIds.map(id => {
            const el = document.getElementById(id);
            if (id === 'txt-creator1-btn' || id === 'txt-creator2-btn') {
                return eraseText(el.querySelector('.btn-text'), 2);
            }
            return eraseText(el, 2);
        }));
        await new Promise(r => setTimeout(r, 50));
        teamKeys.forEach((key, i) => applyText(lang, teamIds[i], key));
        await Promise.all(teamIds.map(id => {
            const el = document.getElementById(id);
            if (id === 'txt-creator1-btn' || id === 'txt-creator2-btn') {
                return typeText(el.querySelector('.btn-text'), el.querySelector('.btn-text').textContent, 4);
            }
            return typeText(el, el.innerHTML, 4);
        }));

        const gamesKeys = ['games_title', 'game_status', 'game_desc'];
        const gamesIds = ['txt-games-title', 'txt-game-status', 'txt-game-desc'];
        
        await Promise.all(gamesIds.map(id => eraseText(document.getElementById(id), 2)));
        await new Promise(r => setTimeout(r, 50));
        gamesKeys.forEach((key, i) => applyText(lang, gamesIds[i], key));
        await Promise.all(gamesIds.map(id => typeText(document.getElementById(id), document.getElementById(id).innerHTML, 4)));

        langText.textContent = lang === 'ru' ? 'RU' : 'EN';
        langTooltip.textContent = translations[lang].tooltip_lang;
        document.getElementById('pre-subtext').innerHTML = translations[lang].preloader_subtext;

        setTimeout(() => {
            langToggle.classList.remove('switching');
        }, 200);

        isAnimating = false;
    };

    renderStructure();
    
    document.getElementById('nav-hero').innerHTML = translations[currentLang].nav_home;
    document.getElementById('nav-about').innerHTML = translations[currentLang].nav_about;
    document.getElementById('nav-team').innerHTML = translations[currentLang].nav_team;
    document.getElementById('nav-games').innerHTML = translations[currentLang].nav_games;
    document.getElementById('txt-hero-tagline').innerHTML = translations[currentLang].hero_tagline;
    document.getElementById('txt-hero-status').innerHTML = translations[currentLang].hero_status;
    document.getElementById('txt-about-title').innerHTML = translations[currentLang].about_title;
    document.getElementById('txt-about-p1').innerHTML = translations[currentLang].about_p1;
    document.getElementById('txt-about-p2').innerHTML = translations[currentLang].about_p2;
    document.getElementById('txt-team-title').innerHTML = translations[currentLang].team_title;
    document.getElementById('txt-creator1-name').innerHTML = translations[currentLang].creator1_name;
    document.getElementById('txt-creator1-desc').innerHTML = translations[currentLang].creator1_desc;
    document.querySelector('#txt-creator1-btn .btn-text').textContent = translations[currentLang].creator1_btn;
    document.getElementById('txt-creator2-name').innerHTML = translations[currentLang].creator2_name;
    document.getElementById('txt-creator2-desc').innerHTML = translations[currentLang].creator2_desc;
    document.querySelector('#txt-creator2-btn .btn-text').textContent = translations[currentLang].creator2_btn;
    document.getElementById('txt-games-title').innerHTML = translations[currentLang].games_title;
    document.getElementById('txt-game-status').innerHTML = translations[currentLang].game_status;
    document.getElementById('txt-game-desc').innerHTML = translations[currentLang].game_desc;
    langTooltip.textContent = translations[currentLang].tooltip_lang;

    langToggle.addEventListener('click', () => {
        const newLang = currentLang === 'ru' ? 'en' : 'ru';
        currentLang = newLang;
        animateTransition(currentLang);
    });

    setTimeout(() => {
        preloader.classList.add('hidden');
    }, 2600);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    const triggers = document.querySelectorAll('.anim-trigger');
    triggers.forEach(trigger => {
        if (trigger.id !== 'hero') {
            revealObserver.observe(trigger);
        }
    });

    const observerOptions = {
        root: null,
        rootMargin: '-40% 0px -50% 0px',
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('nav-link')) {
            e.preventDefault();
            const targetId = e.target.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});