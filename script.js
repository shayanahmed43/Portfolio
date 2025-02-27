// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Skill bar animation
const skillBars = document.querySelectorAll('.progress');
skillBars.forEach(bar => {
    const percent = bar.getAttribute('data-percent');
    bar.style.setProperty('--percent', percent);
});

// Project cards data
const projects = [
    {
        title: 'E-commerce Website',
        description: 'A full-featured online shop with shopping cart and payment integration.',
        image: 'images/project1.jpg',
        technologies: ['React', 'Node.js', 'MongoDB'],
        link: '#'
    },
    {
        title: 'Portfolio Website',
        description: 'A responsive portfolio website with modern design.',
        image: 'images/project2.jpg',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        link: '#'
    },
    {
        title: 'Task Manager',
        description: 'A task management application with drag-and-drop functionality.',
        image: 'images/project3.jpg',
        technologies: ['React', 'Firebase'],
        link: '#'
    }
];

// Generate project cards
const projectsGrid = document.querySelector('.projects-grid');
if (projectsGrid) {
    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="technologies">
                ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
            </div>
            <a href="${project.link}" class="view-project">View Project</a>
        `;
        projectsGrid.appendChild(card);
    });
}

// Project card hover effects
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Add your form submission logic here
    alert('Message sent successfully!');
    contactForm.reset();
});
