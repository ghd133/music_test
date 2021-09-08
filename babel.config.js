/*
 * @Author: your name
 * @Date: 2021-09-03 00:17:31
 * @LastEditTime: 2021-09-04 12:01:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vscodeworkspace\musicdemo\babel.config.js
 */
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    // ["@babel/preset", { "modules": false }]
  ],
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ],
  ]
}
