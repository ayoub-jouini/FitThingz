"use client";

import CallToAction from "../components/landingPage/callToAction/CallToAction";
import LandingPageNav from "../components/landingPage/nav/LandingPageNav";
import LandingPageAbout from "../components/landingPage/landingPageAbout/LandingPageAbout";
import Features from "../components/landingPage/features/Features";
import JoinUsSection from "../components/landingPage/joinUs/JoinUsSection";
import LandingPageFooter from "../components/landingPage/footer/LandingPageFooter";
import { useSelector } from "react-redux";

const getData = async () => {
  const auth = useSelector((state: any) => state.auth);
  return auth;
};

export default function Home() {
  const auth: any = getData();
  if (auth.accessToken) {
    return (
      <>
        <div>{auth.accessToken}</div>
        <div>{auth.refreshToken}</div>
      </>
    );
  }
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
