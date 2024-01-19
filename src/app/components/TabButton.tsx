import { motion } from "framer-motion";

type TabButtonProps = {
  active: boolean;

  selectTab: () => void;

  children: React.ReactNode;
};

const variants = {
  default: { width: "0%" },
  active: { width: "calc(100% - 0.75rem )" },
};

const TabButton = ({ active, selectTab, children }: TabButtonProps) => {
  const buttonClasses = active ? "text-white " : "text-[#ADB7BE]";
  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        variants={variants}
        initial="default"
        animate={active ? "active" : "default"}
        className="h-1 bg-purple-500 rounded-full mt-2 mr-3"
      />
    </button>
  );
};

export default TabButton;
