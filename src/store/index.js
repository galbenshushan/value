import { AnyProvider } from "./globalContext/AnyContext";

export function GlobalProvider({ children }) {
  return <AnyProvider>{children}</AnyProvider>;
}
