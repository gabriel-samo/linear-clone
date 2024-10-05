import { LogoLightIllustration } from "../illustrations/logo-light";
import { ZapIllustration } from "../illustrations/zap";

export const UnlikeAnyTool = () => {
  return (
    <div className="text-white">
      <div className="text-center">
        <h2 className="mb-4 text-4xl md:mb-7 md:text-7xl">
          Unlike any tool
          <br className="hidden md:inline-block" /> you’ve used before
        </h2>
        <p className="mx-auto mb-4 max-w-[68rem] text-lg text-primary-text md:text-xl">
          Designed to the last pixel and engineered with unforgiving precision,
          Linear combines UI elegance with world-class performance.
        </p>
      </div>
      <div className="flex flex-wrap gap-6">
        <div className="flex min-h-[48rem] basis-[calc(66.66%-12px)] flex-col justify-end rounded-[4.8rem] border border-transparent-white bg-glass-gradient p-8 text-center md:p-14">
          <p className="text-3xl">Built for your keyboard</p>
          <p className="text-md text-primary-text">
            Fly through your tasks with rapid-fire keyboard shortcuts for
            everything. Literally everything.
          </p>
        </div>
        <div className="relative flex min-h-[48rem] basis-[calc(33.33%-12px)] flex-col items-center justify-end rounded-[4.8rem] border border-transparent-white bg-glass-gradient p-8 text-center md:p-14">
          <div className="mask-linear-faded absolute top-[-9.2rem]">
            <ZapIllustration />
          </div>
          <p className="text-3xl">Breathtakingly fast</p>
          <p className="text-md text-primary-text">
            Built for speed with 50ms interactions and real-time sync.
          </p>
        </div>
        <div className="flex min-h-[48rem] basis-[calc(33.33%-12px)] flex-col justify-end rounded-[4.8rem] border border-transparent-white bg-glass-gradient p-8 text-center md:p-14">
          <div className="">
            <LogoLightIllustration />
          </div>
          <p className="text-3xl">Designed for modern software teams</p>
          <p className="text-md text-primary-text">
            Comes with built-in workflows that create focus and routine.
          </p>
        </div>
        <div className="flex min-h-[48rem] basis-[calc(66.66%-12px)] flex-col justify-end rounded-[4.8rem] border border-transparent-white bg-glass-gradient p-8 text-center md:p-14">
          <p className="text-3xl">Meet your command line</p>
          <p className="text-md text-primary-text">
            Complete any action in seconds with the global command menu.
          </p>
        </div>
      </div>
    </div>
  );
};
