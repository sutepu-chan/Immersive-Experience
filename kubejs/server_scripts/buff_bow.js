ServerEvents.recipes(e => {
    const bowSets = [
        'nyfsarcheryplus:iron',
        'nyfsarcheryplus:golden',
        'nyfsarcheryplus:diamond',
        'nyfsarcheryplus:netherite',
    ];
    bowSets.forEach(set => {
        e.remove({ output: `${set.name}_bow` });
        e.remove({ output: `${set.name}_crossbow` });
    });
    //iron
    e.shaped(Item.of('nyfsarcheryplus:iron_bow', `{
        AttributeModifiers:[
            {
                Amount:10,
                AttributeName:"projectile_damage:generic",
                Name:"Bow modifier",
                Slot:mainhand,
                UUID:[I;-123816,25359,15646,-50718]
            }
        ]
    }`), [' CM', 'CBM', ' CM'], {
        B: 'minecraft:bow',
        C: 'minecraft:crying_obsidian',
        M: 'minecraft:iron_ingot'
    }).id(`kubejs:nyfsarcheryplus/iron_bow`);
    e.shaped(Item.of('nyfsarcheryplus:iron_crossbow', `{
        AttributeModifiers:[
            {
                Amount:13,
                AttributeName:"projectile_damage:generic",
                Name:"Bow modifier",
                Slot:mainhand,
                UUID:[I;-123816,25459,15646,-50918]
            }
        ]
    }`), [' CM', 'CBM', ' CM'], {
        B: 'minecraft:crossbow',
        C: 'minecraft:crying_obsidian',
        M: 'minecraft:iron_ingot'
    }).id(`kubejs:nyfsarcheryplus/iron_crossbow`);
    //gold
    e.shaped(Item.of('nyfsarcheryplus:golden_bow', `{
        AttributeModifiers:[
            {
                Amount:14,
                AttributeName:"projectile_damage:generic",
                Name:"Bow modifier",
                Slot:mainhand,
                UUID:[I;-123816,25359,15646,-51118]
            }
        ]
    }`), [' CM', 'CBM', ' CM'], {
        B: 'nyfsarcheryplus:iron_bow',
        C: 'endrem:nether_eye',
        M: 'minecraft:gold_ingot'
    }).id(`kubejs:nyfsarcheryplus/golden_bow`);
    e.shaped(Item.of('nyfsarcheryplus:golden_crossbow', `{
        AttributeModifiers:[
            {
                Amount:17,
                AttributeName:"projectile_damage:generic",
                Name:"Bow modifier",
                Slot:mainhand,
                UUID:[I;-123816,25459,15646,-51318]
            }
        ]
    }`), [' CM', 'CBM', ' CM'], {
        B: 'nyfsarcheryplus:iron_crossbow',
        C: 'endrem:nether_eye',
        M: 'minecraft:gold_ingot'
    }).id(`kubejs:nyfsarcheryplus/golden_crossbow`);
    //diamond
    e.shaped(Item.of('nyfsarcheryplus:diamond_bow', `{
        AttributeModifiers:[
            {
                Amount:18,
                AttributeName:"projectile_damage:generic",
                Name:"Bow modifier",
                Slot:mainhand,
                UUID:[I;-123816,25359,15646,-51518]
            }
        ]
    }`), [' CM', 'CBM', ' CM'], {
        B: 'nyfsarcheryplus:golden_bow',
        C: 'deeperdarker:warden_carapace',
        M: 'minecraft:diamond'
    }).id(`kubejs:nyfsarcheryplus/diamond_bow`);
    e.shaped(Item.of('nyfsarcheryplus:diamond_crossbow', `{
        AttributeModifiers:[
            {
                Amount:21,
                AttributeName:"projectile_damage:generic",
                Name:"Bow modifier",
                Slot:mainhand,
                UUID:[I;-123816,25459,15646,-51718]
            }
        ]
    }`), [' CM', 'CBM', ' CM'], {
        B: 'nyfsarcheryplus:golden_crossbow',
        C: 'deeperdarker:warden_carapace',
        M: 'minecraft:diamond'
    }).id(`kubejs:nyfsarcheryplus/diamond_crossbow`);
    //netherite
    e.shaped(Item.of('nyfsarcheryplus:netherite_bow', `{
        AttributeModifiers:[
            {
                Amount:22,
                AttributeName:"projectile_damage:generic",
                Name:"Bow modifier",
                Slot:mainhand,
                UUID:[I;-123816,25359,15646,-51918]
            }
        ]
    }`), [' CM', 'CBM', ' CM'], {
        B: 'nyfsarcheryplus:diamond_bow',
        C: 'obscure_api:astral_dust',
        M: 'minecraft:netherite_ingot'
    }).id(`kubejs:nyfsarcheryplus/netherite_bow`);
    e.shaped(Item.of('nyfsarcheryplus:netherite_crossbow', `{
        AttributeModifiers:[
            {
                Amount:25,
                AttributeName:"projectile_damage:generic",
                Name:"Bow modifier",
                Slot:mainhand,
                UUID:[I;-123816,25459,15646,-52118]
            }
        ]
    }`), [' CM', 'CBM', ' CM'], {
        B: 'nyfsarcheryplus:diamond_crossbow',
        C: 'obscure_api:astral_dust',
        M: 'minecraft:netherite_ingot'
    }).id(`kubejs:nyfsarcheryplus/netherite_crossbow`);
})