import LeftSection from "./components/LeftSection";
import RightSection from "./components/RightSection";
const App = () => {
  return (
    <>
      <section>
        <div className="hidden h-screen lg:flex">
          <LeftSection />
          <RightSection />
        </div>
        <div className="flex flex-col lg:hidden">
          <LeftSection />
          <RightSection />
        </div>
      </section>
    </>
  )
}
export default App
