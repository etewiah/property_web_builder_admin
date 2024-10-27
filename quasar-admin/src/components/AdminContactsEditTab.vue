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
        <tabs-client/general-tab
          :activeTabName="activeTabName"
          :resourceObject="clientResource"
          :fieldKeys="fieldKeys"
        />
        <tabs-client/properties-tab
          :activeTabName="activeTabName"
          :resourceObject="clientResource"
          :fieldKeys="fieldKeys"
        />
      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>

<script>
export default {
  name: 'AdminContactsEditTab',
  data() {
    return {
      activeTabName: ''
    }
  },
  props: {
    tabsList: Array,
    clientResource: Object,
    fieldKeys: Array
  }
}
</script>
