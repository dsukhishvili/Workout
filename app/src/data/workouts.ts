import type { Workout, WeekPlan } from '../types/workout';

// Chest video: zD266B2jk0s
// Chapters: Intro 0:00 | Anatomy 0:57 | Frequency 1:56 | Workout 1: 3:08 | Workout 2: 11:00 | Outro 15:09
const CHEST_VID = 'zD266B2jk0s';

const chestWorkout1: Workout = {
  muscleGroup: 'chest',
  title: 'Chest - Workout A',
  variant: 1,
  exercises: [
    { id: 'chest-a-1', name: 'Banded External Rotation', sets: '1-2', reps: '10-15', notes: 'Primer — sub-maximal effort to warm up rotator cuff', videoId: CHEST_VID, videoStart: 188, videoEnd: 245, isBodyweight: true },
    { id: 'chest-a-2', name: 'Incline Dumbbell Bench Press', sets: '3', reps: '5-8', notes: 'To failure. Thumbs up and forward for extra adduction at top', videoId: CHEST_VID, videoStart: 245, videoEnd: 380 },
    { id: 'chest-a-3', name: 'Cable Crossovers', sets: '3', reps: '10-12', notes: 'Lean back. Continue with partial reps after failure', videoId: CHEST_VID, videoStart: 380, videoEnd: 480 },
    { id: 'chest-a-4', name: 'Dumbbell Floor Flies', sets: '2-3', reps: '8-10', notes: 'After concentric failure, press up and control eccentric only', videoId: CHEST_VID, videoStart: 480, videoEnd: 565 },
    { id: 'chest-a-5', name: 'Deficit 1.5 Rep Ladder Pushups', sets: '1', reps: 'To failure', notes: 'Hold bottom: rep 1 = 1s, rep 2 = 2s, rep 3 = 3s...', videoId: CHEST_VID, videoStart: 565, videoEnd: 620, isBodyweight: true },
    { id: 'chest-a-6', name: 'Dips', sets: '1', reps: 'To failure', notes: 'Continue with partial reps after failure', videoId: CHEST_VID, videoStart: 620, videoEnd: 660, isBodyweight: true },
  ],
};

const chestWorkout2: Workout = {
  muscleGroup: 'chest',
  title: 'Chest - Workout B',
  variant: 2,
  exercises: [
    { id: 'chest-b-1', name: 'Band Pull Aparts', sets: '1-2', reps: '10-15', notes: 'Primer — high to low position toward chest', videoId: CHEST_VID, videoStart: 660, videoEnd: 710, isBodyweight: true },
    { id: 'chest-b-2', name: 'Flat Dumbbell Bench Press', sets: '3', reps: '5-8', notes: 'To failure. Control the eccentric', videoId: CHEST_VID, videoStart: 710, videoEnd: 790 },
    { id: 'chest-b-3', name: 'High-to-Low Cable Crossovers', sets: '3', reps: '10-12', notes: 'Partial reps after failure', videoId: CHEST_VID, videoStart: 790, videoEnd: 840 },
    { id: 'chest-b-4', name: 'Cable Presses', sets: '2-3', reps: '8-10', notes: 'Squeeze at peak contraction', videoId: CHEST_VID, videoStart: 840, videoEnd: 875 },
    { id: 'chest-b-5', name: 'Dips', sets: '1', reps: 'To failure', notes: 'Lean forward slightly for chest emphasis', videoId: CHEST_VID, videoStart: 875, videoEnd: 895, isBodyweight: true },
    { id: 'chest-b-6', name: 'Prison Yard Pushups', sets: '1', reps: 'To failure', notes: 'Explosive reps with brief pause at bottom', videoId: CHEST_VID, videoStart: 895, videoEnd: 909, isBodyweight: true },
  ],
};

// Back video: fX36liNtKzw
// Chapters: Intro 0:00 | Anatomy 0:50 | Frequency 1:45 | Workout 1: 2:50 | Workout 2: 10:15 | Outro 14:30
const BACK_VID = 'fX36liNtKzw';

const backWorkout1: Workout = {
  muscleGroup: 'back',
  title: 'Back - Workout A',
  variant: 1,
  exercises: [
    { id: 'back-a-1', name: 'Scap Pulldown', sets: '1-2', reps: '10-15', notes: 'Primer — sub-maximal effort for shoulder warm-up', videoId: BACK_VID, videoStart: 170, videoEnd: 225, isBodyweight: true },
    { id: 'back-a-2', name: 'Seated Cable Rows (Elbows Wide)', sets: '3', reps: '5-8', notes: 'To failure. Wide elbows target upper back and rear delts', videoId: BACK_VID, videoStart: 225, videoEnd: 350 },
    { id: 'back-a-3', name: 'Lat Pulldowns (Narrow Grip)', sets: '3', reps: '10-12', notes: 'Continue with partial reps after failure', videoId: BACK_VID, videoStart: 350, videoEnd: 440 },
    { id: 'back-a-4', name: 'Straight Arm Pushdowns', sets: '2-3', reps: '8-10', notes: 'Eccentric-only reps after concentric failure', videoId: BACK_VID, videoStart: 440, videoEnd: 520 },
    { id: 'back-a-5', name: '1.5 Rep DB Pullover Ladder', sets: '1', reps: 'To failure', notes: 'Hold stretch: rep 1 = 1s, rep 2 = 2s...', videoId: BACK_VID, videoStart: 520, videoEnd: 580 },
    { id: 'back-a-6', name: 'Pullups', sets: '1', reps: 'To failure', notes: 'Bodyweight or banded — burnout set', videoId: BACK_VID, videoStart: 580, videoEnd: 615, isBodyweight: true },
  ],
};

const backWorkout2: Workout = {
  muscleGroup: 'back',
  title: 'Back - Workout B',
  variant: 2,
  exercises: [
    { id: 'back-b-1', name: 'Scap Pulldown', sets: '1-2', reps: '10-15', notes: 'Primer — warm up scapula and shoulder girdle', videoId: BACK_VID, videoStart: 615, videoEnd: 655, isBodyweight: true },
    { id: 'back-b-2', name: 'Barbell Rows', sets: '3', reps: '5-8', notes: 'To failure. Overhand grip, pull to lower chest', videoId: BACK_VID, videoStart: 655, videoEnd: 740 },
    { id: 'back-b-3', name: 'Wide Grip Lat Pulldowns', sets: '3', reps: '10-12', notes: 'Partial reps after failure', videoId: BACK_VID, videoStart: 740, videoEnd: 800 },
    { id: 'back-b-4', name: 'Reverse Hyper Rows', sets: '2-3', reps: '8-10', notes: 'Focus on mid-back squeeze', videoId: BACK_VID, videoStart: 800, videoEnd: 845 },
    { id: 'back-b-5', name: 'Straight Arm Cable Pulldowns', sets: '2', reps: '10-12', notes: 'Slow eccentric, squeeze lats at bottom', videoId: BACK_VID, videoStart: 845, videoEnd: 880 },
    { id: 'back-b-6', name: 'Chin-ups', sets: '1', reps: 'To failure', notes: 'Supinated grip — burnout finisher', videoId: BACK_VID, videoStart: 880, videoEnd: 900, isBodyweight: true },
  ],
};

// Legs video: QXtXEug0PLU
// Chapters: Intro 0:00 | Anatomy 0:55 | Frequency 2:00 | Workout 1: 3:15 | Workout 2: 11:30 | Outro 16:30
const LEGS_VID = 'QXtXEug0PLU';

const legWorkout1: Workout = {
  muscleGroup: 'legs',
  title: 'Legs - Workout A',
  variant: 1,
  exercises: [
    { id: 'legs-a-1', name: 'Reverse Hyper', sets: '1-2', reps: '10-15', notes: 'Primer — warm up low back and glutes', videoId: LEGS_VID, videoStart: 195, videoEnd: 255, isBodyweight: true },
    { id: 'legs-a-2', name: 'Deadlifts (Conventional or Trap Bar)', sets: '3', reps: '5', notes: '~80% effort. Increase weight by 5 lbs each session', videoId: LEGS_VID, videoStart: 255, videoEnd: 410 },
    { id: 'legs-a-3', name: 'Barbell Front Squats', sets: '2-3', reps: '6-8', notes: 'Quad emphasis. Keep torso upright', videoId: LEGS_VID, videoStart: 410, videoEnd: 510 },
    { id: 'legs-a-4', name: 'Alternating DB Reverse Lunges', sets: '2-3', reps: '10 each', notes: 'Step backward to reduce knee stress', videoId: LEGS_VID, videoStart: 510, videoEnd: 585 },
    { id: 'legs-a-5', name: 'Seated Hamstring Curls', sets: '1', reps: '12-15', notes: 'To failure, then eccentric-only reps', videoId: LEGS_VID, videoStart: 585, videoEnd: 645 },
    { id: 'legs-a-6', name: 'Standing Calf Raises', sets: '2-3', reps: '10-12', notes: '4-second holds at top and bottom + partials', videoId: LEGS_VID, videoStart: 645, videoEnd: 690 },
  ],
};

const legWorkout2: Workout = {
  muscleGroup: 'legs',
  title: 'Legs - Workout B',
  variant: 2,
  exercises: [
    { id: 'legs-b-1', name: 'Banded Overhead Squat', sets: '1-2', reps: '10-15', notes: 'Primer — squat pattern warm-up with thoracic mobility', videoId: LEGS_VID, videoStart: 690, videoEnd: 740, isBodyweight: true },
    { id: 'legs-b-2', name: 'Barbell Back Squats', sets: '3', reps: '6-8', notes: 'Controlled depth, drive through heels', videoId: LEGS_VID, videoStart: 740, videoEnd: 840 },
    { id: 'legs-b-3', name: 'Barbell Hip Thrusts', sets: '3', reps: '8-10', notes: 'Squeeze glutes at top. 2s pause', videoId: LEGS_VID, videoStart: 840, videoEnd: 905 },
    { id: 'legs-b-4', name: 'Walking Lunges', sets: '2-3', reps: '10 each', notes: 'Longer stride for glute emphasis', videoId: LEGS_VID, videoStart: 905, videoEnd: 950 },
    { id: 'legs-b-5', name: 'Leg Extensions (Slow Eccentric)', sets: '3', reps: '8-10', notes: '3-second eccentric for rectus femoris', videoId: LEGS_VID, videoStart: 950, videoEnd: 990 },
    { id: 'legs-b-6', name: 'Seated Calf Raises', sets: '3', reps: '15-20', notes: 'Target soleus muscle', videoId: LEGS_VID, videoStart: 990, videoEnd: 1020 },
  ],
};

// Triceps video: 8Nkfuhxsl-0
// Chapters: Intro 0:00 | Anatomy 0:45 | Workout 1: 2:10 | Workout 2: 9:00 | Outro 12:00
const TRI_VID = '8Nkfuhxsl-0';

const tricepWorkout1: Workout = {
  muscleGroup: 'triceps',
  title: 'Triceps - Workout A',
  variant: 1,
  exercises: [
    { id: 'tri-a-1', name: 'Triceps Pushdowns', sets: '2-3', reps: '6-8', notes: 'Heavy. To failure. Targets medial & lateral heads', videoId: TRI_VID, videoStart: 130, videoEnd: 260 },
    { id: 'tri-a-2', name: 'Lying Dumbbell Extensions', sets: '2-3', reps: '8-10', notes: 'After failure, cheat up + slow eccentric-only reps', videoId: TRI_VID, videoStart: 260, videoEnd: 390 },
    { id: 'tri-a-3', name: 'DB/Cable Triceps Kickbacks', sets: '2-3', reps: '10-12', notes: 'Full contraction. Partial reps after failure', videoId: TRI_VID, videoStart: 390, videoEnd: 490 },
    { id: 'tri-a-4', name: 'Cobra Pushups', sets: '1', reps: 'To failure', notes: 'Finisher — triceps emphasis pushup', videoId: TRI_VID, videoStart: 490, videoEnd: 540, isBodyweight: true },
  ],
};

const tricepWorkout2: Workout = {
  muscleGroup: 'triceps',
  title: 'Triceps - Workout B',
  variant: 2,
  exercises: [
    { id: 'tri-b-1', name: 'Bench Dips', sets: '2-3', reps: '8-10', notes: 'Bodyweight or weighted. Controlled tempo', videoId: TRI_VID, videoStart: 540, videoEnd: 620, isBodyweight: true },
    { id: 'tri-b-2', name: 'X Pushdowns', sets: '2-3', reps: '10-12', notes: 'Cross cables for peak contraction at bottom', videoId: TRI_VID, videoStart: 620, videoEnd: 680 },
    { id: 'tri-b-3', name: 'Cable Triceps Pushaways', sets: '2-3', reps: '10-12', notes: 'Long head emphasis — arms behind body', videoId: TRI_VID, videoStart: 680, videoEnd: 730 },
    { id: 'tri-b-4', name: 'PJR Pullover', sets: '2', reps: '8-10', notes: 'Hybrid pullover/extension — stretch the long head', videoId: TRI_VID, videoStart: 730, videoEnd: 752 },
  ],
};

// Biceps video: hmeTQHsBwv8
// Chapters: Intro 0:00 | Anatomy 0:40 | Workout 1: 1:50 | Workout 2: 7:30 | Outro 10:45
const BI_VID = 'hmeTQHsBwv8';

const bicepWorkout1: Workout = {
  muscleGroup: 'biceps',
  title: 'Biceps - Workout A',
  variant: 1,
  exercises: [
    { id: 'bi-a-1', name: 'Barbell Strict Curl → Cheat Curls', sets: '2-3', reps: '6-8', notes: 'Strict curls to failure, then cheat reps with controlled eccentric', videoId: BI_VID, videoStart: 110, videoEnd: 235 },
    { id: 'bi-a-2', name: 'DB Cross Body Hammer Curls', sets: '2-3', reps: '8-10', notes: 'Targets brachialis — upper arm width', videoId: BI_VID, videoStart: 235, videoEnd: 335 },
    { id: 'bi-a-3', name: 'Cable Stretch Drag Curls', sets: '2-3', reps: '10-12', notes: 'Long head emphasis. Partial reps after failure', videoId: BI_VID, videoStart: 335, videoEnd: 410 },
    { id: 'bi-a-4', name: 'Mentzer Pulldowns (Trap Set)', sets: '1', reps: 'To failure', notes: 'Escalating tempo: 5s up/5s down', videoId: BI_VID, videoStart: 410, videoEnd: 450, isBodyweight: true },
  ],
};

const bicepWorkout2: Workout = {
  muscleGroup: 'biceps',
  title: 'Biceps - Workout B',
  variant: 2,
  exercises: [
    { id: 'bi-b-1', name: 'Incline Dumbbell Curls', sets: '2-3', reps: '8-10', notes: 'Stretch position. Contract triceps at bottom for reflex', videoId: BI_VID, videoStart: 450, videoEnd: 530 },
    { id: 'bi-b-2', name: 'Banded Dumbbell Curls', sets: '2-3', reps: '10-12', notes: 'Band adds tension at top where dumbbells lose it', videoId: BI_VID, videoStart: 530, videoEnd: 590 },
    { id: 'bi-b-3', name: 'Weighted Chin-ups', sets: '2', reps: '6-8', notes: 'To failure. Hits all 3 bicep functions', videoId: BI_VID, videoStart: 590, videoEnd: 640 },
    { id: 'bi-b-4', name: 'Curl Trifecta', sets: '2', reps: '24 total', notes: '8 supinated cross-body + 8 pronated cross-body + 8 no-money curls', videoId: BI_VID, videoStart: 640, videoEnd: 675 },
  ],
};

// Shoulders video: zEf4pKoKc70
// Chapters: Intro 0:00 | Anatomy 0:35 | Workout 1: 1:40 | Workout 2: 5:50 | Outro 8:10
const SHLD_VID = 'zEf4pKoKc70';

const shoulderWorkout1: Workout = {
  muscleGroup: 'shoulders',
  title: 'Shoulders - Workout A',
  variant: 1,
  exercises: [
    { id: 'shld-a-1', name: 'DB Single Arm OHP / Barbell OHP', sets: '2-3', reps: '6-8', notes: 'To form failure. Single arm for stability or barbell for overload', videoId: SHLD_VID, videoStart: 100, videoEnd: 210 },
    { id: 'shld-a-2', name: 'DB Lateral Raises (Straight → Bent Arm)', sets: '3-4', reps: '10-12', notes: 'Mechanical drop set: straight arm → bent arm → partials', videoId: SHLD_VID, videoStart: 210, videoEnd: 300 },
    { id: 'shld-a-3', name: 'DB Rear Delt Rows', sets: '2', reps: '10-12', notes: 'Elbows flared, pull high for rear delt focus', videoId: SHLD_VID, videoStart: 300, videoEnd: 350 },
  ],
};

const shoulderWorkout2: Workout = {
  muscleGroup: 'shoulders',
  title: 'Shoulders - Workout B',
  variant: 2,
  exercises: [
    { id: 'shld-b-1', name: 'DB Cheat Lateral Raise', sets: '3-4', reps: '6-8', notes: 'Heavier weight with controlled eccentric', videoId: SHLD_VID, videoStart: 350, videoEnd: 420 },
    { id: 'shld-b-2', name: 'Incline DB Front Raise', sets: '2-3', reps: '10-12', notes: 'Targets front delts in stretched position. Partials after failure', videoId: SHLD_VID, videoStart: 420, videoEnd: 475 },
    { id: 'shld-b-3', name: 'Face Pulls', sets: '2', reps: '10-12', notes: '90° elbows. Strengthens rotator cuff & rear delts', videoId: SHLD_VID, videoStart: 475, videoEnd: 520 },
  ],
};

export const allWorkouts: Workout[] = [
  chestWorkout1, chestWorkout2,
  backWorkout1, backWorkout2,
  legWorkout1, legWorkout2,
  tricepWorkout1, tricepWorkout2,
  bicepWorkout1, bicepWorkout2,
  shoulderWorkout1, shoulderWorkout2,
];

export const weekPlan: WeekPlan = [
  { dayNumber: 1, label: 'Push A', isRest: false, workouts: [chestWorkout1, tricepWorkout1, shoulderWorkout1] },
  { dayNumber: 2, label: 'Pull A', isRest: false, workouts: [backWorkout1, bicepWorkout1] },
  { dayNumber: 3, label: 'Legs A', isRest: false, workouts: [legWorkout1] },
  { dayNumber: 4, label: 'Push B', isRest: false, workouts: [chestWorkout2, tricepWorkout2, shoulderWorkout2] },
  { dayNumber: 5, label: 'Pull B', isRest: false, workouts: [backWorkout2, bicepWorkout2] },
  { dayNumber: 6, label: 'Legs B', isRest: false, workouts: [legWorkout2] },
  { dayNumber: 7, label: 'Rest', isRest: true, workouts: [] },
];
