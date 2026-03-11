const express = require('express');
const router = express.Router();
const {
  createIssue,
  getIssues,
  getIssue,
  updateStatus,
  upvoteIssue
} = require('../controllers/issue.controller');
const { protect } = require('../middleware/auth.middleware');

router.get('/', getIssues);
router.post('/', protect, createIssue);
router.get('/:id', getIssue);
router.patch('/:id/status', protect, updateStatus);
router.post('/:id/upvote', protect, upvoteIssue);

module.exports = router;