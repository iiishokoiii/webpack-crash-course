function component() {
  const elm = document.createElement('div')
  const array = ['Hello', 'webpack']
  elm.innerHTML = _.join(array, ' ')
  return elm
}

document.body.appendChild(component())