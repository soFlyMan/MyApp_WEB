import React from 'react'
import '../../css/introduce.css'

import QueueAnim from 'rc-queue-anim'


const style = {
  height: 1800,
  width: "90%",
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
}

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
