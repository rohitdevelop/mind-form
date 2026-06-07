exports.success = (res, data) => res.json({ success: true, data });
exports.error = (res, status = 500, message = "Server error") =>
  res.status(status).json({ success: false, message });
