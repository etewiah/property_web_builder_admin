<template>
  <div role="tabpanel">
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
        <tabs-translations/single-tab
          :activeTabName="activeTabName"
          :adminTranslations="adminTranslations"
          :locales="locales"
        />
      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>

<script>
export default {
  name: 'AdminPropiedadesSettingsTab',
  data() {
    return {
      activeTabName: ''
    }
  },
  props: {
    tabsList: Array,
    adminTranslations: Object,
    locales: Array
  }
}
</script>
