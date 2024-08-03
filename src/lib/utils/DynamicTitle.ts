import { useEffect } from "react";

function DynamicTitle(name: string | undefined) {
  useEffect(() => {
  
  document.title = name!;
    window.scrollTo(0,0);
  }, [name]);
}

export { DynamicTitle };
