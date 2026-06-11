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

  function handleSubmit(e) {
    e.preventDefault();
    if (!email) {
      setError('Email is required');
      return;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Valid email required');
      return;
    }
    setSubmitted(true);
    setError('');
  }

  if (submitted) {
    return (
      <main className="flex min-h-screen flex-col items-center md:justify-center md:bg-blue-700">
        <section className="flex min-h-screen w-full flex-col justify-between px-card-300 py-card-1300 text-blue-800 md:min-h-0 md:w-[500px] md:justify-normal md:gap-card-400 md:rounded-[36px] md:bg-white md:p-card-800">
          <div className="flex flex-col gap-card-400">
            <img
              src={iconSuccess}
              alt="Success icon"
              className="h-[64px] w-[64px]"
            />
            <p className="text-preset-1-bold-mobile md:text-preset-1-bold">
              Thanks for subscribing!
            </p>
            <p className="text-preset-2-regular">
              A confirmation email has been sent to{' '}
              <span className="text-preset-2-bold">{email}</span>. Please open
              it and click the button inside to confirm your subscription.
            </p>
          </div>
          <button
            onClick={() => {
              setSubmitted(false);
              setEmail('');
            }}
            className="w-full rounded-lg bg-blue-800 from-gradient-start to-gradient-end px-card-600 py-card-200 text-preset-2-bold text-nowrap text-white shadow-none transition-shadow duration-300 hover:bg-linear-to-r hover:shadow-card focus:ring-2 focus:ring-blue-800 focus:ring-offset-2 focus:outline-none"
          >
            Dismiss message
          </button>
        </section>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center md:bg-blue-700">
      <section className="flex flex-col text-blue-800 md:my-[73px] md:rounded-[36px] md:bg-white md:p-card-500 md:shadow-card-1 lg:my-[219px] lg:flex-row-reverse lg:items-center lg:gap-card-800 lg:p-card-400 lg:shadow-card-1">
        <img
          src={illustrationMobile}
          alt="Mobile illustration"
          className="mb-card-500 w-full md:hidden lg:hidden"
        />
        <img
          src={illustrationTablet}
          alt="Tablet illustration"
          className="mb-card-500 hidden w-full md:block lg:hidden"
        />
        <img
          src={illustrationDesktop}
          alt="Desktop illustration"
          className="hidden w-full md:hidden lg:block lg:w-[400px] lg:shrink-0"
        />

        <div className="flex flex-col gap-card-500 px-card-300 md:gap-card-300 md:px-0 lg:w-[376px] lg:gap-card-400">
          <div className="flex flex-col gap-card-300">
            <p className="text-preset-1-bold-mobile md:text-preset-1-bold">
              Stay updated!
            </p>
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

          <div className="flex flex-col gap-card-300 md:gap-card-200 lg:gap-card-300">
            <div className="flex flex-col gap-card-100">
              <div className="flex flex-row">
                <label htmlFor="email" className="mr-auto text-preset-3-bold">
                  Email address
                </label>
                {error && (
                  <p className="justify-end text-preset-3-bold text-red">
                    {error}
                  </p>
                )}
              </div>
              <input
                type="email"
                value={email}
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@company.com"
                className={`rounded-lg px-card-300 py-card-200 text-preset-2-regular focus:ring-2 focus:ring-blue-800 focus:ring-offset-2 focus:outline-none ${error ? 'border border-red bg-red-100 text-red' : 'border border-grey text-grey'}`}
              />
            </div>
            <button
              onClick={handleSubmit}
              type="submit"
              className="w-full rounded-lg bg-blue-800 from-gradient-start to-gradient-end px-card-600 py-card-200 text-preset-2-bold text-nowrap text-white shadow-none transition-shadow duration-300 hover:bg-linear-to-r hover:shadow-card focus:ring-2 focus:ring-blue-800 focus:ring-offset-2 focus:outline-none"
            >
              Subscribe to monthly newsletter
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default SignUpForm;
