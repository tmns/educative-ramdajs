import { pathOr, trim, pipe } from 'ramda';

export default pipe(
    pathOr('', ['target', 'value']),
    trim
);