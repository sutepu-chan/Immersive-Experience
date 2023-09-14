ServerEvents.recipes(e => {
    let unifyMetal = (unifyTag, itemArr) => {
        itemArr.forEach(item => {
            e.replaceInput({input: item}, item, unifyTag);
        });
        e.replaceOutput({output: unifyTag}, unifyTag, itemArr[0]);
    };
    unifyMetal('#forge:gems/jade', ['epicsamurai:jade', 'epicpaladins:jade_gem']);
    unifyMetal('#forge:storage_blocks/jade', ['epicsamurai:jade_block', 'epicpaladins:jade_block']);
    unifyMetal('#forge:ingots/steel', ['epicsamurai:steel_ingot', 'epicpaladins:steel_ingot']);
    unifyMetal('#forge:nuggets/steel', ['epicsamurai:steel_nugget', 'epicpaladins:steel_nugget']);
    unifyMetal('#forge:storage_blocks/steel', ['epicsamurai:steel_block', 'epicpaladins:steel_block']);

    e.remove({id: 'car:iron_stick'});
    e.replaceInput({input: 'car:iron_stick'}, 'car:iron_stick', '#forge:rods/iron');
    e.replaceOutput({output: '#forge:rods/iron'}, '#forge:rods/iron', 'createaddition:iron_rod');

    //fixing steel recipe
    e.smelting('epicsamurai:steel_ingot', 'minecraft:iron_ingot');
    e.blasting('epicsamurai:steel_ingot', 'minecraft:iron_ingot');
});