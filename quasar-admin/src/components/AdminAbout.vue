<template>
  <div>
    <div class="row">
      <div class="col-sm-6">
        <div class="q-card blog-post">
          <div class="bp-header">
            <a href="" class="bp-title">
              <h2>About PropertyWebBuilder</h2>
            </a>
          </div>
          <div class="q-card-section">
            <p>PropertyWebBuilder is an open source project designed to make creating websites for realtors / estate agents as simple as possible.</p>
            <p>Help make it a better product by contributing <a href="https://etewiah.github.io/property_web_builder">here.</a></p>
            <p>You can also contact us directly with any feedback or ideas by emailing help@propertywebbuilder.com</p>
          </div>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'AdminAbout'
}
</script>
