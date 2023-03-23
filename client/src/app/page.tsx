"use client";
import Button from "../components/global/button/Button";

export default function Home() {
  const handleButton = () => {};
  return (
    <main>
      <Button text="button" type="submit" handleButton={handleButton}></Button>
    </main>
  );
}
