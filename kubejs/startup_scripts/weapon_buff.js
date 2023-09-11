const $UUID = Java.loadClass("java.util.UUID")
const $AM$Operation = Java.loadClass("net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation")
// https://lexxie.site/forge/1.19.2/net/minecraft/world/entity/ai/attributes/AttributeModifier.Operation.html


/*
===== Armor =====
minecraft:generic.armor
minecraft:generic.armor_toughness
minecraft:generic.knockback_resistance
minecraft:generic.max_health
minecraft:generic.movement_speed

===== Armor miscellaneous =====
combatroll:count
forge:swim_speed

===== Weapon =====
minecraft:generic.attack_damage
obscure_api:critical_hit (in decimal: 0-1)
obscure_api:critical_damage (extra crit damage)
minecraft:generic.attack_speed (1= original attack speed-1)
minecraft:generic.attack_knockback (1= 0.5 block knockback)

===== Weapon miscellaneous =====
forge:entity_reach
*/
ItemEvents.modification(e => {
	const sets = [
		{
			name: 'advancednetherite:netherite_iron',
			attributes: {
				attack_damage: 1,
				critical_hit: 0.3,
				critical_damage: 150,
				attack_speed: 1,
				attack_knockback: 1
			}
		},
		{
			name: 'advancednetherite:netherite_gold',
			attributes: {
				attack_damage: 2,
			}
		},
		{
			name: 'advancednetherite:netherite_emerald',
			attributes: {
				attack_damage: 3,
			}
		},
		{
			name: 'advancednetherite:netherite_diamond',
			attributes: {
				attack_damage: 4,

			}
		},
		{
			name: 'majruszsdifficulty:enderium',
			attributes: {
				attack_damage: 7,
			}
		},
	];
	// Swords
	for (const set of sets) {
		e.modify(`${set.name}_sword`, (item) => {
			if (set.attributes.attack_damage != null) {
				item.addAttribute(
					'minecraft:generic.attack_damage', //attribute ID
					$UUID.randomUUID(),
					"Weapon modifier",
					set.attributes.attack_damage,
					$AM$Operation.ADDITION  //$AM$Operation.MULTIPLY_TOTAL (1.2 = *120%)
				);
			};
			if (set.attributes.critical_hit != null) {
				item.addAttribute(
					'obscure_api:critical_hit', //attribute ID
					$UUID.randomUUID(),
					"Weapon modifier",
					set.attributes.critical_hit,
					$AM$Operation.ADDITION  //$AM$Operation.MULTIPLY_TOTAL (1.2 = *120%)
				);
			};
			if (set.attributes.critical_damage != null) {
				item.addAttribute(
					'obscure_api:critical_damage', //attribute ID
					$UUID.randomUUID(),
					"Weapon modifier",
					set.attributes.critical_damage,
					$AM$Operation.ADDITION  //$AM$Operation.MULTIPLY_TOTAL (1.2 = *120%)
				);
			};
			if (set.attributes.attack_speed != null) {
				item.addAttribute(
					'minecraft:generic.attack_speed', //attribute ID
					$UUID.randomUUID(),
					"Weapon modifier",
					set.attributes.attack_speed,
					$AM$Operation.ADDITION  //$AM$Operation.MULTIPLY_TOTAL (1.2 = *120%)
				);
			};
			if (set.attributes.attack_knockback != null) {
				item.addAttribute(
					'minecraft:generic.attack_knockback', //attribute ID
					$UUID.randomUUID(),
					"Weapon modifier",
					set.attributes.attack_knockback,
					$AM$Operation.ADDITION  //$AM$Operation.MULTIPLY_TOTAL (1.2 = *120%)
				);
			};
		});
	};
});