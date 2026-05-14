/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { useTranslation } from "react-i18next";
import { ProjectCard } from "./ProjectCard";


const Works = () => {
  const { t } = useTranslation();
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>{t("Work")}</p>
        <h2 className={`${styles.sectionHeadText}`}>{t("Projects")}.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          {t("Projects_text")}
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7 place-content-center">
        {projects.map((project, index) => (
          <ProjectCard key={`proyect-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
