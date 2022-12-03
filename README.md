### error

1. firebase error : export 'default' (imported as 'firebase') was not found in 'firebase/app'
api를 'firebase/compat/'으로 사용하면 된다. 
import firebase from 'firebase/compat/app';