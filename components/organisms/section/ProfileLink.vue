<template>
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
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          title: 'Twitter',
          faIcons: []
        }
      ]
    }
  }
}
</script>
