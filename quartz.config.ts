import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "Parchments",
    enableSPA: true,
    enablePopovers: false,
    analytics: {
      provider: "plausible",
    },
    baseUrl: "parchments.pybash.xyz",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      typography: {
        header: "Geist",
        body: "Geist",
        code: "Source Code Pro",
      },
      colors: {
        lightMode: {
          light: "#030303",
          lightgray: "#393639",
          gray: "#B4B4B4",
          darkgray: "#d4d4d4",
          dark: "#ffffff",
          secondary: "#75d1ff",
          tertiary: "#75d1ff",
          highlight: "rgba(143, 159, 169, 0.15)",
        },
        darkMode: {
          light: "#030303",
          lightgray: "#393639",
          gray: "#B4B4B4",
          darkgray: "#d4d4d4",
          dark: "#ffffff",
          secondary: "#75d1ff",
          tertiary: "#75d1ff",
          highlight: "rgba(143, 159, 169, 0.15)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.TableOfContents(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"], // you can add 'git' here for last modified from Git but this makes the build slower
      }),
      Plugin.SyntaxHighlighting(),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Latex({ renderEngine: "katex" }),
      Plugin.Description(),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources({ fontOrigin: "googleFonts" }),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
