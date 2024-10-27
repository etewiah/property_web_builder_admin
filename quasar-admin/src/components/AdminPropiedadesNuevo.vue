<template>
  <div class="q-card">
    <div class="q-card-section text-center">
      <h2>{{ $t("newProperty") }}</h2>
    </div>
    <div class="q-card-section">
      <tabs-property/new-property :resourceObject="model" :fieldKeys="fieldKeys" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminPropiedadesNuevo',
  props: {
    model: Object,
    fieldKeys: Array
  }
}
</script>
