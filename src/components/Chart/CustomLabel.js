const CustomLabel = ({ viewBox, value, description }) => {
  const { cx, cy } = viewBox;
  return (
    <>
      <text x={cx - 25} y={cy - 5}>
        <tspan
          style={{
            fontWeight: 700,
            fontSize: "1.5em",
            fill: "#000",
            fontFamily: "Roboto,Helvetica,Arial,sans-serif",
          }}
        >
          {value}
        </tspan>
      </text>
      <text x={cx - 30} y={cy + 15}>
        <tspan
          style={{
            fontSize: "0.8em",
            fill: "#A9A9A9",
            fontFamily: "Roboto,Helvetica,Arial,sans-serif",
          }}
        >
          {description}
        </tspan>
      </text>
    </>
  );
};

export default CustomLabel;
