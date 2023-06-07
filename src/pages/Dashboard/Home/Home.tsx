import { testIds } from './constants/testIds';

export function Home() {
  return (
    <div data-testid={testIds.HOME}>
      <h1>Home</h1>
    </div>
  );
}
