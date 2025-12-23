import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* Top Section */}
      <div className={styles.top}>
        <div className={styles.column}>
          <h4>Get to Know Us</h4>
          <a href="#">About</a>
          <a href="#">Careers</a>
          <a href="#">Contact</a>
        </div>

        <div className={styles.column}>
          <h4>Legal</h4>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Disclaimer</a>
        </div>

        <div className={styles.column}>
          <h4>Connect</h4>
          <a href="#">GitHub</a>
          <a href="#">LinkedIn</a>
          <a href="#">Portfolio</a>
        </div>
      </div>

      {/* Disclaimer */}
      <div className={styles.disclaimer}>
        <p>
          <strong>Disclaimer:</strong> This website is a demo project created
          for educational purposes only. This project is not affiliated with,
          endorsed by, or sponsored by any brand shown. All product names,
          logos, trademarks, and images belong to their respective owners.
        </p>
      </div>

      {/* Bottom Section */}
      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} Hanna Bekele. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
