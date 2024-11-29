const BackgroundShape = () => {
  return (
    <div className="pointer-events-none absolute inset-0 top-32 -z-10 ml-auto mr-4 block size-[300px] bg-[radial-gradient(hsl(var(--muted-foreground))_1px,transparent_1px)] opacity-25 [background-size:6px_6px] [mask-image:radial-gradient(circle_at_center,white_150px,transparent_150px)] lg:top-0 lg:ml-[20vw] lg:block lg:size-[500px] lg:[mask-image:radial-gradient(circle_at_center,white_250px,transparent_250px)]" />
  );
};
export default BackgroundShape;
