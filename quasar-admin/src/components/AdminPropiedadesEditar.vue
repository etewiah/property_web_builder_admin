<template>
  <div class="q-card">
    <div class="q-card-section" style="padding:0px;">
      <div class="row">
        <div class="col-sm-2">
          <div class="thumbnailxxx">
            <img :src="model.primaryPhotoUrl" alt="" style="height: 90px;max-width: 140px;">
          </div>
        </div>
        <div class="col-sm-10">
          <div class="m-t-25 m-l-25">
            <h2>
              <span>REF: {{ model.reference }} </span>
              <p class="iconos_grande m-t-10 m-b-5">
                <i class="fa fa-bed"></i> <span>{{ model.countBedrooms }}</span>&nbsp;&nbsp;&nbsp;&nbsp;
                <i class="fa fa-shower"></i> 
                <span>{{ model.countBathrooms }}<span>&nbsp;&nbsp;&nbsp;
                <i class="fa fa-arrows"></i> 
                <span>{{ model.constructedArea }}
                <span v-if="model.areaUnit === 'sqft'">sqft</span>
                <span v-if="model.areaUnit === 'sqmt'">m<sup>2</sup></span>
                </span>
                </span>
                </span>
              </p>
            </h2>
          </div>
          <div role="group" class="botones_web" style="display:none;">
            <router-link to="/admin/propiedades" class="btn_settings btn btn-circulo btn-float waves-effect pull-right">
              <i class="fa fa-arrow-left"></i>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="q-card-section">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminPropiedadesEditar',
  props: {
    model: Object
  }
}
</script>
