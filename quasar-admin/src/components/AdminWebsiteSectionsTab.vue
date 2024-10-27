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
      <q-tab name="new" label="new" />
    </q-tabs>
    <q-tab-panels v-model="activeTabName">
      <q-tab-panel v-for="tab in tabsList" :name="tab.tabValue" :key="tab.tabValue">
        <content/section-manager :sectionInView="sectionInView" :websiteDetails="websiteDetails" />
        <div class="row">
          <div>
            <content/edmin-pages :contentKey="contentKey" :contentResources="model" :languages="languages" />
          </div>
        </div>
      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>

<script>
export default {
  name: 'AdminWebsiteSectionsTab',
  data() {
    return {
      activeTabName: ''
    }
  },
  props: {
    tabsList: Array,
    model: Object,
    languages: Array,
    sectionInView: Object,
    websiteDetails: Object,
    contentKey: String
  }
}
</script>
