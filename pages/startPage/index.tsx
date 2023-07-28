export const StartPage = () => {
  return (
    <div className="w-[393px] h-[852px] relative overflow-hidden bg-[#181920]">
      <svg
        width={393}
        height={852}
        viewBox="0 0 393 852"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-[-1px] top-[-1px]"
        preserveAspectRatio="none"
      >
        <path d="M0 0H393V852H0V0Z" fill="#181920" fill-opacity="0.2" />
      </svg>
      <p className="absolute left-[122px] top-[411px] text-3xl font-bold text-center">
        <span className="text-3xl font-bold text-center text-white">Fit</span>
        <span className="text-3xl font-bold text-center text-[#2cf79f]">.</span>
        <span className="text-3xl font-bold text-center text-white">
          lendar
        </span>
      </p>
    </div>
  );
};
