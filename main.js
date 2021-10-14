const config = require('config')
const { ROLES } = require('constants')
const roleHarvester = require('role.harvester')
const roleBuilder = require('role.builder')
const roleUpgrader = require('role.upgrader')
const roleRepairer = require('role.repairer')
const roleNone = require('role.none')

const taskEdit = require('task.edit')
const taskCreate = require('task.create')
const taskPopControl = require('task.popControl')
const taskTower = require('task.tower')
const taskCleanUp = require('task.cleanUp')

module.exports.loop = function () {
    
    taskCleanUp.cleanMemory()
    taskPopControl.run()
    taskTower.defend()
    taskTower.repair()

    for(var name in Game.creeps) {
        const creep = Game.creeps[name]
        switch(creep.memory.role) {
            case ROLES.HARVESTER:
                roleHarvester.run(creep)
                break
            case ROLES.BUILDER:
                roleBuilder.run(creep)
                break
            case ROLES.UPGRADER: 
                roleUpgrader.run(creep)
                break
            case ROLES.REPAIER:
                roleRepairer.run(creep)
            default:
                roleNone.run(creep)
                

        }
    }
    
};

info = {
    listCreeps: function () {
        var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
        var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
        var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
        var repairers = _.filter(Game.creeps, (creep) => creep.memory.role == 'repairer');


        console.log('Harvesters: ' + harvesters.length + " | target: " + config.targetCreeps.harvester);
        console.log('upgraders: ' + upgraders.length + " | target: " + config.targetCreeps.upgrader);
        console.log('builders: ' + builders.length + " | target: " + config.targetCreeps.builder);
        console.log('repairers: ' + repairers.length + " | target: " + config.targetCreeps.repairer);

    }
};