const KEY = '15711462-348049c50f7d6715dcc55cae6'
let page = 1

const input = document.querySelector('.search-input')
const submit = document.querySelector('.btn-search')
const cards = document.querySelector('.cards')
const next = document.querySelector('.next')
const previous = document.querySelector('.previous')

submit.addEventListener('click', response)

previous.addEventListener('click', () => {
  if (page > 1) {
    page--
    response()
  }
})

next.addEventListener('click', () => {
  page++
  response()
})

function response() {
  fetch(`https://pixabay.com/api/?key=${KEY}&q=${input.value}&page=${page}`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      cards.innerHTML = ''
      data.hits.forEach(element => {
        let img = document.createElement('img')
        img.classList.add('cards_item')
        img.src = element.largeImageURL
        cards.appendChild(img)
      });
    })
    .catch(err => console.log(err))
}