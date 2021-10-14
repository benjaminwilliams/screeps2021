const config = require('config')
// depricated
const homeRoom = function (creep) {
    const route = Game.map.findRoute(creep.room, config.myRoom)
                if(route.length > 0 && !creep.room.curr){
                    const exit = creep.pos.findClosestByRange(route[0].exit);
                    creep.moveTo(exit, {visualizePathStyle: {stroke: '#ffaa00'}});
                }
}
module.exports = {
    homeRoom
};