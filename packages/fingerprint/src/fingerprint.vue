 <!-- fingerprint.vue -->
<template>
  <lottie :options="defaultOptions" :height="height" :width="width" @animCreated="handleAnimation" />
</template>

<script>
import Lottie from 'vue-lottie'
import * as animationData from '../../assets/fingerprint.json'
export default {
  name: 'FingerPrint',
  components: { 'lottie': Lottie },
  data () {
    return {
      defaultOptions: { animationData: animationData.default },
      anim: {}
    }
  },
  props: {
    width: {
      type: Number,
      default: 100
    },
    height: {
      type: Number,
      default: 100
    }
  },
  methods: {
    handleAnimation(anim) {
      this.anim = anim
    },

    stop() {
      this.anim.stop();
    },

    play() {
      this.anim.play();
    },

    pause() {
      this.anim.pause();
    },
    
    onSpeedChange(animationSpeed = 1) {
      this.anim.setSpeed(animationSpeed);
    }
  }
}
</script>

<style lang="less" scoped>


</style>