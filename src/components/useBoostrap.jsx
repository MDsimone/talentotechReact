import { useEffect } from "react";

export default function useBootstrap(enabled = true) {
  useEffect(() => {
    if (!enabled) return;
    const id = "bootstrap-cdn-stylesheet";
    if (document.getElementById(id)) return; // evita duplicados

    const link = document.createElement("link");
    link.id = id;
    link.rel = "stylesheet";
    link.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css";
    link.crossOrigin = "anonymous";
    document.head.appendChild(link);

     // (modals, dropdowns)
     const script = document.createElement("script");
     script.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js";
     script.async = true;
     document.body.appendChild(script);

    return () => {
      const el = document.getElementById(id);
      if (el) el.remove();
      // if (script) script.remove();
    };
  }, [enabled]);
}