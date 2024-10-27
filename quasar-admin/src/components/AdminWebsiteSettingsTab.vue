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
          :is="tabsWebsiteComponent"
          :activeTabName="activeTabName"
          :contentResources="model"
          :clientSetup="clientSetup"
          :resourceObject="websiteDetails"
          :websiteDetails="websiteDetails"
        />
      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>

<script>
export default {
  name: 'AdminWebsiteSettingsTab',
  data() {
    return {
      activeTabName: ''
    }
  },
  props: {
    tabsList: Array,
    model: Object,
    clientSetup: Object,
    websiteDetails: Object,
    tabsWebsiteComponent: String
  }
}
</script>
