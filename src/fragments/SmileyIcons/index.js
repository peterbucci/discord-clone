import { useState, useEffect } from "react";
import MessageSender from "../../components/MessageSender";

export default function SmileyIcons() {
  const [backgroundX, setBackgroundX] = useState(0);
  const [backgroundY, setBackgroundY] = useState(0);

  useEffect(() => {
    const onHover = () => {
      const nextX = Math.floor(Math.random() * 11);
      const nextY = Math.floor(Math.random() * (nextX > 5 ? 3 : 4));
      setBackgroundX(nextX);
      setBackgroundY(nextY);
    };
    const icon = document.getElementById("smileyIcon");
    icon.addEventListener("mouseenter", onHover);
    return () => icon.removeEventListener("mouseenter", onHover);
  }, []);

  return (
    <MessageSender.SmileyIcon
      id="smileyIcon"
      backgroundX={backgroundX}
      backgroundY={backgroundY}
    />
  );
}
