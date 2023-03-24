import CallToAction from "../components/landingPage/callToAction/CallToAction";
import LandingPageNav from "../components/landingPage/nav/LandingPageNav";
import LandingPageAbout from "../components/landingPage/landingPageAbout/LandingPageAbout";
import Features from "../components/landingPage/features/Features";

export default function Home() {
  return (
    <main>
      <LandingPageNav />
      <CallToAction />
      <div
        className="w-full h-28 bg-cover bg-top"
        style={{ backgroundImage: "url(images/BackgroundUp.png)" }}
      />
      <LandingPageAbout />
      <Features />
    </main>
  );
}
