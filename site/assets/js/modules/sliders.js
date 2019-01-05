import { $ } from '../vendors'

const sliders = (function () {
  const arrowBig = name => `<span>${name}</span>`

  const arrow = name =>
    `<svg class="icon icon-${name} icon--arrow"><use xlink:href="#icon-${name}"></use></svg>`

  const bigSlider = () => {
    $('.js-big-slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      rows: 0,
      arrows: true,
      prevArrow: `<button type='button' class='slider-big-nav slider-big-nav--left'>${arrowBig(
        '<'
      )}</button>`,
      nextArrow: `<button type='button' class='slider-big-nav slider-big-nav--right'>${arrowBig(
        '>'
      )}</button>`,
      responsive: [
        {
          breakpoint: 480,
          settings: {
            adaptiveHeight: true
          }
        }
      ]
    })
  }

  const showroomSlider = () => {
    $('.js-showroom-slider').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      rows: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true
          }
        }
      ]
    })
  }

  const brandSlider = () => {
    $('.js-brand-slider').slick({
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 6,
      rows: 0,
      variableWidth: true,
      centerMode: false,
      arrows: true,
      prevArrow: `<button type='button' class='slider-nav slider-nav--left'>${arrow(
        'chevron-left'
      )}</button>`,
      nextArrow: `<button type='button' class='slider-nav slider-nav--right'>${arrow(
        'chevron-right'
      )}</button>`
    })
  }
  const init = () => {
    bigSlider()
    showroomSlider()
    brandSlider()
  }

  return {
    init
  }
})()

export default sliders
