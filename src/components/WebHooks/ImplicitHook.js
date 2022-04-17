import { useState, useEffect, useCallback, useMemo } from "react";
function ImplicitHook(start, end, spot, coin) {
  const [implicit, setImplicit] = useState();

  useEffect(() => {
    setImplicit(((coin - spot) / spot / end.diff(start, "days")) * 365 * 100);
  }, [start, end, spot, coin]);
  return implicit;
}
export default ImplicitHook;
