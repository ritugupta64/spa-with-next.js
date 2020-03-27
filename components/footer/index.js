import Link from "next/link";
import Routes from "../routes";

const Footer = () => {
  return (
    <footer>
      <nav>
        <Link href={Routes.bestPractice}>
          <a>Best Practice |</a>
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
        <Link href={Routes.debugging}>
          <a>React Axe debugging tool |</a>
        </Link>
        <Link href={Routes.graph}>
          <a>SVG and Charts |</a>
        </Link>
        <Link href={Routes.media}>
          <a>Audio and Video |</a>
        </Link>
        <Link href={Routes.table}>
          <a>Table |</a>
        </Link>
        <Link href={Routes.defect}>
          <a>Defects app |</a>
        </Link>
        <Link href={Routes.issuesList}>
          <a>Common accessibility issues</a>
        </Link>
       
      </nav>
    </footer>
  );
};

export default Footer;
