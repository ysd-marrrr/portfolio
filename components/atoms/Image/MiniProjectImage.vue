<template>
  <div class="project-image">
    <div v-if="imageUrlProp == ''" class="no-image">
      <div class="inner">
        <p class="no-image-message">NOW<br />PRINTING</p>
      </div>
    </div>
    <div v-else class="has-image">
      <div class="inner" :style="projectImageStyle"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageUrlProp: {
      type: String,
      default: '',
    },
  },
  computed: {
    projectImageStyle() {
      return {
        '--project-image-url': 'url("' + this.imageUrlProp + '") 0 0 no-repeat',
      }
    },
  },
}
</script>

<style lang="scss" scoped>
// 正方形のまま「レスポンシブに」サイズを小さくする
// thx: http://wreath-ent.co.jp/blog-3560/
.project-image {
  position: relative;
  width: 100px;
  height: auto;
  text-align: center;

  &:before {
    content: '';
    display: block;
    padding-top: 100%;
  }

  .inner {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .has-image {
    .inner {
      background: var(--project-image-url);

      background-position: center center;
      background-size: cover;
    }
  }

  .no-image {
    .inner {
      background: lightgray;
    }

    .no-image-message {
      font-family: 'Comfortaa', cursive;
      font-weight: bold;
      font-size: 75%;

      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateY(-50%) translateX(-50%);
      -webkit-transform: translateY(-50%) translateX(-50%);
    }
  }
}
</style>
