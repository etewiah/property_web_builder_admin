<template>
  <q-tabs
    v-model="activeTabName"
    class="text-green"
    align="left"
    narrow-indicator
  >
    <q-tab
      v-for="tab in tabsList"
      :key="tab.tabValue"
      :name="tab.tabValue"
      :label="$t(tab.tabTitleKey)"
    />
  </q-tabs>
  <q-tab-panels v-model="activeTabName">
    <q-tab-panel v-for="tab in tabsList" :name="tab.tabValue" :key="tab.tabValue">
      <tabs-io/properties-tab :importer-component="importerComponent" :availableMLSs="model" />
    </q-tab-panel>
  </q-tab-panels>
</template>

<script>
export default {
  name: 'AdminIoPropertiesTab',
  data() {
    return {
      activeTabName: ''
    }
  },
  props: {
    tabsList: Array,
    model: Object,
    importerComponent: String
  }
}
</script>
