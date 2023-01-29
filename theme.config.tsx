import { DocsThemeConfig } from "nextra-theme-docs";
import * as SVG from "./svgs/";
import { cva } from "cva";

const classes = {
  avatar: cva("h-8 w-8 p-[2px] ring-1 ring-brown-12 rounded-full bg-brown-10"),
};

const config: DocsThemeConfig = {
  logo: (
    <div className="flex gap-2 items-center">
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
      <p className="font-bold">GG with Jaison, Chi Chi & Kevin - 2023</p>
    </div>
  ),
  primaryHue: 23,
  chat: {
    link: "https://discord.com",
  },
  docsRepositoryBase: "https://github.com/shuding/nextra-docs-template",
  footer: {
    component: () => <></>,
  },
};

export default config;
