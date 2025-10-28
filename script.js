document.addEventListener('DOMContentLoaded', () => {
    const linksContainer = document.getElementById('links-container');

    socialLinks.forEach(link => {
        const button = document.createElement('a');
        button.href = link.url;
        button.target = "_blank"; // Open links in a new tab
        button.rel = "noopener noreferrer"; // Security best practice
        button.classList.add('link-button');

        // الأيقونة
        const icon = document.createElement('i');
        icon.classList.add(...link.iconClass.split(' ')); 

        // النص
        const text = document.createTextNode(link.name);
        
        button.appendChild(icon);
        button.appendChild(text);

        linksContainer.appendChild(button);
    });
});