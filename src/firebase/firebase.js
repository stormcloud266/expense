import firebase from 'firebase/app'
import 'firebase/database'

firebase.initializeApp(firebaseConfig)
const database = firebase.database()

database
	.ref()
	.set({
		name: 'tdawg',
		city: 'cody',
	})
	.then(() => console.log('data saved'))
	.catch(() => console.log('this failed'))

database
	.ref('city')
	.remove()
	.then(() => console.log('removed'))
	.catch(() => console.log('error'))
