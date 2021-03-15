
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
    }
}

/*COMMENTS==========================================*/
const CommentForm = {
    name: document.querySelector('#comments-name'),
    comment: document.querySelector('#comments-area'),
    reactions: document.getElementsByClassName('.emoji'),
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

const CaseStudy = {
    rendPage() {

        Intro.getTimeline()

        NavbarScroll.getScrolling()

        CommentForm.checkFields()
    
    }
}



CaseStudy.rendPage()