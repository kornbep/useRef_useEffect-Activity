import { useEffect, useRef, useState } from "react";

function DraftEditor_starter() {

  const [text, setText] = useState("");
  const inputRef = useRef(null);
  const renderCount = useRef(0);

  // TODO 1
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // TODO 2
  useEffect(() => {
    console.log("Draft saved:", text);
  }, [text]);

  // TODO 3
  renderCount.current += 1;
  console.log("Render count:", renderCount.current);

  return (
    <>
      <input
        ref={inputRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <p>Character count: {text.length}</p>

      {/* TODO 4 */}
      <p>Render count: {renderCount.current}</p>
    </>
  );
}

export default DraftEditor_starter;
