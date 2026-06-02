import {defineField, defineType} from 'sanity'

export const post = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'excerpt',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'coverImage',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'body',
      type: 'array',
      of: [
        {type: 'block'},
        {type: 'image', options: {hotspot: true}},
        {
          type: 'object',
          name: 'instagram',
          title: 'Instagram post',
          fields: [
            defineField({
              name: 'url',
              title: 'Post URL',
              type: 'url',
              description:
                'Public Instagram post, reel, or IGTV URL (e.g. https://www.instagram.com/p/ABC123/)',
              validation: (rule) =>
                rule
                  .required()
                  .uri({scheme: ['http', 'https']})
                  .custom((value) => {
                    if (!value) return true
                    return /^https?:\/\/(www\.)?instagram\.com\/(p|reel|tv)\/[^/?#]+/.test(
                      value,
                    )
                      ? true
                      : 'Must be an instagram.com /p/, /reel/, or /tv/ URL'
                  }),
            }),
            defineField({
              name: 'caption',
              title: 'Caption (optional)',
              type: 'string',
            }),
          ],
          preview: {
            select: {title: 'url', subtitle: 'caption'},
            prepare({title, subtitle}) {
              return {title: subtitle || 'Instagram post', subtitle: title}
            },
          },
        },
        {
          type: 'object',
          name: 'youtube',
          title: 'YouTube video',
          fields: [
            defineField({
              name: 'url',
              title: 'Video URL',
              type: 'url',
              description:
                'YouTube watch, share, or Shorts URL (e.g. https://www.youtube.com/watch?v=dQw4w9WgXcQ)',
              validation: (rule) =>
                rule
                  .required()
                  .uri({scheme: ['http', 'https']})
                  .custom((value) => {
                    if (!value) return true
                    return /^https?:\/\/(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)[\w-]+/.test(
                      value,
                    )
                      ? true
                      : 'Must be a youtube.com or youtu.be video URL'
                  }),
            }),
            defineField({
              name: 'caption',
              title: 'Caption (optional)',
              type: 'string',
            }),
          ],
          preview: {
            select: {title: 'url', subtitle: 'caption'},
            prepare({title, subtitle}) {
              return {title: subtitle || 'YouTube video', subtitle: title}
            },
          },
        },
      ],
    }),
  ],
  orderings: [
    {
      title: 'Published, newest first',
      name: 'publishedAtDesc',
      by: [{field: 'publishedAt', direction: 'desc'}],
    },
  ],
  preview: {
    select: {title: 'title', subtitle: 'publishedAt'},
  },
})
