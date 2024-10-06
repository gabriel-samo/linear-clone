"use client";
import { Button, Highlight } from "@/components/button";
import { KeyboardIllustration } from "@/components/illustrations/keyboard";

export const KeyboardShortcuts = () => {
  return (
    <>
      <div className="mask-keyboard h-full w-full">
        <KeyboardIllustration />;
      </div>
      <div className="">
        <Button varient="secondary" onClick={() => {}}>
          <Highlight>C</Highlight>
          Create new issue
        </Button>
      </div>
    </>
  );
};
