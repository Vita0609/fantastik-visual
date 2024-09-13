import { Button } from "@/components/button";

export const Pass = () => {
  return (
    <section className="flex flex-col gap-5 pb-[58px] lg:py-20 lg:flex-row-reverse lg:items-center lg:gap-10" id="creon-pass">
      <div className="relative lg:flex-1">
        <video autoPlay loop muted poster="/images/creon-pass-poster.png">
          <source src="/videos/nft-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute left-0 top-0 w-full h-full bg-linearDark mix-blend-soft-light" />
        <div className="absolute left-0 top-0 w-full h-full shadow-inner" />
      </div>
      <div className="lg:flex-1">
        <h2 className="font-monument uppercase text-[32px] leading-[1.1] mb-[15px] lg:mb-5 lg:text-[68px]">creon pass nft</h2>
        <p className="w-fit font-satoshi-bold text-lg leading-[1.3] text-gradient mb-5 lg:text-[22px] lg:mb-10">
          The Creon NFT pass unlocks access to AI projects, the Creon launchpad, and a ticket to generate passive income through AI-driven
          tools
        </p>
        <p className="text-sm lg:text-lg leading-[1.3] py-3 lg:py-4 px-4 lg:px-[18px] w-fit border border-grey-line mb-2 lg:mb-[10px]">
          Pre-launch investment opportunities for upcoming AI projects
        </p>
        <p className="text-sm lg:text-lg leading-[1.3] py-3 lg:py-4 px-4 lg:px-[18px] w-fit border border-grey-line mb-2 lg:mb-[10px]">
          Free and early access to Creon built AI projects
        </p>
        <p className="text-sm lg:text-lg leading-[1.3] py-3 lg:py-4 px-4 lg:px-[18px] w-fit border border-grey-line mb-2 lg:mb-[10px]">
          Higher allocation limits on the Creon AI Launchpad
        </p>
        <p className="text-sm lg:text-lg leading-[1.3] py-3 lg:py-4 px-4 lg:px-[18px] w-fit border border-grey-line mb-10 lg:mb-[72px]">
          Revenue share distribution from Creon built AI projects
        </p>
        <Button variant="linear" data-content="Buy Creon Pass">
          Buy Creon Pass
        </Button>
      </div>
    </section>
  );
};