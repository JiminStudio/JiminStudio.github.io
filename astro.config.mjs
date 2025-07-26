// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightSidebarTopics from 'starlight-sidebar-topics'

// https://astro.build/config
export default defineConfig({
	site: "https://jiminstudio.github.io",
	integrations: [
		starlight({
			plugins: [
				starlightSidebarTopics([
					{
						id: "betonquestaddon",
						label: 'BetonQuestAddon',
						link: '/betonquestaddon/',
						icon: 'open-book',
						items: [
							{
								label: 'Overview',
								items: [
									'betonquestaddon/overview/getting-started',
									'betonquestaddon/overview/commands',
									'betonquestaddon/overview/default-config',
									'betonquestaddon/overview/notifys',
									'betonquestaddon/overview/change-log'
								],
							},
							{
								label: 'Compatibility',
								items: [
									'betonquestaddon/compatibility/coinsengine',
									'betonquestaddon/compatibility/craftengine',
									'betonquestaddon/compatibility/headdatabase',
									'betonquestaddon/compatibility/itemsadder',
									'betonquestaddon/compatibility/nexo'
								],
							},
							{
								label: 'BetonQuest Side',
								items: [
									{
										label: 'Objectives',
										items: [
											'betonquestaddon/side/objectives'
										],
									},
								],
							},
						],
					},
				])
			],
			title: 'JiminStudio',
			logo: {
				src: './src/assets/logo.svg',
				replacesTitle: true,
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/JiminStudio' },
				{ icon: "discord", label: "Discord", href: "https://discord.gg/gury65qazQ" },
			],
			components: {
				Sidebar: './src/components/Sidebar.astro',
			},
		}),
	],
});
