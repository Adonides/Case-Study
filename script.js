
/*INTRO==========================================*/
const Intro = {
    getTimeline() {
        const timeLine = gsap.timeline({defaults: {ease: "power1.out"}})

        timeLine.to('.intro-text', {y: "0%", duration: 1, stagger: 0.25}) 
        /*stagger= textos aparecem um após o outro*/
        timeLine.to(".slider", {y:"-100%", duration: 1.5, delay: 1})
        timeLine.to(".intro", {y:"-100%", duration: 1}, "-=1") /*1sec faster*/
        timeLine.fromTo("nav", {opacity: 0}, {opacity: 1, duration: 1.5})
        timeLine.fromTo("h1", {opacity: 0}, {opacity: 1, duration: 1}, "-=1.5")
        timeLine.fromTo(".top-icons", {opacity: 0}, {opacity: 1, duration: 1}, "-=1.5")
    }
}

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
        checkOut: "Foreword",
        latest: "Latest Article",
        article: "The Future of Education",
        author: "By Adonides Amparo",
        datePosted: "March 22th, 2021",
        article01: "Before enrolling a college or online course, we got to think what is the best method to learn X or Z.",
        article02: "Is the traditional Education the best option and what to say about online learning? In this blog I will run over through those questions and give my sincere opinion about it.",
        article03: "Traditional Education",
        article04: "The more I think about learning, the less excited I become about traditional learning. If you ask me, it´s about following a certain pattern, a routine and most of the time you´re forced to learn things you're not really interested in. And worse, that won't be of any use to you at your career path. You will not only have to invest a lot of money, but also a lot of time to constantly get from one place of learning to another.",
        article05: "The strongest defend to traditional learning would be the network, programs and internships offered from those institutes who has the power to partnership with companies. Oh yeah but those benefices are not for every alumnus, the most the time just few students are including to it. No really, the main aspect I would pick from the traditional education is the structure, I say it because there are some subjects, career we must use expense equipment, and the easiest example is to study medicine, I would say it is almost impossible to buy it to have a private laboratory. Even tough partial online course would to the job!",
        article06: "Online Learning",
        article07: "It can be so powerful, all we need to achieve that is a routine, like we do on the traditional learning, yeah exactly to have a specific time to study, manage the time could be the main point you will fail to have a success experience with online course.",
        article08: "That´s the kind of attitude I like. The point you push yourself to a new level! Because you are starting to become the boss of your learning, managing your time and being more independent, in some online curses you got classes on video and even you may interact with the lecture. The cool thing is you are managing your own flexible timetable, paying much less and you still have some support of the institution.",
        article09: "Happiness is the key to happiness.",
        article10: "The focus here in the end the day is to achieve our goal as soon as possible, and all the various methods of education there are pros and cons, and more than that changes for each person depending on how they apply them. In the way to potential your education we got know ourselves well to do it with happiness because believe does not matter you love the subject or not, the true is, hard times will come. It can be to understand one concert or lack of time to study, you might be frustrated then and be happy in what we are doing will surpass any frustration, because each hard time will be just a good challenge!",
        article11: "Write Your Opinion",
        article12: "Contents",
        article13: "Traditional Education",
        article14: "Online Education",
        article15: "My Experience",
        commentTitle: "Leave a Comment",
        translated: "Translated by:",
        by: "Brooke Taylor",
    },
    portuguese: {
        intro01: "para autodidatas",
        intro02: "para todos os dias",
        intro03: "de desafios",
        nav01: "Sobre",
        nav02: "Artigos",
        nav03: "Contato",
        nav04: "Inglês",
        home: "Auto-didata é a maneira mais rápida de aprender ",
        checkOut: "Prefácio",
        latest: "Último Artigo",
        article: "O Futuro da Educação",
        author: "Por Adonides Amparo",
        datePosted: "22 de Março de 2021",
        article01: "Antes de matricular-nos em uma faculdade ou curso online, devemos pensar qual é o melhor método para aprender X ou Z. ",
        article02: "A educação tradicional é a melhor opção? e o que dizer sobre o aprendizado online? Neste blog irei repassar essas perguntas e dar minha opinião sincera a respeito.",
        article03: "Educação tradicional ",
        article04: "Mais eu penso em aprender, menos fico empolgado com o aprendizado tradicional, se você quer saber se trata de seguir um padrão, uma rotina e na maioria das vezes ser forçado a aprender coisas que você não esta interessado e muito pior, não será necessário para a sua carreira. É um investimento muito caro e exige que você se desloque para estar onde a aula ocorrerá consumindo mais do seu tempo.",
        article05: "A defesa mais forte para o aprendizado tradicional seria a rede de contatos, programas e estágios oferecidos por instituições que têm poder de parcerias com empresas. Ah, mas esses benefícios não são para todos os alunos, na maioria das vezes, apenas alguns alunos são incluídos. Não mesmo este são os motivos para se matricular nesses intitutos, o principal aspecto que eu pegaria da educação tradicional é a estrutura, digo isso porque tem algumas disciplinas, ou carreira que temos que usar equipamento de carissimos, e um exemplo mais fácil seria estudar medicina, eu diria que é quase impossível comprar um laboratório privado. Porém até mesmo um curso online parcial faria o trabalho! ",
        article06: "Curso Online",
        article07: "Pode ser tão poderoso, tudo o que precisamos para conseguir isso é uma rotina, como fazemos no aprendizado tradicional, sim, exatamente ter um horário específico para estudar, administrar o tempo pode ser o ponto primodial você ter uma experiência de sucesso com um curso online. ",
        article08: "Este tipo de mentalidade que gosto muito, neste ponto você se esforça e entra em um outro nível! Porque você está começando a se tornar o chefe do seu aprendizado, administrando seu tempo e sendo mais independente, em alguns cursos online você tem aulas em vídeo e até pode interagir com a palestra. O legal é que você está administrando um pouco melhor o seu horário que é mais flexível, pagando muito menos e ainda tem algum apoio da instituição.",
        article09: "A felicidade é a chave da felicidade.",
        article10: "O foco aqui no final das contas é atingir nosso objetivo o mais rápido possível, e todos os métodos de educação tem seus prós e contras, e mais do que isso tudo muda conforme cada pessoa cada um de nós temos nossas caracteristicas. No caminho para potencializar nossa educação precisamos conhece-nos bem para fazê-lo com alegria, pois acredite que não importa se você ama ou não o assunto, a verdade é que difículdades virão. Pode ser por não entender um concerto ou falta de tempo para estudar, você pode ficar frustrado então esta determinado e feliz no que estamos fazendo superará qualquer frustração, pois cada momento difícil será apenas um bom desafio para ser superado!",
        article11: "Escreva sua opinião",
        article12: "Conteúdo",
        article13: "Educação tradicional",
        article14: "Educação online",
        article15: "Minha Experiência",
        commentTitle: "Deixe um Comentário",
        translated: "Traduzido por:",
        by: "-",
    },
    spanish: {
        intro01: "para autodidactas",
        intro02: "para cada día",
        intro03: "de desafíos",
        nav01: "Sobre",
        nav02: "Artículos",
        nav03: "Contacto",
        nav04: "Inglés",
        home: "Autodidacta es la forma más rápida de aprender",
        checkOut: "Preface",
        latest: "Ultimo articulo",
        article: "¿Dónde está el futuro de la educación?",
        author: "Por Adonides Amparo",
        datePosted: "22 de marzo de 2021",
        article01: "Antes de matricularnos en la universidad o en un curso online, tenemos que pensar cuál es la mejor manera de aprender X, [Y] o Z.",
        article02: "¿Es la educación tradicional la mejor opción? ¿Y qué debe pensar del aprendizaje en línea? En mi blog, repasaré estas cuestiones y compartiré mi sincera opinión.",
        article03: "Educación tradicional",
        article04: "Cuanto más pienso en el aprendizaje, menos me entusiasma el aprendizaje tradicional. En mi opinión, se trata de seguir un patrón, una rutina, y la mayoría de las veces te ves obligado a aprender cosas que no te interesan realmente. Y lo que es peor, eso no te servirá para nada en tu trayectoria profesional. No sólo tendrás que invertir mucho dinero, sino también mucho tiempo para ir constantemente de un lugar de aprendizaje a otro.",
        article05: "Lo que más habla a favor de un curso de educación tradicional son las redes, los programas de apoyo y las prácticas que se conceden en instituciones que tienen conexiones con empresas de la economía libre. Sin embargo, estos beneficios no están disponibles por igual para todos los ex alumnos, sino que sólo se conceden a un pequeño grupo de ellos. Por supuesto, hay algunos temas para los que hay que utilizar equipos caros. Por ejemplo, un ejemplo muy claro sería la facultad de medicina, yo diría que es casi imposible comprar un laboratorio privado. Aunque un estudio en línea a media jornada también funcionaría!",
        article06: "Cursos en línea",
        article07: "Pueden ser tan eficaces cuando se ha conseguido una rutina similar a la del aprendizaje tradicional: tener un tiempo determinado para estudiar. La gestión del tiempo puede ser el factor esencial para que la experiencia de aprendizaje en línea sea un éxito.",
        article08: "Ese es el tipo de actitud que me gusta. El punto en el que te empujas a ti mismo a un nuevo nivel. Tú eres la única persona que controla tu aprendizaje una vez que aprendes a gestionar tu tiempo adecuadamente y a ser más independiente. A veces, las clases se imparten incluso por videochat y puedes interactuar con el grupo de estudio y el profesor. Eso es lo mejor de todo: tú determinas tu propia gestión del tiempo, pagas sólo una parte en comparación con los cursos tradicionales y sigues teniendo el apoyo de tu institución.",
        article09: "La felicidad es la clave de la felicidad.",
        article10: "Al fin y al cabo, es nuestra propia concentración la que nos permite alcanzar nuestro objetivo lo antes posible. Todas las oportunidades educativas tienen ventajas e inconvenientes que siempre dependen de la persona que participa en ellas. Para determinar nuestra educación de la mejor manera posible, necesitamos conocernos a nosotros mismos para poder vivirla también con alegría. Porque créeme, tanto si te apasiona tu tema como si no, te vas a enfrentar a momentos difíciles. Puede ser una dificultad de comprensión o la falta de tiempo para aprender. Puede que a veces te sientas frustrado, pero si disfrutas de lo que haces podrás superar esa frustración. Porque al final, cada momento difícil también significa un buen reto.",
        article11: "Escribe tu reseña",
        article12: "Contenido",
        article13: "Educación tradicional",
        article14: "Educación en línea",
        article15: "Mi experiencia",
        commentTitle: "Deja un comentario",
        translated: "Traducido por:",
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
        latest: "dernier article",
        article: "L'avenir de l'éducation ",
        author: "De Adonides Amparo",
        datePosted: "22 Mars 2021",
        article01: "Avant de s'inscrire dans une école ou à un cours en ligne, le mieux réfléchir à la meilleure méthode pour apprendre quelque chose.",
        article02: "L'éducation traditionnelle est-elle la meilleure option ? et que dire de l'apprentissage en ligne ? Dans ce blog, je vais parcourir ces questions et donner mon avis sur ce sujet.",
        article03: "Éducation traditionnelle",
        article04: "Plus je pense à l'apprentissage, moins l'apprentissage traditionnel me semble enthousiasmant, de mon point de vue, suivre un modèle, une routine, la plupart du temps être obligé d'apprendre des choses qui ne vous intéresse pas et pire encore : apprendre des chose qui ne seront pas nécessaires pour votre carrière. C'est un investissement très coûteux et vous oblige à vous déplacer pour être là où la se passe le cours ce qui vous fera perdre du temps et de l’argent.",
        article05: "La meilleure défense contre l'apprentissage traditionnel serait le réseau, les programmes et les stages offerts par les instituts qui ont le pouvoir de s'associer avec les entreprises. Oh oui, mais ces avantages ne sont pas pour tous les élèves, la plupart du temps, seuls quelques étudiants y participent. Non vraiment, le principal aspect que je choisirais dans l'enseignement traditionnel est la structure, je le dis car il y a des matières et des carrières dans lesquelles il faut utiliser du matériel coûteux, et l'exemple le plus simple est d'étudier la médecine, je dirais qu'il est presque impossible de s’acheter un laboratoire privé. Même si des cours en ligne partiels ferait l'affaire !",
        article06: "Apprentissage en ligne ",
        article07: "Cela peut être si puissant, tout ce dont nous avons besoin pour y parvenir c’est d’une routine, comme nous le faisons sur l'apprentissage traditionnel, ouais exactement pour avoir un temps spécifique pour étudier, La gestion du temps pourrait être le point principal qui vous fera échouerez à avoir une expérience réussie avec les cours en ligne.",
        article08: "Ce genre d'esprit est ce que j'aime, être capable de se poussez au niveau supérieur ! Parce que vous commencez à devenir le patron de votre apprentissage, à gérer votre temps et à être plus indépendant, dans certains cours en ligne, vous avez des cours en vidéo et vous pouvez même interagir avec la conférence. Ce qui est cool, c'est que vous gérez un peu votre emploi du temps de manière flexible, vous payez beaucoup moins et que vous bénéficiez toujours du soutien de l'institution.",
        article09: "Le bonheur est la clé du bonheur.",
        article10: "L'objectif ici en fin de compte est d'atteindre notre objectif le plus rapidement possible, et toutes les méthodes d'éducation ont des avantages et des inconvénients, et plus encore c’est différent entre toutes les personnes qui l’applique. Dans la manière de valoriser notre éducation, nous devons bien nous connaître pour le faire avec bonheur parce que croire n’importe peu que vous aimez le sujet ou non, le vérité est que des temps difficiles arrivent. Cela peut être pour comprendre un concert ou le manque de temps pour étudier, vous pourriez alors être frustré et être heureux dans ce que nous faisons surpassera toute frustration, car chaque moment difficile sera juste un bon défi !",
        article11: "Écrivez votre opinion",
        article12: "Contenu",
        article13: "traditionnelle",
        article14: "Éducation en ligne",
        article15: "Mon expérience",
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
        latest: "der neueste Artikel",
        article: "Die Zukunft der Bildung ",
        author: "Von Adonides Amparo",
        datePosted: "22. März 2021",
        article01: "Bevor wir uns für ein Studium oder einen Online-Kurs anmelden, müssen wir uns überlegen, was die beste Methode ist, um X oder Z zu lernen.",
        article02: "Ist die traditionelle Lernmethodik die beste Option? Oder vielleicht doch besser Online Lernmethoden? In diesem Blog werde ich diese Fragen durchgehen und meine aufrichtige Meinung dazu abgeben.",
        article03: "Traditionelles Lernen",
        article04: "Je mehr ich über das Lernen nachdenke, desto weniger begeistere ich mich für ein traditionelles Lernen. Wenn man mich fragt, folgt es immer einem bestimmten Muster, ist oftmals mit einem Zwang verbunden, Dinge zu lernen, die man nicht interessant findet und noch schlimmer, meist keine Relevanz für die eigene Karriere hat. Es ist eine sehr kostspielige Investition und erfordert, dass man vor Ort ist, was ebenfalls mehr Zeit in Anspruch nimmt.",
        article05: "Die stärkste Argumente für traditionelles Lernen wäre das Netzwerk, die Programme und Praktika, die von den Instituten angeboten werden, welche die Möglichkeiten haben, mit Unternehmen zusammenzuarbeiten. Davon profitieren aber meist nicht alle Absolvent*innen, sondern nur ein paar wenige Studierende. Aber mal im Ernst, der Hauptaspekt, den ich an der traditionellen Ausbildung schätze, ist die Struktur.  Ich sage es, weil es einige Fächer gibt, die mit enormen Kosten verbunden sind, wie beispielsweise Medizin zu studieren. Ich würde sagen in Eigenregie, ist es fast unmöglich. Wer kann sich schon ein privates Labor leisten? Obwohl Online Unterricht auch dort phasenweise ausreichend wäre.",
        article06: "Online Lernen",
        article07: "Es kann so erfüllend sein! Alles, was wir brauchen, um damit erfolgreich sein zu können, ist eine Routine, wie wir es auch beim traditionellen Lernen haben. Sich feste Zeiten setzen um zu lernen und diese Zeit zu verwalten, sind oftmals die Hauptschwierigkeiten beim Online Lernen.",
        article08: "Das richtige Mindset ist das worauf es ankommt. Dann fängt man an, der eigene Chef im Lernen zu werden. Du kannst dir deine Zeit frei einhalten und bist somit unabhängiger, bekommst deine Unterrichtseinheiten Online als Videos und kannst sogar mit in manchen Vorlesungen aktiv interagieren. Das Coolste ist aber, flexibler in ihrer Zeitplanung sind und trotzdem weniger bezahlen und weiterhin Unterstützung von der Institution bekommen.",
        article09: "Durchhalten ist der Schlüssel zum Glück",
        article10: "Am Ende des Tages geht es hier darum, unser Ziel so schnell wie möglich zu erreichen und alle Methoden der Bildung sowie Ihre Vor- und Nachteile zu betrachten. Jede Person lernt anders und benötigt ein individuelles Programm. Auf dem Weg zu einer erfolgreichen Ausbildung lernt man sich selbst und seinen eigenen Arbeitsweg kennen. Denn selbst wenn man für ein Thema brennt, wird es beim Lernen auch Momente geben, wo es hart ist die Routine weiterhin durchzuziehen. Das mag frustrierend sein, aber man darf nicht vergessen, dass man an jeder Herausforderung wächst und stolz sein wird, wenn man diese bewältigt.",
        article11: "Schreib deine Meinung",
        article12: "Inhalt",
        article13: "Traditionelle Bildung",
        article14: "Online-Bildung",
        article15: "Meine Erfahrung",
        commentTitle: "Hinterlasse einen Kommentar",
        translated: "Übersetzt von:",
        by: "Nori",
    }
}

const Translate = {
    english() {
        if (window.location.hash) {
            if (window.location.hash === "#eng") {
                introduction.textContent = Languages.english.intro01
                everyday.textContent = Languages.english.intro02
                challenge.textContent = Languages.english.intro03
                link01.textContent = Languages.english.nav01
                link02.textContent = Languages.english.nav02
                link03.textContent = Languages.english.nav03
                link04.textContent = Languages.english.nav04
                slogan.textContent = Languages.english.home
                contentBtn.textContent = Languages.english.checkOut
                latestBtn.textContent = Languages.english.latest
                title.textContent = Languages.english.article
                writeBy.textContent = Languages.english.author
                articleDate.textContent = Languages.english.datePosted
                subtitle.textContent = Languages.english.article01
                p01.textContent = Languages.english.article02
                te.textContent = Languages.english.article03
                p02.textContent = Languages.english.article04
                p03.textContent = Languages.english.article05
                ol.textContent = Languages.english.article06
                p04.textContent = Languages.english.article07
                p05.textContent = Languages.english.article08
                happiness.textContent = Languages.english.article09
                p06.textContent = Languages.english.article10
                opinion.textContent = Languages.english.article11
                /*mt01.textContent = Languages.english.article12
                st01.textContent = Languages.english.article13
                st02.textContent = Languages.english.article14
                st03.textContent = Languages.english.article15
                comment.textContent = Languages.english.commentTitle*/
                translatePage.textContent = Languages.english.translated
                translatedBy.textContent = Languages.english.by
            }
            
        }
        
    },
    portuguese() {
        if (window.location.hash) {
            if (window.location.hash === "#por") {
                introduction.textContent = Languages.portuguese.intro01
                everyday.textContent = Languages.portuguese.intro02
                challenge.textContent = Languages.portuguese.intro03
                link01.textContent = Languages.portuguese.nav01
                link02.textContent = Languages.portuguese.nav02
                link03.textContent = Languages.portuguese.nav03
                link04.textContent = Languages.portuguese.nav04
                slogan.textContent = Languages.portuguese.home
                contentBtn.textContent = Languages.portuguese.checkOut
                latestBtn.textContent = Languages.portuguese.latest
                title.textContent = Languages.portuguese.article
                writeBy.textContent = Languages.portuguese.author
                articleDate.textContent = Languages.portuguese.datePosted
                subtitle.textContent = Languages.portuguese.article01
                p01.textContent = Languages.portuguese.article02
                te.textContent = Languages.portuguese.article03
                p02.textContent = Languages.portuguese.article04
                p03.textContent = Languages.portuguese.article05
                ol.textContent = Languages.portuguese.article06
                p04.textContent = Languages.portuguese.article07
                p05.textContent = Languages.portuguese.article08
                happiness.textContent = Languages.portuguese.article09
                p06.textContent = Languages.portuguese.article10
                opinion.textContent = Languages.portuguese.article11
                /*mt01.textContent = Languages.portuguese.article12
                st01.textContent = Languages.portuguese.article13
                st02.textContent = Languages.portuguese.article14
                st03.textContent = Languages.portuguese.article15
                comment.textContent = Languages.portuguese.commentTitle*/
                translatePage.textContent = Languages.portuguese.translated
                translatedBy.textContent = Languages.portuguese.by
            }
            
        }
        
    },
    french() {
        if (window.location.hash) {
            if (window.location.hash === "#fr") {
                introduction.textContent = Languages.french.intro01
                everyday.textContent = Languages.french.intro02
                challenge.textContent = Languages.french.intro03
                link01.textContent = Languages.french.nav01
                link02.textContent = Languages.french.nav02
                link03.textContent = Languages.french.nav03
                link04.textContent = Languages.french.nav04
                slogan.textContent = Languages.french.home
                contentBtn.textContent = Languages.french.checkOut
                latestBtn.textContent = Languages.french.latest
                title.textContent = Languages.french.article
                writeBy.textContent = Languages.french.author
                articleDate.textContent = Languages.french.datePosted
                subtitle.textContent = Languages.french.article01
                p01.textContent = Languages.french.article02
                te.textContent = Languages.french.article03
                p02.textContent = Languages.french.article04
                p03.textContent = Languages.french.article05
                ol.textContent = Languages.french.article06
                p04.textContent = Languages.french.article07
                p05.textContent = Languages.french.article08
                happiness.textContent = Languages.french.article09
                p06.textContent = Languages.french.article10
                opinion.textContent = Languages.french.article11
                /*mt01.textContent = Languages.french.article12
                st01.textContent = Languages.french.article13
                st02.textContent = Languages.french.article14
                st03.textContent = Languages.french.article15
                comment.textContent = Languages.french.commentTitle*/
                translatePage.textContent = Languages.french.translated
                translatedBy.textContent = Languages.french.by
            }
            
        }
        
    },
    german() {
        if (window.location.hash) {
            if (window.location.hash === "#de") {
                introduction.textContent = Languages.german.intro01
                everyday.textContent = Languages.german.intro02
                challenge.textContent = Languages.german.intro03
                link01.textContent = Languages.german.nav01
                link02.textContent = Languages.german.nav02
                link03.textContent = Languages.german.nav03
                link04.textContent = Languages.german.nav04
                slogan.textContent = Languages.german.home
                contentBtn.textContent = Languages.german.checkOut
                latestBtn.textContent = Languages.german.latest
                title.textContent = Languages.german.article
                writeBy.textContent = Languages.german.author
                articleDate.textContent = Languages.german.datePosted
                subtitle.textContent = Languages.german.article01
                p01.textContent = Languages.german.article02
                te.textContent = Languages.german.article03
                p02.textContent = Languages.german.article04
                p03.textContent = Languages.german.article05
                ol.textContent = Languages.german.article06
                p04.textContent = Languages.german.article07
                p05.textContent = Languages.german.article08
                happiness.textContent = Languages.german.article09
                p06.textContent = Languages.german.article10
                opinion.textContent = Languages.german.article11
                /*mt01.textContent = Languages.german.article12
                st01.textContent = Languages.german.article13
                st02.textContent = Languages.german.article14
                st03.textContent = Languages.german.article15
                comment.textContent = Languages.german.commentTitle*/
                translatePage.textContent = Languages.german.translated
                translatedBy.textContent = Languages.german.by
            }
            
        }
        
    },
    slogan: document.querySelector("#slogan"),
    contentBtn: document.querySelector("#contentBtn"),
    latestBtn: document.querySelector("#latestBtn"),
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
                this.latestBtn.textContent = Languages[attribute].latest
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

/*COMMENTS==========================================*/
const CommentForm = {
    name: document.querySelector('#comments-name'),
    comment: document.querySelector('#comments-area'),
    
    submit: document.querySelector('#submit'),

    getValues() {
        return {
            name: this.name.value,
            comment: this.comment.value
        }
    },

    enableSubmit(){ //check the required fields
        const {comment, name } = CommentForm.getValues()
         
        if ( comment.trim() === "" ||
             name.trim() === "") {
            this.submit.classList.remove("btn-enabled")
            console.log(validated)
        } else {
            this.submit.classList.add("btn-enabled")
        }
    },

    checkFields() {
        CommentForm.comment.addEventListener("keyup", this.enableSubmit)
        CommentForm.name.addEventListener("keyup", this.enableSubmit)
    },

    clearFields() {
        this.name.value = ""
        this.comment.value = ""
    },

    submit(event) {
        event.preventDefault()
    
        const newComment = CommentForm.getValues()
        
        DisplayComment.getComment(newComment)

        CommentForm.clearFields()

        
    }
}

const DisplayComment = {
    
    commentList: document.querySelector('.comment-list'),

    getComment(newComment) { 
        const containerDiv = document.createElement("div")
        containerDiv.classList.add("comment")

        const userName = document.createElement('li')
        userName.classList.add("user-name")
        userName.innerText = newComment.name
        containerDiv.appendChild(userName)

        const commentDate = document.createElement('li')
        commentDate.classList.add("date-post")
        currentDate = this.formatDate()
        commentDate.innerText = currentDate
        containerDiv.appendChild(commentDate)

        const userComment = document.createElement('li')
        userComment.classList.add("user-comment")
        userComment.innerText = newComment.comment
        containerDiv.appendChild(userComment)

        const btnReply = document.createElement('button')
        btnReply.classList.add("btn-reply")
        btnReply.innerText = 'REPLY'
        
        containerDiv.appendChild(btnReply)

        DisplayComment.commentList.appendChild(containerDiv)
    },
    formatDate() {
        let today = new Date()

        let month = this.formatMonth(today.getMonth() + 1)
        let year = today.getFullYear()
        let day = this.formatDay(today.getDate())

        let hours = today.getHours()
        let minutes = today.getMinutes()
        let seconds = today.getSeconds()

        let newDate = `${month} ${day}, ${year}`
        let time = `${hours}:${minutes}:${seconds}`
        return newDate 
    }, 
    formatMonth(month) {
         if (month == 1) {
            month = 'January'
         } else if (month == 2) {
            month = 'February'
         } else if (month == 3) {
            month = 'March'
         } else if (month == 4) {
            month = 'April'
         } else if (month == 5) {
            month = 'May'
         } else if (month == 6) {
            month = 'June'
         } else if (month == 7) {
            month = 'July'
         } else if (month == 8) {
            month = 'August'
         } else if (month == 9) {
            month = 'September'
         } else if (month == 10) {
            month = 'Octuber'
         } else if (month == 11) {
            month = 'November'
         } else  {
            month = 'December'
         }
        return month        
    }, 
    formatDay(day) {
        if (day == 1 || day == 21 || day == 31) {
            day = `${day}st`
        } else if ( day == 2 || day == 22) {
            day = `${day}nd`
        } else if ( day == 3 || day == 23) {
            day = `${day}rd`
        } else  {
            day = `${day}th`
        } 
        return day
    }
    
}

const MainPage = {
    rendPage() {

        Intro.getTimeline()

        NavbarScroll.getScrolling()

        /*CommentForm.checkFields()*/
        
        Translate.portuguese()
        Translate.french()
        Translate.german()
        Translate.english()
        Translate.clickEvent()

        
    },
    reloadPage() {
        
       location.reload()
       
    }
}



MainPage.rendPage()

