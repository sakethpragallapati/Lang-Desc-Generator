import express from 'express';
import axios from 'axios';

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const { langName } = req.body;

        const response = await axios.post(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyCjncSdHjlDMeAe9HrxexB1FddTyRUzg7Q`,
            {
                contents: [
                    {
                        parts: [{ text: `Write a detailed description of the language ${langName}, starting with an introduction, followed by a brief history, then mention the number of speakers, regions where it's spoken, and its current status (e.g., widely spoken, endangered, extinct). Begin directly with the content—avoid phrases like 'Sure', 'Here is', or 'Okay'.` }]
                    }
                ]
            },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );

        const output = response.data.candidates[0].content.parts[0].text;
        res.json({ output });
    } catch (error) {
        console.error("Error communicating with Gemini:", error);
        res.status(500).json({ error: "Failed to fetch from Gemini" });
    }
});

export default router;