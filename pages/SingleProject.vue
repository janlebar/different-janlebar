<script>
import feather from 'feather-icons';
import Header from '~/components/Header.vue';
import ProjectGallery from '~/components/ProjectGallery.vue';
import ProjectInfo from '~/components/ProjectInfo.vue';
import ProjectRelatedProjects from '~/components/ProjectRelatedProjects.vue';
// import data from './projectdata.js';

export default {
	name: 'Projects',
	props: ['project'],
	components: {
		Header,
		ProjectGallery,
		ProjectInfo,
		ProjectRelatedProjects,
	},
	data: () => {
		return {
			singleProjectHeader: {
				singleProjectTitle: 'Project Management UI',
				singleProjectDate: 'Jul 26, 2021',
				singleProjectTag: 'UI / Frontend',
			},
			projectImages: [
				{
					id: 1,
					title: 'Kabul Project Management UI',
					// img: require('@/assets/images/ui-project-1.jpg'),
				},
				{
					id: 2,
					title: 'Kabul Project Management UI',
					// img: require('@/assets/images/web-project-2.jpg'),
				},
				{
					id: 3,
					title: 'Kabul Project Management UI',
					// img: require('@/assets/images/mobile-project-2.jpg'),
				},
			],
			projectInfo: {
				clientHeading: 'About Client',
				companyInfos: [
					{
						id: 1,
						title: 'Name',
						details: 'Company Ltd',
					},
					{
						id: 2,
						title: 'Services',
						details: 'UI Design & Frontend Development',
					},
					{
						id: 3,
						title: 'Website',
						details: 'https://company.com',
					},
					{
						id: 4,
						title: 'Phone',
						details: '555 8888 888',
					},
				],
				objectivesHeading: 'Objective',
				objectivesDetails:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.',
				technologies: [
					{
						title: 'Tools & Technologies',
						techs: [
							'HTML',
							'CSS',
							'JavaScript',
							'Vue.js',
							'TailwindCSS',
							'AdobeXD',
						],
					},
				],
				projectDetailsHeading: 'Challenge',
				projectDetails: [
					{
						id: 1,
						details:
							'Lorem ipsum ',
					},
					{
						id: 2,
						details:
						'Lorem ipsum ',
					},
					{
						id: 3,
						details:
						'Lorem ipsum ',	
					},
					{
						id: 4,
						details:
						'Lorem ipsum ',		
					},
				],
				socialSharingsHeading: 'Share This',
				socialSharings: [
					{
						id: 3,
						name: 'Facebook',
						icon: 'facebook',
						url: 'https://facebook.com/',
					},
					{
						id: 4,
						name: 'LinkedIn',
						icon: 'linkedin',
						url: 'https://si.linkedin.com/in/%C5%A1tefan-jan-lebar-b9a79b6a/',
					},
				],
			},
			relatedProject: {
				relatedProjectsHeading: 'Related Projects',
				relatedProjects: [
					{
						id: 1,
						title: 'Mobile UI',
						// img: require('@/assets/images/mobile-project-1.jpg'),
					},
					{
						id: 2,
						title: 'Web Application',
						// img: require('@/assets/images/web-project-1.jpg'),
					},
					{
						id: 3,
						title: 'UI Design',
						// img: require('@/assets/images/ui-project-2.jpg'),
					},
					{
						id: 4,
						title: 'Kabul Mobile App UI',
						// img: require('@/assets/images/mobile-project-2.jpg'),
					},
				],
			},
		};
	},
	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
	methods: {},
};
</script>

<template>
	<Header/>
	<div class="container mx-auto mt-10 sm:mt-20">
		<!-- Project header -->


		<!-- Project gallery -->
		<ProjectGallery :projectImages="projectImages" />

		<!-- Project information -->
		<ProjectInfo :projectInfo="projectInfo" />

		<!-- Project related projects -->
		<ProjectRelatedProjects :relatedProject="relatedProject" />
	</div>
</template>

