function main() {


  mapPages()

  function mapPages() {
    const pageNums = document.querySelectorAll('.projectPageNum')
    const logos = document.querySelectorAll('.logoImage')
    for (let i = 0; i < pageNums.length; i++) {
      pageNums[i].addEventListener('click', (event) => {
        dispalyProject(event.target.id)
      })
    }
    for (let i = 0; i < logos.length; i++) {
      logos[i].addEventListener('mouseover', (event) => {
        dispalyAbout(event.target.id)
      })
    }
  }

  function dispalyProject(project) {
    const projectPages = document.querySelectorAll('.projectPage')
    for (let i = 0; i < projectPages.length; i++) {
      projectPages[i].classList.add('hidden')
      if (i + 1 === parseInt(project)) {
        projectPages[i].classList.remove('hidden')
      }
    }
  }

  function dispalyAbout(logo) {
    const articles = document.querySelectorAll('.about')
    const arrows = document.querySelectorAll('.arrowLBorder')
    for (let i = 0; i < articles.length; i++) {
      articles[i].classList.add('hidden')
      arrows[i].classList.add('hidden')
      if (articles[i].id === logo) {
        articles[i].classList.remove('hidden')
        arrows[i].classList.remove('hidden')

      }
    }
  }





}

window.addEventListener('DOMContentLoaded', main)