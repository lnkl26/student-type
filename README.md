# Student Profile Quiz
A web self-assessment designed to help students identify their learning preferences, how they obtain information, their retention methods, and their academic mindset.
## Project Status
**Unfinished / In Progress**
This is still in the early stages. Currently all the questions are available and scoring can be totaled. But there is no elaborate analysis of the scoring yet.
## Purpose
1. Help student identify their dominant learning style(s)
2. Further analyze how they best learn new information, retain study material, and respond to academic stress
3. Encourage self-reflection on their study habits and preferences
## Features
### Current
`renderQuiz()`
* All questions will be shown when the website is first loaded
* All questions are checkbox style questions, meaning students should select all statements that are true to them

`submitQuiz()`
* Each answer is associated with a "type" 
* Scores are tallied with their "type"

`displayResults(scores)`
* Raw scores will be displayed once the quiz has been submitted
### Planned
`analyzeResults(scores)`
* Compare scores in comparison to each other, and determine dominant styles
* Provide some analysis on what the scores could possibly mean

`analyzeSecondary(scores)`
* Determine second best methods that students would benefit from
## To-Do
* Improve UX/UI
## Bug Fixes
* {FIXED 2025-27-08} Incorrect point distribution for Obtaining section
* {FIXED 2025-29-08} Some sections were not displaying the analysis when submitting the quiz