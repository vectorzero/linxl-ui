# linxl-ui

```js
// main.js
import LinxlUI from './../packages'

Vue.use(LinxlUI)
```

```html
<template>
  <div class="home">
    <finger-print :width="200" :height="200" ref="fingerprint"></finger-print>
    <div>
      <p>Speed: x{{animationSpeed}}</p>
      <input type="range" value="1" min="0" max="3" step="0.5" @change="onSpeedChange" v-model="animationSpeed">
    </div>
    <button @click="stop">stop</button>
    <button @click="pause">pause</button>
    <button @click="play">play</button>
  </div>
</template>

```

```js
export default {
  name: 'home',
  data() {
    return {
      animationSpeed: 1
    }
  },
  methods: {
    stop() {
      this.$refs.fingerprint.stop();
    },

    play() {
      this.$refs.fingerprint.play();
    },

    pause() {
      this.$refs.fingerprint.pause();
    },

    onSpeedChange() {
      this.$refs.fingerprint.onSpeedChange(this.animationSpeed);
    }
  }
}
```
