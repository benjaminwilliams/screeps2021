const pathFind = require('move.pathfinder')
const config = require('config')

const Creep = {
    
    moveToSource: function(creep, value = 0) {
        var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[value]) == ERR_NOT_IN_RANGE) {
                pathFind(creep, sources[value])
            }
    },
    findStorage: function(creep) {
         return creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return (structure.structureType == STRUCTURE_EXTENSION ||
                        structure.structureType == STRUCTURE_SPAWN ||
                        structure.structureType == STRUCTURE_TOWER) && structure.energy < structure.energyCapacity;
                }
            });
    },
    findController: function(creep) {
        return Game.rooms[config.myRoom].controller
    }
}

module.exports = Creep