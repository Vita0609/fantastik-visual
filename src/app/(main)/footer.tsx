import Image from "next/image";
import Link from "next/link";

interface SocialMediaItem {
  title: string;
  iconPath: string;
  href: string;
}

interface Props {
  socialMediaData: SocialMediaItem[];
}

export const Footer: React.FC<Props> = ({ socialMediaData }) => {
  return (
    <footer>
      <div className="flex flex-col lg:flex-row items-center gap-4 text-sm lg:text-base p-5 lg:px-[50px] lg:pt-[15px] lg:pb-[35px] max-w-[1480px] px-4 xl:mx-auto lg:gap-[90px]">
        <p>{`© Creon ${new Date().getFullYear()}. All rights reserved.`}</p>
        <div className="flex flex-wrap gap-[10px] mt-auto">
          {socialMediaData.map((item, i) => {
            return (
              <Link
                href={item.href}
                title={`Follow us on ${item.title}`}
                aria-label={`Follow us on ${item.title}`}
                target="_blank"
                key={i}
                className="border-[2px] border-white rounded-full flex items-center justify-center p-[9px] animate hover:border-blue hover:bg-blue"
              >
                <Image src={`/images/${item.iconPath}`} alt={item.title} width={16} height={16} />
              </Link>
            );
          })}
        </div>
        <p className="flex items-baseline gap-[5px] lg:ml-auto">
          Powered by
          <Link
            href="https://www.niftables.com/"
            target="_blank"
            title="Niftables"
            aria-label="Niftables"
            className="uppercase font-monument tracking-[2px] animate hover:text-blue"
          >
            Niftables
          </Link>
        </p>
      </div>
    </footer>
  );
};