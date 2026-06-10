import { useState } from 'react';
import iconList from '../assets/icon-list.svg';
import iconSuccess from '../assets/icon-success.svg';
import illustrationDesktop from '../assets/illustration-sign-up-desktop.svg';
import illustrationMobile from '../assets/illustration-sign-up-mobile.svg';
import illustrationTablet from '../assets/illustration-sign-up-tablet.svg';

function SignUpForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <main>
        <section>
          <img src={iconSuccess} alt="Success icon" />
          <p>Thanks for subscribing!</p>
          <p>
            A confirmation email has been sent to ash@loremcompany.com. Please
            open it and click the button inside to confirm your subscription.
          </p>
          <button onClick={() => setSubmitted(false)}>Dismiss message</button>
        </section>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center">
      <section className="flex max-w-md flex-col text-blue-800">
        <div>
          <img
            src={illustrationMobile}
            alt="Mobile illustration"
            className="w-full"
          />
        </div>

        <div className="mt-card-500 flex flex-col gap-card-500 px-card-400">
          <div className="flex flex-col gap-card-300">
            <p className="text-preset-1-bold-mobile">Stay updated!</p>
            <p className="text-preset-2-regular">
              Join 60,000+ product managers receiving monthly updates on:
            </p>
            <ul className="flex flex-col gap-card-100 text-preset-2-regular">
              <li className="flex items-start gap-card-200">
                <img src={iconList} alt="Icon list" />
                Product discovery and building what matters
              </li>
              <li className="flex items-start gap-card-200">
                <img src={iconList} alt="Icon list" />
                Measuring to ensure updates are a success
              </li>
              <li className="flex items-start gap-card-200">
                <img src={iconList} alt="Icon list" />
                And much more!
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-card-300">
            <div className="flex flex-col gap-card-100">
              <p className="text-preset-3-bold">Email address</p>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@company.com"
                className="rounded-lg border border-grey px-card-300 py-card-200 text-preset-2-regular text-grey"
              />
            </div>
            <button className="w-full rounded-lg bg-blue-800 px-card-600 py-card-200 text-preset-2-bold text-nowrap text-white">
              Subscribe to monthly newsletter
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default SignUpForm;
