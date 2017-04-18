import React from 'react'
import '../../css/introduce.css'

import QueueAnim from 'rc-queue-anim'


const Introduce = () => {
  return (
    <div className="introduce" style={{marginLeft: 256}}>
      <QueueAnim duration="3000" type="bottom">
        <div key="1">soFly</div>
      </QueueAnim>
    </div>
  )
}

export default Introduce
