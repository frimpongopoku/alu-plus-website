import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NAV_DEFAULT_LINKS } from "../values";

export const MobileNav = (props) => {
  const { logo, toggleSidebar, toggled, goHome } = props;
  return (
    <div className="elevate-float mobile-nav-main-container vanish-on-pc">
      <div style={{ flex: "4" }}>
        <img
          className="mobile-nav-logo"
          src={logo}
          onClick={() => goHome()}
          alt="media"
        />
      </div>

      <div
        style={{
          flex: "6",
          display: "flex",
          flexDirection: "row-reverse",
          padding: "10px 20px",
        }}
        onClick={() => toggleSidebar(!toggled)}
      >
        <FontAwesomeIcon icon={faBars} className="mobile-options" />
      </div>
    </div>
  );
};

export const MobileSideBar = (props) => {
  const { showBlanket, toggled, toggleSidebar } = props;
  return (
    <div className="mobile-sidebar elevate-float come-from-left">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: "12",
          height: "100%",
        }}
      >
        <div style={{ flex: "10", width: "100%" }}>
          <div
            style={{
              padding: 10,
              width: "100%",
              background: "var(--app-theme-maroon)",
              color: "white",
              margin: 0,
              fontWeight: "500",
            }}
          >
            <p style={{ margin: 0 }}>MENU</p>
          </div>

          {NAV_DEFAULT_LINKS.map((item, index) => (
            <div key={index.toString()} className="mobile-side-link">
              {item.hasChildren ? (
                <a
                  href="#void"
                  onClick={(e) =>
                    showBlanket(e, {
                      id: item.id,
                      jsx: item.jsx,
                      title: item.name,
                      phone: true,
                    })
                  }
                >
                  {item.name}{" "}
                </a>
              ) : (
                <a href={item.link}>{item.name} </a>
              )}
            </div>
          ))}
        </div>
        <div
          style={{
            flex: "2",
            display: "flex",
            flexDirection: "column-reverse",
          }}
        >
          <a
            href="#void"
            className="mobile-side-close-btn"
            onClick={(e) => {
              e.preventDefault();
              toggleSidebar(!toggled);
            }}
          >
            <FontAwesomeIcon
              icon={faTimes}
              style={{ color: "white", marginRight: 10 }}
            />
            Close
          </a>
        </div>
      </div>
    </div>
  );
};

export const MobileBlanket = (props) => {
  const { title } = props;
  return (
    <div className="mobile-blanket">
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h3 className="drop-name">{title}</h3>
        {props.children}
      </div>
    </div>
  );
};
