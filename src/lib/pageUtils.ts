export function scrollToMiddle(elementId) {
  const element = document.getElementById(elementId);
  const elementTop = element.getBoundingClientRect().top + window.scrollY;
  const offset = window.innerHeight / 2 - element.offsetHeight / 2;
  window.scrollTo({
    top: elementTop - offset,
    behavior: 'smooth'
  });
}
export function scrollToTopMiddle(elementId) {
  const element = document.getElementById(elementId);
  const elementTop = element.getBoundingClientRect().top + window.scrollY;
  const offset = window.innerHeight / 2;
  window.scrollTo({
      top: elementTop - offset,
      behavior: 'smooth'
  });
}