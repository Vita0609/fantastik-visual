interface NavbarItem {
  title: string;
  href: string;
  active: boolean;
}

interface SocialMediaItem {
  title: string;
  iconPath: string;
  href: string;
}

export interface ComingSoonCardTypes {
  title: string;
  subtitle: string;
  imagePath: string;
  imageAlt: string;
  description: string;
  active: boolean;
}

export interface RoadmapTypes {
  title: string;
  description: string;
  imagePath: string;
  imageAlt: string;
}

export interface AccordingTypes {
  title: string;
  description: string;
  imagePath: string;
  imageAlt: string;
}

export const navbarItems: NavbarItem[] = [
  {
    title: "Creon Pass",
    href: "#creon-pass",
    active: true,
  },
  {
    title: "Token",
    href: "#",
    active: false,
  },
  {
    title: "AI Revenue",
    href: "#",
    active: false,
  },
  {
    title: "AI Launchpad",
    href: "#",
    active: false,
  },
];

export const socialMediaItems: SocialMediaItem[] = [
  {
    title: "Telegram",
    iconPath: "telegram.svg",
    href: "https://t.me/Niftables",
  },
  {
    title: "Discord",
    iconPath: "discord.svg",
    href: "https://discord.com/invite/niftables",
  },
  {
    title: "Twitter",
    iconPath: "twitter.svg",
    href: "https://twitter.com/niftables",
  },
];

export const comingSoonCards: ComingSoonCardTypes[] = [
  {
    title: "token",
    subtitle: "The Gateway token to the world of AI",
    imagePath: "token.png",
    imageAlt: "token image",
    description:
      "Set to debut in the latter half of 2024, the CREON token serves as the pioneering link between cutting-edge AI initiatives and blockchain technology. This innovative token provides NFT and token holders with unparalleled access to our Launchpad, AI tools, and exclusive pre-launch investment prospects.",
    active: false,
  },
  {
    title: "revenue",
    subtitle: "Driving income and growth through decentralization",
    imagePath: "revenue.png",
    imageAlt: "revenue image",
    description:
      "CREON NFT and token holders are integral participants in the profit-sharing from our launched AI-based enterprises. We support the development of AI tools, ensuring a steady revenue stream, all while allowing early investors to enjoy the benefits of their support.",
    active: false,
  },
  {
    title: "launchpad",
    subtitle: "Driving the future of AI Innovation",
    imagePath: "launchpad.png",
    imageAlt: "launchpad image",
    description:
      "The Creon AI Launchpad, an essential component of our initiative, represents a groundbreaking opportunity in the realm of AI and blockchain. It provides the first known platform for acquiring allocations in tokenized AI projects, offering our community of NFT and CREON token holders early access to innovative and promising AI endeavors.",
    active: false,
  },
];

export const roadmapCards: RoadmapTypes[] = [
  {
    title: "AI Prospects, Market Size, and Development Pace",
    imagePath: "ai-cloud.png",
    imageAlt: "ai cloud image",
    description:
      "The AI market is one of the most dynamically growing areas of technology. According to reports, the global AI market is expected to reach $190.61 billion by 2025, with a CAGR (Compound Annual Growth Rate) of 36.6%. The key drivers behind this growth include advancements in machine learning, increasing demand for big data analytics, and growing adoption of AI technology across various sectors such as healthcare, finance, and transportation.",
  },
  {
    title: "AI Tools and Market",
    imagePath: "ai-robot.png",
    imageAlt: "ai robot image",
    description:
      "AI tools refer to the technologies and software that enable computer systems to perform tasks usually requiring human intellect. The market for these tools is dynamic and diverse, encompassing areas such as Natural Language Processing (NLP), machine learning, computer vision, and robotics. With a wide range of applications, AI tools are becoming increasingly indispensable in many sectors, from healthcare to finance, retail, manufacturing, and many others.",
  },
  {
    title: "AI, Crypto, and NFT Market",
    imagePath: "ai-crypto.png",
    imageAlt: "ai crypto image",
    description:
      "Artificial Intelligence and blockchain technology are two groundbreaking areas leading new technological innovations. The combination of these two technologies creates intriguing possibilities. For instance, Non-Fungible Tokens (NFTs) can leverage AI to create unique digital artworks or to provide exclusive AI-based services. Meanwhile, cryptocurrencies can benefit from AI by improving security mechanisms, transaction efficiency, and service personalization. Such combination brings substantial benefits for both developers and users, paving the way for unprecedented possibilities.",
  },
];

export const accordionData: AccordingTypes[] = [
  {
    title: "Profitability and Growth",
    description:
      "At Creon, we handpick cutting-edge AI projects and offer our community and token holders early access and investment opportunities. Our community actively contributes to the growth and profitability of these projects, creating a dynamic ecosystem of innovation and shared success.",
    imagePath: "stocks.svg",
    imageAlt: "Profitability and Growth",
  },
  {
    title: "Transparent & Fair Decentralized Earnings",
    description:
      "The key element of our proposal is the continuous access to distributed and decentralized earnings generated by AI tools that we provide through their creation or investment in them. This decentralized structure ensures greater transparency and fairness to all participants in the Creon ecosystem.",
    imagePath: "circles.svg",
    imageAlt: "Transparent & Fair Decentralized Earnings",
  },
  {
    title: "Launching the future",
    description:
      "What's more, Creon is pioneering in offering the first known opportunity to acquire allocations in tokenised AI projects through our Creon Launchpad platform. This gives investors a unique chance for early engagement in the most promising AI projects, opening the door to potentially high returns.",
    imagePath: "rocket.svg",
    imageAlt: "Launching the future",
  },
  {
    title: "Limitless Possibilities of AI & Crypto",
    description:
      "The possibilities offered by the integration of AI and cryptocurrencies are limitless, and we're just beginning to explore them. As pioneers, our journey into uncharted territory is fraught with challenges, but the rewards promise to be equally extraordinary. Creon isn’t just about profiting from technological innovation; it's about being part of the process that brings these innovations to life.",
    imagePath: "infinit.svg",
    imageAlt: "Limitless Possibilities of AI & Crypto",
  },
];