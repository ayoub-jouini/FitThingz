"use client";

import Container from "../../global/container/Container";
import Button from "../../global/button/Button";

const LandingPageNav: React.FC = () => {
  const handleLogInButton = () => {};
  const handleSignUpButton = () => {};

  return (
    <Container>
      <nav className="mt-6 flex justify-between items-center">
        <img alt="fitthings logo" src="images/logo.svg" />
        <div className="flex justify-between w-3/12 items-center">
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
