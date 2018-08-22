;(function setupNavigationHandlers(document, window) {
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  function stripHash(href) {
    return href.replace(/#[\s\S]*$/, '')
  }
  function onNavigation(event, from, to) {
    if (!isSafari && stripHash(from) !== stripHash(to)) {
      function transitionOut() {
        // just once
        document.body.addEventListener("transitionend", transitionOut)
        window.location.href = to
      }

      document.body.addEventListener("transitionend", transitionOut)
      document.body.style.opacity = 0;
      event.preventDefault()
      return false
    }
  }
  function findParent(element, pred) {
    if (pred(element)) return element
    else if (element.parentElement) return findParent(element.parentElement, pred)
    else return null
  }
  function onWindowClick(event) {
    let targetA = findParent(event.target, el => el.tagName === 'A')
    if (event.isTrusted && targetA) {
      return onNavigation(event, window.location.href, targetA.href)
    }
  }
  window.addEventListener("click", onWindowClick)
})(document, window);
