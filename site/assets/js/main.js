import { $ } from './vendors'
import { header } from './partials'
import { sliders } from './modules'

$(function () {
  header.init()
  sliders.init()
})
