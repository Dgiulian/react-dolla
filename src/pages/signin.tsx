import React, { ReactElement } from 'react';
import { SignIn } from '../components';

interface Props {}

export default function SignInPage({}: Props): ReactElement {
  return (
    <div>
      <SignIn />
    </div>
  );
}
