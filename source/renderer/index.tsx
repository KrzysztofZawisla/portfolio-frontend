import type { Root } from "react-dom/client";
import { createRoot } from "react-dom/client";
import App from "~frontend/source/renderer/components/app/app";
import target, {
  TargetType,
} from "~frontend/source/shared/constants/target/target";
import ExtendedWindow from "~frontend/source/shared/types/extended-window/extended-window";

if (
  target === TargetType.Desktop
    ? (window as ExtendedWindow).api?.isElectron()
    : true
) {
  if (process.env.DEVELOPMENT === "true") {
    const whyDidYouRenderPromise = import(
      "@welldone-software/why-did-you-render"
    );
    const reactLibraryPromise = import("react");
    const [{ default: whyDidYouRender }, reactLibrary] = await Promise.all([
      whyDidYouRenderPromise,
      reactLibraryPromise,
    ]);
    whyDidYouRender(reactLibrary, {
      trackAllPureComponents: true,
    });
  }
  const rootElement: HTMLDivElement | null = document.querySelector("#root");
  if (rootElement) {
    const root: Root = createRoot(rootElement);
    root.render(<App />);
  }
}
