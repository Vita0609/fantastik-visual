import Image from "next/image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/accordion";
import { accordionData } from "@/app/types";

export const Vision = () => {
  return (
    <section className="pb-[58px] lg:py-20 flex flex-col lg:flex-row gap-7 lg:gap-10">
      <div className="lg:flex-1">
        <h2 className="font-monument uppercase text-xl lg:text-[38px] leading-[1.2] mb-5 lg:mb-[30px] lg:self-end">
          Our vision is to support the innovation of AI blockchain projects
          <span className="text-gradient">&nbsp;while prioritizing communities and democratizing profits</span>
        </h2>
        <div className="relative lg:ml-20 xl:ml-[119px]">
          <Image src="/images/creon-monolith.png" width={453} height={302} alt="Creon monolith" className="w-full h-full object-cover" />
          <div className="absolute left-0 top-0 w-full h-full bg-[linear-gradient(to_right,black_0%,transparent_30%,transparent_70%,black_100%)]" />
        </div>
      </div>
      <div className="lg:flex-1">
        <Accordion type="multiple">
          {accordionData.map((item, i) => {
            return (
              <AccordionItem value={`item-${i}`} key={i}>
                <AccordionTrigger className="justify-start gap-4 lg:gap-[30px]">
                  <Image src={`/images/${item.imagePath}`} alt={item.imageAlt} width={100} height={114} className="w-[50px] lg:w-[100px]" />
                  <p className="text-left animate group-hover:text-blue">{item.title}</p>
                </AccordionTrigger>
                <AccordionContent>{item.description} </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
};