const graphql = require('graphql');
const PaintingType = require('./PaintingType');
const {
    GrapQLObjectType,
    GrapQLString,
    GrabQLSchema
} = graphql;

const RootQuery = new GrapQLObjectType({
    name : 'RooQueryType',
    fields : {
        painting : {
            type : PaintingType,
            args : { id : { type : GrapQLString } },
            resolve(parent, args){

            }
        }
    }
});


module.exports = new GraphQLSchema({
    query : RootQuery
});