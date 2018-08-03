import query from './query';

export default [
  {
    request: {
      query: query,
      variables: {
        id: '0940deb3-6a3f-49ea-83f7-e39c47a00127',
        type: 'term',
        shortTerm: 'md',
        longTerm: 'Mocked Data',
        definition: 'data that is spoken to derisively'
      },
    },
    result: {
      data: {
        allTerms: { id: '0940deb3-6a3f-49ea-83f7-e39c47a00127', type: 'term', shortTerm: 'md', longTerm: 'Mocked Data', definition: 'data this is spoken to derisively' },
      },
    },
  },
];