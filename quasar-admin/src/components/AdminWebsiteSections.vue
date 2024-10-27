<template>
  <div class="q-card">
    <div class="q-card-section">
      <h2>{{ $t("sectionsForWebsite") }}</h2>
    </div>
    <div class="q-card-section">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminWebsiteSections'
}
</script>
