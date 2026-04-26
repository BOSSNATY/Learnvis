const express = require("express");
const router = express.Router();
const db = require("../config/db");

// GET /api/subjects -> List all subjects (Step 3.1)
router.get("/", async (req, res) => {
  const [rows] = await db.execute("SELECT * FROM subjects");
  res.json(rows);
});

// GET /api/topics?subjectId=1 -> List topics for a subject (Step 3.2)
router.get("/topics", async (req, res) => {
  const { subjectId } = req.query;
  const [rows] = await db.execute("SELECT * FROM topics WHERE subject_id = ?", [
    subjectId,
  ]);
  res.json(rows);
});

// GET /api/content/:topicId -> Get video or text (Step 3.3)
router.get("/content/:topicId", async (req, res) => {
  const [rows] = await db.execute("SELECT * FROM content WHERE topic_id = ?", [
    req.params.topicId,
  ]);
  if (rows.length === 0)
    return res.status(404).json({ error: "Content not found" });
  res.json(rows[0]);
});

module.exports = router;
