import React from "react";

export default function DocumentCard({ selectedDoc }) {
  return (
    <div
      style={{
        flex: 4,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      {selectedDoc ? (
        <span style={{ fontSize: "30vh" }}>{selectedDoc.docText}</span>
      ) : (
        <p style={{ fontSize: "8vh" }}>Выберите номер из списка</p>
      )}
    </div>
  );
}
