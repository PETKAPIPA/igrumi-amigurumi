const dropdown__button = document.querySelector('.dropdown__button')
const dropdown__menu = document.querySelector('.dropdown__menu')
const dropdown__menuLinks = document.querySelectorAll('.dropdown__menu-link')

dropdown__button.addEventListener('click', (e) => {
  dropdown__button.classList.toggle('active')

  if (dropdown__button.classList.contains('active')) {
    dropdown__button.setAttribute('aria-expanded', 'true')
    dropdown__menu.setAttribute('aria-hidden', 'false')
    dropdown__menuLinks.forEach(link => link.setAttribute('tabindex', '0'))
  } else {
    dropdown__button.setAttribute('aria-expanded', 'false')
    dropdown__menu.setAttribute('aria-hidden', 'true')
    dropdown__menuLinks.forEach(link => link.setAttribute('tabindex', '-1'))
  }
})

