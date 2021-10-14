const Creep = require('class.creep')
const pathFind = require('move.pathfinder')

var roleUpgrader = {

    /** @param {Creep} creep **/
    run: function(creep) {
        if(creep.memory.upgrading === undefined) {
            creep.memory.upgrading = false
        }

        if(creep.memory.upgrading && creep.store[RESOURCE_ENERGY] == 0) {
            creep.memory.upgrading = false;
            creep.say('🔄 harvest');
	    }
	    if(!creep.memory.upgrading && creep.store.getFreeCapacity() == 0) {
	        creep.memory.upgrading = true;
	        creep.say('⚡ upgrade');
	    }

	    if(creep.memory.upgrading) {
	        target = Creep.findController(creep)
	        if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
	            pathFind(creep, target)
	        } 
        }
        else {
            Creep.moveToSource(creep, 0)
        }
	}
};

module.exports = roleUpgrader;