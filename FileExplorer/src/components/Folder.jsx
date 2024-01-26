/* eslint-disable react/prop-types */

import { useState } from "react";

const Folder = ({ handleinsertNode, explorer }) => {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: null,
  });

  const handleclick = (e, isFolder) => {
    e.stopPropagation();
    setExpand(true);
    setShowInput({
      visible: true,
      isFolder: isFolder,
    });
  };

  const handleEnterKey = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      handleinsertNode(explorer.id, e.target.value, showInput.isFolder);
      setShowInput({ ...showInput, visible: false });
    }
  };

  if (explorer.isFolder) {
    return (
      <div style={{ marginTop: "20px" }}>
        <div className="folder" onClick={() => setExpand(!expand)}>
          <span>📁 {explorer.name}</span>

          <div>
            <button onClick={(e) => handleclick(e, true)}>Folder</button>
            <button onClick={(e) => handleclick(e, false)}>File</button>
          </div>
        </div>
        <div
          style={{ display: expand ? "block" : "none", paddingLeft: "20px" }}
        >
          {showInput.visible && (
            <div className="inputContainer">
              <span> {showInput.isFolder ? "📁" : "📄"} </span>
              <input
                type="text"
                className="input_container_input"
                onKeyDown={handleEnterKey}
                onBlur={() => setShowInput({ ...showInput, visible: false })}
                autoFocus
              />
            </div>
          )}

          {explorer.items.map((exp) => {
            return (
              <Folder
                handleinsertNode={handleinsertNode}
                explorer={exp}
                key={exp.id}
              />
            );
          })}
        </div>
      </div>
    );
  } else {
    return <div>📄{explorer.name} </div>;
  }
};

export default Folder;
