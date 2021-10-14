const moveActions = require('move.actions')
const Creep = require('class.creep')

function build(creep) {
    var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
    if(targets.length) {
        if(creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
            creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffaa00'}});
        }
    } else {
        moveActions.homeRoom(creep)
    }
}

const roleBuilder = {
    run: function(creep) {
        if(creep.memory.building === undefined){
            creep.memory.building = false
        }

        if(creep.memory.building && creep.carry.energy == 0) {
            creep.memory.building = false;
            creep.say('🔄 harvest');
        }
        if(!creep.memory.building && creep.carry.energy == creep.carryCapacity) {
            creep.memory.building = true;
            creep.say('🚧 build');
        }
        if(creep.memory.building) {
            build(creep)
        }
        else {
            // find minerals
            Creep.moveToSource(creep, 1)
        }
    }
};

module.exports = roleBuilder;