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
              <h1 class="title">Masataka Yoshida</h1>
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
    <Project />
    <profile-link />
  </div>
</template>

<script>
import Introduction from '@/components/organisms/section/Introduction.vue'
import Skill from '@/components/organisms/section/Skill.vue'
import Project from '@/components/organisms/section/Project.vue'
import ProfileLink from '@/components/organisms/section/ProfileLink.vue'

export default {
  components: {
    Introduction,
    Skill,
    Project,
    ProfileLink,
  },
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
