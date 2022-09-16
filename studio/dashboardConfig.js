export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '63245098c049e42004f94701',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-znzd4ty6',
                  apiId: 'f5d7ac23-833f-4202-9a73-aa94fc31db8f'
                },
                {
                  buildHookId: '63245098748e56230218d359',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-psbopchm',
                  apiId: 'acdd7f73-2f51-438f-9664-92cb27253761'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sarmadgardezi/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-psbopchm.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
