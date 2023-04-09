"use client";

import Container from "../../global/container/Container";
import Button from "../../global/button/Button";
import Link from "next/link";

const LandingPageNav: React.FC = () => {
  const handleLogInButton = () => {};
  const handleSignUpButton = () => {};

  return (
    <Container>
      <nav className="mt-6 flex justify-between items-center">
        <img alt="fitthings logo" src="/icons/logo.svg" />
        <div className="flex justify-between w-3/12 items-center">
          <Link href="login">
            <Button
              type="button"
              text="Log In"
              style="text"
              handleButton={handleLogInButton}
            />
          </Link>
          <Link href="signup">
            <Button
              type="button"
              text="Sign Up"
              handleButton={handleSignUpButton}
            />
          </Link>
        </div>
      </nav>
    </Container>
  );
};

export default LandingPageNav;
