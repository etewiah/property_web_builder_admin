<template>
  <tabs-client/list-contacts :contacts="model" />
</template>

<script>
export default {
  name: 'AdminClientsDefault',
  props: {
    model: Array
  }
}
</script>
