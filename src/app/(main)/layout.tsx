import { Footer } from "./footer";
import { Header } from "./header";
import { navbarItems, socialMediaItems } from "@/app/types";

type Props = {
  children: React.ReactNode;
};
const MainLayout = ({ children }: Props) => {
  return (
    <>
      <Header navbarData={navbarItems} socialMediaData={socialMediaItems} />
      <main>{children}</main>
      <Footer socialMediaData={socialMediaItems} />
    </>
  );
};

export default MainLayout;