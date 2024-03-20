const GraphQLObjectType = require('graphql')

const TaskType = new GraphQLObjectType({
    name: 'Task',
    fields: {
      id: { type: GraphQLString },
      title: { type: GraphQLString },
      weight: { type: GraphQLInt },
      description: { type: GraphQLString },
      project:{
        type: ProjectType,
        resolve(parent, args){
          return _.find(projects, {id:parent.projectId});
      }
    },
  },
});
