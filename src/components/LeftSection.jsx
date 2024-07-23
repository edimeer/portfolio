import ContactSection from "./ContactSection";
import ProfileSection from "./ProfileSection";
import Footer from "./Footer";

const LeftSection = () => {
  return (
    <div className="w-full p-10 top-0 bottom-0 lg:pl-36 lg:fixed lg:w-1/2">
      <div className="flex flex-col justify-between h-full">

        <ProfileSection />
        <ContactSection />
        <Footer />

      </div>
    </div>
  )
}
export default LeftSection
