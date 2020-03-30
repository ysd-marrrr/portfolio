<template>
  <section id="link" class="profile-section has-text-centered">
    <div class="hero-body">
      <div class="container">
        <h2 class="section-title">
          Links
        </h2>

        <ul>
          <profile-link-icon
            v-for="(item, index) in links"
            :key="index"
            :link-address-prop="item.url"
          >
            <template v-slot:icon>
              <font-awesome-icon :icon="item.faIcons" />
            </template>
            <template v-slot:title>{{ item.title }}</template>
          </profile-link-icon>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import ProfileLinkIcon from '@/components/atoms/Icon/ProfileLinkIcon.vue'

export default {
  components: {
    ProfileLinkIcon
  },
  data() {
    return {
      links: [
        {
          title: 'Twitter ',
          url: 'https://twitter.com/bwolftech',
          faIcons: ['fab', 'twitter']
        },
        {
          title: 'GitHub ',
          url: 'https://github.com/ysd-marrrr',
          faIcons: ['fab', 'github']
        },
        {
          title: 'Qiita ',
          url: 'https://qiita.com/ysd_marrrr',
          faIcons: ['fas', 'search']
        },
        {
          title: 'Speaker Deck ',
          url: 'https://speakerdeck.com/ysd_marrrr',
          faIcons: ['fab', 'speaker-deck']
        },
        {
          title: 'Blog ',
          url: 'https://y-mix.hateblo.jp/',
          faIcons: ['fas', 'scroll']
        },
        {
          title: 'TECH4ALL(Corporate Blog)',
          url: 'https://tech.opst.co.jp/author/yoshida.m/',
          faIcons: ['fas', 'scroll']
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
ul {
  vertical-align: top;
}
</style>
