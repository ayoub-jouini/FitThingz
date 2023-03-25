import CallToAction from "../components/landingPage/callToAction/CallToAction";
import LandingPageNav from "../components/landingPage/nav/LandingPageNav";
import LandingPageAbout from "../components/landingPage/landingPageAbout/LandingPageAbout";
import Features from "../components/landingPage/features/Features";
import JoinUsSection from "../components/landingPage/joinUs/JoinUsSection";
import LandingPageFooter from "../components/landingPage/footer/LandingPageFooter";

export default function Home() {
  return (
    <main>
      <LandingPageNav />
      <CallToAction />
      <div
        className="w-full h-28 -mb-1 bg-cover bg-top"
        style={{ backgroundImage: "url(images/BackgroundUp.png)" }}
      />
      <LandingPageAbout />
      <Features />
      <JoinUsSection />
      <div
        className="w-full h-28 -mt-1 bg-cover bg-bottom"
        style={{ backgroundImage: "url(images/BackgroundDown.png)" }}
      />
      <LandingPageFooter />
    </main>
  );
}
