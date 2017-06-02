import React from 'react'
import MdEditor from './MdEditor.js'

import marked from 'marked'

import './site.less'

const Editor = () => {
  return (
    <div style={{marginLeft: 258}}>
      <MdEditor />
    </div>
  )
}


export default Editor
