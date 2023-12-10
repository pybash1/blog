import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  function Footer({ fileData, displayClass }: QuartzComponentProps) {
    const links = opts?.links ?? []

    return (
      <footer class={`${displayClass ?? ""}`}>
        {fileData.slug !== "index" && (
          <a href="/" class="back">
            &larr; Go Back
          </a>
        )}
        <hr />
        <div>
          <p>
            Just keep reading • Built with <a href="https://quartz.jzhao.xyz/">Quartz</a>
          </p>
          <ul>
            {Object.entries(links).map(([text, link]) => (
              <li>
                <a href={link}>{text}</a>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
