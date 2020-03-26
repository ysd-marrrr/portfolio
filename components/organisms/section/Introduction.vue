<template>
  <section id="introduction" class="profile-section has-text-centered">
    <div class="container">
      <h2 class="section-title">
        Mission / Vision / Value
      </h2>
      <div class="columns is-vcentered">
        <div class="column is-half-widescreen is-8-fullhd">
          <h3 class="main-message">
            「みせること」で人々をハッピーにする
          </h3>
          <div class="section-message">
            <p>
              仕事では自分の作業で物ができていくところを見るのが楽しいですし、自分の知識が問題にピッタリと合って解決するのが気持ち良いと感じています。<br />
              そう思えるから、まだ整理されていない情報をシステムで「みせたり」、他のメンバーに技術や情報などを「みせて」助けています。
            </p>
            <p>
              <strong
                >フロントエンド・バックエンドといった枠組みにとらわれず</strong
              >トータルで「みせる」システムを実現することにより、ユーザーやプロジェクトメンバーを助けてハッピーにしていきたいです。
            </p>
          </div>
        </div>
        <div class="column is-half-widescreen is-4-fullhd">
          <steps-balloon
            ><h3 class="balloon-title">1. Infra/Backend</h3>
            <p>
              AWSやFirebaseなどのクラウドサービスを用いたインフラ・バックエンド開発の業務経験を積みながらプロジェクトに貢献しました。
            </p></steps-balloon
          >
          <steps-balloon
            ><h3 class="balloon-title">2. Frontend/Team Building</h3>
            <p>
              現在はフロントエンド(Vue, ES6)中心に取り組んでいます。<br />また、次のステップに進むためチーム開発を円滑にする技術習得を目指します。
            </p></steps-balloon
          >
          <steps-balloon
            ><h3 class="balloon-title">3. Be a helpful Leader....</h3>
            <p>
              将来的はメンバーを助けながら開発作業をして「みせること」をトータルで実現できるように目指しています。
            </p></steps-balloon
          >
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
section#introduction {
  background-color: #0e376f;
  color: white;

  strong {
    color: white;
    text-decoration-line: underline;
  }
}

h3 {
  &.balloon-title {
    font-weight: bold;
    font-size: 150%;
  }
}
</style>
