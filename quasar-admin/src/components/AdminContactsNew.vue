<template>
  <div class="q-card">
    <div class="q-card-section">
      <h2>{{ $t("newClient") }}</h2>
    </div>
    <div class="q-card-section">
      <tabs-client/new-contact :resourceObject="model" :fieldKeys="fieldKeys" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminContactsNew',
  props: {
    model: Object,
    fieldKeys: Array
  }
}
</script>
