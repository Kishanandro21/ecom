const mix = require('laravel-mix');

/**
 * Adjust these paths if your sources live elsewhere.
 * Your Blade lives under innopacks/front/resources/views/...,
 * so we’ll assume JS/CSS are in innopacks/front/resources/{js,sass}.
 */

mix
  // JS entry
  .js('innopacks/front/resources/js/app.js', 'public/js')

  // If you have TypeScript instead:
  // .ts('innopacks/front/resources/ts/app.ts', 'public/js')

  // SASS/CSS entry
  .sass('innopacks/front/resources/sass/app.scss', 'public/css')
  // If you use plain CSS/PostCSS instead:
  // .postCss('innopacks/front/resources/css/app.css', 'public/css', [
  //   require('autoprefixer'),
  // ])

  .options({
    processCssUrls: false,     // common for bootstrap/tailwind mixes
  })
  .setPublicPath('public')     // ensures mix-manifest.json goes to /public
  .version();                  // enable cache-busting (mix('...'))
