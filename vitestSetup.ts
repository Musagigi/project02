import * as matchers from '@testing-library/jest-dom/matchers';
import { cleanup } from '@testing-library/react';
import { expect, afterEach } from 'vitest';

// Extend Vitest's expect function with Testing Library's matchers
expect.extend(matchers);

// Clean up the DOM after each test to prevent memory leaks
afterEach(() => cleanup());
