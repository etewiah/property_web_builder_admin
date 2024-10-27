<template>
  <div class="q-card">
    <div class="q-card-section">
      <h2>{{ $t("settingsForWebsite") }}</h2>
    </div>
    <div class="q-card-section">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminWebsiteSettings'
}
</script>
