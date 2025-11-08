document.addEventListener('DOMContentLoaded', () => {
  const linksContainer = document.getElementById('links-container');

  socialLinks.forEach((link, idx) => {
    const button = document.createElement('a');
    button.href = link.url;
    button.target = "_blank";
    button.rel = "noopener noreferrer";
    button.classList.add('link-button');

    // تأخير الحركة لكل زر حسب ترتيبه (الأول ثم اللي بعده...)
    const base = 1.2;      // بداية التأخير (ثواني)
    const step = 0.18;     // الفرق بين كل زر والذي يليه
    button.style.animationDelay = `${base + idx * step}s`;

    const icon = document.createElement('i');
    icon.classList.add(...link.iconClass.split(' '));

    const text = document.createTextNode(link.name);

    button.appendChild(icon);
    button.appendChild(text);

    linksContainer.appendChild(button);
  });
});
