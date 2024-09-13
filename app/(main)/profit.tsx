export const Profit = () => {
  return (
    <section className="pb-[58px] lg:py-20 flex flex-col">
      <h2 className="font-monument uppercase text-[32px] leading-[1.1] mb-[15px] lg:mb-5 lg:text-[68px]">
        Profiting Through
      </h2>
      <h3 className="font-monument uppercase text-gradient text-xl lg:text-[38px] leading-[1.2] mb-5 lg:mb-[83px] lg:self-end">
        AI Innovation & Decentralization
      </h3>
      <div className="flex flex-col lg:flex-row gap-5 lg:gap-10 lg:items-stretch">
        <div className="relative overflow-hidden rounded-md lg:min-w-[50%] lg:w-full">
          <video
            autoPlay
            loop
            muted
            poster="/images/creon-logo-poster.png"
            className="h-full object-cover"
          >
            <source src="/videos/creon-logo.mp4" type="video/mp4" />
          </video>
          <div className="absolute left-0 top-0 w-full h-full bg-linearDark mix-blend-soft-light" />
        </div>
        <div className="xl:max-w-[391px] xl:w-full lg:p-[30px] lg:border-l lg:border-r lg:border-grey-line flex flex-col justify-center">
          <h4 className="font-satoshi-bold text-lg lg:text-[22px] leading-[1.3] mb-4 lg:mb-7">
            The dynamic community driven business model of the future.
          </h4>
          <p className="text-sm lg:text-lg !leading-[1.3]">
            At Creon, we blend the power of AI tools with the dynamic crypto and
            NFT markets, utilizing an innovative business model to drive
            profitability. This approach empowers our community, as our NFT and
            token holders directly benefit from the growth and prosperity of the
            Creon network, creating a win-win scenario for both our community
            and for the projects we launch.
          </p>
        </div>
      </div>
    </section>
  );
};