import Image from "next/image";
import { roadmapCards, RoadmapTypes } from "@/app/types";

export const Roadmap = () => {
  return (
    <section className="relative pb-[58px] lg:py-20 ">
      <div className="max-w-[1480px] px-4 lg:px-5 xl:mx-auto gap-5 grid md:grid-cols-2 lg:grid-cols-1">
        {roadmapCards.map((card, i) => {
          return <CardInline item={card} key={i} />;
        })}
      </div>
      <div className="absolute bottom-0 left-0 w-full z-[-1] top-0">
        <video autoPlay loop muted poster="/images/roadmap-poster.png" className="w-full h-full object-cover">
          <source src="/videos/roadmap-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute left-0 top-0 w-full h-full bg-linear mix-blend-soft-light" />
        <div className="absolute left-0 top-0 w-full h-full bg-linearShadow" />
      </div>
    </section>
  );
};

const CardInline: React.FC<{ item: RoadmapTypes }> = ({ item }) => {
  return (
    <article className="bg-grey-line/60 rounded-md overflow-hidden grid lg:grid-cols-12 lg:gap-10">
      <div className="relative overflow-hidden max-lg:max-h-[240px] lg:col-span-4 lg:order-last">
        <Image src={`/images/${item.imagePath}`} width={453} height={302} alt={item.imageAlt} className="w-full h-full object-cover" />
        <div className="absolute left-0 top-0 w-full h-full bg-linear mix-blend-color" />
      </div>
      <div className="p-5 lg:p-10 lg:col-span-8 lg:order-first lg:pr-0">
        <h3 className="font-monument uppercase text-xl lg:text-3xl xxl:text-[38px] leading-[1.2] mb-[15px]">{item.title}</h3>
        <p className="text-sm lg:text-lg !leading-[1.3]">{item.description}</p>
      </div>
    </article>
  );
};