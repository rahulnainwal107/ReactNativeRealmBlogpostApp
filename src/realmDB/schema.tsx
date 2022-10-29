import {createRealmContext} from '@realm/react';
import {Blog} from './models/Blog';

export const BlogRealmContext = createRealmContext({
  schema: [Blog],
});
