import ReactMarkdown from "react-markdown";
import Components from "../Components";

export default function ArticleBody({ markdown, className, style, ...props }) {
  return (
    <div className={className} style={style}>
      <ReactMarkdown components={Components} {...props}>
        {markdown}
      </ReactMarkdown>
    </div>
  );
}
