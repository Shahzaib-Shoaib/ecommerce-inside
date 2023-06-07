
import Agencies from "@/components/Agencies";

const AboutLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="content">
      {children}
      <Agencies />
    </div>
  );
};

export default AboutLayout;
