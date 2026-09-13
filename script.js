// Subject Details Data
const subjectDetails = {
    math: {
        title: 'MATHEMATICS',
        description: 'Mathematics is the foundation of logical thinking and problem-solving. Our comprehensive Mathematics program covers fundamental concepts to advanced topics, helping students develop critical thinking skills and mathematical proficiency. Whether you\'re preparing for exams or seeking to master mathematical concepts, our curated content is designed to build confidence and competency.',
        topics: [
            'Algebra - Equations, inequalities, functions, and polynomials',
            'Geometry - Shapes, angles, areas, volumes, and spatial reasoning',
            'Trigonometry - Trigonometric ratios, angles, and applications',
            'Calculus - Limits, derivatives, integrals, and applications',
            'Statistics & Probability - Data analysis, distributions, and probability theory',
            'Number Theory - Prime numbers, factors, and numerical concepts',
            'Matrices & Linear Algebra - Matrix operations and system solving',
            'Financial Mathematics - Interest, annuities, and financial calculations'
        ]
    },
    english: {
        title: 'ENGLISH',
        description: 'Master the English language through our comprehensive program focusing on literature, composition, communication, and critical analysis. Our English courses are designed to improve reading comprehension, writing skills, and effective communication. Students will explore classic and contemporary literature, develop strong writing techniques, and enhance their ability to communicate ideas clearly and persuasively.',
        topics: [
            'Grammar & Syntax - Parts of speech, sentence structures, and punctuation',
            'Reading Comprehension - Understanding and analyzing texts',
            'Creative Writing - Fiction, poetry, and creative expression',
            'Essay Writing - Argumentative, analytical, and descriptive essays',
            'Literature Analysis - Understanding themes, characters, and literary devices',
            'Speaking & Listening - Oral communication and presentation skills',
            'Vocabulary Development - Building and using advanced vocabulary',
            'Business Communication - Professional writing and correspondence'
        ]
    },
    computer: {
        title: 'COMPUTER STUDIES',
        description: 'Prepare for the digital age with our Computer Studies program. This course covers programming, software applications, networking, cybersecurity, and IT fundamentals. Students will gain practical skills in coding, system design, and technology concepts essential for the modern workplace. Our hands-on approach ensures you understand both theoretical concepts and practical applications.',
        topics: [
            'Programming Languages - Python, Java, JavaScript, and C++',
            'Web Development - HTML, CSS, and web application development',
            'Database Management - SQL, data modeling, and database design',
            'Networking - Network protocols, internet, and connectivity',
            'Cybersecurity - Security principles, threats, and protection strategies',
            'Operating Systems - System architecture and management',
            'Software Development - Design patterns and software engineering',
            'Data Structures & Algorithms - Efficient coding and problem-solving'
        ]
    },
    accounting: {
        title: 'ACCOUNTING',
        description: 'Develop expertise in accounting principles and financial management through our comprehensive Accounting program. Students will learn how to record financial transactions, prepare financial statements, and analyze business performance. Our curriculum prepares you for accounting examinations and provides the foundation for careers in finance, auditing, and business management.',
        topics: [
            'Basic Accounting Principles - Debit, credit, and accounting equations',
            'Journalizing & Posting - Recording transactions and ledger accounts',
            'Financial Statements - Balance sheets, income statements, and cash flow',
            'Trial Balance & Adjustments - Preparing accounts for reporting',
            'Cost Accounting - Cost analysis and management accounting',
            'Payroll & Taxes - Employee payroll and tax calculations',
            'Auditing Basics - Internal controls and audit procedures',
            'Business Finance - Financial planning and decision-making'
        ]
    },
    economics: {
        title: 'ECONOMICS',
        description: 'Understand the principles that drive business and society through our Economics program. Learn how economies function, markets operate, and how individuals and businesses make decisions. Our comprehensive course covers microeconomics, macroeconomics, international trade, and current economic issues. Gain insights into global economic trends and develop analytical skills for informed decision-making.',
        topics: [
            'Microeconomics - Supply, demand, market structures, and consumer behavior',
            'Macroeconomics - GDP, inflation, employment, and monetary policy',
            'International Trade - Imports, exports, exchange rates, and trade policies',
            'Market Systems - Capitalism, socialism, and mixed economies',
            'Government Economics - Taxation, government spending, and fiscal policy',
            'Consumer Economics - Personal finance and household economics',
            'Business Economics - Profit maximization and business decisions',
            'Economic Development - Growth, poverty, and development issues'
        ]
    }
};

// Open Subject Modal
function openSubjectModal(subject) {
    const modal = document.getElementById('subjectModal');
    const modalBody = document.getElementById('modalBody');
    const data = subjectDetails[subject];

    if (data) {
        modalBody.innerHTML = `
            <h2 class="subject-title">${data.title}</h2>
            <p class="subject-description">${data.description}</p>
            <div class="subject-topics">
                <h4>📚 Topics Covered:</h4>
                <ul>
                    ${data.topics.map(topic => `<li>${topic}</li>`).join('')}
                </ul>
            </div>
        `;
        modal.classList.add('show');
    }
}

// Close Subject Modal
function closeSubjectModal() {
    const modal = document.getElementById('subjectModal');
    modal.classList.remove('show');
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('subjectModal');
    if (event.target === modal) {
        modal.classList.remove('show');
    }
}

// Handle form submission
function handleSubmit(event) {
    event.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    event.target.reset();
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Active nav link highlighting
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
    });
}

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu.style.display === 'flex') {
            navMenu.style.display = 'none';
        }
    });
});
