import createCache from "@emotion/cache";
import { PropsWithChildren } from "react";
import { CacheProvider } from "@emotion/react";
import rtlPlugin from "stylis-plugin-rtl"; // noinspection SpellCheckingInspection
// import { emotionRoot } from "../lib/emotionRoot";

// noinspection SpellCheckingInspection
const cacheRtl = createCache({
  key: "chakra-test",
  stylisPlugins: [rtlPlugin],
});

/**
 * A cache provider for rtl situation of the web application.
 * @param props
 * @constructor
 */
export default function RTL(props: PropsWithChildren) {
  return <CacheProvider value={cacheRtl}>{props.children}</CacheProvider>;
}
