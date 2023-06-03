import { createContext, useState } from 'react';
import { briefingFile } from '../constants/files/txt-briefing';
export const DbContext = createContext({
  files: [],
  clearance: 'infrared',
  updateAvailability: () => {},
  updateOpenStatus: () => {},
});

export const DbContextProvider = props => {
  const [files, setFiles] = useState([briefingFile]);
  const [clearance] = useState('infrared');

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
  return (
    <DbContext.Provider
      value={{
        files,
        clearance,
        updateAvailability,
        updateOpenStatus,
      }}
    >
      {props.children}
    </DbContext.Provider>
  );
};
