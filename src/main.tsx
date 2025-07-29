import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { SelectedCellProvider } from "./context/selectedCell.tsx";

createRoot(document.getElementById("root")!).render(
  <SelectedCellProvider>
    <App />
  </SelectedCellProvider>
);
