export default {
	title: 'Vi tester alle schema types',
	name: 'test',
	type: 'document',
	fields: [
		{
			title: 'Array primitives',
			description: 'Hvor jeg kan beskrive hva dette feltet gjør eller hvor innholdet vises',
			name: 'arrayPrimitives',
			type: 'array',
			of: [
				{ type: 'string' },
				{ type: 'number' },
				{ type: 'boolean' },
			],
			validation: Rule => Rule.required()
		},
		{
			title: 'Array objects',
			name: 'arrayObjects',
			type: 'array',
			of: [
				{ 
					type: 'object',
					fields: [{ name: 'name', type: 'string' }]
				},
			],
			validation: Rule => Rule.required()
		},
		{
			title: 'True?',
			name: 'booleanfield',
			type: 'boolean',
			options: {
				layout: 'checkbox'
			},
			validation: Rule => Rule.required()
		},
		{
			title: 'Dato',
			name: 'dato',
			type: 'date',
			options: {
				dateFormat: 'MMMM D YYYY'
			}
		},
		{
			title: 'Dato + klokkeslett',
			name: 'datoKlokkeslett',
			type: 'datetime',
			options: {
				dateFormat: 'MMMM D YYYY'
			}
		},
		{
			title: 'Numbers',
			name: 'numbers',
			type: 'number',
		},
		{
			title: 'File',
			name: 'thisIsFile',
			type: 'file',
			fields: [
				{
					title: 'Caption',
					name: 'caption',
					type: 'text',
					options: {
						isHighlighted: true
					}
				}
			]
		},
		{
			title: 'Image',
			name: 'thisIsImage',
			type: 'image',
			fields: [
				{
					title: 'Caption',
					name: 'caption',
					type: 'text',
					options: {
						isHighlighted: true
					}
				},
				{
					title: 'Monochrome',
					name: 'monochrome',
					type: 'boolean',
					options: {
						isHighlighted: true
					}
				}
			]
		},
		{
			title: 'Some string',
			name: 'someString',
			type: 'string',
		},
		{
			title: 'Slug',
			name: 'slug',
			type: 'slug',
			options: {
				source: 'someString'
			}
		},
		{
			title: 'My object',
			name: 'myObject',
			type: 'object',
			fields: [
				{
					name: 'name',
					description: 'hei!',
					type: 'string',
				},
				{
					name: 'year',
					type: 'number',
				}
			]
		}
	],

	preview: {
		select: {
			mySubString: 'someString',	//type:string
			myObjectName: 'myObject.name', //type: string
			myBeautifulImage: 'thisIsImage' //type: image
		},

		prepare: selection => {
			return {
				title: selection.mySubString,
				subtitle: selection.myObjectName,
				media: selection.myBeautifulImage
			}
		}  
	}
}