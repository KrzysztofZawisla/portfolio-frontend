import { platform } from "os";
import { $ } from "zx";

(async () => {
  const os: NodeJS.Platform = platform();
  if (os === "win32") {
    $.shell = "cmd";
    $.prefix = "";
  }
  await $`cross-env storybook dev`;
})();
