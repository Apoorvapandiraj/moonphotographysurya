import express from 'express';
const router = express.Router();

router.post('/contact', (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    
    // Here you would typically:
    // 1. Validate the input
    // 2. Send an email
    // 3. Store in database
    
    // For now, we'll just log the data and return success
    console.log('Contact Form Submission:', { name, email, subject, message });
    
    res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Contact Form Error:', error);
    res.status(500).json({ message: 'Error sending message' });
  }
});

export default router;