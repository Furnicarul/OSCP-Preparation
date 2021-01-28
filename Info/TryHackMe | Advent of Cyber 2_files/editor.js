function makeViewer(elementName, content){
    let viewer = new toastui.Editor.factory({
        el: document.querySelector(elementName),
        initialValue: content,
        viewer: true,
        usageStatistics: false,
        events: {
          load: function(e){
            let viewerContent = e.preview._previewContent
            viewerContent.style.fontSize = '16px'
          }
        }
    });
}

function makeEditor(name, content, placeholder, minHeight){
  let replacedContent = 'To hack into the machine and...'
  let options = {
    el: document.querySelector(name),
    previewStyle: 'tab',
    placeholder: replacedContent,
    initialEditType: 'wysiwyg',
    usageStatistics: false,
    toolbarItems: [
      'heading',
      'bold',
      'italic',
      'strike',
      'divider',
      'hr',
      'quote',
      'divider',
      'ul',
      'ol',
      'task',
      'indent',
      'outdent',
      'divider',
      'table',
      'link',
      'divider',
      'code',
      'codeblock',
      'divider',
    ],
    events: {
      load: function(e){
        let editorContent = e.layout.wwEditorContainerEl
        editorContent.firstChild.style.fontSize = '16px'
      }
    }
  }
  if(placeholder){
    options.placeholder = placeholder
  }
  if(minHeight){
    options.minHeight = 80
  } else{
    options.height = 'auto'
  }
  let editor = new toastui.Editor(options)
  if(content){
    editor.setHtml(content)
  }
}