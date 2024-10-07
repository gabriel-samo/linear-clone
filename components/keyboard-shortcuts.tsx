"use client";
import { MouseEvent, useRef } from "react";
import { Button, Highlight } from "@/components/button";
import { KeyboardIllustration } from "@/components/illustrations/keyboard";

const shortcuts = [
  { text: "Opens command line", keys: "⌘k" },
  { text: "Assign issue to me", keys: "i" },
  { text: "Assign issue to", keys: "a" },
  { text: "Change issue status", keys: "s" },
  { text: "Set issue priority", keys: "p" },
  { text: "Add issue labels", keys: "l" },
  { text: "Set due date", keys: "⇧d" },
  { text: "Set parent issue", keys: "⇧⌘p" },
  { text: "Add sub-issue", keys: "⇧⌘o" },
  { text: "Create new issue", keys: "c" },
  { text: "Create new issue from template", keys: "⌥c" },
  { text: "Move to project", keys: "⇧p" },
];

export const KeyboardShortcuts = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const illustrationWrapperRef = useRef<HTMLDivElement>(null);

  const onShortcutButtonClick = (
    e: MouseEvent<HTMLButtonElement>,
    keys: string,
  ) => {
    e.preventDefault();
    if (!wrapperRef.current) return;

    wrapperRef.current.scrollTo({
      left: e.currentTarget.offsetLeft - wrapperRef.current.clientWidth / 2,
      behavior: "smooth",
    });

    if (!illustrationWrapperRef.current) return;

    illustrationWrapperRef.current
      .querySelectorAll(".active")
      .forEach((el) => el.classList.remove("active"));

    const keyArray = keys.split("");
    const keyElements = keyArray.map((key) =>
      illustrationWrapperRef.current?.querySelector(`[data-key="${key}"]`),
    );

    keyElements.forEach((element) => element?.classList.add("active"));
  };

  return (
    <>
      <div ref={illustrationWrapperRef} className="mask-keyboard h-full w-full">
        <KeyboardIllustration />;
      </div>
      <div className="my-7 min-h-[4rem] w-full overflow-hidden">
        <div
          ref={wrapperRef}
          className="mask-shortcutkeys flex min-h-[4rem] max-w-full snap-x snap-mandatory gap-2 overflow-x-auto whitespace-nowrap pb-8"
        >
          {shortcuts.map((shortcut) => (
            <Button
              className="shrink-0 snap-center first:ml-[50vw] last:mr-[50vw]"
              key={shortcut.text}
              varient="secondary"
              onClick={(e) => onShortcutButtonClick(e, shortcut.keys)}
            >
              <Highlight className="uppercase">{shortcut.keys}</Highlight>
              <span>{shortcut.text}</span>
            </Button>
          ))}
        </div>
      </div>
    </>
  );
};
