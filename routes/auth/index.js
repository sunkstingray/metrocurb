const express = require('express')
const router = express.Router()
const User = require('../../models/Users')
const passport = require('../../passport')
const zoho = require('../zoho');

router.get('/google', passport.authenticate('google', { scope: ['profile'] }))
router.get(
	'/google/callback',
	passport.authenticate('google', {
		successRedirect: '/',
		failureRedirect: '/login'
	})
)

// this route is just used to get the user basic info
router.get('/user', (req, res, next) => {
	console.log('===== user!!======')
	console.log(req.user)
	if (req.user) {
		return res.json({ user: req.user })
	} else {
		return res.json({ user: null })
	}
})

router.post(
	'/login',
	function(req, res, next) {
		console.log(req.body)
		console.log('================')
		next()
	},
	passport.authenticate('local'),
	(req, res) => {
		console.log('POST to /login')
		const user = JSON.parse(JSON.stringify(req.user)) // hack
		const cleanUser = Object.assign({}, user)
		if (cleanUser.local) {
			console.log(`Deleting ${cleanUser.local.password}`)
			delete cleanUser.local.password
		}
		res.json({ user: cleanUser })
	}
)

router.post('/logout', (req, res) => {
	if (req.user) {
		req.session.destroy()
		res.clearCookie('connect.sid') // clean up!
		return res.json({ msg: 'logging you out' })
	} else {
		return res.json({ msg: 'no user to log out!' })
	}
})

router.post('/signup', (req, res) => {
	const { firstName,lastName,address,city,state,zip, username, password,trashday,servicelevel } = req.body
	// ADD VALIDATION
	let crmServiceLevel;
	switch (servicelevel) {
		
		case "10":
			crmServiceLevel = "Weekly"
			break;
		case "20":
			crmServiceLevel = "Monthly";
			break;
		default:
			crmServiceLevel = "";
			break;
	}

	User.findOne({ 'local.username': username }, (err, userMatch) => {
		if (userMatch) {
			return res.json({
				error: `Sorry, already a user with the username: ${username}`
			})
		}

		const userData = {
			"Lead Source"  : "Online Store",
			"First Name"   : firstName,
			"Last Name"    : lastName,
			"Email"		   : username,
			"Description"  : "Created from Express Route",
			"Mailing Street" : address,
			"Mailing City" : city,
			"Mailing State": state,
			"Mailing Zip"  : zip,
			"Service Level": crmServiceLevel,
			"Trash Day"    : trashday

		}

		//console.log(JSON.stringify(userData));

		return zoho.createContact(userData,(err,result) =>{
			if (err !== null) {
				console.log(err);
			} else if (result.isError()){
				console.log(result.message);
			} else {
				const newUser = new User({
					'local.username': username,
					'local.password': password, 
					'zohoId' : result.data[0].Id
				})
				return newUser.save((err,savedUser)=> {
					if (err) return res.json(err);
					req.login(newUser,(err)=>{
						if(err){
							console.log(err);
						}
						else {
							console.log("user logged in");
						}
					})
					return res.json(savedUser);
				})
			}

		})

	})

})


router.post('/update', (req, res) => {
	const { firstName,lastName,address,city,state,zip, username} = req.body
	// ADD VALIDATION
	User.findOne({ 'local.username': username }, (err, userMatch) => {
		if (userMatch) {

			console.log('User');
			con

			const userData = {
				"Lead Source"  : "Online Store",
				"First Name"   : firstName,
				"Last Name"    : lastName,
				"Email"		   : username,
				"Description"  : "Created from Express Route",
				"Mailing Street" : address,
				"Mailing City" : city,
				"Mailing State": state,
				"Mailing Zip"  : zip
			}
		}

		const userData = {
			"Lead Source"  : "Online Store",
			"First Name"   : firstName,
			"Last Name"    : lastName,
			"Email"		   : username,
			"Description"  : "Created from Express Route",
			"Mailing Street" : address,
			"Mailing City" : city,
			"Mailing State": state,
			"Mailing Zip"  : zip
		}

		console.log(JSON.stringify(userData));

		return zoho.createContact(userData,(err,result) =>{
			if (err !== null) {
				console.log(err);
			} else if (result.isError()){
				console.log(result.message);
			} else {
				const newUser = new User({
					'local.username': username,
					'local.password': password, 
					'zohoId' : result.data[0].Id
				})
				return newUser.save((err,savedUser)=> {
					if (err) return res.json(err);
					req.login(newUser,(err)=>{
						if(err){
							console.log(err);
						}
						else {
							console.log("user logged in");
						}
					})
					return res.json(savedUser);
				})
			}

		})

	})

})

module.exports = router