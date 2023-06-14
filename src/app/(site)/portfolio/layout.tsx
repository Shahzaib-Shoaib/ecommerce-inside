export const metadata = {
  title: "Portfolio | Ecommerce Inside",
  description:
    "Ecommerce Inside is a full-service digital solutions agency based in UAE specializing in branding designs, Software, Mobile Apps, Webs, & Marketing Solutions.",
};

const PortfolioLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="content">
      {children}
    </div>
  );
};

export default PortfolioLayout;