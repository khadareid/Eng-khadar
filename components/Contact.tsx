import CopyText from "./CopyText";
import SocailMedia from "./SocailMedia";

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full text-white py-20 lg:px-[80px] bg-[#2D2D2D]"
    >
      <div className="flex w-full text-white flex-col items-center justify-center">
        <CopyText
          imageOneUrl="/icons/email.svg"
          imageTwoUrl="/icons/copy.svg"
          text="engkhadareid@gmail.com"
          isEmail={true}
        />
        <CopyText
          imageOneUrl="/icons/call.svg"
          imageTwoUrl="/icons/copy.svg"
          text="+252634234825 || +252 65923552"
          isEmail={false}
        />

        <p className="body-2 mt-8 text-white bg-green-600 p-2 rounded-md">
          You may also find me on these platforms!
        </p>
        <SocailMedia otherClasses="mt-8" />
      </div>
    </section>
  );
}
