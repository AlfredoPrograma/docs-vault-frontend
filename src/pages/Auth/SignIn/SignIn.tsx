import { testIds } from './constants/testIds';

export function SignIn() {
  return (
    <div data-testid={testIds.SIGN_IN}>
      <h1>Sign in</h1>
    </div>
  );
}
