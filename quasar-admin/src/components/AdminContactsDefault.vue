<template>
  <tabs-client/list-contacts :contacts="model" />
</template>

<script>
export default {
  name: 'AdminContactsDefault',
  props: {
    model: Array
  }
}
</script>
