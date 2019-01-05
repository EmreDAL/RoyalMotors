import { $ } from '../vendors'

const header = (function () {
  const toggleMenu = () => {
    $('.js-menu-toggle').click(() => {
      $('body').toggleClass('menu-active')
    })
  }

  const init = () => {
    toggleMenu()
  }

  return {
    init
  }
})()

export default header
