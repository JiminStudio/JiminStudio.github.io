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
								label: 'Common',
								items: [
									'betonquestaddon/common/operator'
								],
							},
							{
								label: 'Compatibility',
								items: [
									'betonquestaddon/compatibility/advancedenchantments',
									'betonquestaddon/compatibility/coinsengine',
									'betonquestaddon/compatibility/craftengine',
									'betonquestaddon/compatibility/headdatabase',
									'betonquestaddon/compatibility/lands',
									'betonquestaddon/compatibility/itemsadder',
									'betonquestaddon/compatibility/nexo',
									'betonquestaddon/compatibility/placeholderapi',
								],
							},
							{
								label: 'BetonQuest Side',
								items: [
									{
										label: 'Objectives',
										items: [
											'betonquestaddon/betonquest/objectives'
										],
									},
									{
										label: 'Conditions',
										items: [
											"betonquestaddon/betonquest/conditions"
										],
									},
									{
										label: 'Events',
										items: [
											"betonquestaddon/betonquest/events"
										],
									},
                                    {
                                        label: 'Items',
                                        items: [
                                            "betonquestaddon/betonquest/items"
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
