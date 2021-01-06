const express = require('express');
const { check, validationResult } = require('express-validator/check');
const User = require('../models/User');

const router = express.Router();

/*
 * @route     POST api/users
 * @decs      Refister a user
 * @access    Public
 */
router.post(
	'/',
	[
		check('name', 'Please add a name').not().isEmpty(),
		check('email', 'Please include a valid email').isEmail(),
		check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 }),
	],
	(req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		res.send('Passed');
	}
);

module.exports = router;
