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

        function renderPage() {
            NavbarScroll.getScrolling()

        }
        renderPage()





