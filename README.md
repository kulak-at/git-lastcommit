# git-lastcommit
This plugin is for injecting last git commit message into the node application.

## Instalation
```npm install kulak-at/git-lastcommit```

## Usage:

### General:
```javascript
var git_lastcommit = require('git-lastcommit');
/* {
   'last_commit': '1513544 Initial commit.',
   'nearest_tag': 'v0.1'
   } */
```
   
### In gulp with gulp-template:

```javascript
var git_lastcommit = require('git-lastcommit');
gulp.task('compile', function(cb) {

  var lastCommit = git_lastcommit();

  gulp.src(['app/index.html'])
  .pipe(template(lastCommit))
  .pipe(gulp.dest('./build'));
});
```
index.html
```html
<!--
  Last Commit: <%= last_commit %>
  Nearest Tag: <%= nearest_tag %>
-->
```
