REIEvents.removeCategories(e => {
    let id = [
        'minecraft:plugins/anvil',
        'minecraft:plugins/blasting',
        'minecraft:plugins/smoking',
        'minecraft:plugins/campfire',
        'minecraft:plugins/tag',
        'minecraft:plugins/composting',
        'minecraft:plugins/stripping',
        'minecraft:plugins/pathing',
        'minecraft:plugins/waxing',
        'minecraft:plugins/wax_scraping',
        'minecraft:plugins/oxidizing',
        'minecraft:plugins/oxidation_scraping',
        'car:painter_yellow',
    ];
    id.forEach(i => {
        e.remove(i);
    });
});
// backup of category sort
/*
minecraft:crafting
minecraft:brewing
minecraft:furnace
minecraft:smithing
car:car_workshop
cataclysm:weapon_infusion
farmersdelight:cooking
farmersdelight:cutting
farmersdelight:decomposition
nethersdelight:composition
tofucraft:bittern
tofucraft:harden
touhou_little_maid:altar
vinery:apple_mashing
vinery:wine_fermentation
irons_spellbooks:alchemist_cauldron
irons_spellbooks:arcane_anvil
irons_spellbooks:scroll_forge
waystones:warp_plate
create:automatic_brewing
create:automatic_packing
create:automatic_shaped
create:automatic_shapeless
create:block_cutting
create:crushing
create:deploying
create:draining
create:fan_blasting
create:fan_haunting
create:fan_smoking
create:fan_washing
create:item_application
create:mechanical_crafting
create:milling
create:mixing
create:mystery_conversion
create:packing
create:pressing
create:sandpaper_polishing
create:sawing
create:sequenced_assembly
create:spout_filling
create:wood_cutting
createaddition:charging
createaddition:liquid_burning
createaddition:rolling
createoreexcavation:drilling
createoreexcavation:extractor
createoreexcavation:veins
create_mechanical_spawner:spawner
minecraft:stonecutting
corail_woodcutter:woodcutting
domum_ornamentum:architects_cutter
framedblocks:framing_saw
rechiseled:chiseling
manyideas_core:dyed
manyideas_core:grinding
manyideas_core:table_sawing_diamond
manyideas_core:table_sawing_iron
manyideas_core:table_sawing_stone
car:painter
minecraft:compostable
minecraft:fuel
ironfurnaces:generator_blasting
ironfurnaces:generator_regular
ironfurnaces:generator_smoking
jeresources:dungeon
jeresources:enchantment
jeresources:mob
jeresources:plant
jeresources:villager
jeresources:worldgen
jearchaeology:brush
jearchaeology:sniff
justenoughbreeding:breeding
minecolonies:alchemist
minecolonies:baker
minecolonies:beekeeper
minecolonies:blacksmith
minecolonies:chickenherder
minecolonies:composting
minecolonies:concretemixer
minecolonies:cookassistant
minecolonies:cowboy
minecolonies:crusher
minecolonies:dyer
minecolonies:enchanter
minecolonies:farmer
minecolonies:fishing
minecolonies:fletcher
minecolonies:glassblower
minecolonies:lumberjack
minecolonies:mechanic
minecolonies:netherworker
minecolonies:planter
minecolonies:rabbitherder
minecolonies:sawmill
minecolonies:shepherd
minecolonies:sifter
minecolonies:smelter
minecolonies:stonemason
minecolonies:stonesmeltery
minecolonies:swineherder
minecolonies:tools
minecraft:anvil
minecraft:blasting
minecraft:campfire
minecraft:smoking
car:painter_yellow
*/