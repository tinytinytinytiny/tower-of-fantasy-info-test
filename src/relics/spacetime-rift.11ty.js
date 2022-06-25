module.exports = {
	data() {
		return {
			name: 'Spacetime Rift',
			rarity: 5
		};
	},
	render({ name, string: { element } }) {
		return {
			description: 'Launch a proton bomb at the target location, creating a collapse in time-space that sucks targets in for **10** seconds. After 1.5 seconds, the center of the collapse deals damage equal to **39.6** of ATK to targets caught in the area every 0.5 seconds. Cooldown: **100** seconds.',
			awakening: [
				'Enemies caught within the rift who are close to the ground are unable to dodge, and the vacuum duration is increased to **15** seconds.',
				'Increase the target area by **100%**.',
				'Increase damage dealt to targets in the area by **20%**.',
				`Reduce ${element.fire.name} damage received by **2%**, even if not deployed. Unavailable in Apex League.`,
				'Enemies within the rift are unable to receive any healing.'
			]
		}
	}
};