;(function (document) {
  function setupNavTransitions() {
    const body = document.body
    const navOpenClass = 'nav-open'
    function toggleNav() {
      body.classList.toggle(navOpenClass)
    }
    const navToggle = document.getElementById("nav-toggle")
    const navOverlay = document.getElementById("nav-overlay")
    navToggle.addEventListener("click", toggleNav)
    navOverlay.addEventListener("click", toggleNav)

    // move components to body
    let comps = Array.from(document.getElementById("nav-components").children)
    comps.forEach(elc => document.body.appendChild(elc))
  }
  window.addEventListener("load", _ => setupNavTransitions(document))
})(document);