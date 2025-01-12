import { FaYoutube } from "react-icons/fa6";

const config = {
  title: "Tuba Ahmed Khan | Full-Stack Developer",
  description: {
    long: "Explore the portfolio of Tuba Khan, a full-stack developer and creative technologist specializing in interactive web experiences, 3D animations, and innovative projects. Discover my latest work, including Coding Ducks, The Booking Desk, Ghostchat, and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of Tuba Khan, a full-stack developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Tuba",
    "portfolio",
    "full-stack developer",
    "creative technologist",
    "web development",
    "3D animations",
    "interactive websites",
    "Coding Ducks",
    "The Booking Desk",
    "Ghostchat",
    "web design",
    "GSAP",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "Tuba Khan",
  email: "tubak2907@gmail.com",
  site: "https://nareshkhatri.site",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    linkedin: "https://www.linkedin.com/in/tubakhxn",
    instagram: "https://www.instagram.com/tuba.captures",
    github: "https://github.com/tubakhxn",
    youtube: "https://www.youtube.com/@SimplyTuba",
    
  },
};
export { config };
