ItemEvents.modification(e => {
	let colors = ['white', 'orange', 'magenta', 'light_blue', 'yellow', 'lime', 'pink', 'gray', 'light_gray', 'cyan', 'purple', 'blue', 'brown', 'green', 'red', 'black'];
	function modifyStack(listOfItems, countPerStack) {
		listOfItems.forEach(item => {
			e.modify(item, item => item.maxStackSize = countPerStack);
		});
	};
	modifyStack([
		'minecraft:ender_pearl',
		'minecraft:egg',
		'minecraft:honey_bottle',
		'minecraft:snowball',
		'minecraft:armor_stand',
		'minecraft:bucket',
		'minecraft:oak_sign',
		'minecraft:spruce_sign',
		'minecraft:oak_sign',
		'minecraft:spruce_sign',
		'minecraft:birch_sign',
		'minecraft:acacia_sign',
		'minecraft:jungle_sign',
		'minecraft:dark_oak_sign',
		'minecraft:crimson_sign',
		'minecraft:warped_sign',
		/endrem:.+/
	], 64);
	colors.forEach(color => {
		e.modify(`minecraft:${color}_banner`, item => item.maxStackSize = 64);
	});
});