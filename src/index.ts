import { add } from './util';

if (process.env.UNIVERSAL_ENV === 'uni') {
    console.log(`2 + 3 = ${add(2, 2)}`);
} else {
    console.log(`23 + 3 = ${add(23, 2)}`);
}
const a = 1123
export default a