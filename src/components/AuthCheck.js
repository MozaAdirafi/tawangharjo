import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../config/firebase';

export function AuthCheck({ children, fallback }) {
  const [user] = useAuthState(auth);
  return user ? children : fallback;
}