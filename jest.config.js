module.exports = {
  preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
  transform: {
    "^.+\\.vue$": "vue-jest",
  },
  testMatch: [
    '**/src/components/**/*.spec.[jt]s?(x)',
    '**/src/views/**/*.spec.[jt]s?(x)'
  ]
};
