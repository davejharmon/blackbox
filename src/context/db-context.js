import { createContext, useState } from 'react';
import { BRIEFING_FILE } from '../constants/files/txt-briefing';
export const DbContext = createContext({
  files: [],
  clearance: 'infrared',
  updateAvailability: () => {},
  updateOpenStatus: () => {},
  reset: () => {},
});

export const DbContextProvider = props => {
  const [files, setFiles] = useState([BRIEFING_FILE]);
  const [clearance, setClearance] = useState(0);

  const updateAvailability = (id, isAvailable) => {
    setFiles(prevFiles => {
      return prevFiles.map(file => {
        if (file.id === id) {
          return { ...file, isAvailable };
        }
        return file;
      });
    });
  };

  const updateOpenStatus = (id, isOpen) => {
    setFiles(prevFiles => {
      return prevFiles.map(file => {
        if (file.id === id) {
          return { ...file, isOpen };
        }
        return file;
      });
    });
  };

  const reset = () => {
    setFiles([BRIEFING_FILE]);
    setClearance(0);
  };
  return (
    <DbContext.Provider
      value={{
        files,
        clearance,
        updateAvailability,
        updateOpenStatus,
        reset,
      }}
    >
      {props.children}
    </DbContext.Provider>
  );
};
