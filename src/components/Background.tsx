export const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black-500">
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-purple-600/20 blur-[120px] animate-aura-slow" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-500/10 blur-[120px] animate-aura-slow [animation-delay:2s]" />
      <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] rounded-full bg-purple-600/15 blur-[100px] animate-aura-slow [animation-delay:4s]" />
    </div>
  );
};
