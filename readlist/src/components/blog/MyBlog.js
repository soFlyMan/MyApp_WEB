import React, { Component } from 'react'
import Remarkable from 'remarkable'

import '../../css/MyBlog.css'

import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'


class MyBlog extends Component {
  constructor(props){
    super(props)
    this.state={ value: 1}
  }

  handleChange = (event, index, value) => this.setState({value})

  rawMarkup(){
    var str = `# 6 Harsh Truths That Will Make You a Better Person
    I want you to try something: Name five impressive things about
    yourself.Write them down or just shout them out loud to the room.
    But here's the  catch -- you're not allowed to list anything you
    are (i.e., I'm a nice guy,I'm honest), but instead can only list
    things that you do (i.e., I just wona national chess tournament,
    I make the best chili in Massachusetts). If  you found that
    difficult, well, this is for you, and you are going tofucking hate
    hearing it.

    我们都一样，渴望着建树功勋、改变世界，可是伴随着年岁的增长，却发现想要实现
    的梦想依然那么遥远，而时间却依然残酷得流逝着，不会仅仅因为「你」而发生丝毫
    的改变。如《奇特的一生》当中所言，我对时间始终充满着敬畏之心，最好的方式也
    不过是奢求时间能够跟自己做朋友，伴随着我这也许注定朴实无华的一生，共同成长。

    在我们的一生所能做的事情里边儿，睡眠占去 1/3，此生只剩 2/3，除去非做不可
    的基本生活维护成本过后，剩下的时间要么选择浪费而荒度此生，要么选择目标而奋
    力向前，让这一生不留遗憾。Followyour heart，你需要找到一些愿意为其付诸
    终身的「目标」，以这样的姿态「生活在这世界上」。

    我们都一样，渴望着建树功勋、改变世界，可是伴随着年岁的增长，却发现想要实现
    的梦想依然那么遥远，而时间却依然残酷得流逝着，不会仅仅因为「你」而发生丝毫
    的改变。如《奇特的一生》当中所言，我对时间始终充满着敬畏之心，最好的方式也
    不过是奢求时间能够跟自己做朋友，伴随着我这也许注定朴实无华的一生，共同成长。

    在我们的一生所能做的事情里边儿，睡眠占去 1/3，此生只剩 2/3，除去非做不可
    的基本生活维护成本过后，剩下的时间要么选择浪费而荒度此生，要么选择目标而奋
    力向前，让这一生不留遗憾。Followyour heart，你需要找到一些愿意为其付诸
    终身的「目标」，以这样的姿态「生活在这世界上」。

    我们都一样，渴望着建树功勋、改变世界，可是伴随着年岁的增长，却发现想要实现
    的梦想依然那么遥远，而时间却依然残酷得流逝着，不会仅仅因为「你」而发生丝毫
    的改变。如《奇特的一生》当中所言，我对时间始终充满着敬畏之心，最好的方式也
    不过是奢求时间能够跟自己做朋友，伴随着我这也许注定朴实无华的一生，共同成长。

    在我们的一生所能做的事情里边儿，睡眠占去 1/3，此生只剩 2/3，除去非做不可
    的基本生活维护成本过后，剩下的时间要么选择浪费而荒度此生，要么选择目标而奋
    力向前，让这一生不留遗憾。Followyour heart，你需要找到一些愿意为其付诸
    终身的「目标」，以这样的姿态「生活在这世界上」。

    我们都一样，渴望着建树功勋、改变世界，可是伴随着年岁的增长，却发现想要实现
    的梦想依然那么遥远，而时间却依然残酷得流逝着，不会仅仅因为「你」而发生丝毫
    的改变。如《奇特的一生》当中所言，我对时间始终充满着敬畏之心，最好的方式也
    不过是奢求时间能够跟自己做朋友，伴随着我这也许注定朴实无华的一生，共同成长。

    在我们的一生所能做的事情里边儿，睡眠占去 1/3，此生只剩 2/3，除去非做不可
    的基本生活维护成本过后，剩下的时间要么选择浪费而荒度此生，要么选择目标而奋
    力向前，让这一生不留遗憾。Followyour heart，你需要找到一些愿意为其付诸
    终身的「目标」，以这样的姿态「生活在这世界上」。

`
    var md = new Remarkable('full', {
      html: true,
      linkify: true,
      typographer: true
    })
    var rawMarkup = md.render(str)
    return {__html:rawMarkup}
  }
  render(){
    return (
      <div className="myblog">
        <div className="title">
          <div>
            <DropDownMenu value={this.state.value} onChange={this.handleChange}>
              <MenuItem value={1} primaryText="全部" />
              <MenuItem value={5} primaryText="前端" />
              <MenuItem value={2} primaryText="编程" />
              <MenuItem value={3} primaryText="思考" />
              <MenuItem value={4} primaryText="资源" />
            </DropDownMenu>
          </div>
          <a><p>《搞定》最佳实践：如何利用滴答清单（TickTick）实践 GTD 理念？</p></a>
          <a><p>6 Harsh Truths That Will Make You a Better Person</p></a>
          <a><p>6 Harsh Truths That Will Make You a Better Person</p></a>
          <a><p>6 Harsh Truths That Will Make You a Better Person</p></a>
          <a><p>6 Harsh Truths That Will Make You a Better Person</p></a>
          <a><p>6 Harsh Truths That Will Make You a Better Person</p></a>
          <a><p>6 Harsh Truths That Will Make You a Better Person</p></a>
          <a><p>6 Harsh Truths That Will Make You a Better Person</p></a>
          <a><p>6 Harsh Truths That Will Make You a Better Person</p></a>
          <a><p>6 Harsh Truths That Will Make You a Better Person</p></a>
          <a><p>6 Harsh Truths That Will Make You a Better Person</p></a>
          <a><p>6 Harsh Truths That Will Make You a Better Person</p></a>
          <a><p>6 Harsh Truths That Will Make You a Better Person</p></a>
          <a><p>6 Harsh Truths That Will Make You a Better Person</p></a>
          <a><p>6 Harsh Truths That Will Make You a Better Person</p></a>
          <a><p>6 Harsh Truths That Will Make You a Better Person</p></a>
        </div>
        <div className="content"><div dangerouslySetInnerHTML={this.rawMarkup()}></div>
        </div>
      </div>
    )
  }
}

export default MyBlog
