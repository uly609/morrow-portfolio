const navLinks = [...document.querySelectorAll('.nav-link')];
const sections = [...document.querySelectorAll('main section[id]')];

const updateActiveNav = () => {
  const current = sections.reduce((active, section) => {
    const distance = Math.abs(section.getBoundingClientRect().top - 130);
    return distance < active.distance ? { id: section.id, distance } : active;
  }, { id: 'top', distance: Infinity });

  navLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${current.id}`));
};

window.addEventListener('scroll', updateActiveNav, { passive: true });
updateActiveNav();

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.forEach((item) => item.classList.toggle('active', item === link));
  });
});
