export const partnerImgs: string[] = [
  "/img/Goodp_Logo.png",
  "/img/Marathon_Logo.png",
  "/img/Mkitechen_Logo.png",
  "/img/MPT_Logo.png",
  "/img/Naythurein_Logo.png",
  "/img/Solinx_Logo.png",
  "/img/Sprite_Logo.png",
  "/img/Zabuaye_Logo.png",
];

export type ProjectType = {
  title: {
    text: string;
    color: string;
  };
  subHeader: string;
  agencyLogo: string;
  description: string;
  type: string[];
};
export const Projects: ProjectType[] = [
  {
    title: {
      text: "How To Do",
      color: "#C70101",
    },
    subHeader: "for Knowledge Sharing",
    description:
      "Providing an intuitive and engaging user experience for sharing and accessing information seamlessly. The interface prioritizes simplicity and functionality, ensuring users can easily contribute their knowledge and discover valuable insights",
    agencyLogo: "/img/project1-logo.png",
    type: ["Hybrid App"],
  },
  {
    title: {
      text: "Market Price",
      color: "#0047FF",
    },
    subHeader: "Price of market data",
    description:
      "provides real-time access to comprehensive market data, empowering you to make informed decisions with confidence. From tracking stock prices to monitoring commodity trends, PriceCheck delivers accurate and up-to-date information at your fingertips.",
    agencyLogo: "/img/project2-logo.png",
    type: ["Hybrid App"],
  },
  {
    title: {
      text: "Good P",
      color: "#67AE3F",
    },
    subHeader: "for Knowledge Sharing",
    description:
      "Provides a comprehensive solution for individuals and businesses, streamlining financial transactions, enhancing the online shopping experience, and ensuring reliable and efficient delivery services.",
    agencyLogo: "/img/project3-logo.png",
    type: ["Hybrid App"],
  },
  {
    title: {
      text: "Eastern Myanmar",
      color: "#D08C4C",
    },
    subHeader: "Best Hotel Service",
    description:
      "aims to create a user-friendly and visually appealing online platform for a hotel, providing potential guests with essential information and features for a seamless booking experience. The website will feature an intuitive design, showcasing the hotel's amenities, rooms, dining options, and special offers.",
    agencyLogo: "/img/project4-logo.png",
    type: ["Web App", "Website"],
  },
];

export type ReviewType = {
  user: {
    picture: string;
    name: string;
    position: string;
    company: string;
  };
  review: string;
};

export const Reviews: ReviewType[] = [
  {
    user: {
      name: "Sett Wai",
      picture: "/img/review1.png",
      position: "Tech Solution Lead",
      company: "Marathon",
    },
    review:
      "She demonstrated strong problem-solving skill as UI/UX Designer and has a strong track  record of achievements in teamwork and suggesting user experience design for more  operational efficiency especially in Good P System (a remittance platform for unbanked  population) which earned her great admiration and respect among the team members here. Su  Wint Thida was professional, punctual, and delivered better than expected results as a UI/UX  designer.",
  },
  {
    user: {
      name: "Eaindray Ju Ju",
      picture: "/img/review2.png",
      position: "Snr. UX UI Designer",
      company: "Plus Impact Software house",
    },
    review:
      "She demonstrated strong problem-solving skill as UI/UX Designer and has a strong track  record of achievements in teamwork and suggesting user experience design for more  operational efficiency especially in Good P System (a remittance platform for unbanked  population) which earned her great admiration and respect among the team members here. Su  Wint Thida was professional, punctual, and delivered better than expected results as a UI/UX  designer.",
  },
];
