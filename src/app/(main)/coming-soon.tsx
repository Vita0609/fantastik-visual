import Image from "next/image";
import { comingSoonCards, ComingSoonCardTypes } from "@/app/types";

export const ComingSoon = () => {
  return (
    <section className="pb-[58px] lg:py-20 gap-7 lg:gap-10 grid md:grid-cols-2 lg:grid-cols-3">
      {comingSoonCards.map((card, i) => {
        return <Card item={card} key={i} />;
      })}
    </section>
  );
};

const Card: React.FC<{ item: ComingSoonCardTypes }> = ({ item }) => {
  return (
    <article className="bg-grey-line/60 rounded-md relative">
      <div className="p-5 lg:p-[30px] md:min-h-[125px] lg:min-h-[159px]">
        <h3 className="font-monument uppercase text-xl lg:text-3xl xxl:text-[38px] leading-[1.2] mb-2 lg:mb-[15px]">{item.title}</h3>
        <p className="font-satoshi-bold text-gradient">{item.subtitle}</p>
      </div>
      <div className="relative mr-5 lg:mr-[30px] rounded-r-lg overflow-hidden group">
        <Image
          src={`/images/${item.imagePath}`}
          width={423}
          height={234}
          alt={item.imageAlt}
          className="w-full h-full animate group-hover:scale-[1.15]"
        />
        <div className="absolute left-0 top-0 w-full h-full bg-linear mix-blend-color" />
      </div>
      <p className="text-sm lg:text-lg !leading-[1.3] p-5 pb-8 lg:pt-[28px] lg:px-[30px] lg:pb-[58px]">{item.description}</p>
      {!item.active ? (
        <div className="absolute right-[30px] top-[-10px] rounded-full bg-white text-black uppercase font-satoshi-bold text-xs px-[6px] py-[3px]">
          Coming soon
        </div>
      ) : null}
    </article>
  );
};