

## Make it run

``` 
npm install
``` 

All the node modules are installed and you are ready to go.


## usage
1. Place all your css in src/styles/
2. Your scripts in src/scripts
3. Images in src/images
4. fonts in src/fonts

If you run gulp or gulp watch, all your files are being minified and copied to /dist/assets/

## Is it possible to add more folders in /src ?

Ofcourse!

1. Simply create a new folder in /src
2. Create a new gulp task, for example "docs"

``` 
gulp.task('docs', function() {
  return gulp.src('src/docs/**/*')
    .pipe(gulp.dest('dist/assets/docs'))
    .pipe(notify({ message: 'Docs task complete' }));
});
``` 

3. Add docs to gulp.task(watch)

```
  gulp.watch('src/docs/**/*', ['docs']);
``` 

4. That's it. Next time when you type "gulp" or "gulp watch" in your terminal, the docs folder is being copied to /dist/assets/



