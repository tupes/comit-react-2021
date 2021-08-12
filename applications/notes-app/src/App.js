import React from "react";

import NotesProvider from "./providers/NotesProvider";
import GlobalStyling from "./components/GlobalStyling";
import Pages from "./pages/Pages";

export default function App() {
  return (
    <NotesProvider>
      <GlobalStyling />
      <Pages />
    </NotesProvider>
  );
}
