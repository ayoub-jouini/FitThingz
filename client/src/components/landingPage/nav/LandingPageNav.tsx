"use client";

import Container from "../../global/container/Container";
import Button from "../../global/button/Button";

const LandingPageNav: React.FC = () => {
  const handleLogInButton = () => {};
  const handleSignUpButton = () => {};

  return (
    <Container>
      <nav className="mt-8 flex justify-between">
        <img alt="fitthings logo" src="logo.svg" />
        <div className="flex justify-between w-3/12">
          <Button
            type="button"
            text="Log In"
            style="text"
            handleButton={handleLogInButton}
          />
          <Button
            type="button"
            text="Sign Up"
            handleButton={handleSignUpButton}
          />
        </div>
      </nav>
    </Container>
  );
};

export default LandingPageNav;
