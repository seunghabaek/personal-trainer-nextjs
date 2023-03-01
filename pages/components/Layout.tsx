// import NavBar from "./Navbar";
import Navbar from "./Navbar";

type Props = {
  children: React.ReactNode;
};

export default function Layout(props: Props) {
  return (
    <div className="w-full py-0">
      <Navbar />
      {props.children}
    </div>
  );
}
