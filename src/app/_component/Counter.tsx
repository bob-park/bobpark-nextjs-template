'use client';

import { useStore } from '@/shared/rootStore';

export default function Counter() {
  // store
  const count = useStore((state) => state.count);
  const decrease = useStore((state) => state.decrease);
  const increase = useStore((state) => state.increase);

  // handle
  const handleDecrease = () => {
    decrease();
  };

  const handleIncrease = () => {
    increase();
  };

  return (
    <div className="flex flex-col justify-center items-center size-full">
      <div>{count}</div>
      <div>
        <button className="btn" type="button" onClick={handleIncrease}>
          +
        </button>
        <button className="btn" type="button" onClick={handleDecrease}>
          -
        </button>
      </div>
    </div>
  );
}
