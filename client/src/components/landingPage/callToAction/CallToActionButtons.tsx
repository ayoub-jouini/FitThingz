"use client";

import Button from "../../global/button/Button";

const CallToActionButtons: React.FC = () => {
  const handlefirstBtn = () => {};
  const handleSecondBtn = () => {};
  return (
    <div className="flex">
      <div className="mr-4">
        <Button
          type="button"
          text="Get Started Now"
          handleButton={handlefirstBtn}
        />
      </div>
      <div className="mr-4">
        <Button
          type="button"
          text="Discover More"
          style="outlined"
          handleButton={handleSecondBtn}
        />
      </div>
    </div>
  );
};

export default CallToActionButtons;
