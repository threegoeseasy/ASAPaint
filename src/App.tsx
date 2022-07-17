import {createRef, RefObject, useCallback, useEffect, useState} from 'react'
import './App.css'

function App() {
    const canvasRef = createRef<any>()

    const pasteImage  = (event) => {
        event.preventDefault();

        let paste = (event.clipboardData || window.clipboardData).getData('text');
        paste = paste.toUpperCase();
        const selection = window.getSelection();
        if (!selection.rangeCount) return;
        selection.deleteFromDocument();
        selection.getRangeAt(0).insertNode(document.createTextNode(paste));
    };

    useEffect(() => {
        window.addEventListener('paste', pasteImage);
        return () => {
            window.removeEventListener('paste', pasteImage);
        };
    },[])



  return (
    <div className="toolBox">
        <canvas ref={canvasRef} />
    </div>
  )
}

export default App
