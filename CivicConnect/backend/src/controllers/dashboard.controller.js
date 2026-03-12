const Issue = require('../models/Issue');
const User = require('../models/User');

const getStats = async (req, res) => {
  try {
    const totalIssues = await Issue.countDocuments();
    const openIssues = await Issue.countDocuments({ status: 'open' });
    const inProgressIssues = await Issue.countDocuments({ status: 'in_progress' });
    const resolvedIssues = await Issue.countDocuments({ status: 'resolved' });
    const totalUsers = await User.countDocuments();

    const categoryStats = await Issue.aggregate([
      { $group: { _id: '$category', count: { $sum: 1 } } }
    ]);

    const resolutionRate = totalIssues > 0
      ? Math.round((resolvedIssues / totalIssues) * 100)
      : 0;

    res.status(200).json({
      totalIssues,
      openIssues,
      inProgressIssues,
      resolvedIssues,
      totalUsers,
      resolutionRate,
      categoryStats
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = { getStats };