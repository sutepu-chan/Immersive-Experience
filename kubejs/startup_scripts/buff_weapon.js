/*
===== Weapon =====
minecraft:generic.attack_damage
obscure_api:critical_hit (in decimal: 0-1)
obscure_api:critical_damage (extra crit damage)
minecraft:generic.attack_speed (1= original attack speed-1)
minecraft:generic.attack_knockback (1= 0.5 block knockback)

===== Weapon miscellaneous =====
forge:entity_reach
*/
/*
attack_damage: 1,
critical_hit: 0.3,
critical_damage: 150,
attack_speed: 1,
attack_knockback: 1
{
			name: 'advancednetherite:netherite_iron',
			attributes: {
				attack_damage: 1,
				attack_speed: 1,
				critical_hit: 0.3, 
				critical_damage: 1, this is in percentage (1 = +100% crit damage = 2x damage)
			}
},
*/
ItemEvents.modification(e => {
	const weaponSets = [
		{
			name: 'minecraft:wooden',
			attributes: {
				critical_hit: 0.05,
				critical_damage: 0.1,
			}
		},
		{
			name: 'minecraft:stone',
			attributes: {
				critical_hit: 0.05,
				critical_damage: 0.1,
			}
		},
		{
			name: 'minecraft:golden',
			attributes: {
				critical_hit: 0.05,
				critical_damage: 0.2,
			}
		},
		{
			name: 'minecraft:iron',
			attributes: {
				critical_hit: 0.1,
				critical_damage: 0.5,
			}
		},
		{
			name: 'minecraft:diamond',
			attributes: {
				attack_damage: 1,
				attack_speed: 0.1,
				critical_hit: 0.1,
				critical_damage: 0.75,
			}
		},
		{
			name: 'minecraft:netherite',
			attributes: {
				attack_damage: 1, //9
				attack_speed: 0.1,
				critical_hit: 0.15,
				critical_damage: 1.0,
			}
		},
		{
			name: 'advancednetherite:netherite_iron',
			attributes: {
				attack_damage: 2, //10
				attack_speed: 0.2,
				critical_hit: 0.2,
				critical_damage: 1.2,
			}
		},
		{
			name: 'advancednetherite:netherite_gold',
			attributes: {
				attack_damage: 3, //12
				attack_speed: 0.2,
				critical_hit: 0.2,
				critical_damage: 1.4,
			}
		},
		{
			name: 'advancednetherite:netherite_emerald',
			attributes: {
				attack_damage: 4, //14
				attack_speed: 0.3,
				critical_hit: 0.25,
				critical_damage: 1.6,
			}
		},
		{
			name: 'advancednetherite:netherite_diamond',
			attributes: {
				attack_damage: 5, //16
				attack_speed: 0.3,
				critical_hit: 0.25,
				critical_damage: 1.8,
			}
		},
		{
			name: 'majruszsdifficulty:enderium',
			attributes: {
				attack_damage: 8, //18
				attack_speed: 0.4,
				critical_hit: 0.3,
				critical_damage: 2.0,
			}
		},
		{
			name: 'epicpaladins:arclight',
			attributes: {
				attack_damage: 3, //11
				attack_speed: 0.2,
				critical_hit: 0.4,
				critical_damage: 1.3,
			}
		},
		{
			name: 'epicpaladins:bloodstone',
			attributes: {
				attack_damage: 3, //11
				attack_speed: 0.2,
				critical_hit: 0.4,
				critical_damage: 1.3,
			}
		},
		{
			name: 'epicpaladins:cryorium',
			attributes: {
				attack_damage: 3, //11
				attack_speed: 0.2,
				critical_hit: 0.4,
				critical_damage: 1.3,
			}
		},
		{
			name: 'epicpaladins:jade',
			attributes: {
				attack_damage: 3, //11
				attack_speed: 0.2,
				critical_hit: 0.4,
				critical_damage: 1.3,
			}
		},
		{
			name: 'epicpaladins:moonlight',
			attributes: {
				attack_damage: 3, //11
				attack_speed: 0.2,
				critical_hit: 0.4,
				critical_damage: 1.3,
			}
		},
		{
			name: 'epicpaladins:sculk',
			attributes: {
				attack_damage: 4, //12
				attack_speed: 0.2,
				critical_hit: 0.4,
				critical_damage: 1.4,
			}
		},
		{
			name: 'deeperdarker:warden',
			attributes: {
				attack_damage: 4, //13
				attack_speed: 0.2,
				critical_hit: 0.25,
				critical_damage: 1.4,
			}
		},
		{
			name: 'nourished_nether:necronium',
			attributes: {
				attack_damage: 4, //13
				attack_speed: 0.2,
				critical_hit: 0.25,
				critical_damage: 1.0,
			}
		},
		{
            name: 'enlightened_end:adamantite',
            attributes: {
				critical_hit: 0.1,
				critical_damage: 0.8,
            }
        },
		{
            name: 'enlightened_end:starsteel',
            attributes: {
				attack_damage: 1, //8.5
				attack_speed: 0.1,
				critical_hit: 0.15,
				critical_damage: 0.8,
            }
        },
		{
            name: 'enlightened_end:tenebrium',
            attributes: {
				attack_damage: 2, //9.5
				attack_speed: 0.1,
				critical_hit: 0.15,
				critical_damage: 1.2,
            }
        },
		{
			name: 'deep_aether:skyjade',
            attributes: {
				critical_hit: 0.1,
				critical_damage: 0.5,
            }
		},
		{
			name: 'deep_aether:stratus',
            attributes: {
				attack_damage: 3, //11
				attack_speed: 0.2,
				critical_hit: 0.2,
				critical_damage: 1.3,
            }
		},
		{
			name: 'aether_redux:veridium',
            attributes: {
				attack_damage: 2, //5
				critical_hit: 0.1,
				critical_damage: 0.6,
            }
		},
		{
			name: 'aether_redux:infused_veridium',
            attributes: {
				attack_damage: 2,
				critical_hit: 0.15,
				critical_damage: 1.0,
            }
		},
		{
			name: 'aether:skyroot',
            attributes: {
				critical_hit: 0.05,
				critical_damage: 0.2,
            }
		},
		{
			name: 'aether:zanite',
            attributes: {
				attack_damage: 1, //7
				critical_hit: 0.1,
				critical_damage: 0.75,
            }
		},
		{
			name: 'aether:gravitite',
            attributes: {
				attack_damage: 1, //7
				critical_hit: 0.1,
				critical_damage: 1.0,
            }
		},
		{
			name: 'aether:holystone',
            attributes: {
				critical_hit: 0.05,
				critical_damage: 0.2,
            }
		},
		{
			name: 'lost_aether_content:phoenix',
            attributes: {
				attack_damage: 5, //5
				attack_speed: 0.2,
				critical_hit: 0.23,
				critical_damage: 1.65,
            }
		},
	];

	for (const set of weaponSets) {
		e.modify(`${set.name}_sword`, (item) => {
			if (set.attributes.attack_damage != null) {
				item.addAttribute(
					'minecraft:generic.attack_damage',
					$UUID.randomUUID(),
					"Weapon modifier",
					set.attributes.attack_damage,
					$AM$Operation.ADDITION
				);
			};
			if (set.attributes.critical_hit != null) {
				item.addAttribute(
					'obscure_api:critical_hit',
					$UUID.randomUUID(),
					"Weapon modifier",
					set.attributes.critical_hit,
					$AM$Operation.ADDITION
				);
			};
			if (set.attributes.critical_damage != null) {
				item.addAttribute(
					'obscure_api:critical_damage',
					$UUID.randomUUID(),
					"Weapon modifier",
					set.attributes.critical_damage,
					$AM$Operation.ADDITION
				);
			};
			if (set.attributes.attack_speed != null) {
				item.addAttribute(
					'minecraft:generic.attack_speed',
					$UUID.randomUUID(),
					"Weapon modifier",
					set.attributes.attack_speed,
					$AM$Operation.ADDITION
				);
			};
		});
		e.modify(`${set.name}_axe`, (item) => {
			if (set.attributes.attack_damage != null) {
				item.addAttribute(
					'minecraft:generic.attack_damage',
					$UUID.randomUUID(),
					"Weapon modifier",
					set.attributes.attack_damage,
					$AM$Operation.ADDITION
				);
			};
			if (set.attributes.critical_hit != null) {
				item.addAttribute(
					'obscure_api:critical_hit',
					$UUID.randomUUID(),
					"Weapon modifier",
					(set.attributes.critical_hit + 0.1) > 1 ? 1 : set.attributes.critical_hit + 0.15,
					$AM$Operation.ADDITION
				);
			};
			if (set.attributes.critical_damage != null) {
				item.addAttribute(
					'obscure_api:critical_damage',
					$UUID.randomUUID(),
					"Weapon modifier",
					set.attributes.critical_damage * 1.5,
					$AM$Operation.ADDITION
				);
			};
			if (set.attributes.attack_speed != null) {
				item.addAttribute(
					'minecraft:generic.attack_speed',
					$UUID.randomUUID(),
					"Weapon modifier",
					set.attributes.attack_speed,
					$AM$Operation.ADDITION
				);
			};
		});
	};


	//#region simply swords
	const simplySwordSets = [
		{
			name: 'simplyswords:golden',
			attributes: {
				critical_hit: 0.05,
				critical_damage: 0.2,
			}
		},
		{
			name: 'simplyswords:iron',
			attributes: {
				critical_hit: 0.1,
				critical_damage: 0.5,
			}
		},
		{
			name: 'simplyswords:diamond',
			attributes: {
				critical_hit: 0.1,
				critical_damage: 0.75,
			}
		},
		{
			name: 'simplyswords:netherite',
			attributes: {
				critical_hit: 0.15,
				critical_damage: 1.0,
			}
		},
		{
			name: 'simplyswords:runic',
			attributes: {
				critical_hit: 0.2,
				critical_damage: 1.25,
			}
		},
	]
	const simplySwordTypes = [
		'longsword',
		'twinblade',
		'rapier',
		'katana',
		'sai',
		'spear',
		'glaive',
		'warglaive',
		'cutlass',
		'claymore',
		'greathammer',
		'greataxe',
		'chakram',
		'scythe',
		'halberd',
	]
	for (const set of simplySwordSets) {
		for (const type of simplySwordTypes) {
			e.modify(`${set.name}_${type}`, (item) => {
				if (set.attributes.critical_hit != null) {
					item.addAttribute(
						'obscure_api:critical_hit',
						$UUID.randomUUID(),
						"Weapon modifier",
						set.attributes.critical_hit,
						$AM$Operation.ADDITION
					);
				};
				if (set.attributes.critical_damage != null) {
					item.addAttribute(
						'obscure_api:critical_damage',
						$UUID.randomUUID(),
						"Weapon modifier",
						set.attributes.critical_damage,
						$AM$Operation.ADDITION
					);
				};
			});
		}
	}
	//1.0 0.8, 4.6 0.66
	//1.2 0.7, 4.2 0.62
	//1.4 0.6, 3.8 0.58
	//1.6 0.5, 3.4 0.54
	//1.8 0.4, 3 0.5
	//2.0 0.35, 2.6 0.46
	//2.2 0.3, 2.3 0.43
	//2.4 0.25, 2.0 0.4 
	//2.6 0.2, 1.8 0.38
	//2.8 0.15, 1.6 0.36
	const simplySwordItems = [
		["brimstone_claymore", 0.6, 3.8], //1.4
		["watcher_claymore", 0.6, 3.8], //1.4
		["storms_edge", 0.3, 2.3], //2.2
		["stormbringer", 0.4, 3], //1.8
		["sword_on_a_stick", 0.1, 0.5],
		["bramblethorn", 0.25, 2.0], //2.4
		["watching_warglaive", 0.35, 2.6],  //2.0
		["toxic_longsword", 0.4, 3],
		["emberblade", 0.4, 3],
		["hearthflame", 0.8, 4.6],
		["soulkeeper", 0.6, 3.8],
		["twisted_blade", 0.5, 3.4],
		["soulrender", 0.4, 3],
		["soulstealer", 0.15, 1.6],
		["mjolnir", 0.7, 4.2],
		["soulpyre", 0.7, 4.2],
		["frostfall", 0.4, 3],
		["molten_edge", 0.3, 2.3],
		["livyatan", 0.3, 2.3],
		["icewhisper", 0.5, 3.4],
		["arcanethyst", 0.5, 3.4],
		["thunderbrand", 0.5, 3.4],
		["waking_lichblade", 0.7, 4.2],
		["awakened_lichblade", 0.7, 4.2],
		["slumbering_lichblade", 0.7, 4.2],
		["shadowsting", 0.2, 1.8],
		["sunfire", 0.4, 3],
		["harbinger", 0.4, 3],
		["whisperwind", 0.3, 2.3],
		["dormant_relic", 0.4, 3],
		["righteous_relic", 0.4, 3],
		["tainted_relic", 0.4, 3]
	]
	simplySwordItems.forEach(([simplySwordItem, crit_hit, crit_dam]) => {
		e.modify(`simplyswords:${simplySwordItem}`, (item) => {
			item.addAttribute(
				'obscure_api:critical_hit',
				$UUID.randomUUID(),
				"Weapon modifier",
				crit_hit,
				$AM$Operation.ADDITION
			);
			item.addAttribute(
				'obscure_api:critical_damage',
				$UUID.randomUUID(),
				"Weapon modifier",
				crit_dam,
				$AM$Operation.ADDITION
			);	
		});
	})
	//#endregion


	//#region other weapons

	e.modify('epicpaladins:moonlight_glaive', (item) => {
		item.addAttribute(
			'minecraft:generic.attack_damage',
			$UUID.randomUUID(),
			"Weapon modifier",
			8, //18
			$AM$Operation.ADDITION
		);
		item.addAttribute(
			'minecraft:generic.attack_speed',
			$UUID.randomUUID(),
			"Weapon modifier",
			0.2,
			$AM$Operation.ADDITION
		);
		item.addAttribute(
			'obscure_api:critical_hit',
			$UUID.randomUUID(),
			"Weapon modifier",
			0.5,
			$AM$Operation.ADDITION
		);
		item.addAttribute(
			'obscure_api:critical_damage',
			$UUID.randomUUID(),
			"Weapon modifier",
			2.1,
			$AM$Operation.ADDITION
		);	
	});
	e.modify('epicpaladins:cryorium_battle_axe', (item) => {
		item.addAttribute(
			'minecraft:generic.attack_damage',
			$UUID.randomUUID(),
			"Weapon modifier",
			10, //21
			$AM$Operation.ADDITION
		);
		item.addAttribute(
			'minecraft:generic.attack_speed',
			$UUID.randomUUID(),
			"Weapon modifier",
			0.2,
			$AM$Operation.ADDITION
		);
		item.addAttribute(
			'obscure_api:critical_hit',
			$UUID.randomUUID(),
			"Weapon modifier",
			0.35,
			$AM$Operation.ADDITION
		);
		item.addAttribute(
			'obscure_api:critical_damage',
			$UUID.randomUUID(),
			"Weapon modifier",
			2.4,
			$AM$Operation.ADDITION
		);	
	});
	e.modify('epicpaladins:angel_sword', (item) => {
		item.addAttribute(
			'minecraft:generic.attack_damage',
			$UUID.randomUUID(),
			"Weapon modifier",
			10, //20
			$AM$Operation.ADDITION
		);
		item.addAttribute(
			'minecraft:generic.attack_speed',
			$UUID.randomUUID(),
			"Weapon modifier",
			0.4,
			$AM$Operation.ADDITION
		);
		item.addAttribute(
			'obscure_api:critical_hit',
			$UUID.randomUUID(),
			"Weapon modifier",
			0.2,
			$AM$Operation.ADDITION
		);
		item.addAttribute(
			'obscure_api:critical_damage',
			$UUID.randomUUID(),
			"Weapon modifier",
			1.6,
			$AM$Operation.ADDITION
		);	
	});
	e.modify('epicsamurai:katana', (item) => {
		item.addAttribute(
			'minecraft:generic.attack_damage',
			$UUID.randomUUID(),
			"Weapon modifier",
			3, //11
			$AM$Operation.ADDITION
		);
		item.addAttribute(
			'obscure_api:critical_hit',
			$UUID.randomUUID(),
			"Weapon modifier",
			0.05,
			$AM$Operation.ADDITION
		);
		item.addAttribute(
			'obscure_api:critical_damage',
			$UUID.randomUUID(),
			"Weapon modifier",
			0.5,
			$AM$Operation.ADDITION
		);	
	});
	e.modify('epicsamurai:naginata', (item) => {
		item.addAttribute(
			'minecraft:generic.attack_damage',
			$UUID.randomUUID(),
			"Weapon modifier",
			3, //11
			$AM$Operation.ADDITION
		);
		item.addAttribute(
			'obscure_api:critical_hit',
			$UUID.randomUUID(),
			"Weapon modifier",
			0.2,
			$AM$Operation.ADDITION
		);
		item.addAttribute(
			'obscure_api:critical_damage',
			$UUID.randomUUID(),
			"Weapon modifier",
			0.3,
			$AM$Operation.ADDITION
		);	
	});
	e.modify('epicsamurai:nagamaki', (item) => {
		item.addAttribute(
			'minecraft:generic.attack_damage',
			$UUID.randomUUID(),
			"Weapon modifier",
			3, //11
			$AM$Operation.ADDITION
		);
		item.addAttribute(
			'obscure_api:critical_hit',
			$UUID.randomUUID(),
			"Weapon modifier",
			0.35,
			$AM$Operation.ADDITION
		);
		item.addAttribute(
			'obscure_api:critical_damage',
			$UUID.randomUUID(),
			"Weapon modifier",
			0.3,
			$AM$Operation.ADDITION
		);	
	});
	e.modify('epicsamurai:shuko', (item) => {
		item.addAttribute(
			'minecraft:generic.attack_damage',
			$UUID.randomUUID(),
			"Weapon modifier",
			1, //6
			$AM$Operation.ADDITION
		);
		item.addAttribute(
			'minecraft:generic.attack_speed',
			$UUID.randomUUID(),
			"Weapon modifier",
			0.1,
			$AM$Operation.ADDITION
		);
		item.addAttribute(
			'obscure_api:critical_hit',
			$UUID.randomUUID(),
			"Weapon modifier",
			0.05,
			$AM$Operation.ADDITION
		);
		item.addAttribute(
			'obscure_api:critical_damage',
			$UUID.randomUUID(),
			"Weapon modifier",
			0.1,
			$AM$Operation.ADDITION
		);	
	});
	e.modify('epicsamurai:tetsubo', (item) => {
		item.addAttribute(
			'minecraft:generic.attack_damage',
			$UUID.randomUUID(),
			"Weapon modifier",
			4, //14
			$AM$Operation.ADDITION
		);
		item.addAttribute(
			'obscure_api:critical_hit',
			$UUID.randomUUID(),
			"Weapon modifier",
			0.2,
			$AM$Operation.ADDITION
		);
		item.addAttribute(
			'obscure_api:critical_damage',
			$UUID.randomUUID(),
			"Weapon modifier",
			0.8,
			$AM$Operation.ADDITION
		);	
	});
	e.modify('aquamirae:fin_cutter', (item) => {
		item.addAttribute(
			'minecraft:generic.attack_damage',
			$UUID.randomUUID(),
			"Weapon modifier",
			2,
			$AM$Operation.ADDITION
		);
		item.addAttribute(
			'obscure_api:critical_hit',
			$UUID.randomUUID(),
			"Weapon modifier",
			0.2,
			$AM$Operation.ADDITION
		);
		item.addAttribute(
			'obscure_api:critical_damage',
			$UUID.randomUUID(),
			"Weapon modifier",
			0.8,
			$AM$Operation.ADDITION
		);	
	});
	e.modify('aquamirae:poisoned_blade', (item) => {
		item.addAttribute(
			'minecraft:generic.attack_damage',
			$UUID.randomUUID(),
			"Weapon modifier",
			1,
			$AM$Operation.ADDITION
		);
		item.addAttribute(
			'obscure_api:critical_hit',
			$UUID.randomUUID(),
			"Weapon modifier",
			0.8,
			$AM$Operation.ADDITION
		);
		item.addAttribute(
			'obscure_api:critical_damage',
			$UUID.randomUUID(),
			"Weapon modifier",
			0.8,
			$AM$Operation.ADDITION
		);	
	});
	e.modify('aquamirae:remnants_saber', (item) => {
		item.addAttribute(
			'minecraft:generic.attack_damage',
			$UUID.randomUUID(),
			"Weapon modifier",
			1,
			$AM$Operation.ADDITION
		);
		item.addAttribute(
			'minecraft:generic.attack_speed',
			$UUID.randomUUID(),
			"Weapon modifier",
			0.1,
			$AM$Operation.ADDITION
		);	
	});
	e.modify('aquamirae:whisper_of_the_abyss', (item) => {
		item.addAttribute(
			'minecraft:generic.attack_damage',
			$UUID.randomUUID(),
			"Weapon modifier",
			3,
			$AM$Operation.ADDITION
		);
		item.addAttribute(
			'obscure_api:critical_hit',
			$UUID.randomUUID(),
			"Weapon modifier",
			0.25,
			$AM$Operation.ADDITION
		);
		item.addAttribute(
			'obscure_api:critical_damage',
			$UUID.randomUUID(),
			"Weapon modifier",
			1.1,
			$AM$Operation.ADDITION
		);	
	});
	e.modify('aquamirae:divider', (item) => {
		item.addAttribute(
			'minecraft:generic.attack_damage',
			$UUID.randomUUID(),
			"Weapon modifier",
			3, //10
			$AM$Operation.ADDITION
		);
		item.addAttribute(
			'minecraft:generic.attack_speed',
			$UUID.randomUUID(),
			"Weapon modifier",
			0.4,
			$AM$Operation.ADDITION
		);
		item.addAttribute(
			'obscure_api:critical_hit',
			$UUID.randomUUID(),
			"Weapon modifier",
			0.15,
			$AM$Operation.ADDITION
		);
		item.addAttribute(
			'obscure_api:critical_damage',
			$UUID.randomUUID(),
			"Weapon modifier",
			1.25,
			$AM$Operation.ADDITION
		);	
	});
	e.modify('aquamirae:dagger_of_greed', (item) => {
		item.addAttribute(
			'obscure_api:critical_hit',
			$UUID.randomUUID(),
			"Weapon modifier",
			0.95,
			$AM$Operation.ADDITION
		);
		item.addAttribute(
			'obscure_api:critical_damage',
			$UUID.randomUUID(),
			"Weapon modifier",
			2.4,
			$AM$Operation.ADDITION
		);	
	});
	e.modify('aquamirae:coral_lance', (item) => {
		item.addAttribute(
			'minecraft:generic.attack_damage',
			$UUID.randomUUID(),
			"Weapon modifier",
			5, //19
			$AM$Operation.ADDITION
		);
		item.addAttribute(
			'minecraft:generic.attack_speed',
			$UUID.randomUUID(),
			"Weapon modifier",
			0.1,
			$AM$Operation.ADDITION
		);
		item.addAttribute(
			'obscure_api:critical_hit',
			$UUID.randomUUID(),
			"Weapon modifier",
			0.3,
			$AM$Operation.ADDITION
		);
		item.addAttribute(
			'obscure_api:critical_damage',
			$UUID.randomUUID(),
			"Weapon modifier",
			2.1,
			$AM$Operation.ADDITION
		);	
	});
	e.modify('aquamirae:sweet_lance', (item) => {
		item.addAttribute(
			'minecraft:generic.attack_damage',
			$UUID.randomUUID(),
			"Weapon modifier",
			5, //19
			$AM$Operation.ADDITION
		);
		item.addAttribute(
			'minecraft:generic.attack_speed',
			$UUID.randomUUID(),
			"Weapon modifier",
			0.1,
			$AM$Operation.ADDITION
		);
		item.addAttribute(
			'obscure_api:critical_hit',
			$UUID.randomUUID(),
			"Weapon modifier",
			0.3,
			$AM$Operation.ADDITION
		);
		item.addAttribute(
			'obscure_api:critical_damage',
			$UUID.randomUUID(),
			"Weapon modifier",
			2.1,
			$AM$Operation.ADDITION
		);	
	});
	e.modify('cataclysm:infernal_forge', (item) => {
		item.addAttribute(
			'minecraft:generic.attack_damage',
			$UUID.randomUUID(),
			"Weapon modifier",
			8, //20
			$AM$Operation.ADDITION
		);
		item.addAttribute(
			'obscure_api:critical_hit',
			$UUID.randomUUID(),
			"Weapon modifier",
			0.8,
			$AM$Operation.ADDITION
		);
		item.addAttribute(
			'obscure_api:critical_damage',
			$UUID.randomUUID(),
			"Weapon modifier",
			4.6,
			$AM$Operation.ADDITION
		);	
	});
	e.modify('cataclysm:void_forge', (item) => {
		item.addAttribute(
			'minecraft:generic.attack_damage',
			$UUID.randomUUID(),
			"Weapon modifier",
			11, //24
			$AM$Operation.ADDITION
		);
		item.addAttribute(
			'obscure_api:critical_hit',
			$UUID.randomUUID(),
			"Weapon modifier",
			0.99,
			$AM$Operation.ADDITION
		);
		item.addAttribute(
			'obscure_api:critical_damage',
			$UUID.randomUUID(),
			"Weapon modifier",
			5.0,
			$AM$Operation.ADDITION
		);	
	});
	e.modify('fromtheshadows:thirst_for_blood', (item => {
		item.addAttribute(
			'minecraft:generic.attack_damage',
			$UUID.randomUUID(),
			"Weapon modifier",
			6, //15
			$AM$Operation.ADDITION
		);
		item.addAttribute(
			'obscure_api:critical_hit',
			$UUID.randomUUID(),
			"Weapon modifier",
			0.175,
			$AM$Operation.ADDITION
		);
		item.addAttribute(
			'obscure_api:critical_damage',
			$UUID.randomUUID(),
			"Weapon modifier",
			0.98,
			$AM$Operation.ADDITION
		);	
	}))

	e.modify('aether:valkyrie_axe', (item) => {
		item.addAttribute(
			'minecraft:generic.attack_damage',
			$UUID.randomUUID(),
			"Weapon modifier",
			5, //14
			$AM$Operation.ADDITION
		);
		item.addAttribute(
			'minecraft:generic.attack_speed',
			$UUID.randomUUID(),
			"Weapon modifier",
			0.3,
			$AM$Operation.ADDITION
		);
		item.addAttribute(
			'obscure_api:critical_hit',
			$UUID.randomUUID(),
			"Weapon modifier",
			0.22,
			$AM$Operation.ADDITION
		);
		item.addAttribute(
			'obscure_api:critical_damage',
			$UUID.randomUUID(),
			"Weapon modifier",
			1.4,
			$AM$Operation.ADDITION
		);
	});
	
	e.modify('aether:vampire_blade', (item) => {
		item.addAttribute(
			'minecraft:generic.attack_damage',
			$UUID.randomUUID(),
			"Weapon modifier",
			5, //12
			$AM$Operation.ADDITION
		);
		item.addAttribute(
			'obscure_api:critical_hit',
			$UUID.randomUUID(),
			"Weapon modifier",
			0.2,
			$AM$Operation.ADDITION
		);
		item.addAttribute(
			'obscure_api:critical_damage',
			$UUID.randomUUID(),
			"Weapon modifier",
			1.25,
			$AM$Operation.ADDITION
		);
	});
	
	e.modify('aether:holy_sword', (item) => {
		item.addAttribute(
			'minecraft:generic.attack_damage',
			$UUID.randomUUID(),
			"Weapon modifier",
			5, //12
			$AM$Operation.ADDITION
		);
		item.addAttribute(
			'obscure_api:critical_hit',
			$UUID.randomUUID(),
			"Weapon modifier",
			0.2,
			$AM$Operation.ADDITION
		);
		item.addAttribute(
			'obscure_api:critical_damage',
			$UUID.randomUUID(),
			"Weapon modifier",
			1.25,
			$AM$Operation.ADDITION
		);
	});
	
	e.modify('aether:lightning_sword', (item) => {
		item.addAttribute(
			'minecraft:generic.attack_damage',
			$UUID.randomUUID(),
			"Weapon modifier",
			5, //12
			$AM$Operation.ADDITION
		);
		item.addAttribute(
			'obscure_api:critical_hit',
			$UUID.randomUUID(),
			"Weapon modifier",
			0.2,
			$AM$Operation.ADDITION
		);
		item.addAttribute(
			'obscure_api:critical_damage',
			$UUID.randomUUID(),
			"Weapon modifier",
			1.25,
			$AM$Operation.ADDITION
		);
	});
	
	e.modify('aether:flaming_sword', (item) => {
		item.addAttribute(
			'minecraft:generic.attack_damage',
			$UUID.randomUUID(),
			"Weapon modifier",
			5, //12
			$AM$Operation.ADDITION
		);
		item.addAttribute(
			'obscure_api:critical_hit',
			$UUID.randomUUID(),
			"Weapon modifier",
			0.2,
			$AM$Operation.ADDITION
		);
		item.addAttribute(
			'obscure_api:critical_damage',
			$UUID.randomUUID(),
			"Weapon modifier",
			1.25,
			$AM$Operation.ADDITION
		);
	});
	//#endregion
});