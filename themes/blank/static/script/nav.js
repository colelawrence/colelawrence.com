;(function (document, window) {
  function setupNav() {
    // move components to body
    const comps = Array.from(document.getElementById("nav-components").children)
    comps.forEach(elc => document.body.appendChild(elc))

    const body = document.body
    const navOpenClass = 'nav-open'
    function toggleNav() {
      body.classList.toggle(navOpenClass)
    }
    const navToggle = document.getElementById("nav-toggle")
    const navOverlay = document.getElementById("nav-overlay")
    navToggle.addEventListener("click", toggleNav)
    navOverlay.addEventListener("click", toggleNav)
    document.body.appendChild(navToggle)

    // scrolling down detection
    let previous = 0
    let test = 0
    const samples = 1
    const recip = 1 / samples
    const recipInf = (samples - 1) * recip
    const navScrollingDown = 'nav-scrolling-down'
    const navScrolled = 'nav-scrolled'
    window.addEventListener("scroll", function () {
      test = previous * recipInf + this.scrollY * recip
      body.classList.toggle(navScrollingDown, previous <= test)
      body.classList.toggle(navScrolled, this.scrollY > 5)
      previous = test
    })
  }
  window.addEventListener("load", _ => setupNav(document))
})(document, window);