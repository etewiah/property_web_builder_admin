<template>
  <div>
    <div class="row">
      <div class="col-sm-6" v-for="menucard in menuCards" :key="menucard.id">
        <cards/menu-card :details="menucard" />
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'AdminSetup',
  props: {
    menuCards: Array
  }
}
</script>
