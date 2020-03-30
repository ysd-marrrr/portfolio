<template>
  <div>
    <section class="hero is-fullheight has-text-centered">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-centered">
            <div class="column is-narow">
              <img
                class="profile-image"
                src="~assets/profile.jpg"
                alt="profile photo"
              />
            </div>
          </div>
          <div class="columns is-mobile is-vcentered is-centered">
            <div class="column is-narrow">
              <h1 class="title">
                Masataka Yoshida
              </h1>
            </div>
            <div class="column is-narrow">
              <p>y-mix (yoshida mix)</p>
            </div>
          </div>
          <h2 class="subtitle">
            Web-Frontend, Infrastructure (,Backend) Engineer
          </h2>
        </div>
      </div>
    </section>

    <introduction />

    <skill />

    <section class="hero is-fullheight has-text-centered">
      <div class="hero-body">
        <div class="container">
          <h2 class="section-title">
            Links
          </h2>

          <div class="columns is-centered is-multiline">
            <div class="column is-narrow">
              <a href="https://twitter.com/bwolftech">Twitter</a>
            </div>
            <div class="column is-narrow">
              <a href="https://github.com/ysd-marrrr">GitHub</a>
            </div>
            <div class="column is-narrow">
              <a href="https://qiita.com/ysd_marrrr">Qiita</a>
            </div>
            <div class="column is-narrow">
              <a href="https://speakerdeck.com/ysd_marrrr">Speaker Deck</a>
            </div>
            <div class="column is-narrow">
              <a href="https://y-mix.hateblo.jp/">Blog</a>
            </div>
            <div class="column is-narrow">
              <a href="https://tech.opst.co.jp/author/yoshida.m/"
                >TECH4ALL<br />(Corporate Blog)</a
              >
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Introduction from '@/components/organisms/section/Introduction.vue'
import Skill from '@/components/organisms/section/Skill.vue'

export default {
  components: {
    Introduction,
    Skill
  }
}
</script>

<style lang="scss" scoped>
h3.skill-header {
  font-weight: bold;
  font-size: 150%;
}

.circle {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: skyblue; /*背景色*/
}

.profile-image {
  width: 128px;
  height: 128px;
  border-radius: 50%;
}
</style>
