import { useEffect, useRef, useState } from "react";

type Props = {
  phrases: string[];
  typeMs?: number;
  backMs?: number;
  holdMs?: number;
  gapMs?: number;
};

export default function RotatingType({
  phrases,
  typeMs = 55,
  backMs = 38,
  holdMs = 1700,
  gapMs = 400,
}: Props) {
  const [text, setText] = useState(phrases[0] || "");
  const iRef = useRef(0);              // índice da frase
  const jRef = useRef(text.length);    // índice do caractere
  const deletingRef = useRef(true);    // começa apagando a frase inicial após segurar

  useEffect(() => {
    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion || phrases.length <= 1) {
      setText(phrases[0] || "");
      return;
    }

    let timer: number;

    const tick = () => {
      const i = iRef.current;
      const j = jRef.current;
      const deleting = deletingRef.current;
      const current = phrases[i];

      if (!deleting) {
        const next = current.slice(0, j + 1);
        setText(next);
        jRef.current = j + 1;

        if (jRef.current === current.length) {
          timer = window.setTimeout(() => {
            deletingRef.current = true;
            tick();
          }, holdMs);
          return;
        }
        timer = window.setTimeout(tick, typeMs);
      } else {
        const next = current.slice(0, j - 1);
        setText(next);
        jRef.current = j - 1;

        if (jRef.current === 0) {
          deletingRef.current = false;
          iRef.current = (i + 1) % phrases.length;
          timer = window.setTimeout(tick, gapMs);
          return;
        }
        timer = window.setTimeout(tick, backMs);
      }
    };

    // inicia segurando a primeira frase e depois começa a apagar
    timer = window.setTimeout(() => {
      deletingRef.current = true;
      tick();
    }, holdMs);

    return () => window.clearTimeout(timer);
  }, [phrases, typeMs, backMs, holdMs, gapMs]);

  return <span className="typewriter">{text}</span>;
}