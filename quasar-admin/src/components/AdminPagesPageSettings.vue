<template>
  <div role="tabpanel">
    <q-tabs
      v-model="activeTabName"
      class="text-green"
      align="left"
      narrow-indicator
    >
      <q-tab name="settings" :label="$t('pageSections.pageTitle')" />
      <q-tab
        v-for="tab in pageParts"
        :key="tab.page_part_key"
        :name="tab.page_part_key"
        :label="$t(tab.editor_setup.tabTitleKey)"
      />
    </q-tabs>
    <q-tab-panels v-model="activeTabName">
      <q-tab-panel name="settings">
        <tabs-cms/page-settings
          :resourceObject="model"
          :shortLocaleCodes="shortLocaleCodes"
          :changedFields="changedFields"
        />
      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>

<script>
export default {
  name: 'AdminPagesPageSettings',
  data() {
    return {
      activeTabName: 'settings'
    }
  },
  props: {
    model: Object,
    shortLocaleCodes: Array,
    changedFields: Object,
    pageParts: Array
  }
}
</script>
