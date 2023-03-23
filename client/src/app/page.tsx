import CallToAction from "@/components/landingPage/callToAction/CallToAction";
import LandingPageNav from "../components/landingPage/nav/LandingPageNav";
import LandingPageAbout from "@/components/landingPage/landingPageAbout/LandingPageAbout";

export default function Home() {
  return (
    <main>
      <LandingPageNav />
      <CallToAction />
      <LandingPageAbout />
    </main>
  );
}
