<template>
  <vue-final-modal v-bind="$attrs" classes="modal-container" content-class="modal-content">
		<div >
		<br>
		Водитель:{{$store.getters.GetCurrentDriver}}
		<br>
		Погрузчик №:  {{$store.getters.GetCurrentLoader}}
		<br>
		Цех: {{$store.getters.GetCurrentWorkshop}}
		<br>
		<ol id="list_registers" >
			<li v-for="item in $store.state.loader_systems" :key="item.id" style="text-align:left">
			{{item.text}} - {{item.value}}
			</li>
		</ol>
		</div>

    <div class="modal__action">
      <button class="vfm-btn" @click="tocancel">cancel</button>
      <button class="vfm-btn" @click="tohide">OK</button>
    </div>
  </vue-final-modal>
</template>

<script>
export default {
  name: 'ModalSend',
  inheritAttrs: false,
  methods: {
    tocancel() {
      this.$store.commit("HideModal")
    },
    tohide() {
      this.$store.commit("HideModal")
    }
  }
}
</script>

<style scoped>
::v-deep .modal-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
::v-deep .modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  max-height: 90%;
  margin: 0 1rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  background: #fff;
}
.modal__title {
  margin: 0 2rem 0 0;
  font-size: 1.5rem;
  font-weight: 700;
}
.modal__content {
  flex-grow: 1;
  overflow-y: auto;
}
.modal__action {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  padding: 1rem 0 0;
}
.modal__close {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
}
</style>

<style scoped>
.dark-mode div::v-deep .modal-content {
  border-color: #2d3748;
  background-color: #1a202c;
}
</style>