This example shows how to use Mocha testing framework instead Jasmine with Angular for Karma unit tests and Protractor e2e tests. The example is based on original [angular phonecat tutorial](https://github.com/angular/angular-phonecat) from tag step-12.

You can see all needed changes in diff between **[two commits](../../compare/e286a63d8157fb7ddf60afd930c3147330dcbff3...b9d83f25de90b06bf263652d8d5d284d9ad69722)**

Small description for provided changes:

* `npm r karma-jasmine --save-dev`
* `npm i karma-mocha --save-dev`
* `npm i karma-chai --save-dev`
* `npm i chai-as-promised --save-dev` Only for tesing with Protractor
* change `karma.conf.js` and `protractor-conf.js` for Mocha using
