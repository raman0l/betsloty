import Image from "next/image";
import Navbar from "./components/comman/Navbar";
import Hero from "./components/pages/Hero";
import Vision from "./components/pages/Vision";
import Roadmap from "./components/pages/Roadmap";
import Tokenomics from "./components/pages/Tokenomics";
import Airdrop from "./components/pages/Airdrop";
import Staking from "./components/pages/Staking";
import HowtoBuy from "./components/pages/HowtoBuy";
import Frequently from "./components/pages/Frequently";
import Footer from "./components/comman/Footer";
import Betting from "./components/pages/Betting";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Vision />
      <Roadmap />
      <Tokenomics />
      <Airdrop />
      <Staking />
      <Betting />
      <HowtoBuy />
      <Frequently />
      <Footer />
    </>
  );
}
