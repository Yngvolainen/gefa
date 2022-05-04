import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// import project from './documents/project.js'
// import client from './documents/client.js'
// import collaborator from './documents/collaborator.js'

// import test from './documents/test.js'

export default createSchema({
	name: 'default',
	types: schemaTypes.concat([
		// project,
		// client,
		// collaborator
	]),
})
