'use client';

import { ReactNode } from 'react';
import { SmoothScrollProvider } from './SmoothScrollProvider';
import { GSAPProvider } from './GSAPProvider';
import { LightProvider } from './LightProvider';
import { MotionProvider } from './MotionProvider';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <SmoothScrollProvider>
      <GSAPProvider>
        <LightProvider>
          <MotionProvider>{children}</MotionProvider>
        </LightProvider>
      </GSAPProvider>
    </SmoothScrollProvider>
  );
}
