import { useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

const ChristmasModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showModal) {
      setIsOpen(true);
    }
  }, [showModal]);

  // Calculate new dimensions maintaining aspect ratio
  const newWidth = Math.round(800); // Base width
  const newHeight = Math.round(600); // Adjusted for proper aspect ratio

  return (
    <Transition show={showModal} as="div" className="relative z-50">
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <Transition.Child
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        </Transition.Child>

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Transition.Child
            enter="transition ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="mx-auto rounded-lg overflow-hidden shadow-2xl max-w-[80vw] w-full md:max-w-[650px]">
              <div className="relative">
                <img
                  src="/newyear.png"
                  alt="Christmas 50% Off"
                  width={newWidth}
                  height={newHeight}
                  className="w-full h-auto object-contain"
                />
                {/* Close button overlay */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 p-2 rounded-full transition-all duration-300 group"
                  aria-label="Close dialog"
                >
                  <X className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                </button>
              </div>
              {/* Footer section matching banner theme */}
              <div className="bg-white p-6 flex flex-col items-center gap-4">
                <Link
                  href="/contact"
                  className="w-full text-center"
                  onClick={() => setIsOpen(false)}
                >
                  <button className="w-full max-w-md py-3 px-6 bg-black hover:bg-[#ffed4a] text-white font-bold rounded-full transform hover:scale-105 transition-all duration-300 text-lg shadow-lg hover:shadow-xl">
                    Get Your 50% OFF Now!
                  </button>
                  <p className="text-black text-sm font-medium mt-2">
                    ✨ Limited Time Holiday Offer ✨
                  </p>
                </Link>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ChristmasModal;
