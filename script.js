document.addEventListener('DOMContentLoaded', function() {
    const jobListingsContainer = document.getElementById('jobListings');

    // Simulated job data (replace with actual JSON data loading)
    const jobData = [
        {
            "id": 1,
            "company": "Photosnap",
            "logo": "./images/photosnap.svg",
            "new": true,
            "featured": true,
            "position": "Senior Frontend Developer",
            "role": "Frontend",
            "level": "Senior",
            "postedAt": "1d ago",
            "contract": "Full Time",
            "location": "USA Only",
            "languages": ["HTML", "CSS", "JavaScript"],
            "tools": []
        },
        {
            "id": 2,
            "company": "Manage",
            "logo": "./images/manage.svg",
            "new": true,
            "featured": true,
            "position": "Fullstack Developer",
            "role": "Fullstack",
            "level": "Midweight",
            "postedAt": "1d ago",
            "contract": "Part Time",
            "location": "Remote",
            "languages": ["Python"],
            "tools": ["React"]
        },
        {
            "id": 3,
            "company": "Account",
            "logo": "./images/account.svg",
            "new": true,
            "featured": false,
            "position": "Junior Frontend Developer",
            "role": "Frontend",
            "level": "Junior",
            "postedAt": "2d ago",
            "contract": "Part Time",
            "location": "USA Only",
            "languages": ["JavaScript"],
            "tools": ["React", "Sass"]
        },
        {
            "id": 4,
            "company": "MyHome",
            "logo": "./images/myhome.svg",
            "new": false,
            "featured": false,
            "position": "Junior Frontend Developer",
            "role": "Frontend",
            "level": "Junior",
            "postedAt": "5d ago",
            "contract": "Contract",
            "location": "USA Only",
            "languages": ["CSS", "JavaScript"],
            "tools": []
        },
        {
            "id": 5,
            "company": "Loop Studios",
            "logo": "./images/loop-studios.svg",
            "new": false,
            "featured": false,
            "position": "Software Engineer",
            "role": "Fullstack",
            "level": "Midweight",
            "postedAt": "1w ago",
            "contract": "Full Time",
            "location": "Worldwide",
            "languages": ["JavaScript", "Ruby"],
            "tools": ["Sass"]
        },
        {
            "id": 6,
            "company": "FaceIt",
            "logo": "./images/faceit.svg",
            "new": false,
            "featured": false,
            "position": "Junior Backend Developer",
            "role": "Backend",
            "level": "Junior",
            "postedAt": "2w ago",
            "contract": "Full Time",
            "location": "UK Only",
            "languages": ["Ruby"],
            "tools": ["RoR"]
        },
        {
            "id": 7,
            "company": "Shortly",
            "logo": "./images/shortly.svg",
            "new": false,
            "featured": false,
            "position": "Junior Developer",
            "role": "Frontend",
            "level": "Junior",
            "postedAt": "2w ago",
            "contract": "Full Time",
            "location": "Worldwide",
            "languages": ["HTML", "JavaScript"],
            "tools": ["Sass"]
        },
        {
            "id": 8,
            "company": "Insure",
            "logo": "./images/insure.svg",
            "new": false,
            "featured": false,
            "position": "Junior Frontend Developer",
            "role": "Frontend",
            "level": "Junior",
            "postedAt": "2w ago",
            "contract": "Full Time",
            "location": "USA Only",
            "languages": ["JavaScript"],
            "tools": ["Vue", "Sass"]
        },
        {
            "id": 9,
            "company": "Eyecam Co.",
            "logo": "./images/eyecam-co.svg",
            "new": false,
            "featured": false,
            "position": "Full Stack Engineer",
            "role": "Fullstack",
            "level": "Midweight",
            "postedAt": "3w ago",
            "contract": "Full Time",
            "location": "Worldwide",
            "languages": ["JavaScript", "Python"],
            "tools": ["Django"]
        },
        {
            "id": 10,
            "company": "The Air Filter Company",
            "logo": "./images/the-air-filter-company.svg",
            "new": false,
            "featured": false,
            "position": "Front-end Dev",
            "role": "Frontend",
            "level": "Junior",
            "postedAt": "1mo ago",
            "contract": "Part Time",
            "location": "Worldwide",
            "languages": ["JavaScript"],
            "tools": ["React", "Sass"]
        }
    ];

    // Function to render job listings based on provided data
    function renderJobListings(jobs) {
        jobListingsContainer.innerHTML = '';

        jobs.forEach(job => {
            const jobCard = document.createElement('div');
            jobCard.classList.add('job-card');

            jobCard.innerHTML = `
                <img class="company-logo" src="${job.logo}" alt="${job.company} logo">
                <div class="job-details">
                    <div class="top-row">
                        <span class="company">${job.company}</span>
                        ${job.new ? '<span class="new">New!</span>' : ''}
                        ${job.featured ? '<span class="featured">Featured</span>' : ''}
                    </div>
                    <h2>${job.position}</h2>
                    <ul class="job-meta">
                        <li>${job.postedAt}</li>
                        <li>${job.contract}</li>
                        <li>${job.location}</li>
                    </ul>
                </div>
                <div class="tags">
                    <span>${job.role}</span>
                    <span>${job.level}</span>
                    ${job.languages.map(lang => `<span>${lang}</span>`).join('')}
                    ${job.tools.map(tool => `<span>${tool}</span>`).join('')}
                </div>
            `;

            jobListingsContainer.appendChild(jobCard);
        });
    }

    // Initial render on page load
    renderJobListings(jobData);

    // Filter functionality
    const filterButtons = document.querySelectorAll('.sub-2-list li');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = button.textContent.trim(); // Get category from button text
            const filteredJobs = jobData.filter(job => {
                return job.role.toLowerCase() === category.toLowerCase() ||
                       job.level.toLowerCase() === category.toLowerCase() ||
                       job.languages.includes(category.toLowerCase()) ||
                       job.tools.includes(category.toLowerCase());
            });
            renderJobListings(filteredJobs);
        });
    });
});