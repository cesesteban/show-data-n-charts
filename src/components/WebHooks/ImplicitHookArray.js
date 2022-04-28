import { useState, useEffect } from "react";

function ImplicitHookArray(start, end, historySpot, historyCoin) {
  const [implicit, setImplicit] = useState();

  useEffect(() => {
    if (historySpot && historyCoin && historySpot[0] && historyCoin[0]) {
      let historyImplicit = [];
      for (let event in historySpot) {
        let days = end.diff(start, "days");
        let implicit = historySpot[event];
        // let implicit =
        //   ((historyCoin[event] - historySpot[event]) /
        //     historySpot[event] /
        //     days) *
        //   365 *
        //   100;
        historyImplicit.push(implicit);
      }
      setImplicit(historyImplicit);
    }
  }, [start, end, historySpot, historyCoin]);
  return implicit && implicit;
}
export default ImplicitHookArray;
