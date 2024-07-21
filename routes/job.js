const express = require('express')
const router = express.Router()

const {
    createJob,
    getAllJobs,
    getSingleJob,
    updateJob,
    deleteJob
} = require('../controllers/job')

router.route('/').get(getAllJobs).post(createJob)
router.route('/:id').get(getSingleJob).patch(updateJob).delete(deleteJob)

module.exports = router