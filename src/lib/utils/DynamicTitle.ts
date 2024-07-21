import { useEffect } from "react";

function DynamicTitle(name: string) {
  useEffect(() => {
    document.title = name;
    window.scrollTo(0,0);
  }, [name]);
}

export { DynamicTitle };
