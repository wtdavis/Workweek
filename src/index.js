import { createRoot } from "react-dom/client";

document.body.innerHTML = '<div id="app"> Hello, World! </div>';

const root = createRoot(document.getElementById("app"));
root.render(<h1>Hello jabroni</h1>);