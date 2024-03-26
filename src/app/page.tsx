"use client";
import "../index.css";
import dynamic from "next/dynamic";
// import App from "../App";
const App = dynamic(() => import("../App"), { ssr: false });

export default function Page() {
  return <App />;
}
