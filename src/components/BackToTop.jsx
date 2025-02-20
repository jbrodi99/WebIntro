import styles from "../styles/BackToTop.module.css";

export default function BackToTop({text = 'Volver arriba'}) {
  const scrollToTop = () => {
    window.scrollTo({ top: 720, behavior: "smooth" });
  };

  return (
    <button className={styles.backToTop} onClick={scrollToTop}>
      {text}
    </button>
  );
}
