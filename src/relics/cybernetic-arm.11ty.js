module.exports = {
	data() {
		return {
			name: 'Cybernetic Arm',
			isNew: false,
			isChina: false,
			rarity: 4
		};
	},
	render({ string: { element } }) {
		return {
			description: 'Launch a Cybernetic Arm to pull selected target to you, or you to the target. Deal **100%** damage on hit, and **strongly suspend** the target, then launch the target into the air (or idle the target if unable). Also regenerate weapon charge by **300**. Can be used to access hard-to-reach areas, and hold up to **2** charges at a time. Regain **1** charge every **30** seconds.',
			awakening: [
				'Produce an EM shield that reduces damage taken by **20%** for 7 seconds.',
				'Regain **1** charge every **15** seconds.',
				'Store up to **3** charges.',
				`Increase ${element.ice.name} damage by **1.5%**, even if not deployed. Unavailable in Apex League.`,
				'Reduce final damage of targets hit by **30%** for **7** seconds.'
			]
		};
	}
};
