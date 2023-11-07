<script>
import AboutClientSingle from './AboutClientSingle.vue';
import img from '@/src/assets/images/brands/Vanabemuseum.svg';
import img2 from '@/src/assets/images/brands/Petrol.svg';
import img3 from '@/src/assets/images/brands/Mg Msum.svg';
import img4 from '@/src/assets/images/brands/L internationale.svg';
import img5 from '@/src/assets/images/brands/BTC.svg';


export default {
	components: {
		AboutClientSingle,
	},
	data: () => {
		return {
			clientsHeading: 'Some of the brands I have worked with',
			clients: [
				{
					id: 1,
					title: 'Vanabemuseum',
					img: img
				},
				{
					id: 2,
					title: 'Petrol',
					img: img2
				},
				{
					id: 3,
					title: 'Mg Msum',
					img: img3
				},
				{
					id: 4,
					title: 'L internationale',
					img: img4
				},
				{
					id: 5,
					title: 'BTC',
					img: img5
				},

			],
		};
	},
};
</script>

<template>
	<div class="mt-10 sm:mt-20">
		<p
			class="font-general-medium text-2xl sm:text-3xl text-primary-dark dark:text-primary-light"
		>
			{{ clientsHeading }}
		</p>
		<div class="grid grid-cols-2 sm:grid-cols-4 mt-10 sm:mt-14 gap-2">
			<AboutClientSingle
				v-for="client in clients"
				:key="client.id"
				:client="client"
			/>
		</div>
	</div>
</template>
