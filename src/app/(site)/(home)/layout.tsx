import Agencies from "@/components/Agencies";

export const metadata = {
  title: "Home | Ecommerce Inside",
  description:
    "Ecommerce Inside is a full-service digital solutions agency based in USA specializing in branding designs, Software, Mobile Apps, Webs, & Marketing Solutions.",
    icons: [{ rel: "icon", url: "/images/favicon.webp" }],
};

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="content">
      {children}
      <Agencies />
    </div>
  );
};

export default HomeLayout;
