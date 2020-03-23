import Link from "next/link";
import Routes from "../routes";

const Footer = () => {
  return (
    <footer>
      <nav>
        <Link href={Routes.semanticRule}>
          <a>Semantic Rules |</a>
        </Link>
        <Link href={Routes.hideElement}>
          <a>Hide Element |</a>
        </Link>
        <Link href={Routes.textualMeaning}>
          <a>Textual Meaning |</a>
        </Link>
        <Link href={Routes.focusManagement}>
          <a>Focus Management |</a>
        </Link>
        <Link href={Routes.notificationAccessible}>
          <a>Notification Accessible</a>
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
