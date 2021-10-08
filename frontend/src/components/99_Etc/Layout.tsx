import Heads from "./Heads";

interface IlayoutProps {
  children: React.ReactNode;
}

const Layout: React.FunctionComponent<IlayoutProps> = ({ children }) => {
  return (
    <>
      <Heads />
      <div>{children}</div>
    </>
  );
};

export default Layout;
