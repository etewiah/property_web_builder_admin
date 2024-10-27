<template>
  <div class="q-card">
    <div class="q-card-section">
      <h2>{{ $t("webContentSections.footer") }}</h2>
    </div>
    <div class="q-card-section">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminWebsiteContent'
}
</script>
