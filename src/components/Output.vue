<template>
  <div class="output">
    <div class="output-title">
      <h1>output</h1>
    </div>
    <div class="content" v-for="output in outputs" :key=output>
      <h3>{{ output.name }}</h3>
      <p>{{ output.text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Output',
  data() {
    return {
      outputs: [
      {
        name: 'studyreport',
        text: '仲間と学習報告を行うこと、学習メモを取れるアプリです。'
      },
      {
        name: 'portfolioサイト',
        text: '私の自己紹介とポートフォリオをまとめたサイトです。'
      }
      ]
    }
  }
}
</script>


<style scoped>

div.output {
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

@media (max-width: 1024px) {
  div.output {
    text-align: center;
    margin: 0 auto;
    width: 80vw;
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
}

</style>
