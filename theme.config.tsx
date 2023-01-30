import { DocsThemeConfig } from "nextra-theme-docs";
import * as SVG from "./svgs/";
import { cva } from "cva";

const classes = {
  avatar: cva("h-8 w-8 p-[2px] ring-1 ring-brown-12 rounded-full bg-brown-10"),
};

const config: DocsThemeConfig = {
  logo: (
    <div className="flex -space-x-1 items-center">
      <div className={classes.avatar()}>
        <SVG.Jaison className="w-full h-full" />
      </div>
      <div className={classes.avatar()}>
        <SVG.ChiChi className="w-full h-full" />
      </div>
      <div className={classes.avatar()}>
        <SVG.Kevin className="w-full h-full" />
      </div>
    </div>
  ),
  primaryHue: 23,
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="GG with Jaison, Chi Chi and Kevin" />
      <meta
        property="og:description"
        content="Growth group with Jaison, Chi Chi and Kevin in 2023"
      />
    </>
  ),
  useNextSeoProps: () => {
    return {
      titleTemplate: "%s",
    };
  },
  editLink: {
    component: () => <></>,
  },
  feedback: {
    content: () => <></>,
    labels: "",
  },
  chat: {
    icon: <></>,
  },
  docsRepositoryBase: "https://github.com/shuding/nextra-docs-template",
  footer: {
    component: () => <></>,
  },
};

export default config;
