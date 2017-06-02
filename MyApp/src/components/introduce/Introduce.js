import React from 'react'
import '../../css/introduce.css'

import QueueAnim from 'rc-queue-anim'


const Introduce = () => {
  return (
    <div className="introduce" style={{marginLeft: 256}}>
      <QueueAnim duration="3000" type="bottom">
        <div key="1">
          <p style={{fontSize: 80}}>soFly</p>
        </div>
        <div key="2">
          <p style={{fontSize: 24}}>Design and Programming, with reading and writing.</p>
        </div>
      </QueueAnim>
    </div>
  )
}

export default Introduce
