import { Camera } from "./components/Camera";
import Footer from "./components/Footer";
import NavHeader from "./components/NavHeader";

export default function Home() {
  return (
    <main className="bg-gray-950 min-h-screen py-8">
      <div className="mx-auto max-w-2xl space-y-8 px-8">
        <NavHeader />
        <Camera />
        <Footer />
      </div>
    </main>
  );
}
