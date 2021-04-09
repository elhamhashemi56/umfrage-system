const express = require('express');
const router = express.Router();
//const { check }  = require('express-validator')
const auth = require('../middleware/auth')
const {umfrageGetController,umfragePostController,umfrageDelController,umfragePutController}=require('../controller/umfrage_controller')

// const validAufgabe = [
//     check('inhalt')
//       .not()
//       .isEmpty()
//       .withMessage('Aufgabe muss angegeben werden.')
//       .trim(),
//     check ("datum","bitte geben Sie hier Datum!")
//       .not()
//       .isEmpty()
//       .isISO8601(),
//     check('erledig')
//       .optional()
//       .isBoolean() 
// ]

router
    .route('/')
     .get(auth,umfrageGetController)
     .post(auth,umfragePostController)
     .delete((res, req, next) => {
		res.status(422).send("DELETE braucht eine ID im URL-Segment")
	})

router
    .route('/:_id')
    .delete(auth,umfrageDelController)
    .put(auth,umfragePutController)
    

//  router
//      .route('/erledigt').get(auth,erledigen)


module.exports = router