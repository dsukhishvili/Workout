import { createContext, useContext, useEffect, useState, useCallback, type ReactNode } from 'react';
import { onAuthStateChanged, signInWithPopup, signOut as fbSignOut, type User } from 'firebase/auth';
import { auth, googleProvider, isConfigured } from '../lib/firebase';

interface AuthState {
  user: User | null;
  loading: boolean;
  isConfigured: boolean;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthState>({
  user: null,
  loading: true,
  isConfigured: false,
  signInWithGoogle: async () => {},
  signOut: async () => {},
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!auth) {
      setLoading(false);
      return;
    }
    return onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoading(false);
    });
  }, []);

  const signInWithGoogle = useCallback(async () => {
    if (!auth) return;
    await signInWithPopup(auth, googleProvider);
  }, []);

  const signOut = useCallback(async () => {
    if (!auth) return;
    await fbSignOut(auth);
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, isConfigured, signInWithGoogle, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
