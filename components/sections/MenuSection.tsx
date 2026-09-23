import { Price } from "../ui/Price";
import menu from "../../content/menu.json";

type MenuItem = { name: string; price: string; anchor?: boolean };

function Row({ item, size = "medium" }: { item: MenuItem; size?: "large" | "medium" | "small" }) {
  return (
    <div className={`menu-row menu-row--${size}`}>
      <span className="menu-row__name">
        {item.name}
        {item.anchor && <span className="menu-row__tag">your everyday coffee</span>}
      </span>
      <Price value={item.price} anchor={item.anchor} />
    </div>
  );
}

export function MenuSection() {
  return (
    <section className="menu" id="menu">
      <div className="menu__inner">
        <div className="menu__block">
          <h2 className="menu__label">Coffee</h2>
          <div className="menu__list menu__list--large">
            {(menu.coffee as MenuItem[]).map((item) => (
              <Row key={item.name} item={item} size="large" />
            ))}
          </div>
        </div>

        <div className="menu__divider" />

        <div className="menu__grid">
          <div className="menu__block">
            <h2 className="menu__label">Lattes &amp; More</h2>
            <div className="menu__list menu__list--medium">
              {(menu.lattesAndMore as MenuItem[]).map((item) => (
                <Row key={item.name} item={item} size="medium" />
              ))}
            </div>
          </div>

          <div className="menu__block">
            <h2 className="menu__label">Chocolate</h2>
            <div className="menu__list menu__list--medium">
              {(menu.chocolate as MenuItem[]).map((item) => (
                <Row key={item.name} item={item} size="medium" />
              ))}
            </div>

            <h2 className="menu__label menu__label--small">Extras</h2>
            <div className="menu__list menu__list--small">
              {(menu.extras as MenuItem[]).map((item) => (
                <Row key={item.name} item={item} size="small" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
