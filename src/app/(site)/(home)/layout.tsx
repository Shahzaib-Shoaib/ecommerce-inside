import Agencies from "@/components/Agencies";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="content">
      {children}
      <Agencies />
    </div>
  );
};

export default HomeLayout;
