### error

1. firebase error : export 'default' (imported as 'firebase') was not found in 'firebase/app'
api를 'firebase/compat/'으로 사용하면 된다. 
import firebase from 'firebase/compat/app';

2. 'Switch' is not exported from 'react-router-dom'
react-router-dom이 버전 6로 업그레이드되면서, Switch를 더이상 지원하지 않음. Switch -> routes로 바뀜. 또한 component도 element로 바뀜

3. Search for the keywords to learn more about each warning. To ignore, add // eslint-disable-next-line to the line before
에러 나는 코드 옆에 // eslint-disable-line no-unused-vars 붙여넣기

4. React js Warning: ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API
import ReactDOM from 'react-dom/client';

5. `<Route>` component. All component children of `<Routes>` must be a `<Route>` or `<React.Fragment>`
`<Routes>` 자식으로는 `<Route>`만 가능
`<Route path="/" element={<Auth />} />` 처럼 코드 수정