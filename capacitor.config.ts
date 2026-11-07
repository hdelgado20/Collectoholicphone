import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "org.collectoholic.museo",
  appName: "Mi museo",
  webDir: "www",
  server: { url: "https://collectoholic.neocities.org/", cleartext: false },
};

export default config;
