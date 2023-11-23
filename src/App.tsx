import { RouterProvider } from "@tanstack/react-router"

import "./App.css"

import { router } from "./Router"

function App() {
  return <RouterProvider router={router} />
}

export default App
