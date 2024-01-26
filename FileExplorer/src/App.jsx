import { useState } from "react";
import fileExplorer from "./Data/folderData";
import Folder from "./components/Folder";
import useTraverse from "./Hooks/useTraverse";

const App = () => {
  const [explorer, setExplorer] = useState(fileExplorer);
  const { insertNode } = useTraverse();

  const handleinsertNode = (folderId, item, isFolder) => {
    const updatedTree = insertNode(explorer, folderId, item, isFolder);
    setExplorer(updatedTree);
  };
  return (
    <>
      <Folder handleinsertNode={handleinsertNode} explorer={explorer} />
    </>
  );
};

export default App;
