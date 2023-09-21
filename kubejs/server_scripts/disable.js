ServerEvents.recipes(e => {
    global.recipe_disable.forEach(item => {
        e.remove({ output: item });
        e.remove({ mod: 'ftbquests' });
        e.remove({ mod: 'itemfilters' });
        e.remove({ mod: 'libraryferret' });
    })
})