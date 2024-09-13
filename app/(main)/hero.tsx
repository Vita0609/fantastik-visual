export const Hero = () => {
  return (
    <section className="relative">
      <video autoPlay loop muted poster="/images/main-video-poster.png" className="w-full max-lg:h-screen max-lg:object-cover">
        <source src="/videos/main-background-video.mp4" type="video/mp4" />
      </video>
      <div className="absolute left-0 top-0 w-full h-full bg-linearDark mix-blend-soft-light" />
      <div className="absolute bottom-[58px] lg:bottom-[102px] left-0 lg:left-1/2 lg:-translate-x-1/2 mx-[15px] lg:mx-0 lg:max-w-[1440px]  xxl:w-full">
        <h1 className="font-monument uppercase text-[32px] leading-[1.1] mb-[15px] lg:mb-10 xxl:text-[68px]">
          The world&apos;s first platform for Tokenizing AI blockchain projects
        </h1>
        <p className="w-fit font-satoshi-bold text-lg leading-[1.3] text-gradient py-2 border-t border-b border-gradient lg:text-[22px] lg:text-nowrap">
          Hold the Creon Pass NFT and earn passive income from AI Tools
        </p>
      </div>
    </section>
  );
};