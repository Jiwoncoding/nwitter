### error

1. firebase error : export 'default' (imported as 'firebase') was not found in 'firebase/app'
api를 'firebase/compat/'으로 사용하면 된다. 
import firebase from 'firebase/compat/app';

2. 'Switch' is not exported from 'react-router-dom'
react-router-dom이 버전 6로 업그레이드되면서, Switch를 더이상 지원하지 않음. Switch -> routes로 바뀜. 또한 component도 element로 바뀜

3. Search for the keywords to learn more about each warning. To ignore, add // eslint-disable-next-line to the line before
에러 나는 코드 옆에 // eslint-disable-line no-unused-vars 붙여넣기