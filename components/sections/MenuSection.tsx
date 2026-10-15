import { Price } from "../ui/Price";
import menu from "../../content/menu.json";

type Variant = { label: string; price: string };
type MenuItem = {
  name: string;
  price?: string;
  prices?: Variant[];
  anchor?: boolean;
  note?: string;
};

function Row({ item, size = "medium" }: { item: MenuItem; size?: "large" | "medium" | "small" }) {
  return (
    <div className={`menu-row menu-row--${size}`}>
      <span className="menu-row__name">
        {item.name}
        {item.anchor && <span className="menu-row__tag">your everyday coffee</span>}
        {item.note && <span className="menu-row__note">{item.note}</span>}
      </span>
      {item.prices ? (
        <span className="menu-row__variants">
          {item.prices.map((v) => (
            <span className="menu-row__variant" key={v.label}>
              <span className="menu-row__variant-label">{v.label}</span>
              <Price value={v.price} />
            </span>
          ))}
        </span>
      ) : (
        <Price value={item.price ?? ""} anchor={item.anchor} />
      )}
    </div>
  );
}

export function MenuSection() {
  const seasonal = (menu.seasonal ?? []) as MenuItem[];
  const hasSeasonal = seasonal.length > 0;

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

          {hasSeasonal && (
            <>
              <h2 className="menu__label menu__label--spaced">Seasonal</h2>
              <div className="menu__list menu__list--medium">
                {seasonal.map((item) => (
                  <Row key={item.name} item={item} size="medium" />
                ))}
              </div>
            </>
          )}
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

            <h2 className="menu__label menu__label--spaced">Pastries</h2>
            <div className="menu__list menu__list--medium">
              {(menu.pastries as MenuItem[]).map((item) => (
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

        <p className="menu__footnote">Hot lattes are 12 oz · Iced drinks are 16 oz.</p>
      </div>
    </section>
  );
}
