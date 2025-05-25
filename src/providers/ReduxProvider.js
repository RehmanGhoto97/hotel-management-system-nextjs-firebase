'use client';

import { Provider } from 'react-redux';
import { makeStore } from '@/lib/store';

const store = makeStore(); // ✅ created only on client

export default function ReduxProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
