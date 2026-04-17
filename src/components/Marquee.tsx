export default function Marquee() {
  const items = [
    "NEW DROP: COLLECTION 26 OUT NOW",
    "FREE GLOBAL SHIPPING ON ORDERS OVER $200",
    "JOIN THE JOURNEY - SIGN UP FOR EXCLUSIVE ACCESS",
    "QUALITY CRAFTED IN INDONESIA",
    "LIMITED EDITION STREETWEAR"
  ];

  return (
    <div className="marquee-container">
      <div className="marquee-content">
        {[...Array(4)].map((_, i) => (
          <span key={i}>
            {items.map((item, j) => (
              <span key={j} className="marquee-item">{item}</span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}
