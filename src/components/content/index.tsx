import { type NextPage } from "next";
import Markdown from "react-markdown";
import gfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

interface Props {
  material: string
}
const Content: NextPage<Props> = ({
  material
}) => {
  console.log(material);
  return (
    <div className="bg-white border border-zinc-200 rounded min-h-[390px] overflow-auto maincard h-full">
      <Markdown remarkPlugins={[gfm]} components={{
        code(props) {
          const {children, className, ...rest} = props
          const match = /language-(\w+)/.exec(className ?? '')
          return match ? (
            <SyntaxHighlighter showLineNumbers style={atomDark} language={match[1]}>{String(children).replace(/\n$/, '')}</SyntaxHighlighter>
          ) : (
            <code {...rest} className={className}>
              {children}
            </code>
          )
        }
      }}
      >
        {material}
      </Markdown>
    </div>
  );
}

export default Content;