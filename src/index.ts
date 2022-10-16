import { add } from './util';

console.log('Hello World!');

type Status = 'SUCCESS' | 'FAIL';

function handleStatus(status: Status) {
  if (status === 'SUCCESS') {
    console.log('YAY');
  } else {
    console.log('Oh No');
  }
}

handleStatus('FAIL');
console.log(add(1, 2));
