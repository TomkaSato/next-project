const Start: React.FC = () => {
  const domain = process.env.REACT_APP_IMAGE_URL
  return (
    <>
      <div className="mx-auto w-[80%] md:w-[500px] md:pt-[100px] pt-[100px]">
        <img className="md:mt-0 mt-[50px] mb-5 mx-auto w-[480px]" src={`${domain}/pokemon-zukan/gengar.png`} />
      </div>
    </>
  );
};

export default Start;
