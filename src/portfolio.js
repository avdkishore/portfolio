
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "A.V.D. Kishore",
  title: "Hi all, I'm Kishore",
  subTitle: emoji("A passionate Software Engineer 🚀 having an experience of building Web applications with JavaScript / Reactjs / Nodejs / Golang."),
  resumeLink: "https://resume.avdkishore.dev"
};

// Your Social Media Link

const socialMediaLinks = {
  github: "https://github.com/avdkishore",
  linkedin: "https://www.linkedin.com/in/avdkishore/",
  stackoverflow: "https://stackoverflow.com/users/5644057/a-v-d-kishore",
  gmail: "avdkishore@gmail.com",
  // gitlab: "https://gitlab.com/avdkishore",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY ENGINEER WHO WANTS TO EXPLORE EVERY TECHNOLOGY AVAILABLE OUT THERE",
  skills: [
    emoji("⚡ Develop highly interactive Front end / User Interfaces for your web applications"),
    emoji("⚡ Develop highly scalable and fault tolerant API servers on graphql and REST principles"),
    emoji("⚡ Hands on experience of PostgreSQL database on production environments"),
    emoji("⚡ Experience on working with containers using Docker and Kubernetes"),
    emoji("⚡ Integration of third party services such as Firebase, AWS, Braintree/Razorpay payment gateways "),
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5",
      image: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg'
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt",
      image: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg'
    },
    // {
    //   skillName: "sass",
    //   fontAwesomeClassname: "fab fa-sass"
    // },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
      image: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg'
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react",
      image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
    },
    {
      skillName: "nodejs",
      image: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg',
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "graphql",
      fontAwesomeClassname: "fab fa-node",
      image: 'https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg'
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm",
      image: 'https://upload.wikimedia.org/wikipedia/commons/d/db/Npm-logo.svg'
    },
    {
      skillName: "postgresql",
      fontAwesomeClassname: "fas fa-database",
      image: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg'
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws",
      image: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg'
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire",
      // image: 'https://upload.wikimedia.org/wikipedia/commons/3/37/Firebase_Logo.svg'
      image: 'https://upload.wikimedia.org/wikipedia/commons/4/46/Touchicon-180.png'
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker",
      // image: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg'
      image: 'https://lwstatic-a.akamaihd.net/kb/wp-content/uploads/2020/03/31920.docker-300x256.png'
    },
    {
      skillName: "kubernetes",
      fontAwesomeClassname: "fas fa-file-code",
      image: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg'
    },
    {
      skillName: "android",
      image: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Android_logo_2019.svg'
    }
  ]
};

// Your education background

const educationInfo = {
  showEducation: false, // Set it to true to see education section
  schools: [
    {
      schoolName: "Harvard University",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2017 - April 2019",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "Stanford University",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      ]
    }
  ]
}

// Your top 3 proficient stacks/tech experience

const techStack = {
  showSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design",  //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ]
};


// Your top 3 work experiences

const workExperience = {
  showExperience: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Mojoreads",
      companylogo: require("./assets/images/mojoreads-logo.png"),
      date: "July 2016 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ],
      iconStyles: {
        width: '7rem',
        height: '7rem'
      },
      link: 'https://mojoreads.de'
    },
    {
      role: "Software Engineer",
      company: "Readwynk",
      companylogo: require("./assets/images/readwynk-logo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      iconStyles: {
        width: '5rem',
        height: '5rem',
        top: '7rem',
        backgroundColor: 'white',
        padding: '0.75rem',
      },
      link: 'https://readwynk.com'
    },
    {
      role: "Software Engineer",
      company: "Remush",
      companylogo: require("./assets/images/remush-logo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      iconStyles: {
        width: '5rem',
        height: '5rem',
        top: '7rem',
        backgroundColor: 'white',
        padding: '0.75rem',
      },
      link: 'https://remush.com'
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "avdkishore", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :true // Set true or false to show Contact profile using Github, defaults to false
};


// Some Big Projects You have worked with your company

const bigProjects = {
  showBigProjects: false,
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    // {
    //   image: require("./assets/images/saayaHealthLogo.webp"),
    //   link: "http://saayahealth.com/"
    // },
    // {
    //   image: require("./assets/images/nextuLogo.webp"),
    //   link: "http://nextu.se/"
    // }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {
  showAchievements: false,
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    // {
    //   title: "Google Code-In Finalist",
    //   subtitle: "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
    //   image: require("./assets/images/codeInLogo.webp"),
    //   footerLink: [
    //     { name: "Certification", url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing" },
    //     { name: "Award Letter", url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing" },
    //     { name: "Google Code-in Blog", url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html" }
    //   ]
    // },
    // {
    //   title: "Google Assistant Action",
    //   subtitle: "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
    //   image: require("./assets/images/googleAssistantLogo.webp"),
    //   footerLink: [{ name: "View Google Assistant Action", url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en" }]
    // },

    // {
    //   title: "PWA Web App Developer",
    //   subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
    //   image: require("./assets/images/pwaLogo.webp"),
    //   footerLink: [
    //     { name: "Certification", url: "" },
    //     { name: "Final Project", url: "https://pakistan-olx-1.firebaseapp.com/" }
    //   ]
    // }
  ]
};

// Blogs Section

const blogSection = {
  showBlogs: false,
  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    // {
    //   url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
    //   title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
    //   description: "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    // },
    // {
    //   url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
    //   title: "Why REACT is The Best?",
    //   description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    // }
  ]
};

// Talks Sections

const talkSection = {
  showTalks: false,
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    // {
    //   title: "Build Actions For Google Assistant",
    //   subtitle: "Codelab at GDG DevFest Karachi 2019",
    //   slides_url: "https://bit.ly/saadpasta-slides",
    //   event_url: "https://www.facebook.com/events/2339906106275053/"
    // }
  ]
};

// Podcast Section

const podcastSection = {
  showPodcasts: false,
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    // "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ]
};

const contactInfo = {
  title: emoji("Contact Me "),
  subtitle: "Discuss a project or just want to say hi? You can reach me anytime.",
  // number: "+92-3243454077",
  email_address: "avdkishore@gmail.com"
};

//Twitter Section

const twitterDetails = {
  showTwitter: false,
  userName : ""//Replace "twitter" with your twitter username without @

};
export { greeting, socialMediaLinks, skillsSection, educationInfo, techStack, workExperience, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};
