<template>
  <div>
    <ol>
      <li v-for="(item, index) in items" :key=index >
        <router-link v-bind:to=item.path>
          {{ item.title }}
        </router-link>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'TabMenu',
  data() {
    return {
      show: true,
      items: [
        { title: 'top', path: '/' },
        { title: 'profile', path: '/profile' },
        { title: 'skill', path: '/skill' },
        { title: 'output', path: '/output' }
      ]
    }
  }
}
</script>

<style scoped>

div {
  display: flex;
  justify-content: center;
}

ol {
  width: 480px;
  display: flex;
  justify-content: center;
  padding: 0;
  list-style: none;
}

li {
  width: 100px;
  height: 50px;
  margin-left:10px;
  margin-right:10px;
  font-size: 14px;
  position: relative;
}

li:hover {
  opacity: 0.4;
}

a {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  font-family: 'Roboto';
  font-size: 30px;
  color: black;
  font-weight: bold;
  text-decoration: none;
  line-height: 50px;
}

@media (max-width: 1024px) {

}

@media (max-width: 600px) {
  div {
    display: flex;
    justify-content: center;
  }

  ol {
    width: 90vw;
    justify-content: space-around;
  }

  li {
    margin: 0;
  }

  a {
    font-size: 20px;
  }
}

</style>