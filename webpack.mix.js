
const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

// mix.webpackConfig({
//   resolve: {
//     alias: {
//       //adding react and react-dom may not be necessary for you but it did fix some issues in my setup.
//       'react' : path.resolve('node_modules/react'),
//       'react-dom' : path.resolve('node_modules/react-dom'),

//       'components' : path.resolve('resources/js/src/components'),
//       'pages' : path.resolve('resources/js/src/pages'),
//       'themes' : path.resolve('resources/js/src/themes'),
//       'layouts' : path.resolve('resources/js/src/layouts'),
//       'hooks' : path.resolve('resources/js/src/hooks'),
//     },
//   },
// });

// mix.js('resources/js/app.js', 'public/js')
// mix.react('resources/js/app.js', 'public/js').extract(['react', 'react-dom']);

mix.js('resources/js/app.js', 'public/js').react().extract(['react', 'react-dom']);

mix.sass('resources/sass/app.scss', 'public/css');
mix.browserSync('http://laradock-react-laravel.local:8049');
