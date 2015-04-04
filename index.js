var append = function(base, addition) {
    if(base.Riding)
        append(base.Riding, addition);
    else
        base.Riding = addition;
};

module.exports = function(commands) {
    var entityObject = { 'Command': 'setblock ~ ~ ~ minecraft:flowing_lava 7' };
    commands.reverse().map(function(cmd) {
        append(entityObject, {
            id: 'MinecartCommandBlock',
            Command: cmd
        });
    });
    append(entityObject, {
        id: 'MinecartCommandBlock',
        Command: 'noop',
        Riding: {
            id: 'FallingSand',
            TileID: 157,
            Time: 1
        }
    });
    return 'summon MinecartCommandBlock ~ ~1 ~ ' + JSON.stringify(entityObject).replace(/"/g, '');
};
