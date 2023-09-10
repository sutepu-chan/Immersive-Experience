
const $UUID = Java.loadClass("java.util.UUID")
const $AM$Operation = Java.loadClass("net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation")
// https://lexxie.site/forge/1.19.2/net/minecraft/world/entity/ai/attributes/AttributeModifier.Operation.html
ItemEvents.modification((event) => {
	/*
	event.modify("kubejs:iron_longsword", (item) => {
		item.addAttribute(
			"forge:attack_reach", //attribute ID
			$UUID.randomUUID(),  
			"Weapon modifier",
			1, 
			$AM$Operation.ADDITION  //$AM$Operation.MULTIPLY_TOTAL (1.2 = *120%)
		);
		item.rarity = "EPIC"; // no use
	});
	*/
});
