module.exports = {
	data() {
		return {
			name: 'Samir',
			isNew: false,
			isChina: false,
			rarity: 5,
			weapon: {
				name: 'Dual EM Stars',
				element: 'electric',
				resonance: 'damage',
				shatter: 6,
				charge: 10.7,
				materials: [
					'red',
					'black'
				],
				awakening: [
					'Trigger an electrical explosion on the target after landing a critical hit, dealing additional damage equal to **30%** of ATK to the target and nearby enemies. Cooldown: **0.5** seconds.',
					'Increase the current weapon’s base ATK growth by **16%**.',
					'Increase crit rate to electrified targets by **40%**. Electrical explosions extend the duration of electrified effects by **0.5** seconds, up to a maximum of **5** seconds.',
					'Increase the current weapon’s base ATK growth by **32%**.',
					'Double the duration of Electro Field and pull targets into the center of the attack.',
					'Triggering an electrical explosion reduces skill cooldowns by 1 second.'
				]
			},
			skills: {
				normal: [
					{
						name: 'Dual Fire',
						desc: 'While on the ground, tap normal attack to attack 5 times in a row.',
						breakdown: [
							'Deal total damage equal to **47.1%** of ATK + **2**.',
							'Deal total damage equal to **35.8%** of ATK + **2**.',
							'Deal total damage equal to **119.7%** of ATK + **6**.',
							'Deal total damage equal to **113.1%** of ATK + **6**.',
							'Deal total damage equal to **154%** of ATK + **8** and **launch** the target.'
						]
					},
					{
						name: 'Bullet Rain',
						desc: 'While airborne, tap normal attack to fire continuously at the ground, dealing damage equal to ??% of ATK + ?? each hit. Consumes 150 Endurance.'
					},
					{
						name: 'Energy Burst',
						desc: 'Hold attack button to maintain constant fire, each hit dealing **23%** × ATK + **1** base damage.'
					},
					{
						name: 'Phantom Kick',
						desc: 'While airborne, tap and hold normal attack to trigger Phantom Kick. Knock the target down and deal damage equal to **70.5%** of ATK + **4**. Upon landing, deal damage equal to **98.7%** of ATK + **5** to nearby targets and **launch** them.'
					}
				],
				dodge: [
					{
						name: 'Dodge',
						desc: 'Dodge right before getting hit to trigger a Phantasia, reducing the speed of enemies within an area. Become immune to hitstun for **0.5** seconds while dodging.'
					},
					{
						name: 'Rising Lightning Kick',
						desc: 'Tap normal attack after dodging to **knock targets into the air** and deal damage equal to **122.6%** of ATK + **6**.'
					}
				],
				skill: [
					{
						name: 'Electro Field',
						desc: 'Fire an energy field at the target location, reflecting beams within the barrier. Deal damage equal to **269.8%** of ATK + **14**, and the last hit launches targets **into the air**. **45**-second cooldown.'
					}
				],
				discharge: [
					{
						name: 'Domain of Thunder',
						desc: 'When ***weapon charge is full*** or ***Phantasia*** is triggered, **remove all debuffs from the wielder**, and create a Domain of Thunder at the target location upon switching to this weapon, dealing a total of **238.3%** of ATK + **13** damage over 3 attacks to enemies **within the area** and dispelling their buffs. The domain lasts for **3.5** seconds and deals damage equal to **42.4%** of ATK + **2** to a target every **0.5** seconds.'
					}
				]
			},
			mimicEffects: [
				{
					affinity: 200,
					effect: 'Unlock profile avatar Samir'
				},
				{
					affinity: 600,
					effect: 'Unlock communication [Solo Dance]'
				},
				{
					affinity: 1200,
					effect: 'Grant **1** stack of Concentration for every **4** seconds when Samir receives no damage. Each stack increases damage dealt by **3%**, and can stack up to **4** times. After being hit, Samir loses **1** stack of Concentration, up to **1** stack per **1** second.'
				},
				{
					affinity: 2000,
					effect: 'Unlock communication [Resonance]'
				},
				{
					affinity: 3000,
					effect: 'Unlock communication [Concerto]'
				},
				{
					affinity: 4000,
					effect: 'Grant **1** stack of Concentration for every **4** seconds when Samir receives no damage. Each stack increases damage dealt by **4%**, and can stack up to **5** times. After being hit, Samir loses **1** stack of Concentration, up to **1** stack per **2** second.'
				}
			],
			recChips: [
				['samir', [2, 4]],
				['claudia', 2],
				['crow', 2],
				['tenet-guard', 3],
				['pepper', 3]
			],
			traits: {
				gender: 'Female',
				height: '171 cm',
				birthplace: '???',
				horoscope: 'Taurus',
				birthday: 'May 20'
			},
			gifts: {
				categories: [
					'games',
					'toys'
				],
				items: [
					['fox-figure', 60],
					['psp', 60],
					['present', 60],
					['ufo', 60],
					['pearl', 60],
					['prince-tata-figure', 60],
					['tata-plush', 30],
					['chess-set', 30],
					['cat-plush', 30],
					['diary', 30],
					['robot-figure', 30,],
					['bunny-doll', 30],
					['trading-card', 15],
					['pinwheel', 15]
				]
			}
		};
	}
};
