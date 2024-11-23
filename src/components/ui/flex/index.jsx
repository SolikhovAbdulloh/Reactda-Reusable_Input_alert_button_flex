function Flex({
  children,
  direction = "row",
  justify = "center",
  align = "center",
  gap = "0px",
  margintop = '0',
}) {
  const FlexStyle = {
    display : "flex",
    flexdirection : direction,
    justifycontent : justify,
    alignItems: align,
    margin:margintop,
    gap:gap,

  };
  return <div style={FlexStyle}>{children}</div>;
}

export default Flex;
