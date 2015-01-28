export var PushSegue = {
  animate(t, a, b) {
    setStyle(a.component.element, {
      transform: `translate3d(0, ${-t * 20}%, 0) rotateX(${-t * 5}deg)`,
      transformOrigin: '0% 0%',
      opacity: 1 - t
    })

    setStyle(b.component.element, {
      transform: `translate3d(0, ${(1 - t) * 100}%, 0)`
    })
  },
  duration: 700,
  curve: inOutExpo
}

export var PopSegue = {
  animate(t, a, b) { PushSegue.animate(1 - t, b, a) },
  duration: PushSegue.duration,
  curve: PushSegue.curve
}

export var SwapSegue = {
  animate(t, a, b) {
    setStyle(a.component.element, {
      transform: `translate3d(0, 0, ${-t * 300}px)`,
      opacity: 1 - t
    })

    setStyle(b.component.element, {
      transform: `translate3d(0, 0, ${(t - 1) * 300}px)`,
      opacity: t
    })
  },
  duration: 700,
  curve: inOutExpo
}

var prefixed = {
  transform: 'transform' in document.body.style ? 'transform' : 'webkitTransform'
}

function setStyle(element, style) {
  for (var key in style) { element.style[prefixed[key] || key] = style[key] }
}


function inOutExpo(t) {
  if (t === 0) { return 0 }
  if (t === 1) { return 1 }
  if (t < 0.5) {
    return     0.5 * Math.pow(2,  20 * t - 10)
  } else {
    return 1 - 0.5 * Math.pow(2, -20 * t + 10)
  }
}
