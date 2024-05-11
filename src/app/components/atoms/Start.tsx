const Start: React.FC = () => {
  const domain = process.env.REACT_APP_IMAGE_URL
  return (
    <>
      <div className="mt-[100px] w-[480px] h-[450px] mx-auto">
        <img
          src={`${domain}/pokemon-zukan/gengar.png`}
        />
      </div>
    </>
  );
};

export default Start;
