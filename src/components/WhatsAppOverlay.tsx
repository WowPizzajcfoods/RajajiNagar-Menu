import ImageWithLoading from "./ImageWithLoading";

const WhatsAppOverlay = () => {
  const phone = "9535283905";
  const message = "Hello! I want to order a pizza";

  return (
    <div className="fixed bottom-[10dvh] right-[5dvw] z-2">
      <div className="relative h-12 w-12 animate-bounce">
        <a
          href={`https://wa.me/91${phone}?text=${message}`} // replace with your number
          target="_blank"
          rel="noopener noreferrer"
        >
          <ImageWithLoading alt="WhatsApp" src="/icons/whatsapp.svg" />
        </a>
      </div>
    </div>
  );
};

export default WhatsAppOverlay;
