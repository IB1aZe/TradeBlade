import NavBar from "./sections/NavBar";
import Header from "./sections/Header";
import NumbersSell from "./sections/NumbersSell";
import PastTrades from "./sections/PastTrades";
import CompanyInfo from "./sections/CompanyInfo";
import Tariffs from "./sections/Tariffs";
import FAQ from "./sections/FAQ";
import GetStarted from "./sections/GetStarted";
import Footer from "./sections/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#070A1B] text-white font-plex relative overflow-hidden">
      <NavBar />

      <Header />

      {/*Numbers Sell */}
      <NumbersSell />

      {/* Past Trades */}
      <PastTrades />

      {/* Company Info */}
      <CompanyInfo />

      {/* Tariffs */}
      <Tariffs />

      {/* Frequently Asked Questions */}
      <FAQ />

      {/* Get started */}
      <GetStarted />

      <Footer />
    </div>
  );
}
