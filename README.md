# 🚀 Welcome to your new awesome project!

<img width="1080" alt="Screenshot 2023-06-21 120915" src="https://github.com/isacolakoglu/cesium-buildings/assets/85408010/dad84ba7-6366-4f9f-9ec1-0785fb6f41f8">

When I click button, building is not shown.

<img width="1079" alt="Screenshot 2023-06-21 120936" src="https://github.com/isacolakoglu/cesium-buildings/assets/85408010/3666745e-aa0d-4f79-98a9-87d902e48f7e">

1.ng new cesium-buildings (Routing.module-Yes, CSS Only)
2.ng serve
3.npm install 
4.npm run build
5.npm cache clean --force
6.npm install --save cesium
7.npx webpack init (Select yes all in) Dont Forget: Please overwrite package.json.
8.npm install stream-http zlib https-browserify url
9. ng serve 

If you get error

10. In webpack.config.js,

Add resolve.fallback {...} !!!

resolve: {
    fallback: {
      zlib: false,
      url: false,
      http: false,
      https: false
    }
  },
  
If you get this error 
<img width="500" alt="Screenshot 2023-06-19 223849" src="https://github.com/isacolakoglu/cesium-buildings/assets/85408010/42fdae27-68bf-4d6a-ad35-578502cffc6a">

11. npm empty-module 

Add in ts.config.json

Add "noImplicitAny": false !!!

"compilerOptions": {
    "baseUrl": "./",
    "outDir": "./dist/out-tsc",
    "noImplicitAny": false,  <------

Add "paths": {...} !!!

"paths" : {
      "crypto": ["./node_modules/empty-module"], // crypto-browserify can be polyfilled here if needed
      "stream": ["./node_modules/empty-module"], // stream-browserify can be polyfilled here if needed
      "assert": ["./node_modules/empty-module"], // assert can be polyfilled here if needed
      "http": ["./node_modules/empty-module"], // stream-http can be polyfilled here if needed
      "https": ["./node_modules/empty-module"], // https-browserify can be polyfilled here if needed
      "os": ["./node_modules/empty-module"], // os-browserify can be polyfilled here if needed
      "url": ["./node_modules/empty-module"], // url can be polyfilled here if needed
      "zlib": ["./node_modules/empty-module"], // browserify-zlib can be polyfilled here if needed
      "process": ["./node_modules/process"],
    }

npm install
ng serve

Congratulations! You can now code.

12. Create .js file
13. https://cesium.com/learn/cesiumjs-learn/cesiumjs-interactive-building/
    look this documentation of cesiumJS. Learn and practice for development.
14. In app.component.ts, you can call created function in file.js  

