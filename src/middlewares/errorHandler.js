module.exports = (err, _req, res, _next) => {
  console.error(err, 'errorHandler')
  if (err.status) {
    return res.status(err.status).json({ message: err.message })
  }
  return res.status(500).json({ message: 'Internal Server Error' })
}
