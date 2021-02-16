<template>
  <div class="skill">
    <div class="skill-title">
      <h1>skill</h1>
    </div>
    <div class="content" v-for="skill in skills" :key=skill>
      <h3>{{ skill.name }}</h3>
      <p>{{ skill.text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Skill',
  data() {
    return {
      skills: [
        {
          name: 'ポートフォリオ制作経験',
          text: 'Ruby on Rails/Vue.js/AWS/Docker/CircleCI'
        },
        {
          name: '学習経験',
          text: 'React'
        }
      ]
    }
  }
}
</script>

<style scoped>
div.skill {
  text-align: center;
  margin: 0 auto;
  width: 550px;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

div.content {
  margin: 30px;
}


p {
  width: 90%;
  display: inline-block;
}


</style>