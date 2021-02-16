<template>
  <div class="hello">
    <div class="hello-title">
      <h1>top</h1>
    </div>
    <div class="content">
      <h1>miroのポートフォリオサイト</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.hello {
  margin: 0 auto;
  padding-top: 50px;
  width:550px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
