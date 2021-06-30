import "./menu.scss";
import Fields from "./Fields";

const Menu = ({ menuOpen, setMenuOpen }) => {
  const fields = [
    { id: "Home", link: "#intro" },
    { id: "Portfolio", link: "#portfolio" },
    { id: "Works", link: "#works" },
    { id: "Testimonials", link: "#testimonials" },
    { id: "Contact", link: "#contact" },
  ];
  return (
    <div className={"menu " + (menuOpen ? "active" : null)}>
      <ul>
        {fields.map((field) => (
          <li>
            <Fields
              menuOpen={menuOpen}
              setMenuOpen={setMenuOpen}
              field={field}
              key={field.id}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
