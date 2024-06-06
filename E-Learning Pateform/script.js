document.addEventListener('DOMContentLoaded', function() {
    const courseContainer = document.getElementById('course-container');
    const enrollModal = document.getElementById('enroll-modal');
    const enrollBtn = document.getElementById('enroll-btn');
    const closeBtn = document.querySelector('.close');

    // Sample data for courses (you can fetch from API)
    const courses = [
        { id: 1, title: 'Course 1', description: 'JAVA TUTORIAL', enrolled: false },
        { id: 2, title: 'Course 2', description: 'PYTHON TUTORIAL', enrolled: false },
        { id: 3, title: 'Course 3', description: 'WEB DEVELOPMENT TUTORIAL', enrolled: false },
        { id: 1, title: 'Course 3', description: 'DATA STUCTURE AND ALGORITHEM', enrolled: false }
    ];

    // Render courses
    function renderCourses() {
        courseContainer.innerHTML = '';
        courses.forEach(course => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <h3>${course.title}</h3>
                <p>${course.description}</p>
                <button data-id="${course.id}" class="enroll">Enroll</button>
            `;
            courseContainer.appendChild(card);
        });
    }

    // Handle enroll button click
    courseContainer.addEventListener('click', function(event) {
        if (event.target.classList.contains('enroll')) {
            const courseId = parseInt(event.target.getAttribute('data-id'));
            const course = courses.find(course => course.id === courseId);
            enrollModal.style.display = 'block';
            enrollBtn.addEventListener('click', function() {
                course.enrolled = true;
                enrollModal.style.display = 'none';
                renderCourses();
            });
        }
    });

    // Close modal
    closeBtn.addEventListener('click', function() {
        enrollModal.style.display = 'none';
    });

    // Render initial courses
    renderCourses();
});
