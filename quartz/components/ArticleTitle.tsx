import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

function ArticleTitle({ fileData, displayClass }: QuartzComponentProps) {
  if (fileData.slug === "index") {
    return (
      <h1 class={`article-title index-title ${displayClass ?? ""}`}>
        Writing about <i class="keyword">crafting</i> perfection and other{" "}
        <i class="keyword">tidbits</i>
      </h1>
    )
  }

  const title = fileData.frontmatter?.title
  if (title) {
    return <h1 class={`article-title ${displayClass ?? ""}`}>{title}</h1>
  } else {
    return null
  }
}

ArticleTitle.css = `
.article-title {
  margin-top: 15rem;
  font-size: 3rem;
}

.index-title {
  font-weight: 400;
}

.keyword {
  font-family: 'Newsreader';
}
`

export default (() => ArticleTitle) satisfies QuartzComponentConstructor
