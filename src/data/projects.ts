export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  github: string;
  demo?: string;
  features: string[];
  techStack: {
    frontend?: string[];
    backend?: string[];
    database?: string[];
    tools?: string[];
  };
  challenges?: {
    title: string;
    description: string;
  }[];
  outcomes?: string[];
}

export const projectsData: Project[] = [
  {
    id: 'taskflow',
    title: 'TaskFlow',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    longDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    tags: ['React', 'Node.js', 'PostgreSQL', 'WebSocket'],
    github: 'https://github.com/acetodani/taskflow',
    demo: 'https://taskflow-demo.com',
    features: [
      'Real-time collaborative task management',
      'Customizable Kanban boards',
      'Advanced filtering and search capabilities',
      'Team analytics and reporting',
      'Integration with GitHub and Slack',
      'Role-based access control',
      'Real-time notifications',
      'Drag-and-drop interface'
    ],
    techStack: {
      frontend: ['React', 'TypeScript', 'Redux', 'TailwindCSS'],
      backend: ['Node.js', 'Express', 'Socket.io'],
      database: ['PostgreSQL', 'Redis'],
      tools: ['Docker', 'AWS', 'GitHub Actions']
    },
    challenges: [
      {
        title: 'Real-time Synchronization',
        description: 'Implementing real-time updates across multiple clients while maintaining data consistency was challenging. Solved using WebSocket connections with Redis pub/sub for horizontal scaling.'
      },
      {
        title: 'Performance Optimization',
        description: 'Database queries were slow with large datasets. Implemented indexing strategies and query optimization, reducing load times by 60%.'
      }
    ],
    outcomes: [
      'Successfully handling 50,000+ active users',
      '99.9% uptime in production',
      '200ms average response time',
      'Featured on ProductHunt with 500+ upvotes'
    ]
  },
  {
    id: 'ml-classifier',
    title: 'ML Image Classifier',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.',
    longDescription: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.

Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.`,
    tags: ['Python', 'TensorFlow', 'Machine Learning'],
    github: 'https://github.com/acetodani/ml-classifier',
    features: [
      'Custom CNN architecture',
      'Transfer learning with pre-trained models',
      'Data augmentation pipeline',
      'RESTful API for predictions',
      'Batch processing support',
      'Model versioning and A/B testing',
      'Performance monitoring dashboard',
      'Docker containerization'
    ],
    techStack: {
      backend: ['Python', 'TensorFlow', 'Flask', 'NumPy', 'Pandas'],
      tools: ['Docker', 'Jupyter', 'MLflow', 'AWS S3']
    },
    challenges: [
      {
        title: 'Model Accuracy',
        description: 'Initial accuracy was below 80%. Improved through data augmentation, transfer learning, and hyperparameter tuning to achieve 94% accuracy.'
      },
      {
        title: 'Inference Speed',
        description: 'Model was too slow for real-time applications. Optimized using model quantization and TensorRT, reducing inference time by 75%.'
      }
    ],
    outcomes: [
      '94% accuracy on test dataset',
      '50ms average inference time',
      'Deployed to production serving 10,000+ requests/day',
      'Published research paper with findings'
    ]
  },
  {
    id: 'codesnippet',
    title: 'CodeSnippet',
    description: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur adipisci velit.',
    longDescription: `Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.

Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.`,
    tags: ['TypeScript', 'React', 'Firebase'],
    github: 'https://github.com/acetodani/codesnippet',
    demo: 'https://codesnippet-app.com',
    features: [
      'Syntax highlighting for 100+ languages',
      'Intelligent search and filtering',
      'Cloud sync across devices',
      'Team collaboration and sharing',
      'Tags and collections',
      'Markdown support',
      'Keyboard shortcuts',
      'Dark mode',
      'Code export in multiple formats',
      'Browser extension integration'
    ],
    techStack: {
      frontend: ['React', 'TypeScript', 'CodeMirror', 'TailwindCSS'],
      backend: ['Firebase', 'Cloud Functions'],
      database: ['Firestore'],
      tools: ['Vite', 'ESLint', 'Prettier']
    },
    challenges: [
      {
        title: 'Offline Support',
        description: 'Users wanted to access snippets offline. Implemented service workers and IndexedDB for offline-first functionality with background sync.'
      },
      {
        title: 'Search Performance',
        description: 'Search was slow with thousands of snippets. Implemented full-text search with Algolia and added intelligent caching.'
      }
    ],
    outcomes: [
      '5,000+ active users',
      '4.8/5 star rating on extension stores',
      '100,000+ snippets saved',
      'Featured in several developer newsletters'
    ]
  },
  {
    id: 'algo-viz',
    title: 'Algorithm Visualizer',
    description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.',
    longDescription: `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.\n\nSimilique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.`,
    tags: ['JavaScript', 'D3.js', 'Algorithms'],
    github: 'https://github.com/acetodani/algo-viz',
    demo: 'https://algo-visualizer.com',
    features: [
      'Visualizations for 10+ sorting algorithms',
      'Pathfinding algorithms (A*, Dijkstra, BFS, DFS)',
      'Adjustable animation speed',
      'Step-by-step code explanation',
      'Custom input data',
      'Performance metrics',
      'Mobile-responsive design',
      'Code snippets in multiple languages'
    ],
    techStack: {
      frontend: ['JavaScript', 'D3.js', 'HTML5', 'CSS3'],
      tools: ['Webpack', 'GitHub Pages']
    },
    challenges: [
      {
        title: 'Animation Performance',
        description: 'Animations were laggy with large datasets. Optimized using requestAnimationFrame and canvas rendering for better performance.'
      },
      {
        title: 'Mobile Experience',
        description: 'Touch interactions were difficult on mobile. Redesigned UI with mobile-first approach and gesture support.'
      }
    ],
    outcomes: [
      '50,000+ monthly active users',
      'Used by 200+ educational institutions',
      '1,000+ GitHub stars',
      'Featured on FreeCodeCamp and other learning platforms'
    ]
  }
];
