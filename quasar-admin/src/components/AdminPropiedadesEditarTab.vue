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
        <component
          :is="tabsPropertyComponent"
          :activeTabName="activeTabName"
          :changedFields="changedFields"
          :resourceObject="property"
          :fieldKeys="fieldKeys"
          :supportedLanguages="supportedLanguages"
          :clientSetup="clientSetup"
        />
      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>

<script>
export default {
  name: 'AdminPropiedadesEditarTab',
  data() {
    return {
      activeTabName: ''
    }
  },
  props: {
    tabsList: Array,
    property: Object,
    changedFields: Object,
    fieldKeys: Array,
    supportedLanguages: Array,
    clientSetup: Object,
    tabsPropertyComponent: String
  }
}
</script>
