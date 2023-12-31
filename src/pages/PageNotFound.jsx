import notFoundPage from '../assets/404.svg';
import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
  const navigate = useNavigate();
  const text = 'Ops!!! Page not Found';
  const handleBackToHome = () => {
    navigate('/');
  };
  return (
    <>
      <div className="container w-full py-5">
        <div className="mx-auto text-center">
          <img
            className="mx-auto"
            src={notFoundPage}
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

export default PageNotFound;
