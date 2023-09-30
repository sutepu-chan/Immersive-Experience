ServerEvents.recipes(e => {
    e.replaceOutput({ output: 'fromtheshadows:thirst_for_blood' }, 'fromtheshadows:thirst_for_blood',
        Item.of('fromtheshadows:thirst_for_blood', `{
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
        }`)
    );
});