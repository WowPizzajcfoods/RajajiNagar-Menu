import ImageWithLoading from "./ImageWithLoading";

export default function Footer() {
  const phone = "9535283905";
  return (
    <footer className="flex flex-col">
      <span className="text-center my-2 font-semibold">
        Prices above are tax-exclusive!
      </span>

      <div className="flex flex-col-reverse items-center justify-center border-t border-[#cdcdcd] py-3 gap-2">
        <div className="text-center">
          <span className="text-xs md:text-sm text-center block">
            Pizza pictures are like dreams - Real may look different, but still
            delicious!
          </span>
        </div>
        <div className="flex justify-center gap-3">
          <a href="https://maps.app.goo.gl/SMRhLFrt7PSc6oZy8" target="_blank">
            <div className="p-1 relative w-9 h-9 md:w-10 md:h-10 border border-[#ed5a5a] rounded bg-[#ed5a5a] shadow-md md:transition-all md:duration-400 md:hover:bg-[#df4e4e] md:hover:scale-110">
              <ImageWithLoading
                alt={`Call`}
                src={`/icons/location.svg`}
                className="p-2"
              />
            </div>
          </a>
          <a href={`tel:+91${phone}`}>
            <div className="p-1 relative w-9 h-9 md:w-10 md:h-10 border border-[#ed5a5a] rounded bg-[#ed5a5a] shadow-md md:transition-all md:duration-400 md:hover:bg-[#ed5a5a] md:hover:scale-110">
              <ImageWithLoading
                alt={`Call`}
                src={`/icons/phone.svg`}
                className="p-2"
              />
            </div>
          </a>
          <a href={`https://www.swiggy.com/menu/1252657?source=sharing`}>
            <div className="p-1 relative w-9 h-9 md:w-10 md:h-10 border border-[#ed5a5a] rounded bg-[#ed5a5a] shadow-md md:transition-all md:duration-400 md:hover:bg-[#ed5a5a] md:hover:scale-110">
              <ImageWithLoading
                alt={`Call`}
                src={`/icons/swiggy.jpeg`}
                className="p-2"
              />
            </div>
          </a>
        </div>
      </div>
      <p className="bg-[#ed5a5a] text-white m-0 text-center py-2 w-full">
        ©Wow Pizza. All Right Reserved
      </p>
    </footer>
  );
}
