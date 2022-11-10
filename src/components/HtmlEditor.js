import React, {useState} from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function HtmlEditor() {
  const [editorHtml, setEditorHtml] = useState("")

  const handleChange = (html) => {
    setEditorHtml(html);
  }

  HtmlEditor.modules = {
    toolbar: [
      [{'header': [1, 2, 3, 4, 5, 6, false]}],
      [{'color': []}, {'background': []}],
      ['underline'],
      [{'script': 'sub'}, {'script': 'super'}],
      [{'direction': 'rtl'}], [{'align': []}],
      ['formula'], ['link'],
      ['image', 'video'],
      ['code-block'],
      ['bold', 'italic', 'strike'], ['clean'],
      [{'list': 'ordered'}, {'list': 'bullet'}],
      [{'indent': '-1'}, {'indent': '+1'}],
      ['blockquote'],
      [{'font': []}], [{size: []}],
    ],

    clipboard: {
      matchVisual: false,
    }
  }

  HtmlEditor.formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video', 'color', 'background', 'direction',
    'code-block', 'clean', 'script', 'align', 'formula'
  ]

  return (
      <ReactQuill
          theme="snow"
          onChange={handleChange}
          value={editorHtml}
          modules={HtmlEditor.modules}
          formats={HtmlEditor.formats}
      />
  );
}

export default HtmlEditor;