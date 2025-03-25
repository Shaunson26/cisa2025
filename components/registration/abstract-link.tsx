import Link from "next/link";

export function AbstractIPNAEmailLink() {
    const address = "cisa2025abstracts@ipna.csic.es";
    return (
      <Link
        href={`mailto:${address}`}
        target="_blank"
        aria-label="Link to conference email address for submission of abstract questions"
        className="font-semibold underline text-primary hover:text-blue-800 transition-colors focus:outline-none focus:ring focus:text-blue-800"
      >
        {address}
      </Link>
    );
  }