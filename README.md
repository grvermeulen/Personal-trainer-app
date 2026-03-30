# Personal-trainer-app

Build a production-style mobile-first personal trainer app called “PulseCoach” as a Power App / installable mobile web app (PWA-style experience with app-like UX), focused on creating, managing, and tracking training programs with an AI assistant.

Goal:
Create an app that helps users plan training, stay consistent, track progress, and stay motivated across multiple sports and workout types. The app should feel modern, energetic, motivating, and easy to use on mobile.

Core concept:
This is a personal training companion for people who do mixed training such as water polo, CrossFit, cycling, gym workouts, conditioning, running, mobility, and recovery. The app should support both structured training plans and daily workout execution.

Main requirements

1. Authentication and user accounts
- Sign up / login
- Email/password auth
- Social login optional
- Store user profile in Supabase
- Support onboarding flow for new users

2. User onboarding
During onboarding, ask the user for:
- Name
- Age
- Height
- Weight
- Gender (optional)
- Sport focus
- Experience level
- Weekly availability
- Current fitness level
- Goals
- Injuries / restrictions
- Preferred workout duration
- Preferred training types
- Whether they want push reminders
- Whether they want Spotify integration
- Target events or matches
- Motivation style (strict coach / supportive / data-driven / fun)

3. Profile page
Create a profile page where the user can:
- View and edit personal information
- Update goals
- Set availability
- Manage injuries / limitations
- Link Spotify
- Configure push notifications
- Set preferred units (kg/lbs, km/miles)
- View achievements / badges
- View current streak
- View training history summary

4. AI assistant / coach
Include a built-in AI coaching assistant that can:
- Generate a personalized training program based on goals, time, fitness level, and available equipment
- Adapt plans weekly based on progress and missed sessions
- Suggest recovery or deload periods
- Answer questions like:
  - “What should I train today?”
  - “Adjust this week because I’m tired”
  - “Give me a 45-minute water polo conditioning workout”
  - “Create a CrossFit-style session with dumbbells only”
  - “How should I prepare for a match this weekend?”
- Motivate the user with coaching-style feedback
- Recommend progression based on performance trends
- Help prevent overtraining by checking load and recovery patterns

5. Training plan builder
Users must be able to:
- Generate a plan with AI
- Manually create their own plan
- Add multiple training categories:
  - Water polo
  - CrossFit
  - Cycling
  - Running
  - Strength training
  - Mobility
  - Recovery
  - Swimming
  - HIIT
- Organize workouts by day/week/block
- Add notes, intensity, duration, and training focus
- Assign exercises and intervals
- Save reusable workout templates

6. Workout execution screen
Create a workout player/execution view optimized for mobile:
- Step-by-step workout flow
- Large buttons
- Timer support
- Rest timer
- Interval timer
- EMOM / AMRAP / TABATA timers for CrossFit
- Lap/round tracking
- Mark exercise as complete
- Record reps, sets, weight, distance, time, HR, RPE
- Pause/resume session
- Add workout notes afterward

7. Progress tracking and analytics
Add dashboards that show:
- Weekly training volume
- Completed vs planned sessions
- Goal progress
- Streaks
- Personal bests
- Training consistency
- Body metrics over time
- Performance trends
- Recovery trends
- Activity by sport
- Total distance for cycling/running/swimming
- Strength progression
- Water polo training frequency

8. Goals system
Users can define goals such as:
- Lose weight
- Build muscle
- Improve conditioning
- Improve match fitness
- Increase cycling endurance
- Improve swimming pace
- Improve strength
- Improve mobility
- Stay consistent for X weeks
- Prepare for a competition or match
The app should track progress toward these goals visually.

9. Gamification
Include gamification features:
- XP points for completed workouts
- Streak system
- Levels
- Badges / achievements
- Milestones
- Weekly challenges
- Monthly challenges
- Sport-specific achievements
- “Comeback” rewards after inactivity
- Leaderboard-ready structure for future expansion
- Motivational celebration states after workouts

10. Notifications and reminders
Support push notifications for:
- Planned workout reminders
- Recovery reminders
- Hydration reminders
- “You are close to your weekly goal”
- Streak reminders
- Missed workout nudges
- Match / event preparation reminders
- Personal best celebrations
Allow the user to configure reminder times and tone.

11. Spotify integration
Integrate Spotify so the user can:
- Link their Spotify account
- Start music from inside the app
- Choose playlists for workout type
- Auto-suggest playlists based on workout mode:
  - CrossFit high intensity
  - Cycling endurance
  - Recovery / cooldown
  - Water polo conditioning
- Save favorite workout playlists

12. Calendar and scheduling
Add a calendar view where users can:
- See their plan by week/month
- Reschedule workouts via drag-and-drop if possible
- Mark sessions complete
- See upcoming goals or events
- Sync-ready architecture for future Google/Apple Calendar integration

13. Recovery and readiness
Add optional recovery features:
- Daily readiness check-in
- Sleep quality input
- Energy level
- Muscle soreness
- Mood
- Stress
- AI uses this to adjust training suggestions
- Recovery score / readiness indicator

14. Journal / notes
Let users write:
- Workout reflections
- Match notes
- Recovery notes
- Coach notes
- Personal milestones
AI can summarize patterns over time.

15. Social / accountability features (lightweight MVP-ready)
- Share achievements
- Invite accountability buddy
- Private progress sharing
- “Did you finish your workout?” encouragement prompts
- Keep architecture open for future community features

16. Admin / data management
- Store all structured data in Supabase
- Use Supabase Auth
- Use PostgreSQL tables with clean relational design
- Include row-level security policies
- Provide seed/demo data
- Include audit-friendly schema naming
- Design backend to support future premium tiers and coach accounts

Suggested data model in Supabase
Include tables such as:
- users
- profiles
- goals
- workout_plans
- workout_sessions
- exercises
- workout_exercises
- progress_logs
- body_metrics
- achievements
- streaks
- reminders
- spotify_connections
- recovery_checkins
- ai_coach_messages
- notifications
- training_categories
- templates

UX / design requirements
- Mobile-first
- Installable app feel
- Clean modern sports UI
- High-energy but premium look
- Smooth navigation
- Dashboard home screen
- Quick access to “Today’s Workout”
- Bottom tab navigation
- Strong use of cards and progress visuals
- Friendly coaching tone
- Fast and simple logging during workouts
- Dark mode support
- Accessible design with clear typography and large touch targets

Main screens
Build at least these screens:
- Onboarding
- Login / signup
- Home dashboard
- Today’s workout
- Training plan
- Calendar
- Progress / analytics
- AI coach chat
- Workout execution
- Goals
- Recovery check-in
- Achievements / gamification
- Profile / settings

Home dashboard should include
- Greeting
- Readiness snapshot
- Today’s planned workout
- Weekly progress
- Current streak
- Active goals
- Recent achievements
- Quick start workout button
- AI suggestion card

AI behavior requirements
The AI coach should:
- Be proactive but not annoying
- Personalize suggestions based on data
- Notice consistency patterns
- Encourage long-term adherence
- Balance performance and recovery
- Support mixed-sport athletes
- Be useful for water polo specifically, including:
  - match prep
  - conditioning
  - swimming-based load
  - strength/power support
- Support CrossFit-style timing and WODs
- Support cycling plans with endurance / interval structure

Technical requirements
- Use Supabase as backend and database
- Clean component architecture
- Scalable schema
- Secure API integration patterns
- Mobile-responsive design
- Push notification support
- Spotify OAuth integration scaffolding
- AI assistant integration with clear service boundary
- Error handling and loading states
- Empty states
- Form validation
- Demo-ready quality

Extra features that would make the app feel excellent
- Personal records page
- Smart workout recommendations
- Auto-deload suggestion
- Habit tracker
- Recovery day suggestions
- Match/event countdown
- Weather-aware cycling suggestion placeholder
- Apple Health / Google Fit integration-ready architecture
- Wearable integration-ready structure
- Voice notes after workout
- Smart search for exercises and sessions
- Favorite workouts
- “Train again” shortcut
- Adaptive home screen based on sport focus

Output expectations
Generate:
1. Full app structure
2. All major screens and flows
3. Supabase schema
4. Example seed data
5. AI assistant flow
6. Push notification flow
7. Spotify integration approach
8. Beautiful mobile-first UI
9. Clear comments and maintainable architecture
10. A demo-ready version that feels like a real fitness app, not a prototype

Important:
Make the app coherent, polished, and realistic. Prioritize usability during actual workouts, high motivation, and intelligent personalization. The result should feel like a serious hybrid of personal trainer, workout planner, and AI fitness coach.