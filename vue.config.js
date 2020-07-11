// process.env.VUE_APP_VERSION = require('./package.json').version

console.log( process.env.NODE_ENV );
console.log( process.env.BABEL_ENV );

module.exports = {
	chainWebpack: config => {
		config.module
			.rule('pug')
			.test(/\.pug$/)
			.use('pug-html-loader')
			.loader('pug-html-loader')
			.end()
	}
  }