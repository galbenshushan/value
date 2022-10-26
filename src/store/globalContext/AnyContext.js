import React, { createContext, useState } from "react";

export const AnyContext = createContext();

export function AnyProvider({ children }) {
  const [anyState, setAnyState] = useState(1);

  return (
    <AnyContext.Provider value={[anyState, setAnyState]}>
      {children}
    </AnyContext.Provider>
  );
}
