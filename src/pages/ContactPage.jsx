import Form from "../components/contact/Form";
import Info from "../components/contact/Info";

const ContactPage = ({ theme }) => {
  return (
    <>
      {/* top bottom margin */}
      <div className="mt-10 md:mt-14 lg:mt-16 mb-10">
        <section className="flex items-center justify-center min-h-[60vh] sm:min-h-[70vh] px-4 sm:px-6">
          <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <Info theme={theme} />

            <Form theme={theme} />
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactPage;
