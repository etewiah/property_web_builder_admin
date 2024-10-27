<template>
  <div class="q-card">
    <div class="q-card-section" style="display:none;">
      <h2>{{ $t("editarPropiedad") }}</h2>
    </div>
    <div class="q-card-section">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminClientsEdit'
}
</script>
