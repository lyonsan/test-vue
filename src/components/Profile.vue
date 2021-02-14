<template>
  <div class="profile">
    <div class="profile-body">
      <p>ハンドルネーム：{{ name }}</p>
      <p>やっていること：{{ text }}</p>
      <p>年齢：{{ age }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  data() {
    return {
      name: 'miro',
      text: 'VueでのSPAアプリケーションの作成方法を学習しています。',
      age: '26歳'
    }
  }
}
</script>


<style scoped>

div.profile {
  padding-top: 50px;
  text-align: center;
  display: flex;
  justify-content: center;
}

div.profile-body {
  text-align: left;
}
</style>
