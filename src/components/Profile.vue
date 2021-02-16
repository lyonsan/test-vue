<template>
  <div class="profile">
    <div class="profile-title">
      <h1>profile</h1>
    </div>
    <div class="profile-body">
      <div class="profile-parts">
        <div class="parts-title">ハンドルネーム：</div>
        <div class="parts-body">{{ name }}</div>
      </div>
      <div class="profile-parts">
        <div class="parts-title">やっていること：</div>
        <div class="parts-body">{{ text }}</div>
      </div>
      <div class="profile-parts">
        <div class="parts-title">年齢：</div>
        <div class="parts-body">{{ age }}</div>
      </div>
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
  margin: 0 auto;
  padding-top: 50px;
  width:550px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

div.profile-body {
  text-align: center;
}

.profile-parts {
  display: flex;
  padding: 15px 0;
}

.parts-title {
  width: 30%;
}

.parts-body {
  width: 70%
}

@media (max-width: 1024px) {
  div.profile {
    width:80vw;
  }

  div.profile-body {
    text-align: left;
  }

  .profile-parts {
    display: flex;
    padding: 15px 0;
  }

  .parts-title {
    width: 30%;
  }

  .parts-body {
    width: 70%
  }

}

@media (max-width: 1024px) {
  div.profile {
    margin: 0 auto;
    padding-top: 50px;
    width:80vw;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  div.profile-body {
    text-align: center;
  }

  .profile-parts {
    display: flex;
    padding: 15px 0;
  }

  .parts-title {
    width: 30%;
  }

  .parts-body {
    padding-left: 5px;
    width: 70%;
  }

}
</style>
