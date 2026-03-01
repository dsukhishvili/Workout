import { createContext, useContext, useEffect, useState, useCallback, useRef, type ReactNode } from 'react';
import {
  onAuthStateChanged,
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
  signOut as fbSignOut,
  type User,
} from 'firebase/auth';
import { auth, googleProvider, isConfigured } from '../lib/firebase';

interface AuthState {
  user: User | null;
  loading: boolean;
  signingIn: boolean;
  justSignedIn: boolean;
  isConfigured: boolean;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
  clearJustSignedIn: () => void;
}

const AuthContext = createContext<AuthState>({
  user: null,
  loading: true,
  signingIn: false,
  justSignedIn: false,
  isConfigured: false,
  signInWithGoogle: async () => {},
  signOut: async () => {},
  clearJustSignedIn: () => {},
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [signingIn, setSigningIn] = useState(false);
  const [justSignedIn, setJustSignedIn] = useState(false);
  const initialLoadDone = useRef(false);

  useEffect(() => {
    if (!auth) {
      setLoading(false);
      return;
    }

    getRedirectResult(auth)
      .then((result) => {
        if (result?.user) {
          setJustSignedIn(true);
        }
      })
      .catch((error: unknown) => {
        const fbError = error as { code?: string; message?: string };
        if (fbError.code === 'auth/unauthorized-domain') {
          alert(
            'This domain is not authorized in Firebase.\n\n' +
            'Go to Firebase Console → Authentication → Settings → Authorized domains ' +
            'and add: ' + window.location.hostname
          );
        } else if (fbError.code) {
          alert(`Sign-in failed: ${fbError.message}`);
        }
      });

    return onAuthStateChanged(auth, (u) => {
      if (initialLoadDone.current && !user && u) {
        setJustSignedIn(true);
      }
      setUser(u);
      setLoading(false);
      setSigningIn(false);
      initialLoadDone.current = true;
    });
  }, []);

  const signInWithGoogle = useCallback(async () => {
    if (!auth || signingIn) return;
    setSigningIn(true);
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error: unknown) {
      const fbError = error as { code?: string; message?: string };
      if (fbError.code === 'auth/popup-blocked' || fbError.code === 'auth/popup-closed-by-user') {
        try {
          await signInWithRedirect(auth, googleProvider);
          return;
        } catch {
          setSigningIn(false);
        }
      } else if (fbError.code === 'auth/unauthorized-domain') {
        alert(
          'This domain is not authorized in Firebase.\n\n' +
          'Go to Firebase Console → Authentication → Settings → Authorized domains ' +
          'and add: ' + window.location.hostname
        );
        setSigningIn(false);
      } else {
        console.error('Sign-in failed:', error);
        alert(`Sign-in failed: ${fbError.message || 'Unknown error'}`);
        setSigningIn(false);
      }
    }
  }, [signingIn]);

  const signOut = useCallback(async () => {
    if (!auth) return;
    await fbSignOut(auth);
  }, []);

  const clearJustSignedIn = useCallback(() => {
    setJustSignedIn(false);
  }, []);

  return (
    <AuthContext.Provider value={{
      user, loading, signingIn, justSignedIn, isConfigured,
      signInWithGoogle, signOut, clearJustSignedIn,
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
