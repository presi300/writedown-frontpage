import MilkdownEditor from "@/components/ui/MilkdownEditor";
import { MilkdownProvider } from "@milkdown/react";
import React, { useState } from "react";
type TextAreaProps = {
  shiftRight?: boolean;
};

const TextArea = ({ shiftRight }: TextAreaProps) => {
  const [input, setInput] = useState("");
  return (
    <div className="flex w-full items-start justify-center overflow-y-auto">
      <div
        className={`mt-52 h-full w-full max-w-3xl rounded-xl bg-white p-5 transition-transform duration-300 ${
          shiftRight ? "translate-x-52" : "translate-x-0"
        }`}
      >
        <MilkdownProvider>
          <MilkdownEditor
            input={input}
            setInput={setInput}
            className="markdown prose h-full min-w-full focus:outline-none"
          />
        </MilkdownProvider>
      </div>
    </div>
  );
};

export default TextArea;
