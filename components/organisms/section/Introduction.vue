<template>
  <section class="hero is-success has-text-centered">
    <div class="hero-body">
      <div class="container">
        <h2 class="section-title">
          Skills
        </h2>
        <div class="columns is-vcentered">
          <div class="column is-4-desktop is-half-widescreen is-8-fullhd">
            <h3 class="main-message">MAIN MESSAGE</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat
              recusandae, libero animi labore dolorum nihil illum harum impedit
              itaque, soluta delectus, omnis voluptates veritatis dignissimos
              consequuntur enim beatae reprehenderit nobis!
            </p>
          </div>
          <div class="column is-8-desktop is-half-widescreen is-4-fullhd">
            <steps-balloon
              ><h3 class="balloon-title">STEP 1</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptate id natus nesciunt totam aut autem optio fuga, alias,
                ea necessitatibus a. Natus quia voluptatem quidem earum labore
                odio consequatur modi?
              </p></steps-balloon
            >
            <steps-balloon
              ><h3 class="balloon-title">STEP 2</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptate id natus nesciunt totam aut autem optio fuga, alias,
                ea necessitatibus a. Natus quia voluptatem quidem earum labore
                odio consequatur modi?
              </p></steps-balloon
            >
            <steps-balloon
              ><h3 class="balloon-title">STEP 3</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptate id natus nesciunt totam aut autem optio fuga, alias,
                ea necessitatibus a. Natus quia voluptatem quidem earum labore
                odio consequatur modi?
              </p></steps-balloon
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import StepsBalloon from '@/components/atoms/Balloon/StepsBalloon.vue'
export default {
  components: {
    StepsBalloon
  }
}
</script>

<style lang="scss" scoped>
section.hero {
  height: auto;
}

h3 {
  font-weight: bold;

  &.main-message {
    font-size: 300%;
  }

  &.balloon-title {
    font-size: 150%;
  }
}
</style>
