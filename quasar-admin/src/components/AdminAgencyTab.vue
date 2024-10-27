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
        <tabs-agency/general-tab
          :activeTabName="activeTabName"
          :resourceObject="agencyDetails"
          :fieldKeys="fieldKeys"
        />
        <tabs-agency/situacion-tab
          :activeTabName="activeTabName"
          :resourceObject="primaryAddress"
          :fieldKeys="fieldKeys"
        />
        <tabs-agency/user-tab
          :activeTabName="activeTabName"
          :resourceObject="currentUser"
          :fieldKeys="fieldKeys"
        />
      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>

<script>
export default {
  name: 'AdminAgencyTab',
  data() {
    return {
      activeTabName: ''
    }
  },
  props: {
    tabsList: Array,
    agencyDetails: Object,
    primaryAddress: Object,
    currentUser: Object,
    fieldKeys: Array
  }
}
</script>
