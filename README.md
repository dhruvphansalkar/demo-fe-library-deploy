# Lib

#Table of contents
- [Introduction](#lib-introduction)
- [Setting up Lib](#lib-setting-up-)
- [Dependencies](#lib-deps)

# <a id="lib-introuction">Introduction</a>
Lib is a UI Kit components library for Angular
It also could be use for refreshing old products UI, providing an attractive and modern graphics based on Bootstrap and ng-bootstrap.

# <a id="lib-setting-up">Setting up Lib</a>

After cloning the repository you will found two directories.
<b>lib</b> and <b>showcase</b>.
The first directory include the library code, the second one is a showcase that explain how the components work and how to use them.
THe showcase contains some docs that shows you the configuration, the code and the models for each components.

For installing the library you need to run this command.
```npm
npm run lib:install
```
This will build and pack the library into a .tgz archive named <b>lib-0.0.1</b> and will install into the showcase project.

For installing the library into another projects just type 

```npm
npm install <path_to_library_archive>/lib-0.0.1.tgz
```
# <a id="lib-deps">Dependencies</a>

- Angular 10.0.5. Further information <a href="https://angular.io/">here</a>.
- Bootstrap 4.5. Further information <a href="https://getbootstrap.com/">here</a>.
- ng-Bootstrap 7.0.0. Further information <a href="https://ng-bootstrap.github.io/#/home">here</a>.
