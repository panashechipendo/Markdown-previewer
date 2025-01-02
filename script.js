const { useState } = React;

const MarkdownPre = () => {
    const defaultMarkdown = `
# Heading 1
## Heading 2
[Link](https://www.example.com)
\`inline code\`
\`\`\`
// Code block
const greeting = 'Hello';
console.log(greeting);
\`\`\`
- List item 1
- List item 2
> Blockquote
![Image](https://via.placeholder.com/150)
**Bold text**
    `;

    const [markdown, setMarkdown] = useState(defaultMarkdown);

    const updatePreview = (event) => {
        setMarkdown(event.target.value);
    };

    const getMarkdownText = () => {
        try {
            return { __html: marked.parse(markdown) };
        } catch (error) {
            return { __html: 'Error parsing markdown' };
        }
    };

    return (
        <div>
            <textarea 
                id="editor" 
                value={markdown}
                onChange={updatePreview}
                placeholder="Type markdown here..."
            />
            <div 
                id="preview" 
                dangerouslySetInnerHTML={getMarkdownText()}
            />
        </div>
    );
};

const App = () => {
    return (
        <div>
            <MarkdownPre />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));