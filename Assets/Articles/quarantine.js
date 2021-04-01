/*NAVBAR==========================================*/
const NavbarScroll = {
    getScrolling() {
        window.addEventListener("scroll", function(){
            const navbar = document.querySelector("nav")
            navbar.classList.toggle("sticky", window.scrollY > 0)
        })
    },
    mobileBar() {
        const navbar = document.getElementsByClassName('links')[0]
    navbar.classList.toggle('active-navbar')
    }
}

/*LANGUAGES==========================================*/
const Languages = {
    
    english: {
        intro01: "for Self taught learners,",
        intro02: "for everyday",
        intro03: "challenge.",
        nav01: "About",
        nav02: "Articles",
        nav03: "Contact",
        nav04: "English",
        home: "Self taught is the fast way to learn",
        checkOut: "Latest Article",
        article: "Taking Advantage of Quarantine",
        author: "By Adonides Amparo",
        datePosted: "March 22th, 2021",
        article01: "With the current situation in the world, we must take the opportunity to keep up with our studies. This is the right time to start to study if you have not start yet!",
        article02: "We are not question the decision of many countries to do or not the lockdown, this is March 2021 It means is one year after all those started around the globe and living with restriction and even total lockdown are driving us crazy.",
        
        article03: "Keep our mind busy might be one good solution to pass the time and avoid depression for this situation, I highly recommend online courses! It does not need to be the paid ones, there are so many good contents online from different points of views and languages.",
        article04: "One year ago, when all this started, I spend my quarantine studying Spanish, practicing meditation, learning guitar and exercising with push ups and abs. those were one month and a half of so productive and good moments, guess what I was feeling great!",
        
        article05: "The quarantine helps all that focus to happen, the true is in my head there was nothing more to do, it is all closed, no restaurants, no bars, no meet ups that I used to go, all I have was small drinks with colleagues in my apartment.  I had everything under control, and everything happened under my roof, so study was much easier because that was no trip to be made other party to be at, there was not distraction in my mind to disturb my productive routine.",
        article06: "However, when the second wave came in January in this year, I was not able to keep up like before why was that?",
        
        article07: "In February I realized what I need to bring back that good routine, with productive and joy one… The good vibe around you makes all the difference, yeah “happiness is the key for happiness”. I had lost the control and worries and express was taking over my head! So, I packed my luggage and went back to Brazil to my family, I needed to change the atmosphere, and be surrounded with close people with no worries about any next payment or of being unemployed. ",
        article08: "It was a smart move, today I feel under control again, productive and enjoy good times. My routines the study and growing and projects are getting out to reality. I am happy and I want you happy with yourself as well!!!",
        article09: "Write Your Opinion",
        article10: "Contents",
        article11: "Traditional Education",
        article12: "Online Education",
        article13: "My Experience",
        commentTitle: "Leave a Comment",
        translated: "Translated by:",
        by: "Brooke Taylor",
    },
    portuguese: {
        intro01: "para autoditadas",
        intro02: "para todos os dias",
        intro03: "de desafios",
        nav01: "Sobre",
        nav02: "Artigos",
        nav03: "Contato",
        nav04: "Inglês",
        home: "Auto-didata é a maneira mais rápida de aprender ",
        checkOut: "Prefácio",
        article: "O Futuro da Educação",
        author: "Por Adonides Amparo",
        datePosted: "22 de Março de 2021",
        article01: "With the current situation in the world, we must take the opportunity to keep up with our studies. This is the right time to start to study if you have not start yet!",
        article02: "We are not question the decision of many countries to do or not the lockdown, this is March 2021 It means is one year after all those started around the globe and living with restriction and even total lockdown are driving us crazy.",
        article03: "Keep our mind busy might be one good solution to pass the time and avoid depression for this situation, I highly recommend online courses! It does not need to be the paid ones, there are so many good contents online from different points of views and languages.",
        article04: "One year ago, when all this started, I spend my quarantine studying Spanish, practicing meditation, learning guitar and exercising with push ups and abs. those were one month and a half of so productive and good moments, guess what I was feeling great!",
        
        article05: "The quarantine helps all that focus to happen, the true is in my head there was nothing more to do, it is all closed, no restaurants, no bars, no meet ups that I used to go, all I have was small drinks with colleagues in my apartment.  I had everything under control, and everything happened under my roof, so study was much easier because that was no trip to be made other party to be at, there was not distraction in my mind to disturb my productive routine.",
        article06: "However, when the second wave came in January in this year, I was not able to keep up like before why was that?",
        
        article07: "In February I realized what I need to bring back that good routine, with productive and joy one… The good vibe around you makes all the difference, yeah “happiness is the key for happiness”. I had lost the control and worries and express was taking over my head! So, I packed my luggage and went back to Brazil to my family, I needed to change the atmosphere, and be surrounded with close people with no worries about any next payment or of being unemployed. ",
        article08: "It was a smart move, today I feel under control again, productive and enjoy good times. My routines the study and growing and projects are getting out to reality. I am happy and I want you happy with yourself as well!!!",
        article09: "Write Your Opinion",
        article10: "Contents",
        article11: "Traditional Education",
        article12: "Online Education",
        article13: "My Experience",
        commentTitle: "Deixe um Comentário",
        translated: "Traduzido por:",
        by: "-",
    },
    french: {
        intro01: "pour les apprenants autodidactes",
        intro02: "pour tous les jours",
        intro03: "défis",
        nav01: " Àpropos",
        nav02: "Articles",
        nav03: "Contact",
        nav04: "Anglais",
        home: "L'auto-apprentissage est le moyen le plus rapide d'apprendre",
        checkOut: "avant-propos",
        article: "L'avenir de l'éducation ",
        author: "De Adonides Amparo",
        datePosted: "22 Mars 2021",
        article01: "With the current situation in the world, we must take the opportunity to keep up with our studies. This is the right time to start to study if you have not start yet!",
        article02: "We are not question the decision of many countries to do or not the lockdown, this is March 2021 It means is one year after all those started around the globe and living with restriction and even total lockdown are driving us crazy.",
        article03: "Keep our mind busy might be one good solution to pass the time and avoid depression for this situation, I highly recommend online courses! It does not need to be the paid ones, there are so many good contents online from different points of views and languages.",
        article04: "One year ago, when all this started, I spend my quarantine studying Spanish, practicing meditation, learning guitar and exercising with push ups and abs. those were one month and a half of so productive and good moments, guess what I was feeling great!",
        
        article05: "The quarantine helps all that focus to happen, the true is in my head there was nothing more to do, it is all closed, no restaurants, no bars, no meet ups that I used to go, all I have was small drinks with colleagues in my apartment.  I had everything under control, and everything happened under my roof, so study was much easier because that was no trip to be made other party to be at, there was not distraction in my mind to disturb my productive routine.",
        article06: "However, when the second wave came in January in this year, I was not able to keep up like before why was that?",
        
        article07: "In February I realized what I need to bring back that good routine, with productive and joy one… The good vibe around you makes all the difference, yeah “happiness is the key for happiness”. I had lost the control and worries and express was taking over my head! So, I packed my luggage and went back to Brazil to my family, I needed to change the atmosphere, and be surrounded with close people with no worries about any next payment or of being unemployed. ",
        article08: "It was a smart move, today I feel under control again, productive and enjoy good times. My routines the study and growing and projects are getting out to reality. I am happy and I want you happy with yourself as well!!!",
        article09: "Write Your Opinion",
        article10: "Contents",
        article11: "Traditional Education",
        article12: "Online Education",
        article13: "My Experience",
        commentTitle: "Laissez un commentaire",
        translated: "Traduit par:",
        by: "Léonard Piegay",
    },
    german: {
        intro01: "für unterrichtete Selbstlerner",
        intro02: "für jeden Tag",
        intro03: "Herausforderungen",
        nav01: "Über",
        nav02: "Artikel",
        nav03: "Kontakt",
        nav04: "Englisch",
        home: "Selbstunterricht ist der schnelle Weg zu lernen ",
        checkOut: "Vorwort",
        article: "Die Zukunft der Bildung ",
        author: "Von Adonides Amparo",
        datePosted: "22. März 2021",
        article01: "With the current situation in the world, we must take the opportunity to keep up with our studies. This is the right time to start to study if you have not start yet!",
        article02: "We are not question the decision of many countries to do or not the lockdown, this is March 2021 It means is one year after all those started around the globe and living with restriction and even total lockdown are driving us crazy.",
        article03: "Keep our mind busy might be one good solution to pass the time and avoid depression for this situation, I highly recommend online courses! It does not need to be the paid ones, there are so many good contents online from different points of views and languages.",
        article04: "One year ago, when all this started, I spend my quarantine studying Spanish, practicing meditation, learning guitar and exercising with push ups and abs. those were one month and a half of so productive and good moments, guess what I was feeling great!",
        
        article05: "The quarantine helps all that focus to happen, the true is in my head there was nothing more to do, it is all closed, no restaurants, no bars, no meet ups that I used to go, all I have was small drinks with colleagues in my apartment.  I had everything under control, and everything happened under my roof, so study was much easier because that was no trip to be made other party to be at, there was not distraction in my mind to disturb my productive routine.",
        article06: "However, when the second wave came in January in this year, I was not able to keep up like before why was that?",
        
        article07: "In February I realized what I need to bring back that good routine, with productive and joy one… The good vibe around you makes all the difference, yeah “happiness is the key for happiness”. I had lost the control and worries and express was taking over my head! So, I packed my luggage and went back to Brazil to my family, I needed to change the atmosphere, and be surrounded with close people with no worries about any next payment or of being unemployed. ",
        article08: "It was a smart move, today I feel under control again, productive and enjoy good times. My routines the study and growing and projects are getting out to reality. I am happy and I want you happy with yourself as well!!!",
        article09: "Write Your Opinion",
        article10: "Contents",
        article11: "Traditional Education",
        article12: "Online Education",
        article13: "My Experience",
        commentTitle: "Hinterlasse einen Kommentar",
        translated: "Übersetzt von:",
        by: "Pauline Kiefaber und Nori",
    }
}

const Translate = {
    slogan: document.querySelector("#slogan"),
    contentBtn: document.querySelector("#contentBtn"),
    about: document.querySelector("#link01"),
    articles: document.querySelector("#link02"),
    contact: document.querySelector("#link03"),
    idiom: document.querySelector("#link04"),
    title: document.querySelector("#title"),
    writeBy: document.querySelector("#writeBy"),
    articleDate: document.querySelector("#articleDate"),
    subtitle: document.querySelector("#subtitle"),
    p01: document.querySelector("#p01"),
    traditional: document.querySelector("#te"),
    p02: document.querySelector("#p02"),
    p03: document.querySelector("#p03"),
    online: document.querySelector("#ol"),
    p04: document.querySelector("#p04"),
    p05: document.querySelector("#p05"),
    conclusion: document.querySelector("#happiness"),
    p06: document.querySelector("#p06"),
    opinion: document.querySelector("#opinion"),
    comment: document.querySelector("#comment"),
    /*articleSection: document.querySelector("#mt01"),
    traditionalTitle: document.querySelector("#st01"),
    onlineTitle: document.querySelector("#st02"),
    experienceTitle: document.querySelector("#st03"),*/
    translatedPage: document.querySelector("#translatePage"),
    translatedBy: document.querySelector("#translatedBy"),
    clickEvent() {
        const translateReload = document.querySelectorAll("[data-reload]")
        translateReload.forEach(element => {
            element.addEventListener('click', () => {
                const attribute = element.getAttribute('lang')

                this.slogan.textContent = Languages[attribute].home
                this.contentBtn.textContent = Languages[attribute].checkOut
                this.about.textContent = Languages[attribute].nav01
                this.articles.textContent = Languages[attribute].nav02
                this.contact.textContent = Languages[attribute].nav03
                this.idiom.textContent = Languages[attribute].nav04
                this.title.textContent = Languages[attribute].article
                this.writeBy.textContent = Languages[attribute].author
                this.articleDate.textContent = Languages[attribute].datePosted
                this.subtitle.textContent = Languages[attribute].article01
                this.p01.textContent = Languages[attribute].article02
                this.traditional.textContent = Languages[attribute].article03
                this.p02.textContent = Languages[attribute].article04
                this.p03.textContent = Languages[attribute].article05
                this.online.textContent = Languages[attribute].article06
                this.p04.textContent = Languages[attribute].article07
                this.p05.textContent = Languages[attribute].article08
                this.conclusion.textContent = Languages[attribute].article09
                this.p06.textContent = Languages[attribute].article10
                this.opinion.textContent = Languages[attribute].article11
                /*this.articleSection.textContent = Languages[attribute].article12
                this.traditionalTitle.textContent = Languages[attribute].article13
                this.onlineTitle.textContent = Languages[attribute].article14
                this.experienceTitle.textContent = Languages[attribute].article15
                this.comment.textContent = Languages[attribute].commentTitle*/
                this.translatedPage.textContent = Languages[attribute].translated
                this.translatedBy.textContent = Languages[attribute].by
            })
        })
    },
}

/*REACTIONS==========================================*/
const ReactionIcons = {
    
    values: ['thumbUp', 'thumbDown'],
    setSelected(reaction) {
        const elements = document.getElementById(reaction)
        elements.classList.toggle('selected-reaction')

        const reactions = [...ReactionIcons.values]
        const index = reactions.indexOf(reaction)
        reactions.splice(index, 1)

        ReactionIcons.setUnselected(reactions)
    },
    setUnselected(reactions) {
        reactions.forEach((reaction) => {
            const elements = document.getElementById(reaction)
            elements.classList.remove('selected-reaction')
        })
        
    },
    icons: document.getElementsByClassName('.emoji'),
    setCounter() {
        for (let i = 0; i <= ReactionIcons.reactions.length; i++) {
            ReactionIcons.reaction[i].addEventListener('click', e => {
                e.dataset.reactionId = reaction.id
            })
        }
    }
}

const MyExperiencePage = {
    rendPage() {

        
        NavbarScroll.getScrolling()

        
        Translate.clickEvent()
        

        
    },
    reloadPage() {
        
       
       
    }
}



MyExperiencePage.rendPage()