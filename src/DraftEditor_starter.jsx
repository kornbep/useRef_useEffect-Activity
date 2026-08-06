import { useEffect, useRef, useState } from "react";

function DraftEditor_starter() {
    
  const [text, setText] = useState("");
  const inputRef = useRef(0);
  const renderCount = useRef(0);


  // TODO 1
  useEffect(() => {
    inputRef.current.focus();
    }, []);
 
  // TODO 2
  useEffect(() => {
    console.log('Draft saved: ' , text);
  }, [text]);

  //TODO3
  renderCount.current += 1;
    console.log('Render count: ' , renderCount.current); //temporary to check render count

  return (
    <div>
      <input ref={inputRef} value={text} onChange={(e) => setText(e.target.value)}/>
      <p>Character count: {text.length}</p>
      <p>Render count: {renderCount.current}</p>

      
    </div>
  );
}
export default DraftEditor_starter


/* Dili mobuhat og render ang Ref 
Lahi sa useState kay ang useState mag-signal 
man sa React nga naay nagbag-o sa data, mao 
nga i-trigger sa React ang pag-re-render sa
 component para ma-update ug magpakita sa screen 
 ang pinakabag-ong value. */