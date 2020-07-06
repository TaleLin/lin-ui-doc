var through = require('through2')

// 定义gulp插件主函数
module.exports = function toLinDoc () {
  // 创建stream对象，每个文件都会经过这个stream对象
  var stream = through.obj(function (file, encoding, callback) {
    if (file.isNull()) {
      this.push(file)
      return callback()
    }
    // 文件经过stream时要执行代码
    const toStr = file.contents.toString()
    const content = toStr
            .substring(toStr.indexOf('>'), toStr.length)
            .replace(/<H2Icon( |)\/>/g, '')
            .replace(/```wxml/g, '```html')
            .replace(/```wxss/g, '```css')
            .replace(/`/g, '\\`')
            .replace(/:::(tip|)/g, '')
            .replace(/<RightMenu \/>/, '')
            .replace(/\$/g, '\\$')
    const docContent = `module.exports = ` + '`' + content + '`'
    file.contents = Buffer.from(docContent)
    this.push(file)
    callback()
  })

  // 返回stream对象
  return stream
}
