<template>
  <div class="q-card">
    <div class="q-card-section">
      <h2>{{ $t("newClient") }}</h2>
    </div>
    <div class="q-card-section">
      <clients/new-client :resourceObject="model" :fieldKeys="fieldKeys" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminClientsNew',
  props: {
    model: Object,
    fieldKeys: Array
  }
}
</script>
