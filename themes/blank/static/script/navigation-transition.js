;(function setupNavigationHandlers(document, window) {
  function stripHash(href) {
    return href.replace(/#[\s\S]*$/, '')
  }
  function onNavigation(event, from, to) {
    if (stripHash(from) !== stripHash(to)) {
      document.body.addEventListener("transitionend", () => {
        window.location.href = to
      })
      document.body.style.opacity = 0;
      event.preventDefault()
      return false
    }
  }
  function onWindowClick(event) {
    if (event.isTrusted && event.target.tagName === 'A') {
      return onNavigation(event, window.location.href, event.target.href)
    }
  }
  window.addEventListener("click", onWindowClick)
})(document, window);
