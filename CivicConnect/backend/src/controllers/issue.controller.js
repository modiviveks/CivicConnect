const Issue = require('../models/Issue');

// CREATE ISSUE
const createIssue = async (req, res) => {
  try {
    const { title, description, category, urgency, location } = req.body;

    const issue = await Issue.create({
      title,
      description,
      category,
      urgency,
      location: { address: location },
      reporter: req.user._id
    });

    res.status(201).json({ message: 'Issue created successfully', issue });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// GET ALL ISSUES
const getIssues = async (req, res) => {
  try {
    const { category, status } = req.query;
    let filter = {};
    if (category) filter.category = category;
    if (status) filter.status = status;

    const issues = await Issue.find(filter)
      .populate('reporter', 'name email')
      .populate('resolver', 'name email')
      .sort({ createdAt: -1 });

    res.status(200).json({ issues });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// GET SINGLE ISSUE
const getIssue = async (req, res) => {
  try {
    const issue = await Issue.findById(req.params.id)
      .populate('reporter', 'name email')
      .populate('resolver', 'name email');

    if (!issue) {
      return res.status(404).json({ message: 'Issue not found' });
    }

    res.status(200).json({ issue });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// UPDATE ISSUE STATUS
const updateStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const issue = await Issue.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!issue) {
      return res.status(404).json({ message: 'Issue not found' });
    }

    res.status(200).json({ message: 'Status updated', issue });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// UPVOTE ISSUE
const upvoteIssue = async (req, res) => {
  try {
    const issue = await Issue.findById(req.params.id);

    if (!issue) {
      return res.status(404).json({ message: 'Issue not found' });
    }

    const alreadyUpvoted = issue.upvotes.includes(req.user._id);

    if (alreadyUpvoted) {
      issue.upvotes = issue.upvotes.filter(
        id => id.toString() !== req.user._id.toString()
      );
    } else {
      issue.upvotes.push(req.user._id);
    }

    await issue.save();
    res.status(200).json({ message: 'Upvote updated', upvotes: issue.upvotes.length });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = { createIssue, getIssues, getIssue, updateStatus, upvoteIssue };