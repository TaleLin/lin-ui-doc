const {
  src,
  parallel,
  series,
  dest
} = require('gulp')
const rename = require('gulp-rename')
const toDoc = require('./doc')
const del = require('del')

const srcPath = '../docs/component'
const distPath = '../doc-mini/doc/component'

const clean = (cleanPath) => () =>
  del([cleanPath], {
    force: true
  })

const mdToJs = (srcPath, distPath) => () =>
  src(`${srcPath}/**/*.md`)
    .pipe(toDoc())
    .pipe(rename(srcPath => {
      srcPath.extname = '.js'
    }))
    .pipe(dest(distPath))

module.exports = {
  build: series(
    clean(distPath),
    parallel(
      mdToJs(
        srcPath,
        distPath
      )
    )
  )
}
