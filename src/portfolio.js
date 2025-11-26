// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Kazi's Portfolio",
  description:
    "Hey, I'm Kazi, a tech enthusiast who crafts cool projects, from web apps to VR games, blending creativity with impactful solutions.",
  og: {
    title: "Kazi Anwar Portfolio",
    type: "website",
    url: "https://kazi27.github.io/",
  },
};

//Home Page
const greeting = {
  title: "Kazi Anwar",
  logo_name: "Kazi Anwar",
  nickname: "//",
  subTitle:
    "Hey, I'm Kazi, a tech enthusiast who crafts cool projects, from web apps to VR games, blending creativity with impactful solutions.",
  resumeLink:
    "https://drive.google.com/file/d/1-Vg7DC6q7DEZBevmNZ-ayda2Fc40JUtr/view?usp=sharing",
  portfolio_repository: "https://github.com/Kazi27/Kazi27.github.io",
  githubProfile: "https://github.com/Kazi27",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/Kazi27",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/kazisanwar/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/@kazianwar",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:kazisameen2702@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "X-Twitter",
  //   link: "https://twitter.com/ashutosh_1919",
  //   fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
  //   backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  // },
  // {
  //   name: "Facebook",
  //   link: "https://www.facebook.com/laymanbrother.19/",
  //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // },
  {
    name: "Instagram",
    link: "https://www.instagram.com/kazi.03/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    // {
    //   title: "Data Science & AI",
    //   fileName: "DataScienceImg",
    //   skills: [
    //     "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
    //     "⚡ Experience of working with Computer Vision and NLP projects",
    //     "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Tensorflow",
    //       fontAwesomeClassname: "logos-tensorflow",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Keras",
    //       fontAwesomeClassname: "simple-icons:keras",
    //       style: {
    //         backgroundColor: "white",
    //         color: "#D00000",
    //       },
    //     },
    //     {
    //       skillName: "PyTorch",
    //       fontAwesomeClassname: "logos-pytorch",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Python",
    //       fontAwesomeClassname: "ion-logo-python",
    //       style: {
    //         backgroundColor: "transparent",
    //         color: "#3776AB",
    //       },
    //     },
    //     {
    //       skillName: "Deeplearning",
    //       imageSrc: "deeplearning_ai_logo.png",
    //     },
    //   ],
    // },
    // {
    //   title: "Full Stack Development",
    //   fileName: "FullStackImg",
    //   skills: [
    //     "⚡ Building responsive website front end using React-Redux",
    //     "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
    //     "⚡ Creating application backend in Node, Express & Flask",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "HTML5",
    //       fontAwesomeClassname: "simple-icons:html5",
    //       style: {
    //         color: "#E34F26",
    //       },
    //     },
    //     {
    //       skillName: "CSS3",
    //       fontAwesomeClassname: "fa-css3",
    //       style: {
    //         color: "#1572B6",
    //       },
    //     },
    //     {
    //       skillName: "Sass",
    //       fontAwesomeClassname: "simple-icons:sass",
    //       style: {
    //         color: "#CC6699",
    //       },
    //     },
    //     {
    //       skillName: "JavaScript",
    //       fontAwesomeClassname: "simple-icons:javascript",
    //       style: {
    //         backgroundColor: "#000000",
    //         color: "#F7DF1E",
    //       },
    //     },
    //     {
    //       skillName: "ReactJS",
    //       fontAwesomeClassname: "simple-icons:react",
    //       style: {
    //         color: "#61DAFB",
    //       },
    //     },
    //     {
    //       skillName: "NodeJS",
    //       fontAwesomeClassname: "simple-icons:node-dot-js",
    //       style: {
    //         color: "#339933",
    //       },
    //     },
    //     {
    //       skillName: "NPM",
    //       fontAwesomeClassname: "simple-icons:npm",
    //       style: {
    //         color: "#CB3837",
    //       },
    //     },
    //     {
    //       skillName: "Yarn",
    //       fontAwesomeClassname: "simple-icons:yarn",
    //       style: {
    //         color: "#2C8EBB",
    //       },
    //     },
    //     {
    //       skillName: "Gatsby",
    //       fontAwesomeClassname: "simple-icons:gatsby",
    //       style: {
    //         color: "#663399",
    //       },
    //     },
    //     {
    //       skillName: "Flutter",
    //       fontAwesomeClassname: "simple-icons:flutter",
    //       style: {
    //         color: "#02569B",
    //       },
    //     },
    //   ],
    // },
    // {
    //   title: "Cloud Infra-Architecture",
    //   fileName: "CloudInfraImg",
    //   skills: [
    //     "⚡ Experience working on multiple cloud platforms",
    //     "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
    //     "⚡ Deploying deep learning models on cloud to use on mobile devices",
    //     "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "GCP",
    //       fontAwesomeClassname: "simple-icons:googlecloud",
    //       style: {
    //         color: "#4285F4",
    //       },
    //     },
    //     {
    //       skillName: "AWS",
    //       fontAwesomeClassname: "simple-icons:amazonaws",
    //       style: {
    //         color: "#FF9900",
    //       },
    //     },
    //     {
    //       skillName: "Azure",
    //       fontAwesomeClassname: "simple-icons:microsoftazure",
    //       style: {
    //         color: "#0089D6",
    //       },
    //     },
    //     {
    //       skillName: "Firebase",
    //       fontAwesomeClassname: "simple-icons:firebase",
    //       style: {
    //         color: "#FFCA28",
    //       },
    //     },
    //     {
    //       skillName: "PostgreSQL",
    //       fontAwesomeClassname: "simple-icons:postgresql",
    //       style: {
    //         color: "#336791",
    //       },
    //     },
    //     {
    //       skillName: "MongoDB",
    //       fontAwesomeClassname: "simple-icons:mongodb",
    //       style: {
    //         color: "#47A248",
    //       },
    //     },
    //     {
    //       skillName: "Docker",
    //       fontAwesomeClassname: "simple-icons:docker",
    //       style: {
    //         color: "#1488C6",
    //       },
    //     },
    //     {
    //       skillName: "Kubernetes",
    //       fontAwesomeClassname: "simple-icons:kubernetes",
    //       style: {
    //         color: "#326CE5",
    //       },
    //     },
    //   ],
    // },
    // {
    //   title: "UI/UX Design",
    //   fileName: "DesignImg",
    //   skills: [
    //     "⚡ Designing highly attractive user interface for mobile and web applications",
    //     "⚡ Customizing logo designs and building logos from scratch",
    //     "⚡ Creating the flow of application functionalities to optimize user experience",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Adobe XD",
    //       fontAwesomeClassname: "simple-icons:adobexd",
    //       style: {
    //         color: "#FF2BC2",
    //       },
    //     },
    //     {
    //       skillName: "Figma",
    //       fontAwesomeClassname: "simple-icons:figma",
    //       style: {
    //         color: "#F24E1E",
    //       },
    //     },
    //     {
    //       skillName: "Adobe Illustrator",
    //       fontAwesomeClassname: "simple-icons:adobeillustrator",
    //       style: {
    //         color: "#FF7C00",
    //       },
    //     },
    //     {
    //       skillName: "Inkscape",
    //       fontAwesomeClassname: "simple-icons:inkscape",
    //       style: {
    //         color: "#000000",
    //       },
    //     },
    //   ],
    // },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    // {
    //   siteName: "LeetCode",
    //   iconifyClassname: "simple-icons:leetcode",
    //   style: {
    //     color: "#F79F1B",
    //   },
    //   profileLink: "https://leetcode.com/layman_brother/",
    // },
    // {
    //   siteName: "HackerRank",
    //   iconifyClassname: "simple-icons:hackerrank",
    //   style: {
    //     color: "#2EC866",
    //   },
    //   profileLink: "https://www.hackerrank.com/layman_brother",
    // },
    // {
    //   siteName: "Codechef",
    //   iconifyClassname: "simple-icons:codechef",
    //   style: {
    //     color: "#5B4638",
    //   },
    //   profileLink: "https://www.codechef.com/users/ashutosh_1919",
    // },
    // {
    //   siteName: "Codeforces",
    //   iconifyClassname: "simple-icons:codeforces",
    //   style: {
    //     color: "#1F8ACB",
    //   },
    //   profileLink: "http://codeforces.com/profile/layman_brother",
    // },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@ashutosh391",
    // },
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "https://www.kaggle.com/laymanbrother",
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "City University of New York, Hunter College",
      subtitle: "Bachelor of Arts in Computer Science & Minor in Mathematics",
      logo_path: "hunter.png",
      alt_name: "Hunter College",
      duration: "2021 - 2024",
      descriptions: [
        "GPA: 3.88",
        "Excelsior Scholarship recipient | Peter F. Vallone Scholarship recipient | Dean's list | Honors list",
        "Google Developers Student Club | Hunter College DSC | Hunter College BMI | Hunter College CS Club | Hunter College MSA | Hunter College PSA | Hunter College BSA",
        "Relevant Coursework: Data Structures & Algorithms I / II / III, Discrete Structures, Web Development, VR/AR, Computer Architecture I / II, Computer Theory, Operating Systems, Symbolic Logic, Cyber Risk, Calculus I / II, Statistics, Matrix Linear Algebra",
      ],
      website_link: "https://hunter.cuny.edu/",
    },
    {
      title: "Aviation Career and Technical Education High School",
      subtitle: "High School Diploma",
      logo_path: "avhs.png",
      alt_name: "Aviation Career and Technical Education High School",
      duration: "2017 - 2021",
      descriptions: [
        "GPA: 98/100 | Honor roll | Top 5% of graduating class | AP Scholar with Honor",
        "QuestBridge National College Match Finalist | FinTech Focus Finalist | NYSERDA Prospect",
        "Honor Society | Cricket Club | Robotics Club",
        "Relevant Coursework: College Now Precalc, AP Language, AP Calc I, AP US History",
      ],
      website_link: "https://www.aviationhs.net/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Intro to Android Development Course Honors",
      subtitle: "- CodePath",
      logo_path: "codepath.png",
      certificate_link:
        "https://drive.google.com/file/d/1h8usE0afEfGVhrqIRxmBnF_yPeEBeu8k/view?usp=sharing",
      alt_name: "CodePath",
      color_code: "#8C151599",
    },
    {
      title: "Tech Consulting Foundations",
      subtitle: "- Skillful.ly",
      logo_path: "skilfully.png",
      certificate_link:
        "https://drive.google.com/file/d/1hFiWkRsejdoSvMMTV65Jfzm1P6AulbXT/view?usp=sharing",
      alt_name: "skillful.ly",
      color_code: "#00000099",
    },
    {
      title: "Teaching in Pencil Spaces",
      subtitle: "- Pencil Spaces",
      logo_path: "pencilspaces.png",
      certificate_link:
        "https://pencilspaces.thinkific.com/certificates/h2owprvcl8",
      alt_name: "Pencil Spaces",
      color_code: "#1F70C199",
    },
    {
      title: "Basic Poll Worker Training",
      subtitle: "- NYC Board of Elections",
      logo_path: "nycBOE.png",
      certificate_link:
        "https://drive.google.com/file/d/11epBcCb3c1Pbqt6DGO2NHgxau5fQ9WTt/view?usp=sharing",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    // {
    //   title: "Big Data",
    //   subtitle: "- Kim Akers",
    //   logo_path: "microsoft_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
    //   alt_name: "Microsoft",
    //   color_code: "#D83B0199",
    // },
    // {
    //   title: "Advanced Data Science",
    //   subtitle: "- Romeo Kienzler",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Advanced ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "DL on Tensorflow",
    //   subtitle: "- Laurence Moroney",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "Fullstack Development",
    //   subtitle: "- Jogesh Muppala",
    //   logo_path: "coursera_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
    //   alt_name: "Coursera",
    //   color_code: "#2A73CC",
    // },
    // {
    //   title: "Kuberenetes on GCP",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
    // {
    //   title: "Cryptography",
    //   subtitle: "- Saurabh Mukhopadhyay",
    //   logo_path: "nptel_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
    //   alt_name: "NPTEL",
    //   color_code: "#FFBB0099",
    // },
    // {
    //   title: "Cloud Architecture",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "From teaching digital literacy to designing intuitive user experiences, I bring a diverse skillset to the table. My experience spans roles like teaching math and building VR games, showcasing my ability to translate code into real-world impact. Furthermore, I actively build mobile apps, create educational content, and participate in fellowships, demonstrating a commitment to continuous learning and a passion for the tech community. Scroll below to see my experiences!",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Product & Engineering Intetn",
          company: "DoSomething.org",
          company_url: "https://dosomething.org/",
          logo_path: "doSomething.png",
          duration: "Jun 2024 - present",
          location: "Manhattan, NY",
          description:
            "As a Product & Engineering Intern at DoSomething.org since June 2024, I have led product research initiatives that improved user engagement by 15% and enhanced UX through targeted improvements. I conducted and analyzed over 20 usability tests using empathy mapping and sentiment analysis with OpenAI GPT API. I also developed and refined 10+ prototypes in Figma, HTML, and JavaScript to address critical user pain points. My role involved planning user research, recruiting participants, and presenting findings, all while honing my project management skills and collaborating with cross-functional teams to drive impactful design solutions.",
          color: "#0879bf",
        },
        
        {
          title: "Teaching & Tech Assistant",
          company: "The Stem Alliance",
          company_url: "https://thestemalliance.org/index.html",
          logo_path: "stem.png",
          duration: "Aug 2021 - present",
          location: "Queens/Brooklyn, NY",
          description:
            "I play a pivotal role in supporting participants in STEM Alliance programs (Queens/Brooklyn, NY) since August 2021. My responsibilities include providing individualized instruction, assisting with hands-on learning activities across all cohorts, and offering 1:1 problem-solving as needed. I also lead the programs team in various aspects of program development and implementation, ensuring a smooth learning experience for all. Additionally, I actively support the instructor with overall classroom management and assist participants throughout the program. My strong technical skills and commitment to teamwork contribute significantly to the program's success.",
          color: "#0879bf",
        },

        {
          title: "Mathematics Teacher",
          company: "Teach for America",
          company_url: "https://www.teachforamerica.org/",
          logo_path: "tfa.png",
          duration: "Jan 2024 - Jun 2024",
          location: "Dallax, TX & Washington. DC",
          description:
            "I am currently a dedicated Mathematics Teacher working with students in 8th and 6th grade at Montessori Academy and Two Rivers Public Charter Schools (Dallas, TX & Washington D.C.). Since January 2024, I've utilized various methods and techniques to effectively deliver instruction and ensure students gain proficiency in mathematics. I've also piloted and earned certification in the Pencil Spaces program, demonstrating my commitment to innovative teaching methods. Furthermore, I take pride in adapting lesson plans to cater to the unique needs of each school and student, fostering a supportive learning environment that keeps them engaged throughout the session.",
          color: "#0879bf",
        },

        {
          title: "UI/UX & Front End Intern",
          company: "Unadat",
          company_url: "https://unadat.com/",
          logo_path: "unadat.png",
          duration: "Feb 2023 - May 2023",
          location: "Remote, At Home",
          description:
            "During my internship at Unadat (Feb 2023 - May 2023), I leveraged my design expertise to enhance the user experience of the supporters page. I utilized Miro to design and regularly update the page, while also brainstorming and creating mockups for features like the chores division and a scrollable calendar. Working within a cross-functional team, I employed agile methodologies and Jira boards to ensure timely project delivery. Furthermore, I coordinated weekly progress huddles with stakeholders, utilizing scrum methods to improve user flow within the application.",
          color: "#9b1578",
        },
        {
          title: "Poll Worker, Interpreter & Accessibility Clerk",
          company: "New York City Board of Elections",
          company_url: "https://www.vote.nyc/",
          logo_path: "nycBOE.png",
          duration: "Oct 2021 - Feb 2023",
          location: "Queens, NY",
          description:
            "I served as a Poll Worker with the New York City Board of Elections from October 2021 to February 2023 (Queens, NY). Here, I played a vital role in ensuring the smooth functioning of the election process. This included preparing the poll site for voters, assisting voters throughout the casting of their ballots, closing the poll site, canvassing, and reporting election results. I also provided valuable support to non-English speaking voters by translating voting information into covered languages during the voting process. Additionally, I collaborated with and assisted other poll workers as needed, contributing to the effective execution of election activities.",
          color: "#fc1f20",
        },
        {
          title: "Customer Experience Specialist & Advisor",
          company: "Best Buy",
          company_url: "https://www.bestbuy.com/",
          logo_path: "bestbuy.png",
          duration: "Sep 2021 - Feb 2023",
          location: "Elmhurst, NY",
          description:
            "While working at Best Buy (Elmhurst, NY)  from September 2021 to February 2023, I consistently exceeded expectations in both the Customer Experience Specialist and Advisor roles. Notably, I was recognized as the leading application acquirer in the Queens sector and played a key role in propelling store 483 to become the third-best Best Buy globally in terms of revenue generated during Quarter Four 2021. My ability to build relationships, generate 'at home advisor' leads, and achieve profitable growth while delivering exceptional customer service significantly contributed to the team's success.",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Fellowships, Programs & Clubs",
      experiences: [
        {
          title: "Software Engineering Fellow",
          company: "Headstarter",
          company_url: "https://headstarter.co/",
          logo_path: "headstarter.png",
          duration: "Jul 2024 - Present",
          location: "Long Island, NY",
          description:
            "As a Headstarter AI Fellow, I gained hands-on experience with advanced AI technologies and machine learning. The program offered intensive workshops and mentorship, enhancing my skills in AI applications and coding. I also built a valuable network with industry experts, significantly advancing my career in AI.",
          color: "#000000",
        },

        {
          title: "Ignite Fellow",
          company: "Teach for America",
          company_url: "https://www.teachforamerica.org/ignite-fellowship",
          logo_path: "ignite.png",
          duration: "Jan 2024 - Present",
          location: "Dallas,, TX",
          description:
            "As an Ignite Fellow with Teach For America, I've gained valuable experience promoting academic achievement in elementary school reading and middle school math. I adeptly adapt lesson plans to cater to individual schools and students, seamlessly integrating with classroom activities. This experience has provided me with a deep understanding of the current education landscape and honed my ability to deliver impactful instruction.",
          color: "#000000",
        },
        {
          title: "Basta Fellow",
          company: "Project Basta",
          company_url: "https://www.projectbasta.com/",
          logo_path: "basta.png",
          duration: "March 2023 - Present",
          location: "Remote",
          description:
            "Selected for my potential, I actively participate in BASTA's rigorous 10-week fellowship program. Designed to support first-generation college students like myself, this program equips me with the skills and knowledge to secure excellent entry-level positions. Additionally, I collaborated with Googlers in the BASTA x G-SWEP initiative, further developing my teamwork and communication skills in a fast-paced environment.",
          color: "#ee3c26",
        },
        {
          title: "SOAR Program Scholar",
          company: "Students Rising Above",
          company_url:
            "https://studentsrisingabove.org/",
          logo_path: "soar.png",
          duration: "Aug 2022 - Present",
          location: "Remote",
          description:
            "Committed to student success, I actively participate in Students Rising Above's (SRA) SOAR programs. These programs aim to increase college persistence rates, graduation rates, and career-ladder job attainment among college students. Through participation, I've honed my teamwork skills and gained valuable insights into supporting academic and professional development.",
          color: "#0071C5",
        },
        {
          title: "Software Engineering Fellow",
          company: "Yext",
          company_url:
            "https://www.yext.com/index.html",
          logo_path: "yext.png",
          duration: "Sep 2023 - Dec 2023",
          location: "NYC, NY",
          description:
            "My passion for computer science led me to the YEXT SWE program. During this program, I actively participated in regular mentorship meetings to identify areas for personal and professional growth. I also networked with professionals across various computer science fields, staying informed on advanced education and sharpening my skills through assigned tasks. This experience deepened my expertise in Object-Oriented Programming, Leetcode, and Hackerrank.",
          color: "#0071C5",
        },
        {
          title: "Android Development Fellow",
          company: "CodePath",
          company_url:
            "https://www.codepath.org/",
          logo_path: "codepath.png",
          duration: "Jan 2023 - Apr 2023",
          location: "Remote",
          description:
            "I actively participated in CodePath's Android Development Fellowship, expanding my mobile development skills. This hands-on program involved constructing Android apps by learning new aspects of Android Studio/Kotlin through weekly labs. You can find some of the apps I built as well my capstone my projects section. Throughout this fellowship, I honed my skills in Git, Kotlin, collaborative problem-solving, and teamwork.",
          color: "#0071C5",
        },
        {
          title: "Talent Network Member",
          company: "New York Jobs CEO Council",
          company_url:
            "https://nyjobsceocouncil.org/",
          logo_path: "NYCEO.png",
          duration: "Jan 2023 - Apr 2023",
          location: "Manhattan, NY",
          description:
            "As a Talent Network Member at the New York Jobs CEO Council, I actively participated in Industry Treks, gaining valuable insights into esteemed organizations like TD Bank, JPMC, Bank of America, Mastercard, Citi, Bloomberg, and Accenture. This program allowed me to explore diverse industry sectors and network with professionals, expanding my professional network and knowledge.",
          color: "#0071C5",
        },
        {
          title: "Tech Consultant",
          company: "Skillful.ly",
          company_url:
            "https://www.skillful.ly/",
          logo_path: "skilfully.png",
          duration: "Jan 2023 - Feb 2023",
          location: "Remote",
          description:
            "To further develop my technical skills, I participated in a Skillful.ly virtual internship within the Tech Consulting track.  Here, I practiced creating technical solutions in computer and information systems to address client needs.  Collaborating with peers, I built relationships and efficiently fulfilled project requirements.  This skill-building experience included daily challenge quizzes and four weekly group projects, providing valuable real-world exposure to the tech consulting industry. Additionally, I earned 15 skill badges in areas like Project Planning, Data Visualization, and Software Development Lifecycle, showcasing my proficiency in various technical skillsets.",
          color: "#0071C5",
        },
        {
          title: "Microsoft Technical Resilience Mentee",
          company: "Microsoft",
          company_url:
            "https://www.microsoft.com/",
          logo_path: "microsoft_logo.png",
          duration: "Oct 2021 - Nov 2021",
          location: "Remote",
          description:
            "My interest in computer science led me to participate in Microsoft's Technical Resilience Mentorship program. This 6-week program paired me with Microsoft mentors who provided valuable guidance and support. Through individual and group sessions, I strengthened my core problem-solving skills, collaborative/interpersonal skills, and developed a sense of belonging within the tech community. This program equipped me with the tools and strategies to navigate challenges that may arise in a computer science pathway.",
          color: "#0071C5",
        },
        {
          title: "Matriculate Member",
          company: "Matriculate",
          company_url:
            "https://matriculate.org/",
          logo_path: "matriculate.png",
          duration: "Aug 2020 - Jun 2021",
          location: "Long Island, NY",
          description:
            "As a Matriculate Member, I actively participated in their college advising program. This program connects high-achieving, low-income students like myself with dedicated advisors who provide one-on-one support throughout the college and financial aid processes. Through valuable interactions with my advisor, I gained crucial guidance on navigating various aspects of my academic journey, including college applications and financial aid options. My participation in this program demonstrates my commitment to both personal and academic success.",
          color: "#0071C5",
        },
      ],
    },
    // {
    //   title: "Volunteerships",
    //   experiences: [
    //     {
    //       title: "Google Explore ML Facilitator",
    //       company: "Google",
    //       company_url: "https://about.google/",
    //       logo_path: "google_logo.png",
    //       duration: "June 2019 - April 2020",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
    //       color: "#4285F4",
    //     },
    //     {
    //       title: "Microsoft Student Partner",
    //       company: "Microsoft",
    //       company_url: "https://www.microsoft.com/",
    //       logo_path: "microsoft_logo.png",
    //       duration: "Aug 2019 - May 2020",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
    //       color: "#D83B01",
    //     },
    //     {
    //       title: "Mozilla Campus Captain",
    //       company: "Mozilla",
    //       company_url: "https://www.mozilla.org/",
    //       logo_path: "mozilla_logo.png",
    //       duration: "Oct 2019 - May 2020",
    //       location: "Kurnool, Andhra Pradesh",
    //       description:
    //         "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
    //       color: "#000000",
    //     },
    //     {
    //       title: "Developer Students Club Member",
    //       company: "DSC IIITDM Kurnool",
    //       company_url:
    //         "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
    //       logo_path: "dsc_logo.png",
    //       duration: "Jan 2018 - May 2020",
    //       location: "Kurnool, Andhra Pradesh",
    //       description:
    //         "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
    //       color: "#0C9D58",
    //     },
    //     {
    //       title: "Developer Program Member",
    //       company: "Github",
    //       company_url: "https://github.com/",
    //       logo_path: "github_logo.png",
    //       duration: "July 2019 - PRESENT",
    //       location: "Work From Home",
    //       description:
    //         "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
    //       color: "#181717",
    //     },
    //   ],
    // },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "I'm a highly motivated developer with a diverse skillset spanning full-stack web development, mobile app creation (Android & Kotlin), VR game development (Unity & C#), and web development.  My projects showcase these skills, from the Unsplash x Pexels Moodboard app to the VR game Time Detective. I'm passionate about sharing knowledge and actively contribute to the tech community through educational content, including 30+ video tutorials on challenging computer science topics.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  // title: "Publications",
  // description:
  //   "I have worked on and published a few research papers and publications of my own.",
  // avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "kazi.png",
    description:
      "I'm readily available for contact through various channels, including email, LinkedIn, GitHub, and my blogsite!",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I occasionally post blogs, update music, artwork and speak my mind on this site!",
    link: "https://kazianwar.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Survey for feedback!",
    subtitle:
      "If you would like to leave feedback for improvement, suggestions, feel free to do so here!",
    location_map_link: "https://6mxhl9427rw.typeform.com/to/Fdt1d0ph",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
