/* eslint-disable react/no-unescaped-entities */
import ComingSoon from '../assets/comingSoon.svg';
import { useNavigate } from 'react-router-dom';
const Experience = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/');
  };
  return (
    <>
      <div className="container w-full py-5">
        <div className="mx-auto text-center">
          <img
            className="mx-auto"
            src={ComingSoon}
            alt="Coming Soon were working on it"
            width={500}
            height={500}
          />
          <h2 className="">Coming soon, I'm Working on it</h2>

          <button
            className="mt-3 btn btn-outline btn-sm"
            onClick={handleBackToHome}
          >
            Home
          </button>
        </div>
      </div>
    </>
  );
};

export default Experience;
