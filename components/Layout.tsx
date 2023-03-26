// import NavBar from "./Navbar";
import BottomNav from "./BottomNav";
import Navbar from "./Navbar";

type Props = {
  children: React.ReactNode;
};

export default function Layout(props: Props) {
  return (
    <div className="w-full py-0">
      <BottomNav />
      {props.children}
    </div>
  );
}
