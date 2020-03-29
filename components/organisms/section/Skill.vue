<template>
  <section class="hero is-success is-fullheight has-text-centered">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          Skills
        </h1>

        <div class="columns">
          <div class="column">
            <skill-card />
            <h3 class="skill-header">Web-Frontend</h3>
            <ul>
              <li>Vue/Nuxt/Vuex</li>
              <li>HTML/CSS(SCSS)</li>
              <li>ECMAScript 6</li>
              <li>Node.js/npm scripts</li>
              <li>Webpack</li>
            </ul>
          </div>
          <div class="column">
            <h3 class="skill-header">Infrastructure</h3>
            <ul>
              <li>
                AWS(EC2, VPC, ECS, ECR, Route53, SES, Lambda, Kinesis, S3,
                CloudFront, API Gateway, Batch, Glue, Athena)
              </li>
              <li>Firebase</li>
              <li>Windows</li>
              <li>Linux</li>
              <li>macOS</li>
              <li>Vagrant</li>
              <li>Docker</li>
            </ul>
          </div>
          <div class="column">
            <h3 class="skill-header">Others</h3>
            <ul>
              <li>Python</li>
              <li>Elastic Stack(Elasticsearch, Logstash)</li>
              <li>Java</li>
              <li>Spring Boot</li>
              <li>PHP</li>
              <li>CakePHP</li>
            </ul>
            Speaker Deck
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SkillCard from '@/components/molecules/Card/SkillCard.vue'
export default {
  components: {
    SkillCard
  }
}
</script>
