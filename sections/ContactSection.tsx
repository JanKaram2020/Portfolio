const ContactSection = () => (
  <div className="flex flex-col gap-5vh mx-1vw">
    <h2 className="text-4xl font-bold relative mt-10vh after:(content-empty absolute bottom-0 block h-2px scale-x-0 bg-red-400 transform duration-250 ease-in-out w-80% lg:w-34%) hover:after:scale-x-100">
      Let's Build Something Together
    </h2>
    <p className="text-xl pt">
      Feel free to reach out if you're looking for a developer, have a question,
      or just want to connect
    </p>
    <a href="mailto: jankaram2020@gmail.com">jankaram2020@gmail.com</a>
  </div>
);
export default ContactSection;
