import { useNavigate } from 'react-router-dom';
import ComingSoon from '../assets/comingSoon.svg';

const Resume = () => {
  const navigate = useNavigate();
  const text = "Coming soon, I'm Working on it";
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
          <h2 className="">{text}</h2>

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

export default Resume;
