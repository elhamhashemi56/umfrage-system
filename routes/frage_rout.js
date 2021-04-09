const express = require('express');
const router = express.Router();
//const { check }  = require('express-validator')
//const auth = require('../middleware/auth')
const {frageGetController,fragePostController,frageDelController,fragePutController}=require('../controller/frage_controller')

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
     .get(frageGetController)
     .post(fragePostController)
     .delete((res, req, next) => {
		res.status(422).send("DELETE braucht eine ID im URL-Segment")
	})

router
    .route('/:_id')
    .get(frageGetController)
    .delete(frageDelController)
    .put(fragePutController)
    

//  router
//      .route('/erledigt').get(auth,erledigen)


module.exports = router