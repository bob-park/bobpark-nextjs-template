import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import { createCounterSlice } from './counter/slice';

export const useStore = create<BoundState>()(
  devtools(
    immer((...a) => ({
      ...createCounterSlice(...a),
    })),
    {
      name: 'bob-park-store',
      enabled: process.env.NODE_ENV !== 'production',
    },
  ),
);

export type BoundState = CounterState;
