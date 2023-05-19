// import NavBar from "./Navbar";
import BottomNav from "./BottomNav";
import Navbar from "./Navbar";

/**
 * Navbar 제거
 */
type Props = {
  children: React.ReactNode;
};

export default function Layout(props: Props) {
  return (
    <div className="w-full py-0">
      <Navbar />
      {/* <BottomNav /> */}
      {props.children}
    </div>
  );
}
