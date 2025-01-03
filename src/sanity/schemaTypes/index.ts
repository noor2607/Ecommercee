import { type SchemaTypeDefinition } from 'sanity';
import hero from './hero';
import shop from './shop';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [hero, shop],
}
