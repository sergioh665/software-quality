<template>
  <div>
    <Nav></Nav>
    <section class="container-title">
      <h1>TEMAS</h1>
      <svg-icon :type="iconType" :style="iconStyle" :size="iconSize" class="icone" :path="iconPath"></svg-icon>
    </section>
  </div>
</template>

<script>
import Nav from '../../components/Nav.vue';
import SvgIcon from '@jamescoyle/vue-icon';

export default {
  components: {
    Nav,
    SvgIcon
  },
  props: {
    iconType: {
      type: String,
      default: 'mdi'
    },
    iconStyle: {
      type: Object,
      default: () => ({ color: '#CF3A69' })
    },
    iconSize: {
      type: Number,
      default: 32
    },
    iconPath: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.container-title {
  display: flex;
  color: #CF3A69;
  font-weight: bold !important;
  margin-left: 4em;
}

.icone {
  align-self: center;
}

h1 {
  font-weight: bold !important;
}
</style>