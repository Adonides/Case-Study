
/*INTRO==========================================*/
const Intro = {
    getTimeline() {
        const timeLine = gsap.timeline({defaults: {ease: "power1.out"}})

        timeLine.to('.intro-text', {y: "0%", duration: 1, stagger: 0.25}) 
        /*stagger= textos aparecem um após o outro*/
        timeLine.to(".slider", {y:"-100%", duration: 1.5, delay: 1})
        timeLine.to(".intro", {y:"-100%", duration: 1}, "-=1") /*1sec faster*/
        timeLine.fromTo("nav", {opacity: 0}, {opacity: 1, duration: 1.5})
        timeLine.fromTo("h1", {opacity: 0}, {opacity: 1, duration: 1}, "-=1")
    }
}

/*NAVBAR==========================================*/
const NavbarScroll = {
    getScrolling() {
        window.addEventListener("scroll", function(){
            const navbar = document.querySelector("nav")
            navbar.classList.toggle("sticky", window.scrollY > 0)
        })
    }
}

/*COMMENTS==========================================*/
const CommentForm = {
    name: document.querySelector('#comments-name'),
    comment: document.querySelector('#comments-area'),

    getValues() {
        return {
            name: this.name.value,
            comment: this.comment.value
        }
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
            commentDate.innerText = 'February 26th, 2021'
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

}

const CaseStudy = {
    rendPage() {

        Intro.getTimeline()

        NavbarScroll.getScrolling()
    
    }
}



CaseStudy.rendPage()