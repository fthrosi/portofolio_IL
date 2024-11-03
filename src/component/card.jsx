import { HoverEffect } from "./hoverEffect"
export default function Card() {
    return (
        <div className="max-w-5xl mx-auto">
            <HoverEffect items={projects} />
        </div>
    )
}
export const projects = [
    {
      image: "/assets/images/Padukuhan.png",
      title: "Padukuhan Ngreyung",
      description:"The Padukuhan Ngreyung website is an information platform that contains information about Padukuhan Ngreyung and also activities at Padukuhan Ngreyung",
      link: "https://padukuhan-ngreyung.vercel.app/",
    },
    {
      image: "/assets/images/AtmaKitchen.png",
      title: "Atma Kitchen",
      description:"Atma Kitchen is a comprehensive food ordering platform, designed for ordering cakes, snacks, and beverages. This project was undertaken as part of a software development course, showcasing a complete end-to-end solution.",
      link: "https://github.com/MennTech/atma_kitchen_web.git",
    },
    {
      image: "/assets/images/WDCD.png",
      title: "Central Java",
      description:"is a website that will provide information about tourist attractions in Central Java, from place to location",
      link: "https://wdcd.vercel.app/",
    },
    {
      image: "/assets/images/E-Liibrary.png",
      title: "NK - Library",
      description:"NK-Library is a library website that accommodates book borrowing, and admin management that can manage library data",
      link: "https://github.com/fthrosi/Library.git",
    },
  ];
  