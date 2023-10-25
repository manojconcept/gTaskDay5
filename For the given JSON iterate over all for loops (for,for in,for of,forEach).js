// For the given JSON iterate over all for loops (for,for in,for of,forEach)
let getData = {
    "name": "John Doe",
    "title": "Software Engineer",
    "contact": {
      "email": "john.doe@example.com",
      "phone": "+1 (555) 555-5555",
      "linkedin": "www.linkedin.com/in/johndoe",
      "github": "www.github.com/johndoe"
    },
    "summary": "Experienced software engineer with a passion for developing innovative solutions. Skilled in full-stack web development and experienced in agile methodologies. Strong problem-solving abilities and a quick learner.",
    "education": [
      {
        "degree": "Bachelor of Science in Computer Science",
        "university": "XYZ University",
        "graduation_year": 2018
      }
    ],
    "experience": [
      {
        "position": "Software Engineer",
        "company": "TechCo",
        "location": "San Francisco, CA",
        "start_date": "June 2018",
        "end_date": "Present",
        "description": "Develop and maintain features for a large-scale web application. Collaborate with cross-functional teams to design and implement new features. Utilize technologies including JavaScript, React, Node.js, and MongoDB."
      },
      {
        "position": "Intern",
        "company": "ABC Software",
        "location": "New York, NY",
        "start_date": "May 2017",
        "end_date": "August 2017",
        "description": "Assisted in the development of front-end features and participated in code reviews. Gained experience with HTML, CSS, and JavaScript."
      }
    ],
    "skills": [
      "JavaScript",
      "React",
      "Node.js",
      "HTML/CSS",
      "MongoDB",
      "Agile",
      "Git",
      "Python"
    ],
    "languages": [
      "English",
      "Spanish"
    ],
    "certifications": [
      {
        "title": "AWS Certified Developer - Associate",
        "issuing_organization": "Amazon Web Services",
        "year": 2020
      },
      {
        "title": "Certified ScrumMaster",
        "issuing_organization": "Scrum Alliance",
        "year": 2019
      }
    ],
    "publications": []
  }
  
//Using for Loop:
for(let key in getData) {
    console.log(`Key: ${key}, Value: ${getData[key]}`);
}
//Using for in Loop:
for(let key in getData) {
    if (getData.hasOwnProperty(key)) {
        console.log(`Key: ${key}, Value: ${getData[key]}`);
    }
}
//Using for of Loop (for Arrays):
for(let item of getData.education) {
    console.log(`Education: ${item.degree} at ${item.university}, Graduated in ${item.graduation_year}`);
}

for(let item of getData.skills) {
    console.log(`Skill: ${item}`);
}
//Using forEach (for Arrays):
getData.education.forEach(item => {
    console.log(`Education: ${item.degree} at ${item.university}, Graduated in ${item.graduation_year}`);
});

getData.skills.forEach(item => {
    console.log(`Skill: ${item}`);
});
