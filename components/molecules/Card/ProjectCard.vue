<template>
  <div class="project-card">
    <div class="project-header">
      <p class="project-date">2019</p>
    </div>
    <div class="project-image no-image">
      <div class="inner">
        <p class="no-image-message">NOW<br />PRINTING</p>
      </div>
    </div>
    <div class="project-content">
      <h3 class="project-title">PROJECT TITLE</h3>
      <p class="project-description">description</p>
    </div>
    <div class="project-footer">
      <ul class="tags project-skill-list">
        <li><span class="tag">TAG</span></li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.project-card {
  background: white;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
  padding: 5px;
}

.project-date {
  font-family: 'Comfortaa', cursive;
  font-size: 2rem;
  letter-spacing: 0.25rem;
  color: gray;
}

// 正方形のまま「レスポンシブに」サイズを小さくする
// thx: http://wreath-ent.co.jp/blog-3560/
.project-image {
  position: relative;
  width: 85%;
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
    width: 100%;
    height: 100%;
  }

  &.no-image,
  &.now-printing {
    .no-image-message {
      font-family: 'Comfortaa', cursive;
      font-weight: bold;
      font-size: 300%;

      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateY(-50%) translateX(-50%);
      -webkit-transform: translateY(-50%) translateX(-50%);
    }
  }
}

// タブレット以上の場合は横に複数枚並べる
@media screen and (min-width: 769px) {
  .project-card {
    max-width: 20rem;
  }

  .project-image {
    width: 95%;

    .inner {
      left: 2.5%;
    }
  }
}

// モバイルの場合は横いっぱいカードを表示する
@media screen and (max-width: 768px) {
  .project-card {
    max-width: 100vw;
  }

  .project-image {
    width: 100%;
    .inner {
      left: 0;
    }
  }
}

.adjust-box p {
  line-height: 1.5em;
}

.inner {
  position: absolute;
  background: lightgray;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

h3.project-title {
  font-weight: 900;
  font-size: 1.25rem;
}
</style>
