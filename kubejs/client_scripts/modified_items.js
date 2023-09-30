REIEvents.hide('item', e => {

    const buffedItems = [
        'cataclysm:the_incinerator',
        'cataclysm:gauntlet_of_bulwark',
        'cataclysm:tidal_claws',
        'cataclysm:gauntlet_of_guard',
        'fromtheshadows:thirst_for_blood'
    ];
    cataclysmItems.forEach(item => {
        e.hide(item);
    });

    const bowItems = [
        'nyfsarcheryplus:iron',
        'nyfsarcheryplus:golden',
        'nyfsarcheryplus:diamond',
        'nyfsarcheryplus:netherite',
    ];
    bowItems.forEach(item => {
        e.hide(`${item}_bow`);
        e.hide(`${item}_crossbow`);
    });

});


// attribute UUID generator
// https://www.gamergeeks.net/apps/minecraft/give-command-generator
REIEvents.add('item', e => { 
    
    //#region cataclysm
    e.add(Item.of('cataclysm:the_incinerator', `{
        AttributeModifiers:[
            {
                Amount:32,
                AttributeName:"minecraft:generic.attack_damage",
                Name:"Weapon modifier",
                Slot:mainhand,
                UUID:[I;-123815,4834,23275,-9468]
            },
            {
                Amount:-2.6,
                AttributeName:"minecraft:generic.attack_speed",
                Name:"Weapon modifier",
                Slot:mainhand,
                UUID:[I;-123815,4834,23275,-9468]
            },
            {
                AttributeName:"obscure_api:critical_hit",
                Amount:0.8,
                Name:"Weapon modifier",
                Slot:mainhand,
                UUID:[I;-123815,4834,23275,-9668]
            },
            {
                AttributeName:"obscure_api:critical_damage",
                Amount:5.0,
                Name:"Weapon modifier",
                Slot:mainhand,
                UUID:[I;-123815,4834,23275,-9868]
            }
        ]
    }`));

    e.add(Item.of('cataclysm:gauntlet_of_guard', `{
        AttributeModifiers:[
            {
                Amount:23,
                AttributeName:"minecraft:generic.attack_damage",
                Name:"Weapon modifier",
                Slot:mainhand,
                UUID:[I;-123816,23513,35530,-47026]
            },
            {
                Amount:-2.7,
                AttributeName:"minecraft:generic.attack_speed",
                Name:"Weapon modifier",
                Slot:mainhand,
                UUID:[I;-123816,23613,35530,-47226]
            },
            {
                AttributeName:"obscure_api:critical_hit",
                Amount:0.55,
                Name:"Weapon modifier",
                Slot:mainhand,
                UUID:[I;-123816,23613,35530,-47426]
            },
            {
                AttributeName:"obscure_api:critical_damage",
                Amount:3.8,
                Name:"Weapon modifier",
                Slot:mainhand,
                UUID:[I;-123816,23613,35530,-47626]
            }
        ]
    }`));

    e.add(Item.of('cataclysm:gauntlet_of_bulwark', `{
        AttributeModifiers:[
            {
                Amount:26,
                AttributeName:"minecraft:generic.attack_damage",
                Name:"Weapon modifier",
                Slot:mainhand,
                UUID:[I;-123816,25513,35530,-51026]
            },
            {
                Amount:-2.7,
                AttributeName:"minecraft:generic.attack_speed",
                Name:"Weapon modifier",
                Slot:mainhand,
                UUID:[I;-123816,25613,35530,-51226]
            },
            {
                AttributeName:"obscure_api:critical_hit",
                Amount:0.65,
                Name:"Weapon modifier",
                Slot:mainhand,
                UUID:[I;-123816,25713,35530,-51426]
            },
            {
                AttributeName:"obscure_api:critical_damage",
                Amount:3.0,
                Name:"Weapon modifier",
                Slot:mainhand,
                UUID:[I;-123816,25813,35530,-51626]
            }
        ]
    }`));

    e.add(Item.of('cataclysm:tidal_claws', `{
        AttributeModifiers:[
            {
                Amount:28,
                AttributeName:"minecraft:generic.attack_damage",
                Name:"Weapon modifier",
                Slot:mainhand,
                UUID:[I;-123816,24513,35530,-49026]
            },
            {
                Amount:-2.4,
                AttributeName:"minecraft:generic.attack_speed",
                Name:"Weapon modifier",
                Slot:mainhand,
                UUID:[I;-123816,24513,35530,-49226]
            },
            {
                AttributeName:"obscure_api:critical_hit",
                Amount:0.4,
                Name:"Weapon modifier",
                Slot:mainhand,
                UUID:[I;-123816,24513,35530,-49426]
            },
            {
                AttributeName:"obscure_api:critical_damage",
                Amount:3.5,
                Name:"Weapon modifier",
                Slot:mainhand,
                UUID:[I;-123816,24513,35530,-49626]
            }
        ]
    }`));

    e.add(Item.of('fromtheshadows:thirst_for_blood', `{
        AttributeModifiers:[
            {
                Amount:20,
                AttributeName:"minecraft:generic.attack_damage",
                Name:"Weapon modifier",
                Slot:mainhand,
                UUID:[I;-123830,20909,1600,-41818]
            },
            {
                Amount:-2.6,
                AttributeName:"minecraft:generic.attack_speed",
                Name:"Weapon modifier",
                Slot:mainhand,
                UUID:[I;-123830,20909,1600,-42018]
            },
            {
                AttributeName:"obscure_api:critical_hit",
                Amount:0.23,
                Name:"Weapon modifier",
                Slot:mainhand,
                UUID:[I;-123830,20909,1600,-42218]
            },
            {
                AttributeName:"obscure_api:critical_damage",
                Amount:1.35,
                Name:"Weapon modifier",
                Slot:mainhand,
                UUID:[I;-123830,20909,1600,-42418]
            }
        ]
    }`));
    //#endregion

    //#region bows
    e.add(Item.of('nyfsarcheryplus:iron_bow', `{
        AttributeModifiers:[
            {
                Amount:10,
                AttributeName:"projectile_damage:generic",
                Name:"Bow modifier",
                Slot:mainhand,
                UUID:[I;-123816,25359,15646,-50718]
            }
        ]
    }`));
    e.add(Item.of('nyfsarcheryplus:iron_crossbow', `{
        AttributeModifiers:[
            {
                Amount:13,
                AttributeName:"projectile_damage:generic",
                Name:"Bow modifier",
                Slot:mainhand,
                UUID:[I;-123816,25459,15646,-50918]
            }
        ]
    }`));
    e.add(Item.of('nyfsarcheryplus:golden_bow', `{
        AttributeModifiers:[
            {
                Amount:14,
                AttributeName:"projectile_damage:generic",
                Name:"Bow modifier",
                Slot:mainhand,
                UUID:[I;-123816,25359,15646,-51118]
            }
        ]
    }`));
    e.add(Item.of('nyfsarcheryplus:golden_crossbow', `{
        AttributeModifiers:[
            {
                Amount:17,
                AttributeName:"projectile_damage:generic",
                Name:"Bow modifier",
                Slot:mainhand,
                UUID:[I;-123816,25459,15646,-51318]
            }
        ]
    }`));
    e.add(Item.of('nyfsarcheryplus:diamond_bow', `{
        AttributeModifiers:[
            {
                Amount:18,
                AttributeName:"projectile_damage:generic",
                Name:"Bow modifier",
                Slot:mainhand,
                UUID:[I;-123816,25359,15646,-51518]
            }
        ]
    }`));
    e.add(Item.of('nyfsarcheryplus:diamond_crossbow', `{
        AttributeModifiers:[
            {
                Amount:21,
                AttributeName:"projectile_damage:generic",
                Name:"Bow modifier",
                Slot:mainhand,
                UUID:[I;-123816,25459,15646,-51718]
            }
        ]
    }`));
    e.add(Item.of('nyfsarcheryplus:netherite_bow', `{
        AttributeModifiers:[
            {
                Amount:22,
                AttributeName:"projectile_damage:generic",
                Name:"Bow modifier",
                Slot:mainhand,
                UUID:[I;-123816,25359,15646,-51918]
            }
        ]
    }`));
    e.add(Item.of('nyfsarcheryplus:netherite_crossbow', `{
        AttributeModifiers:[
            {
                Amount:25,
                AttributeName:"projectile_damage:generic",
                Name:"Bow modifier",
                Slot:mainhand,
                UUID:[I;-123816,25459,15646,-52118]
            }
        ]
    }`));
    //#endregion
});