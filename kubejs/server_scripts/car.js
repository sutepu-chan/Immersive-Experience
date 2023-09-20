ServerEvents.recipes(e => {
    e.remove({id: 'car:blastfurnace'});
    e.shaped('car:blastfurnace', ['III', 'IFI', 'RRR'], {
        I: 'minecraft:iron_ingot',
        F: 'minecraft:furnace',
        R: 'minecraft:redstone_block'
    });
});