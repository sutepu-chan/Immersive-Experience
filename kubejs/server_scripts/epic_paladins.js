ServerEvents.recipes(e => {
    //the recipes are weird...
    const toolTypes = [
        'pickaxe',
        'axe',
        'shovel',
        'hoe',
        'sword'
    ]
    const modifyRecipes = (name) => {
        toolTypes.forEach(toolType => {
            e.remove({ output: `${name}_${toolType}` });
            e.smithing(
                `${name}_${toolType}`,
                `${name}_template`,
                `minecraft:netherite_${toolType}`,
                `${name}_gem`
            );
        });
    };
    let items = [
        'epicpaladins:arclight',
        'epicpaladins:bloodstone',
        'epicpaladins:cryorium',
        'epicpaladins:moonlight',
    ]
    items.forEach(item => modifyRecipes(item));

    toolTypes.forEach(toolType => {
        e.remove({ output: `epicpaladins:jade_${toolType}` });
        e.smithing(
            `epicpaladins:jade_${toolType}`,
            `epicpaladins:jade_template`,
            `minecraft:netherite_${toolType}`,
            '#forge:gems/jade'
        );
        e.remove({ output: `epicpaladins:sculk_${toolType}` });
        e.smithing(
            `epicpaladins:sculk_${toolType}`,
            `epicpaladins:sculk_template`,
            `minecraft:netherite_${toolType}`,
            'deeperdarker:reinforced_echo_shard'
        );
    });

    e.remove({ output: 'epicpaladins:moonlight_glaive' });
    e.smithing(
        'epicpaladins:moonlight_glaive',
        'majruszsdifficulty:enderium_upgrade_smithing_template',
        'epicpaladins:moonlight_sword',
        'epicpaladins:moonlight_gem'
    );
    e.remove({ output: 'epicpaladins:cryorium_battle_axe' });
    e.smithing(
        'epicpaladins:cryorium_battle_axe',
        'majruszsdifficulty:enderium_upgrade_smithing_template',
        'epicpaladins:cryorium_axe',
        'epicpaladins:cryorium_gem'
    );
    e.remove({ output: 'epicpaladins:angel_sword' });
    e.smithing(
        'epicpaladins:angel_sword',
        'majruszsdifficulty:enderium_upgrade_smithing_template',
        'epicpaladins:arclight_sword',
        'epicpaladins:arclight_gem'
    );
})