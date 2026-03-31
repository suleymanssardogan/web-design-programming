import ContactForm from "../forms/ContactForm";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 px-4 bg-gray-50 dark:bg-gray-900 flex justify-center">
      <div className="w-full max-w-lg">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          Iletisim
        </h2>
        <ContactForm />
      </div>
    </section>
  );
}
