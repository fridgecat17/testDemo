<template>
  <div class="wrapper" ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Scroller",
  /* 实现父子组件间的通信 传递 */
  props: {
    handleToScroll: {
      type: Function,
      default: function() {}
    },
    handleToTouchEnd: {
      type: Function,
      default: function() {}
    }
  },
  mounted() {
    var scroll = new BScroll(this.$refs.wrapper, {
      tap: true,
      probeType: 1
    });
    /* 实现回调 */
    scroll.on("scroll", (pos) => {
      /*console.log('scroll'); */
      this.handleToScroll(pos);
    });
    scroll.on("touchEnd", (pos) => {
      /* console.log('touchEnd'); */
      this.handleToTouchEnd(pos);
    });
  }
};
</script>

<style>
.wrapper {
  width: 100%;
  height: 100%;
  position: absolute;
}
</style>
