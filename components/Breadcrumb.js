import Link from "next/link";

const Breadcrumb = ({ items }) => (
  <nav className="breadcrumb is-medium ml-5 mr-5" aria-label="breadcrumbs">
    <ul>
      <li>
        <Link href="/">
          <a>
            <span className="icon">
              <i className="fa fa-home" />
            </span>
            <span>Home</span>
          </a>
        </Link>
      </li>
      {items.map((item, itemIndex) => (
        <li
          key={itemIndex}
          className={itemIndex == items.length - 1 ? "is-active" : ""}
        >
          <Link href={item.path}>
            <a>
              {item.icon ? (
                <span className="icon">
                  <i className={`fa ${item.icon}`} />
                </span>
              ) : (
                ""
              )}
              <span>{item.text}</span>
            </a>
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default Breadcrumb;
