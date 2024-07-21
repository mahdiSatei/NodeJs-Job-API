const createJob = async (req, res) => {
    res.send("create job")
}

const getAllJobs = async (req, res) => {
    res.send("All jobs")
}

const getSingleJob = async (req, res) => {
    res.send("single jobs")
}

const updateJob = async (req, res) => {
    res.send("update jobs")
}

const deleteJob = async (req, res) => {
    res.send("delete jobs")
}

module.exports = {
    createJob,
    getAllJobs,
    getSingleJob,
    updateJob,
    deleteJob
}