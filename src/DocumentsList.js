import React from "react";
import envelopeSvg from "./assets/envelope.svg";
import "./DocumentsList.css";

export default function DocumentsList({
  docList,
  selectDocId,
  selectDocHandler
}) {
  return (
    <div className='main'>
      <div className='listWrapper'>
        <div className='documentsList'>
          {docList.map(e => (
            <div
              className={`documentItem ${
                selectDocId && selectDocId === e.id ? `selectedItem` : ``
              }`}
              key={e.docText}
              onClick={() => {
                selectDocHandler(e.id);
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  className='imageEnvelope'
                  src={envelopeSvg}
                  alt='envelope'
                />
                <span style={{ fontWeight: "bold", marginLeft: "4px" }}>
                  {e.docNumber}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
