<template>
  <div class="q-card">
    <div class="q-card-section">
      <h2>{{ $t("editWebsite") }}</h2>
    </div>
    <div class="q-card-section">
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
              :languages="languages"
              :resourceObject="agencyDetails"
              :agencyDetails="agencyDetails"
            />
          </q-tab-panel>
        </q-tab-panels>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminWebsiteTabToDel',
  data() {
    return {
      activeTabName: ''
    }
  },
  props: {
    tabsList: Array,
    model: Object,
    languages: Array,
    agencyDetails: Object,
    tabsWebsiteComponent: String
  }
}
</script>
