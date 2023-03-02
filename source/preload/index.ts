import { contextBridge, ContextBridge } from "electron";
import isElectron from "is-electron";
import "source-map-support/register";
import "v8-compile-cache";

const { exposeInMainWorld }: ContextBridge = contextBridge;

exposeInMainWorld("api", {
  isElectron,
});
