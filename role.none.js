const config = require('config')
const pathFind = require('move.pathfinder')
const Creep = require('class.creep')

var roleNone = {
   
    run: function(creep) {

        // if(creep.carry.energy < creep.carryCapacity) {
        //     // find minerals
        //     Creep.moveToSource(creep, 1)
        // }
        // else {
            // go home
           targets = Creep.findStorage(creep)
           if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                pathFind(creep, targets[0])
                
            }

        //}
	}
};

module.exports = roleNone;

