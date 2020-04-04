<template>
  <section id="skill" class="profile-section has-text-centered">
    <div class="hero-body">
      <div class="container">
        <h2 class="section-title">
          Skills
        </h2>

        <div class="columns">
          <div class="column">
            <h3 class="skill-header">Web-Frontend</h3>
            <skill-card
              v-for="(item, index) in skillFrontend"
              :key="index"
              :skill-value-prop="item.level"
            >
              <template v-slot:icon
                ><font-awesome-icon :icon="item.faIcons"
              /></template>
              <template v-slot:title>{{ item.name }}</template>
              <template v-slot:description
                ><p>{{ item.description }}</p></template
              >
            </skill-card>
          </div>
          <div class="column">
            <h3 class="skill-header">Infrastructure</h3>
            <skill-card
              v-for="(item, index) in skillInfra"
              :key="index"
              :skill-value-prop="item.level"
            >
              <template v-slot:icon
                ><font-awesome-icon :icon="item.faIcons"
              /></template>
              <template v-slot:title>{{ item.name }}</template>
              <template v-slot:description
                ><p>{{ item.description }}</p></template
              >
            </skill-card>
          </div>
          <div class="column">
            <h3 class="skill-header">Backend/Others</h3>
            <skill-card
              v-for="(item, index) in skillOther"
              :key="index"
              :skill-value-prop="item.level"
            >
              <template v-slot:icon
                ><font-awesome-icon :icon="item.faIcons"
              /></template>
              <template v-slot:title>{{ item.name }}</template>
              <template v-slot:description
                ><p>{{ item.description }}</p></template
              >
            </skill-card>
          </div>
        </div>
        <hr class="inner-divider" />
        <div class="skill-and-more">
          <h3 class="skill-header">And More</h3>
          <ul class="tags skill-and-more-list">
            <li v-for="(item, index) in skillAndMore" :key="index">
              <span class="tag is-light">{{ item }}</span>
            </li>
          </ul>
          <p class="section-note">
            課題解決・Mission実現のために未経験の技術・言語にも取り組みます！
          </p>
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
  },
  data() {
    return {
      skillFrontend: [
        {
          name: 'Vue.js',
          description:
            'computed, props, v-for, 単一ファイルコンポーネント, slot(multiple)できる、アニメーションはまだ…',
          level: 60,
          faIcons: ['fab', 'vuejs']
        },
        {
          name: 'Nuxt.js',
          description:
            'SPA, Atomic Designで構築できる。Vuex使うならこれを導入している',
          level: 60,
          faIcons: ['fab', 'vuejs']
        },
        {
          name: 'HTML/CSS',
          description:
            'FloatからFlexboxまで(フレームワークに頼りがち)。アニメーションとKeyframeやらないとな…',
          level: 70,
          faIcons: ['fab', 'html5']
        },
        {
          name: 'ECMAScript6',
          description: 'ES6といえばSetをつかい始めたばかり',
          level: 40,
          faIcons: ['fab', 'js-square']
        },
        {
          name: 'Node.js/npm scripts',
          description:
            'package.jsonのscriptsを定義したり、dev/prodを切り替えたりExpressで簡単にサーバーを立ち上げたり',
          level: 50,
          faIcons: ['fab', 'node-js']
        },
        {
          name: 'Webpack',
          description:
            'dev/prodを切り替えたり、Storybook用にWebpackの設定を書いたり。まだまだloaderについて謎なところがある。',
          level: 40,
          faIcons: ['fab', 'node-js']
        }
      ],
      skillInfra: [
        {
          name: 'AWS',
          description:
            'EC2, VPC, ECS, ECR, Route53, SES, Lambda, Kinesis, S3, CloudFront, API Gateway, Batch, Glue, Athena',
          level: 50,
          faIcons: ['fab', 'aws']
        },
        {
          name: 'Firebase',
          description: 'Authentication, Cloud Firestoreをさらっと',
          level: 50,
          faIcons: ['fas', 'fire']
        },
        {
          name: 'Docker',
          description: 'Dockerイメージ作成からdocker-composeまで',
          level: 50,
          faIcons: ['fab', 'docker']
        },
        {
          name: 'Vagrant',
          description:
            'マシンのストレージを拡張したり、provisioning用にスクリプトを入れたり',
          level: 70,
          faIcons: ['fas', 'laptop-code']
        },
        {
          name: 'Mac',
          description: 'メインの開発機で触っています',
          level: 70,
          faIcons: ['fab', 'apple']
        },
        {
          name: 'Linux',
          description:
            'CentOS, Ubuntu, Amazon LinuxでWebサーバーを立ち上げたり。大学ではサーバーの立ち上げ方を教えていました。',
          level: 70,
          faIcons: ['fab', 'centos']
        },
        {
          name: 'Windows',
          description: 'Windows 95-10。WSL2を試すのにWindows 10 Proがほしい。',
          level: 70,
          faIcons: ['fab', 'windows']
        }
      ],
      skillOther: [
        {
          name: 'Python',
          description:
            '日々の作業からAWSの操作(Boto3)まで、ほとんどお世話になっています。最近になってyieldが使えるようになった。',
          level: 70,
          faIcons: ['fab', 'python']
        },
        {
          name: 'Ruby',
          description:
            'LogstashのRubyフィルターを書いたり、Chefのレシピを書いたり',
          level: 40,
          faIcons: ['fas', 'gem']
        },
        {
          name: 'Java',
          description:
            'Interfaceで最低限実装してほしいメソッドを定義したり、Streamで処理したり',
          level: 50,
          faIcons: ['fab', 'java']
        },
        {
          name: 'SpringBoot',
          description: 'DIでElasticsearchとつなげたり',
          level: 50,
          faIcons: ['fab', 'java']
        },
        {
          name: 'Elasticsearch/Logstash',
          description:
            'shard数を決定してindexを設計したり、Twitter inputでTwitterのつぶやきを取り込んだり',
          level: 60,
          faIcons: ['fas', 'database']
        },
        {
          name: 'PHP',
          description: 'Web開発を始めた頃はこれだったけど、最近触れていない…',
          level: 40,
          faIcons: ['fab', 'php']
        },
        {
          name: 'CakePHP',
          description:
            'CakePHP 2系。MVC, Authコンポーネントを触ってシステム開発した。',
          level: 40,
          faIcons: ['fas', 'birthday-cake']
        }
      ],
      skillAndMore: [
        'Go',
        'Apache Spark',
        'Twitter API',
        'ShellScript',
        'Flask',
        'jQuery',
        'Bulma',
        'nginx',
        'Jenkins',
        'BigQuery',
        'Ionic',
        'Bootstrap',
        'iOS(Objective-C)',
        'Android(Java)',
        'Unity(JS, C#)'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
section#skill {
  background-color: #3a6ba5;
  color: white;
}

h3.skill-header {
  font-family: 'Abel', sans-serif;
  font-size: 2rem;
  letter-spacing: 0.5rem;
  font-weight: bold;
}

.skill-and-more {
  text-align: left;
}
</style>
