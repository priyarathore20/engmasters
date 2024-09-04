import Button from "@/Atoms/Button";
import CountdownTimer from "@/Atoms/Timer";

const IntroSection = () => {
  return (
    <section className="bg-bgGray">
      <div className="relative z-50 flex lg:flex-row flex-col justify-between items-center lg:items-start gap-6 pt-[30px] pb-8 section-container">
        {/*------Intro left part------- */}
        <div className="flex flex-col flex-[0.5] max-lg:items-center">
          <h2 className="font-bold text-[52px] text-orange max-lg:text-center uppercase leading-[56px]">
            English Speaking Institute in Tilak Nagar
          </h2>
          <h5 className="mt-[10px] mb-4 font-medium text-xl">
            Delhi&apos;s <b>#1</b> English Speaking Institute with{" "}
            <span className="text-brown">Proven Track Record.</span>
          </h5>
          <div>
            <Button
              size="medium"
              label={"Call For Consultation >"}
              classname="bg-gradient-to-r from-yellow text-white to-orange"
            />
            <p className="mt-1 ml-5 text-xs">
              <b>1,00,000+</b> students enrolled till date
            </p>
          </div>
          <div className="mt-[50px]">
            <p className="mb-4 text-orange">Batch starting on Monday</p>
            <CountdownTimer />
          </div>
        </div>

        {/*------Intro right part------- */}
        <div className="flex-[0.5]">
          <picture>
            <video
              className="rounded-[30px] w-full max-w-[560px] h-full max-h-80"
              src="/engmates.mp4"
              poster="/poster.png"
              autoPlay
              controls
              loop
            ></video>
          </picture>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
