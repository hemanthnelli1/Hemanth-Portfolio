import { useEffect, useState, useCallback } from "react";
import TextFlippingBoard from "./Textflippingboard";

const MESSAGES = [
  "STAY HUMBLE \nHACK THE PLANET",
  "BUILDING THINGS \nTHAT SCALE",
  "CODE. SHIP. \nREPEAT.",
  "8.04 CGPA \nZERO SHORTCUTS",
  "FULL STACK \nFULL FOCUS",
  "FROM VISAKHAPATNAM \nTO PRODUCTION",
];

export default function FlipBoardSection() {
  const [msgIdx, setMsgIdx] = useState(() =>
    Math.floor(Math.random() * MESSAGES.length)
  );

  const next = useCallback(
    () => setMsgIdx((i) => (i + 1) % MESSAGES.length),
    []
  );

  useEffect(() => {
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [next]);

  return (
    <div className="flex w-full flex-col items-center justify-center gap-8 py-6">
      <TextFlippingBoard text={MESSAGES[msgIdx]} />
    </div>
  );
}