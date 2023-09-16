ServerEvents.recipes(e => {
    //nbt
    /*
    `{
            AttributeModifiers:[
                {
                    Amount:32,
                    AttributeName:"minecraft:generic.attack_damage",
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
        }`
    */
    e.replaceOutput({ output: 'cataclysm:the_incinerator' }, 'cataclysm:the_incinerator',
        Item.of('cataclysm:the_incinerator', `{
            AttributeModifiers:[
                {
                    Amount:32,
                    AttributeName:"minecraft:generic.attack_damage",
                    Name:"Weapon modifier",
                    Slot:mainhand,
                    UUID:[I;-123815,4834,23275,-9468]
                },
                {
                    Amount:-2.4,
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
        }`)
    );
    e.replaceOutput({ output: 'cataclysm:gauntlet_of_bulwark' }, 'cataclysm:gauntlet_of_bulwark',
        Item.of('cataclysm:gauntlet_of_bulwark', `{
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
        }`)
    );
})

LootJS.modifiers(e => {
    e.addLootTypeModifier(LootType.ENTITY)
        .removeLoot('cataclysm:gauntlet_of_guard');
    e.addEntityLootModifier('cataclysm:ender_guardian').addLoot(Item.of('cataclysm:gauntlet_of_guard', `{
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

    e.addLootTypeModifier(LootType.ENTITY)
        .removeLoot('cataclysm:tidal_claws');
    e.addEntityLootModifier('cataclysm:the_leviathan').addLoot(Item.of('cataclysm:tidal_claws', `{
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
});