<template>
  <tabs-property/list-properties :propertiesStatus="filter" :properties="model" />
</template>

<script>
export default {
  name: 'AdminPropiedadesListFilter',
  props: {
    filter: Object,
    model: Array
  }
}
</script>
