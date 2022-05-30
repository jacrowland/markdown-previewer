import './styles.css';
import Window from './components/Window';
import { useState } from 'react';
import { marked } from 'marked';
import { faNewspaper } from '@fortawesome/free-regular-svg-icons';
import { faPalette } from '@fortawesome/free-solid-svg-icons';

const MarkdownPreviewer = props => {

  const [input, setInput] = useState(props.defaultInput)
  
  const styles = {
    background: 'lightPink',
    width: '100%',
    minHeight: '100vh',
    height: 'auto'
  }

  return (
    <div className="MarkdownPreviewer flex align-center flex-col" style={styles}>

      <Window icon={faNewspaper} name="Editor" width="50%" height="300px">
        <textarea id="editor" style={{background: 'transparent', height: '99%', width: '100%', borderRadius: 0, border: 'unset', padding: 0}} onChange={(e)=> setInput(e.target.value)}>
          {input}
        </textarea>
      </Window>

      <Window icon={faPalette} name="Previewer" width="80%" height="500px" marginTop={0}>
        <div id="preview" style={{height: '100%', overflowY: 'auto', paddingLeft: 15, paddingRight: 15, fontFamily: 'Arial'}} dangerouslySetInnerHTML={{__html: marked.parse(input.replace(/[\n\r]/g, '\r'))}}>
        </div>
      </Window>

      <div style={{fontFamily: 'monospace', marginBottom: 15}}>
        Made by <a style={{background: 'transparent', textDecoration: 'none', color: 'unset'}} href="https://jacobrowland.me">Jacob Rowland</a>
      </div>

    </div>
  );
}

export default MarkdownPreviewer;

MarkdownPreviewer.defaultProps = {
  defaultInput: `# Welcome to my React Markdown Previewer!

  ## This is a sub-heading...
  ### And here's some other cool stuff:
  
  Heres some code, \`<div></div>\`, between 2 backticks.
  
  \`\`\`
  // this is multi-line code:
  
  function anotherExample(firstLine, lastLine) {
    if (firstLine == \'\`\`\`\' && lastLine == \'\`\`\`\') {
      return multiLineCode;
    }
  }
  \`\`\`
  
  You can also make text **bold**... whoa!
  Or _italic_.
  Or... wait for it... **_both!_**
  And feel free to go crazy ~~crossing stuff out~~.
  
  There's also [links](https://www.freecodecamp.org), and
  > Block Quotes!
  
  And if you want to get really crazy, even tables:
  
  Wild Header | Crazy Header | Another Header?
  ------------ | ------------- | -------------
  Your content can | be here, and it | can be here....
  And here. | Okay. | I think we get it.
  
  - And of course there are lists.
    - Some are bulleted.
       - With different indentation levels.
          - That look like this.
  
  
  1. And there are numbered lists too.
  1. Use just 1s if you want!
  1. And last but not least, let's not forget embedded images:
  
  ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
  
  `
}
