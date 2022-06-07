import enhance from '@enhance/ssr'
import elements from './elements.mjs'
import Document from './document.mjs'
import arc from '@architect/functions'

export default function html(str, ...values) {
  const html = enhance({ elements })
  return Document(html(str, ...values), arc.static)
}
export function initRender({ initialState = '', scriptTransforms = '' } = {}) {
  let options = { elements }
  if (scriptTransforms) options.scriptTransforms = scriptTransforms
  if (initialState) options.initialState = initialState
  const html = enhance(options)
  return function (str, ...values) {
    return Document(html(str, ...values), arc.static)
  }
}
