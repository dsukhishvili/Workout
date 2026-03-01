import { doc, getDoc, setDoc, collection, query, getDocs, orderBy, limit } from 'firebase/firestore';
import { db } from './firebase';
import type { WeightEntry } from '../types/workout';

function getWeekId(date: Date = new Date()): string {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  const dayOfWeek = d.getDay();
  const diff = d.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1);
  d.setDate(diff);
  return d.toISOString().split('T')[0];
}

function getDocPath(userId: string, exerciseId: string, weekId: string) {
  return `users/${userId}/exercises/${exerciseId}/weeks/${weekId}`;
}

export async function saveWeight(
  userId: string,
  exerciseId: string,
  weight: number,
  unit: 'kg' | 'lbs'
): Promise<void> {
  if (!db) return;
  const weekId = getWeekId();
  const ref = doc(db, getDocPath(userId, exerciseId, weekId));
  const entry: WeightEntry = {
    weight,
    unit,
    date: new Date().toISOString(),
  };
  await setDoc(ref, entry);
}

export async function getCurrentWeekWeight(
  userId: string,
  exerciseId: string
): Promise<WeightEntry | null> {
  if (!db) return null;
  const weekId = getWeekId();
  const ref = doc(db, getDocPath(userId, exerciseId, weekId));
  const snap = await getDoc(ref);
  return snap.exists() ? (snap.data() as WeightEntry) : null;
}

export async function getPreviousWeekWeight(
  userId: string,
  exerciseId: string
): Promise<WeightEntry | null> {
  if (!db) return null;
  const prevWeek = new Date();
  prevWeek.setDate(prevWeek.getDate() - 7);
  const weekId = getWeekId(prevWeek);
  const ref = doc(db, getDocPath(userId, exerciseId, weekId));
  const snap = await getDoc(ref);
  return snap.exists() ? (snap.data() as WeightEntry) : null;
}

export async function getWeightHistory(
  userId: string,
  exerciseId: string,
  limitCount: number = 8
): Promise<WeightEntry[]> {
  if (!db) return [];
  const colRef = collection(db, `users/${userId}/exercises/${exerciseId}/weeks`);
  const q = query(colRef, orderBy('date', 'desc'), limit(limitCount));
  const snap = await getDocs(q);
  return snap.docs.map(d => d.data() as WeightEntry);
}

export { getWeekId };
