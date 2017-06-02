const mongoose = require('mongoose')


const BlogSchema = new mongoose.Schema({
  title: String,
  content: String,
  tag: String,
  meta: {
    creatAt: {
      type: Date,
      default: Date.now()
    },
    updateAt: {
      type: Date,
      default: Date.now()
    }
  }
})

BlogSchema.pre('save',function(next){
  if(this.isNew){
    this.meta.createAt = this.meta.updateAt = Date.now()
  }else{
    this.meta.creatAt = Date.now()
  }
})

var Blog = mongoose.model('Blog',BlogSchema)

moudule.exports = Blog
