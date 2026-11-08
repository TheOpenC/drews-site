import {defineType, defineField} from 'sanity'

export const projectType = defineType ({
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title', 
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
        }),
        defineField({
            name: 'image',
            title: 'Main Image',
            type: 'image',
        }),
    ],
})

