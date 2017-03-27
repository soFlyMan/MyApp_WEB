import React from 'react'
import { Alert } from 'antd'

const MyList = ({match}) => {
    return (
      <div className="mylist">
        <div className="head">
          <Alert message={<span className="head_span">我的书单</span>}
                 type="info"/>
        </div>
          <div className="list">
            <div className="box box_1">《深入浅出React技术栈》</div>
            <div className="br border_shadow"></div>
            <div className="box box_2">《Express指南》</div>
            <div className="br border_shadow"></div>
            <div className="box box_1">《NodeJs实战心得》</div>
            <div className="br border_shadow"></div>
            <div className="box box_2">《JavaScript语言精粹》</div>
            <div className="br border_shadow"></div>
            <div className="box box_1">《深入浅出React技术栈》</div>
            <div className="br border_shadow"></div>
            <div className="box box_2">《Express指南》</div>
            <div className="br border_shadow"></div>
            <div className="box box_1">《NodeJs实战心得》</div>
            <div className="br border_shadow"></div>
            <div className="box box_2">《JavaScript语言精粹》</div>
            <div className="br border_shadow"></div>
          </div>
      </div>
    )
}

export default MyList
