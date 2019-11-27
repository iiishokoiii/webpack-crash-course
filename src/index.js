import _ from 'lodash'
// import { NAME, sum } from './utilities'
import * as utilities from './utilities'
import { NAME as utilitiesName } from './utilities'

console.log(utilities.sum(1, 2))
console.log(utilities.NAME)
console.log(utilitiesName)
function component() {
  const elm = document.createElement('div')
  const array = ['Hello', 'webpack', '!!']
  elm.innerHTML = _.join(array, ' ')
  return elm
}

document.body.appendChild(component())