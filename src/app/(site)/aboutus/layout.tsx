import Agencies from "@/components/Agencies";
export const metadata = {
  title: "Abouts US | Ecommerce Inside",
  description:
    "Ecommerce Inside is a full-service digital solutions agency based in UAE specializing in branding designs, Software, Mobile Apps, Webs, & Marketing Solutions.",
};
const AboutLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="content">
      {children}
      <Agencies />
    </div>
  );
};

export default AboutLayout;