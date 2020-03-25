import React, { useState } from "react";
import DocumentCard from "./DocumentCard";
import DocumentsList from "./DocumentsList";
import { documents } from "./documents";
import logo from "./assets/ursip_logo.svg";
import "./App.css";

function App() {
  const [selectedDoc, setSelectedDoc] = useState(undefined);

  const selectDocHandler = docId => {
    const document = documents.find(e => e.id === docId);
    if (document) setSelectedDoc(document);
  };

  const arrowHandler = (arrowDown = false) => {
    if (!selectedDoc) return;
    const currentIndex = documents.findIndex(e => e.id === selectedDoc.id);
    if (!arrowDown) {
      if (currentIndex > 0) {
        const newSelectedDoc = documents[currentIndex - 1];
        setSelectedDoc(newSelectedDoc);
      }
    }
    if (arrowDown) {
      if (currentIndex < documents.length - 1) {
        const newSelectedDoc = documents[currentIndex + 1];
        setSelectedDoc(newSelectedDoc);
      }
    }
  };

  function useKeyPress() {
    const keyHandler = event => {
      if (event.keyCode === 40) {
        arrowHandler(true);
      }
      if (event.keyCode === 38) {
        arrowHandler();
      }
    };

    React.useEffect(() => {
      window.addEventListener("keydown", keyHandler);

      return () => {
        window.removeEventListener("keydown", keyHandler);
      };
    });
  }

  useKeyPress();

  return (
    <div>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
      </header>
      <main style={{ display: "flex", height: "100%" }}>
        <DocumentsList
          docList={documents}
          selectDocId={selectedDoc ? selectedDoc.id : undefined}
          selectDocHandler={selectDocHandler}
        />
        <DocumentCard selectedDoc={selectedDoc} />
      </main>
    </div>
  );
}

export default App;
