import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "UI Designer",
      icon: web,
    },
    {
      title: "UX Designer",
      icon: mobile,
    },
    {
      title: "2D Artist & Animator",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Figma",
      icon: html,
    },
    {
      name: "Adobe Animate",
      icon: css,
    },
    {
      name: "Adobe After Effects",
      icon: javascript,
    },
    {
      name: "Adobe XD",
      icon: typescript,
    },
    {
      name: "Adobe Photoshop",
      icon: reactjs,
    },
    {
      name: "Blender",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "HTML",
      icon: nodejs,
    },
    {
      name: "CSS",
      icon: mongodb,
    },
    {
      name: "Python",
      icon: threejs,
    },
    {
      name: "Valorant",
      icon: git,
    },
    {
      name: "Inshot",
      icon: figma,
    },
    {
      name: "Kritar",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "St Teresa's Convent Girls School",
      company_name: "High School",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2018 - June 2020",
      points: [
        "Biology & Mathematics (PU) & Diploma in Fashion Design (Credit Course)"
      ],
    },
    {
      title: "Bsc. Fashion Design",
      company_name: "Degree - St Teresa's College Autonomous",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Dec 2020 - Oct 2021",
      points: [
        "Undergraduate degree in Bsc Fashion Design, But had to drop out in 4th semester for work"
      ],
    },
    {
      title: "Fashion Designer and Wordrobe Stylist",
      company_name: "Dapper",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - July 2022",
      points: [
        "Fashion Designer and wodrobe stylist full time employee at Dapper Apparel brand"
      ],
    },
    {
      title: "Animation Graduate",
      company_name: "St. Joseph's University",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Aug 2022 - Present",
      points: [
        "Currently pursuing Undergraduate Degree in Digital Media and Animation"
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Revived my wodrobe with minimal budget and consultation. I feel much confident now",
      name: "Angel Moty",
      designation: "Student",
      company: "Garden City University",
      image: "https://wallpapercave.com/wp/wp6146902.jpg",
    },
    {
      testimonial:
        "Made me a poster in 10 minutes which I could never make in even 2 hours",
      name: "Alan James",
      designation: "Student",
      company: "St Josephs",
      image: "https://media.gettyimages.com/id/742027/photo/brad-pitt-in-the-film-legends-of-the-fall.jpg?s=612x612&w=0&k=20&c=r-w0lXvqpgbruf14q5ls1u8yc0r5kURoWotsuNU_sno=",
    }
  ];
  
  const projects = [
    {
      name: "Elder Care App",
      description:
        "Designed an Elder Caretaker Booking app for Helpee Pvt Ltd",
      tags: [
        {
          name: "figma",
          color: "blue-text-gradient",
        }
      ],
      image: carrent,
      source_code_link: "https://github.com/zenxth",
    },
    {
      name: "Fashion Designer",
      description:
        "Designed sketches and custom outfits for clients",
      tags: [
        {
          name: "autocad",
          color: "blue-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/"
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };