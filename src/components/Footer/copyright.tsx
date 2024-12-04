const Copyright = () => {
  const copyrightYear = () => {
    return new Date().getFullYear();
  };
  return (
    <div className="select-none border-t py-2 text-center font-semibold">
      Copyright © {copyrightYear()}
    </div>
  );
};

export default Copyright;
