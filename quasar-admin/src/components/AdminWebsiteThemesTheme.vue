<template>
  <div role="tabpanel">
    <q-tabs
      v-model="themeInViewId"
      class="text-green"
      align="left"
      narrow-indicator
    >
      <q-tab
        v-for="theme in model"
        :key="theme.name"
        :name="theme.name"
        :label="theme.friendly_name"
      >
        <template v-slot:default>
          <i v-if="theme.name === websiteDetails.theme_name" class="fa fa-check-circle" style="color:green;"></i>
        </template>
      </q-tab>
    </q-tabs>
    <q-tab-panels v-model="themeInViewId">
      <q-tab-panel v-for="theme in model" :name="theme.name" :key="theme.name">
        <content/theme-manager :themeInView="themeInView" :websiteDetails="websiteDetails" />
      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>

<script>
export default {
  name: 'AdminWebsiteThemesTheme',
  data() {
    return {
      themeInViewId: ''
    }
  },
  props: {
    model: Array,
    websiteDetails: Object,
    themeInView: Object
  }
}
</script>
