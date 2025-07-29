import React, { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

type SelectedCellContextType = {
  selectedCell: { X: number; Y: number } | null;
  setSelectedCell: React.Dispatch<
    React.SetStateAction<{ X: number; Y: number } | null>
  >;
};

const SelectedCellContext = createContext<SelectedCellContextType | undefined>(
  undefined
);

export function SelectedCellProvider({ children }: { children: ReactNode }) {
  const [selectedCell, setSelectedCell] = useState<{
    X: number;
    Y: number;
  } | null>(null);

  return (
    <SelectedCellContext.Provider value={{ selectedCell, setSelectedCell }}>
      {children}
    </SelectedCellContext.Provider>
  );
}

export const useSelectedCell = () => {
  const context = useContext(SelectedCellContext);
  if (!context) {
    throw new Error(
      "useSelectedCell must be used within a SelectedCellProvider"
    );
  }
  return context;
};
