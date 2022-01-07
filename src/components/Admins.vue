<template>
<div id="wrapper-parts-chois">
<h2>Разделы:</h2>
	<div id="part_choice" >
		<div class="form_radio_btn">
			<input type="radio" id="1" value="1" v-model="part_number" @change="to_part"><label for="1"><img src="user.png" alt="" srcset="">Водители</label>
		</div>
		<div class="form_radio_btn">
			<input type="radio" id="2" value="2" v-model="part_number" @change="to_part"><label for="2"><img src="carr.png" alt="">Погрузчики</label>
		</div>
		<div class="form_radio_btn">
			<input type="radio" id="3" value="3" v-model="part_number" @change="to_part"><label for="3"><img src="build.png" alt="" srcset="">Цеха</label>
		</div>
		<div class="form_radio_btn">
			<input type="radio" id="4" value="4" v-model="part_number" @change="to_part"><label for="4"><img src="raport.png" alt="" srcset="">Отчеты</label>
		</div>
		
		
		<!-- <input type="radio" value="2" v-model="part_number" @change="to_part"><label>Погрузчики</label>
		<br>
		<input type="radio" value="3" v-model="part_number" @change="to_part"><label>Цеха</label>
		<br>
		<input type="radio" value="4" v-model="part_number" @change="to_part"><label>Отчеты</label> -->
	</div>

</div>
	
	
</template>
<script>
export default {
  name: 'Admins',
	data() {
		return {
			part_number: 0
		}
	},
	methods: {
		to_part () {
			let pn_int = parseInt(this.part_number, 10)
			if (pn_int > 0) {
				this.$store.commit('HideAdmins')
				switch(pn_int) {
					case 1:
						this.$store.commit('ShowAdminDrivers')
					break
					case 2:
						this.$store.commit('ShowAdminLoaders')
					break
					case 3:
						this.$store.commit('ShowAdminWorkShops')
					break
					case 4:
						this.$store.commit('ShowAdminReports')
					break
				}
			} else {
				alert("Choose loader !!!")
			}
		}
	}
}
</script>
<style>
#part_choice{
	display: flex;
}

</style>